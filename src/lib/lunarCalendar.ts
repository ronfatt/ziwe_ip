// ==========================================
// 历法推算引擎：公历转农历与干支历法 (1900 - 2050)
// 依据传统天文历法标准编写，精准支持紫微斗数排盘
// ==========================================

export const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 1900 - 2050 农历年历数据表
// 每一项为16进制整型，编码农历年的大月份、小月份与闰月信息
const LUNAR_INFO = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0  // 2040-2049
];

function lYearDays(y: number): number {
  let sum = 348;
  const info = LUNAR_INFO[y - 1900];
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    sum += info & i ? 1 : 0;
  }
  return sum + leapDays(y);
}

function leapMonth(y: number): number {
  return LUNAR_INFO[y - 1900] & 0xf;
}

function leapDays(y: number): number {
  if (leapMonth(y)) {
    return LUNAR_INFO[y - 1900] & 0x10000 ? 30 : 29;
  }
  return 0;
}

function monthDays(y: number, m: number): number {
  return LUNAR_INFO[y - 1900] & (0x10000 >> m) ? 30 : 29;
}

export interface LunarDateResult {
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  isLeap: boolean;
  yearStem: string;
  yearBranch: string;
  yearPillar: string;
  dayPillar: string;
  hourBranchIndex: number;
  hourBranchName: string;
  hourPillar: string;
  monthPillar: string;
}

/**
 * 阳历公历转农历与干支四柱
 * 处理 23:00 - 24:00 晚子时跨日规则（大耕老师入门班第21页）
 */
