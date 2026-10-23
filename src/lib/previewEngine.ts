// ==========================================
// 紫微 IP DNA 战略系统｜引流测试版 / Preview Test Version V0.1
// 专业统一排盘与推演计算引擎 (深度融合大耕老师南派紫微斗数与八字喜用神)
// ==========================================

import {
  IPFamilyId,
  ElementKey,
  IP_FAMILIES,
  FOURTEEN_STAR_LABELS,
  DUAL_STAR_ARCHETYPES,
  ELEMENT_BOOSTERS,
  getElementBoosterSummary
} from '@/data/previewV01Data';
import { calculateRealZiweiChart, ZiweiRealChartOutput } from './ziweiRealEngine';
import { EARTHLY_BRANCHES } from './lunarCalendar';
import { calculateTrueSolarTime, TrueSolarTimeOutput } from './time/trueSolarTime';
import { findCityByName } from './time/cities';
import { detectBrandFormations, BrandFormation, SimplifiedChart } from './patternEngine';
import { getClassicQuoteForStars, ClassicQuote } from './classicQuotes';
import { getFamousLeadersForArchetype, FamousLeader } from './famousFigures';

// 五行映射字典
const STEM_ELEMENTS: Record<string, ElementKey> = {
  甲: 'wood',
  乙: 'wood',
  丙: 'fire',
  丁: 'fire',
  戊: 'earth',
  己: 'earth',
  庚: 'metal',
  辛: 'metal',
  壬: 'water',
  癸: 'water'
};

export interface PreviewEngineInput {
  name?: string;
  gender?: 'male' | 'female' | 'unspecified';
  birthDate: string; // YYYY-MM-DD
  birthTime?: string; // HH:mm
  timezone?: string;
  city?: string;
  longitude?: number;
  useTrueSolarTime?: boolean;
}

export interface PreviewV01Result {
  user: {
    name: string;
    gender: 'male' | 'female' | 'unspecified';
    birth_date: string;
    birth_time: string;
    timezone: string;
    lunar_date_str: string;
    city?: string;
    true_solar_time_str?: string;
    true_solar_offset_minutes?: number;
    true_solar_explanation?: string;
    true_solar_explanation_en?: string;
  };
  ziwei: {
    ming_palace: {
      stars: string[];
      is_empty: boolean;
      borrowed_from_migration?: boolean;
      palace_branch: string;
      palace_stem: string;
      palace_pillar: string;
      bureau_name: string;
      combination_id?: string;
      archetype: string;
      ip_family: string;
      ip_family_id: IPFamilyId;
      keywords: string[];
      core_advantages: string[];
      mutagens: string[];
      explanation: string;
    };
    migration_palace: {
      stars: string[];
      is_empty: boolean;
      palace_branch: string;
      combination_id?: string;
      archetype: string;
      keywords: string[];
      external_perception: string[];
      mutagens: string[];
      explanation: string;
    };
    shen_palace: {
      name: string;
      meaning: string;
    };
    collision_summary: string;
    core_one_liner: string;
    mutagen_insight: string;
  };
  bazi: {
    day_pillar: string;
    year_pillar: string;
    month_pillar: string;
    hour_pillar: string;
    useful_element: ElementKey;
    useful_element_name: string;
    ip_booster: {
      name: string;
      boost: string;
      keywords: string[];
      copy: string;
      suggestion: string;
      one_liner: string;
      outfit_colors: string[];
      backdrop_style: string;
    };
  };
  // 开源赋能四大高价值模块
  formations: BrandFormation[];
  primary_formation: BrandFormation;
  classic_quote: ClassicQuote;
  famous_leaders: FamousLeader[];
}

/**
 * 智能双星或单星匹配器
 */
