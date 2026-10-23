// ==========================================
// 真太阳时高精度计算引擎 (NOAA 均时差 + 经度角动量修正)
// 适配大马、新加坡、港澳台及全球华人城市
// 彻底解决子时交界跨日与地方真太阳时偏差
// ==========================================

import { EARTHLY_BRANCHES } from '../lunarCalendar';

export interface TrueSolarTimeInput {
  year: number;
  month: number;
  day: number;
  clockHour: number;
  clockMinute: number;
  longitude?: number; // 经度 (以东经为正)
}

export interface TrueSolarTimeOutput {
  isCorrected: boolean;
  standardTimeStr: string;
  trueSolarTimeStr: string;
  trueHour: number;
  trueMinute: number;
  totalOffsetMinutes: number;
  equationOfTimeMinutes: number;
  longitudeOffsetMinutes: number;
  dayOffset: number; // -1 表示退回前一日，0 表示同日，+1 表示跨入次日
  hourBranchIndex: number; // 0=子, 1=丑, ..., 11=亥
  hourBranchName: string;
  explanation: string;
  explanationEn: string;
}

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getDayOfYear(year: number, month: number, day: number): number {
  return Math.floor((Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 0)) / 86_400_000);
}

/**
 * NOAA 经典高精度均时差近似计算公式 (单位: 分钟)
 * 正值表示真太阳时快于平太阳时，负值表示真太阳时慢于平太阳时
 */
export function getEquationOfTime(year: number, month: number, day: number, hour: number = 12, minute: number = 0): number {
  const daysInYear = isLeapYear(year) ? 366 : 365;
  const fractionalHour = hour + minute / 60;
  const gamma = ((2 * Math.PI) / daysInYear) * (getDayOfYear(year, month, day) - 1 + (fractionalHour - 12) / 24);

  return (
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma))
  );
}

/**
 * 从分钟数计算紫微斗数十二地支时辰索引 (0=子, 1=丑, ..., 11=亥)
 * 23:00 (1380m) - 00:59 (59m) 为子时
 * 01:00 (60m) - 02:59 (179m) 为丑时...
 */
export function getBranchIndexFromMinutes(minutes: number): number {
  const m = ((minutes % 1440) + 1440) % 1440;
  if (m >= 1380 || m < 60) return 0; // 子时
  return Math.floor((m - 60) / 120) + 1;
}

/**
 * 计算地方真太阳时与修正结果
 */
export function calculateTrueSolarTime(input: TrueSolarTimeInput): TrueSolarTimeOutput {
  const { year, month, day, clockHour, clockMinute, longitude } = input;
  const standardTimeStr = `${String(clockHour).padStart(2, '0')}:${String(clockMinute).padStart(2, '0')}`;

  if (longitude === undefined || isNaN(longitude)) {
    const rawMinutes = clockHour * 60 + clockMinute;
    const branchIdx = getBranchIndexFromMinutes(rawMinutes);
    return {
      isCorrected: false,
      standardTimeStr,
      trueSolarTimeStr: standardTimeStr,
      trueHour: clockHour,
      trueMinute: clockMinute,
      totalOffsetMinutes: 0,
      equationOfTimeMinutes: 0,
      longitudeOffsetMinutes: 0,
      dayOffset: 0,
      hourBranchIndex: branchIdx,
      hourBranchName: EARTHLY_BRANCHES[branchIdx],
      explanation: '使用标准钟表时间排盘',
      explanationEn: 'Calculated using standard clock time.'
    };
  }

  // 东八区基准经线为东经 120°
  // 经度修正：每偏离 1 度相差 4 分钟 (东早西晚)
  const longitudeOffsetMinutes = (longitude - 120) * 4;
  const equationOfTimeMinutes = getEquationOfTime(year, month, day, clockHour, clockMinute);
  const totalOffsetMinutes = longitudeOffsetMinutes + equationOfTimeMinutes;

  const rawTotalMinutes = clockHour * 60 + clockMinute + totalOffsetMinutes;
  const totalSeconds = Math.round(rawTotalMinutes * 60);

  // 一天的总秒数 86400
  let dayOffset = Math.floor(totalSeconds / 86400);
  const secondsInDay = ((totalSeconds % 86400) + 86400) % 86400;

  const trueHour = Math.floor(secondsInDay / 3600);
  const trueMinute = Math.floor((secondsInDay % 3600) / 60);
  const trueSolarTimeStr = `${String(trueHour).padStart(2, '0')}:${String(trueMinute).padStart(2, '0')}`;

  const normalizedMinutes = secondsInDay / 60;
  const hourBranchIndex = getBranchIndexFromMinutes(normalizedMinutes);
  const hourBranchName = EARTHLY_BRANCHES[hourBranchIndex];

  const offsetRound = Math.round(totalOffsetMinutes);
  const signStr = offsetRound >= 0 ? `+${offsetRound}` : `${offsetRound}`;

  const explanation = `真太阳时经度(${longitude.toFixed(2)}°)与天文学时差校正 ${signStr} 分钟，当地实际真太阳时为 ${trueSolarTimeStr}（${hourBranchName}时）。`;
  const explanationEn = `True Solar Time adjusted by ${signStr} mins for longitude ${longitude.toFixed(2)}°. Local solar time: ${trueSolarTimeStr} (${hourBranchName} Hour).`;

  return {
    isCorrected: true,
    standardTimeStr,
    trueSolarTimeStr,
    trueHour,
    trueMinute,
    totalOffsetMinutes: Math.round(totalOffsetMinutes * 10) / 10,
    equationOfTimeMinutes: Math.round(equationOfTimeMinutes * 10) / 10,
    longitudeOffsetMinutes: Math.round(longitudeOffsetMinutes * 10) / 10,
    dayOffset,
    hourBranchIndex,
    hourBranchName,
    explanation,
    explanationEn
  };
}