export function getLunarAndGanZhi(solarYear: number, solarMonth: number, solarDay: number, timeStr: string = '12:00'): LunarDateResult {
  let targetYear = solarYear;
  let targetMonth = solarMonth;
  let targetDay = solarDay;

  // 1. 判断是否属于晚子时 (23:00 - 23:59)
  let hour = 12;
  let minute = 0;
  if (timeStr && timeStr.includes(':')) {
    const parts = timeStr.split(':');
    hour = parseInt(parts[0], 10);
    minute = parseInt(parts[1] || '0', 10);
  }

  const isLateZiShi = hour === 23;
  if (isLateZiShi) {
    // 晚子时按次日算
    const dObj = new Date(targetYear, targetMonth - 1, targetDay + 1);
    targetYear = dObj.getFullYear();
    targetMonth = dObj.getMonth() + 1;
    targetDay = dObj.getDate();
  }

  // 2. 公历转农历
  const baseDate = new Date(1900, 0, 31);
  const objDate = new Date(targetYear, targetMonth - 1, targetDay);
  let offset = Math.round((objDate.getTime() - baseDate.getTime()) / 86400000);

  let iYear = 1900;
  let daysOfYear = 0;
  for (iYear = 1900; iYear < 2050 && offset > 0; iYear++) {
    daysOfYear = lYearDays(iYear);
    offset -= daysOfYear;
  }
  if (offset < 0) {
    offset += daysOfYear;
    iYear--;
  }

  const lMonth = leapMonth(iYear);
  let isLeap = false;
  let iMonth = 1;
  let daysOfMonth = 0;
  for (iMonth = 1; iMonth < 13 && offset > 0; iMonth++) {
    if (lMonth > 0 && iMonth === lMonth + 1 && !isLeap) {
      --iMonth;
      isLeap = true;
      daysOfMonth = leapDays(iYear);
    } else {
      daysOfMonth = monthDays(iYear, iMonth);
    }

    if (isLeap && iMonth === lMonth + 1) isLeap = false;
    offset -= daysOfMonth;
  }

  if (offset === 0 && lMonth > 0 && iMonth === lMonth + 1) {
    if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --iMonth;
    }
  }
  if (offset < 0) {
    offset += daysOfMonth;
    --iMonth;
  }

  const lDay = offset + 1;

  // 3. 计算生年干支（以农历年为准，1864为甲子年）
  const yearStemIdx = (iYear - 4) % 10;
  const yearBranchIdx = (iYear - 4) % 12;
  const yearStem = HEAVENLY_STEMS[(yearStemIdx + 10) % 10];
  const yearBranch = EARTHLY_BRANCHES[(yearBranchIdx + 12) % 12];
  const yearPillar = `${yearStem}${yearBranch}`;

  // 4. 计算公历日柱干支（利用儒略日确定性推算）
  const a = Math.floor((14 - targetMonth) / 12);
  const y = targetYear + 4800 - a;
  const m = targetMonth + 12 * a - 3;
  const jdn =
    targetDay +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;

  const dayStemIdx = (jdn + 49) % 10;
  const dayBranchIdx = (jdn + 49) % 12;
  const dayStem = HEAVENLY_STEMS[dayStemIdx];
  const dayBranch = EARTHLY_BRANCHES[dayBranchIdx];
  const dayPillar = `${dayStem}${dayBranch}`;

  // 5. 计算时辰地支 (子=0, 丑=1, ..., 亥=11)
  const totalMin = hour * 60 + minute;
  let hourBranchIdx = 0;
  if (totalMin >= 23 * 60 || totalMin < 1 * 60) hourBranchIdx = 0; // 子
  else if (totalMin < 3 * 60) hourBranchIdx = 1; // 丑
  else if (totalMin < 5 * 60) hourBranchIdx = 2; // 寅
  else if (totalMin < 7 * 60) hourBranchIdx = 3; // 卯
  else if (totalMin < 9 * 60) hourBranchIdx = 4; // 辰
  else if (totalMin < 11 * 60) hourBranchIdx = 5; // 巳
  else if (totalMin < 13 * 60) hourBranchIdx = 6; // 午
  else if (totalMin < 15 * 60) hourBranchIdx = 7; // 未
  else if (totalMin < 17 * 60) hourBranchIdx = 8; // 申
  else if (totalMin < 19 * 60) hourBranchIdx = 9; // 酉
  else if (totalMin < 21 * 60) hourBranchIdx = 10; // 戌
  else hourBranchIdx = 11; // 亥

  const hourBranchName = EARTHLY_BRANCHES[hourBranchIdx];

  // 6. 五鼠遁起时辰天干 (甲己还加甲，乙庚丙作初，丙辛从戊起，丁壬庚子居，戊癸何方发，壬子是真途)
  const hourStemStartMap: Record<string, number> = {
    甲: 0, 己: 0, // 甲子
    乙: 2, 庚: 2, // 丙子
    丙: 4, 辛: 4, // 戊子
    丁: 6, 壬: 6, // 庚子
    戊: 8, 癸: 8  // 壬子
  };
  const hourStemStart = hourStemStartMap[dayStem] ?? 0;
  const hourStemIdx = (hourStemStart + hourBranchIdx) % 10;
  const hourPillar = `${HEAVENLY_STEMS[hourStemIdx]}${hourBranchName}`;

  // 7. 五虎遁起正月天干
  const tigerStartMap: Record<string, number> = {
    甲: 2, 己: 2, // 丙寅
    乙: 4, 庚: 4, // 戊寅
    丙: 6, 辛: 6, // 庚寅
    丁: 8, 壬: 8, // 壬寅
    戊: 0, 癸: 0  // 甲寅
  };
  const tigerStart = tigerStartMap[yearStem] ?? 2;
  const monthStemIdx = (tigerStart + (iMonth - 1)) % 10;
  const monthBranchIdx = (2 + (iMonth - 1)) % 12; // 正月为寅
  const monthPillar = `${HEAVENLY_STEMS[monthStemIdx]}${EARTHLY_BRANCHES[monthBranchIdx]}`;

  return {
    lunarYear: iYear,
    lunarMonth: iMonth,
    lunarDay: lDay,
    isLeap,
    yearStem,
    yearBranch,
    yearPillar,
    dayPillar,
    hourBranchIndex: hourBranchIdx,
    hourBranchName,
    hourPillar,
    monthPillar
  };
}