function matchStarCombination(star1?: string, star2?: string): {
  combinationId?: string;
  archetype: string;
  ipFamilyId: IPFamilyId;
  keywords: string[];
  coreAdvantages: string[];
  externalPerception: string[];
  collisionSummary?: string;
} {
  if (!star1 && !star2) {
    // 命无主星 fallback
    return {
      combinationId: 'empty_palace',
      archetype: '全维适应型',
      ipFamilyId: 'strategy_intelligence',
      keywords: ['可塑', '敏锐', '借势', '连接'],
      coreAdvantages: [
        '如水般具备极高变通力，善于随市场变化快速调优',
        '没有固有的人设包袱，能够极其灵敏地捕捉用户需求',
        '擅长借力打力，整合行业头部势能成就自身品牌',
        '适合打造跨界连接者、生态操盘手或高价值赋能者IP'
      ],
      externalPerception: [
        '市场感知你灵活、谦和、具有极高包容性与适应度',
        '在公众平台能随和地融入不同圈层，毫无距离感',
        '受众容易将自己的诉求投射于你，产生共创感'
      ],
      collisionSummary: '命无主星借对宫，天下莫柔弱于水，而攻坚强者莫之能胜。你的IP定位不必刻意固化，借势赋能即是你的最强护城河。'
    };
  }

  // 单星
  if (!star2 || star1 === star2) {
    const sName = star1 || star2 || '紫微';
    const single = FOURTEEN_STAR_LABELS[sName] || FOURTEEN_STAR_LABELS['紫微'];
    return {
      combinationId: sName,
      archetype: single.singleArchetype,
      ipFamilyId: single.defaultFamily,
      keywords: single.tags,
      coreAdvantages: single.coreAdvantagePoints,
      externalPerception: single.externalPerception,
      collisionSummary: undefined
    };
  }

  // 双星
  const pinyinMap: Record<string, string> = {
    紫微: 'ziwei',
    贪狼: 'tanlang',
    天府: 'tianfu',
    天相: 'tianxiang',
    七杀: 'qisha',
    破军: 'pojun',
    天机: 'tianji',
    太阴: 'taiyin',
    巨门: 'jumen',
    天梁: 'tianliang',
    太阳: 'taiyang',
    武曲: 'wuqu',
    天同: 'tiantong',
    廉贞: 'lianzhen'
  };

  const s1 = star1 || '紫微';
  const s2 = star2 || '';
  const py1 = pinyinMap[s1];
  const py2 = pinyinMap[s2];
  if (py1 && py2) {
    const keyA = `${py1}_${py2}`;
    const keyB = `${py2}_${py1}`;
    const dualMatch = DUAL_STAR_ARCHETYPES[keyA] || DUAL_STAR_ARCHETYPES[keyB];
    if (dualMatch) {
      return {
        combinationId: dualMatch.id,
        archetype: dualMatch.archetype,
        ipFamilyId: dualMatch.ipFamily,
        keywords: dualMatch.keywords,
        coreAdvantages: dualMatch.coreAdvantages,
        externalPerception: dualMatch.externalPerception,
        collisionSummary: dualMatch.collisionSummary
      };
    }
  }

  // 若双星未在预设24组，以第一主星为主
  const single = FOURTEEN_STAR_LABELS[s1] || FOURTEEN_STAR_LABELS['紫微'];
  return {
    combinationId: undefined,
    archetype: single.singleArchetype,
    ipFamilyId: single.defaultFamily,
    keywords: single.tags,
    coreAdvantages: single.coreAdvantagePoints,
    externalPerception: single.externalPerception,
    collisionSummary: undefined
  };
}

/**
 * 完整推演入口函数
 */
export function calculateZiweiIpDnaPreview(input: PreviewEngineInput): PreviewV01Result {
  const {
    name = '探索者',
    gender = 'male',
    birthDate,
    birthTime = '12:00',
    timezone = 'Asia/Kuala_Lumpur',
    city,
    longitude: customLongitude,
    useTrueSolarTime = true
  } = input;

  // 1. 解析阳历日期与时间
  const [yStr, mStr, dStr] = (birthDate || '1995-08-18').split('-');
  let solarYear = parseInt(yStr, 10) || 1995;
  let solarMonth = parseInt(mStr, 10) || 8;
  let solarDay = parseInt(dStr, 10) || 18;

  const [hStr, minStr] = birthTime.split(':');
  const clockHour = parseInt(hStr, 10) || 12;
  const clockMinute = parseInt(minStr, 10) || 0;

  // 城市匹配与真太阳时计算 (适配马来西亚、新加坡、港澳台与中国各主要城市)
  let effectiveLongitude = customLongitude;
  const matchedCity = city ? findCityByName(city) : undefined;
  if (effectiveLongitude === undefined && matchedCity) {
    effectiveLongitude = matchedCity.longitude;
  }

  let trueSolarInfo: TrueSolarTimeOutput | undefined;
  let effectiveBirthTime = birthTime;

  if (useTrueSolarTime && effectiveLongitude !== undefined) {
    trueSolarInfo = calculateTrueSolarTime({
      year: solarYear,
      month: solarMonth,
      day: solarDay,
      clockHour,
      clockMinute,
      longitude: effectiveLongitude
    });

    effectiveBirthTime = trueSolarInfo.trueSolarTimeStr;

    // 处理真太阳时跨日偏移 (如 23:00 之后校正跨日)
    if (trueSolarInfo.dayOffset !== 0) {
      const dt = new Date(Date.UTC(solarYear, solarMonth - 1, solarDay + trueSolarInfo.dayOffset));
      solarYear = dt.getUTCFullYear();
      solarMonth = dt.getUTCMonth() + 1;
      solarDay = dt.getUTCDate();
    }
  }

  // 2. 调用真实的南派紫微排盘核心
  const realChart: ZiweiRealChartOutput = calculateRealZiweiChart(
    solarYear,
    solarMonth,
    solarDay,
    effectiveBirthTime
  );

  const { lunar, mutagens } = realChart;

  // 3. 命宫主星解析（含空宫借对宫）
  const mingStars = realChart.isMingEmpty
    ? realChart.effectiveMingStars
    : realChart.mingStars;
  const mingComb = matchStarCombination(mingStars[0], mingStars[1]);
  const mingFamilyInfo = IP_FAMILIES[mingComb.ipFamilyId] || IP_FAMILIES.leader_authority;

  // 4. 迁移宫主星解析（对宫为内心世界与外部公众感知）
  const migrationStars = realChart.isMigrationEmpty
    ? realChart.effectiveMigrationStars
    : realChart.migrationStars;
  const migComb = matchStarCombination(migrationStars[0], migrationStars[1]);

  // 5. 命宫 × 迁移宫专属碰撞总结（大耕老师：忌单宫单星，看命迁一条线）
  let collisionSummary = mingComb.collisionSummary || '';
  if (!collisionSummary) {
    if (realChart.isMingEmpty) {
      collisionSummary = `命无主星借对宫${migComb.archetype}。你的内核具有极高的弹性与同理心，外在第一眼让人感受到你的${migComb.keywords.slice(0, 3).join('、')}。你不必强行给自己贴上某种僵化的标签，以受众痛点为镜，借势赋能，你就是最优秀的战略连接者。`;
    } else {
      collisionSummary = `内在是${mingComb.archetype}，外在更像${migComb.archetype}。你不一定需要一开始就告诉所有人“我是${mingComb.archetype}”，反而可以先透过${migComb.keywords.slice(0, 3).join('、')}建立大众信任。当市场认可你的专业后，你的真实能量会自然被看见。`;
    }
  }

  // 6. 生年四化解读（大耕老师体系核心：起于忌，终于禄，禄随忌走）
  let mutagenInsight = '';
  const allMutagens = [...mutagens.mingMutagens, ...mutagens.migrationMutagens];
  if (allMutagens.length > 0) {
    const parts: string[] = [];
    allMutagens.forEach((m) => {
      if (m.includes('化禄')) {
        parts.push(`【${m}入命迁】：天生自带市场好感与商业变现通畅的顺风运，适合打造高转化商业闭环。`);
      } else if (m.includes('化权')) {
        parts.push(`【${m}入命迁】：具有鲜明的话语权与掌控力，适合建立行业标准制定者与严谨交付型顾问IP。`);
      } else if (m.includes('化科')) {
        parts.push(`【${m}入命迁】：天生自带名声与曝光光环，非常适合镜头出镜、演讲布道与个人IP破圈。`);
      } else if (m.includes('化忌')) {
        parts.push(`【${m}入命迁】：化忌为内心的底层执念与破局动力，你曾经历的痛点卡点，正是你日后最能打动学员的核心故事。`);
      }
    });
    mutagenInsight = parts.join(' ');
  } else {
    mutagenInsight = `生年四化照耀三方，你的命迁格局稳健平衡，更适合靠扎实的交付与长期信任稳步积累品牌护城河。`;
  }

  // 7. 八字喜用神 Booster 计算
  const dayStem = lunar.dayPillar[0] || '甲';
  const dayElement = STEM_ELEMENTS[dayStem] || 'wood';
  const lMonth = lunar.lunarMonth;

  // 五行喜用神推算
  let usefulElement: ElementKey = 'fire';
  if ([1, 2, 3].includes(lMonth)) {
    usefulElement = dayElement === 'wood' ? 'fire' : 'water';
  } else if ([4, 5, 6].includes(lMonth)) {
    usefulElement = dayElement === 'fire' ? 'water' : 'metal';
  } else if ([7, 8, 9].includes(lMonth)) {
    usefulElement = dayElement === 'metal' ? 'water' : 'fire';
  } else {
    usefulElement = 'fire'; // 冬季调候喜火暖局
  }

  const boosterSummary = getElementBoosterSummary(usefulElement);
  const elementDetails = ELEMENT_BOOSTERS[usefulElement];

  const lunarDateStr = `农历 ${lunar.yearPillar}年 ${lunar.isLeap ? '闰' : ''}${lunar.lunarMonth}月${lunar.lunarDay}日 ${lunar.hourBranchName}时`;

  // 8. 经典大格局检测 (融合开源模式识别引擎)
  const simplifiedChart: SimplifiedChart = {
    mingBranch: realChart.mingPalaceBranchIndex,
    shenBranch: realChart.palaces.find((p) => p.name === realChart.shenPalaceName)?.branchIndex ?? 0,
    yearStem: lunar.yearPillar[0],
    yearBranch: lunar.yearPillar[1],
    palaces: realChart.palaces.map((p) => ({
      branch: p.branchIndex,
      name: p.name,
      stars: p.allStars || p.majorStars
    }))
  };
  const formations = detectBrandFormations(simplifiedChart);
  const primaryFormation = formations[0];

  // 9. 古籍原典点睛 (《骨髓赋》/《紫微斗数全书》)
  const classicQuote = getClassicQuoteForStars(mingStars) || {
    star: mingStars[0] || '紫微',
    source: '《骨髓赋》',
    sourceEn: 'Gu Sui Fu',
    originalText: '紫微帝座为众星之尊，得辅弼为相，得昌曲为秀。',
    originalTextEn: 'Ziwei, the Sovereign Emperor, reigns supreme among all stars.',
    modernInsight: '【易玺老师·IP点睛】天生自带王者视野，坐镇核心，制定行业标准。',
    modernInsightEn: 'Master Yixi Insight: Natural sovereign perspective. Formulate the standards of your category.'
  };

  // 10. 商业领袖同频镜像
  const famousLeaders = getFamousLeadersForArchetype(mingComb.ipFamilyId);

  return {
    user: {
      name: name.trim() || '学员',
      gender,
      birth_date: birthDate,
      birth_time: birthTime,
      timezone,
      lunar_date_str: lunarDateStr,
      city: matchedCity ? `${matchedCity.region} · ${matchedCity.name}` : city,
      true_solar_time_str: trueSolarInfo?.trueSolarTimeStr,
      true_solar_offset_minutes: trueSolarInfo?.totalOffsetMinutes,
      true_solar_explanation: trueSolarInfo?.explanation,
      true_solar_explanation_en: trueSolarInfo?.explanationEn
    },
    ziwei: {
      ming_palace: {
        stars: mingStars,
        is_empty: realChart.isMingEmpty,
        borrowed_from_migration: realChart.isMingEmpty,
        palace_branch: realChart.mingPalaceBranchName,
        palace_stem: realChart.mingPalaceStemName,
        palace_pillar: realChart.mingPalacePillar,
        bureau_name: realChart.bureauName,
        combination_id: mingComb.combinationId,
        archetype: mingComb.archetype,
        ip_family: mingFamilyInfo.name,
        ip_family_id: mingComb.ipFamilyId,
        keywords: mingComb.keywords,
        core_advantages: mingComb.coreAdvantages,
        mutagens: mutagens.mingMutagens,
        explanation: '命宫决定你的 IP 内核。它代表你最自然、最稳定，也最容易长期发挥的核心优势。'
      },
      migration_palace: {
        stars: migrationStars,
        is_empty: realChart.isMigrationEmpty,
        palace_branch: EARTHLY_BRANCHES[(realChart.mingPalaceBranchIndex + 6) % 12],
        combination_id: migComb.combinationId,
        archetype: migComb.archetype,
        keywords: migComb.keywords,
        external_perception: migComb.externalPerception,
        mutagens: mutagens.migrationMutagens,
        explanation: '迁移宫决定你的 IP 外显。你自己认为的自己，和市场看到的你，不一定完全一样。'
      },
      shen_palace: {
        name: realChart.shenPalaceName,
        meaning: realChart.shenPalaceMeaning
      },
      collision_summary: collisionSummary,
      core_one_liner: mingFamilyInfo.oneLiner,
      mutagen_insight: mutagenInsight
    },
    bazi: {
      day_pillar: lunar.dayPillar,
      year_pillar: lunar.yearPillar,
      month_pillar: lunar.monthPillar,
      hour_pillar: lunar.hourPillar,
      useful_element: usefulElement,
      useful_element_name: boosterSummary.elementName,
      ip_booster: {
        name: boosterSummary.elementName,
        boost: boosterSummary.boostName,
        keywords: boosterSummary.keywords,
        copy: boosterSummary.copy,
        suggestion: boosterSummary.suggestion,
        one_liner: boosterSummary.oneLiner,
        outfit_colors: elementDetails.outfitColors,
        backdrop_style: elementDetails.backdropStyle
      }
    },
    formations,
    primary_formation: primaryFormation,
    classic_quote: classicQuote,
    famous_leaders: famousLeaders
  };
}
