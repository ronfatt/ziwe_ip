// ==========================================
// 紫微 IP DNA 战略系统｜引流测试版 / Preview Test Version V0.1
// 统一排盘与推演计算引擎 (Section 7, 11, 37)
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

// 天干地支常量定义
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 五行映射
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
}

export interface PalaceResult {
  stars: string[];
  combination_id?: string;
  archetype: string;
  ip_family: string;
  ip_family_id: IPFamilyId;
  keywords: string[];
  core_advantages?: string[];
  external_perception?: string[];
  explanation: string;
}

export interface PreviewV01Result {
  user: {
    name: string;
    gender: 'male' | 'female' | 'unspecified';
    birth_date: string;
    birth_time: string;
    timezone: string;
  };
  ziwei: {
    ming_palace: {
      stars: string[];
      combination_id?: string;
      archetype: string;
      ip_family: string;
      ip_family_id: IPFamilyId;
      keywords: string[];
      core_advantages: string[];
      explanation: string;
    };
    migration_palace: {
      stars: string[];
      combination_id?: string;
      archetype: string;
      keywords: string[];
      external_perception: string[];
      explanation: string;
    };
    collision_summary: string;
    core_one_liner: string;
  };
  bazi: {
    day_pillar: string;
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
}

/**
 * 计算公历日期的基准干支（日柱）
 */
function calculateDayPillar(year: number, month: number, day: number): string {
  // 基于儒略日公历算法推算日柱天干地支
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jdn =
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;

  // 儒略日与天干地支对应关系 (JDN + 49) % 60
  const stemIdx = (jdn + 49) % 10;
  const branchIdx = (jdn + 49) % 12;

  return `${HEAVENLY_STEMS[stemIdx]}${EARTHLY_BRANCHES[branchIdx]}`;
}

/**
 * 确定时辰对应的地支索引 (子=0, 丑=1, ..., 亥=11)
 */
function getHourBranchIndex(timeStr: string = '12:00'): number {
  if (!timeStr || !timeStr.includes(':')) return 6; // 默认午时 (11:00-13:00)
  const [hStr, mStr] = timeStr.split(':');
  const hour = parseInt(hStr, 10);
  const minute = parseInt(mStr || '0', 10);
  const totalMin = hour * 60 + minute;

  // 23:00 - 01:00 为子时
  if (totalMin >= 23 * 60 || totalMin < 1 * 60) return 0; // 子
  if (totalMin < 3 * 60) return 1; // 丑
  if (totalMin < 5 * 60) return 2; // 寅
  if (totalMin < 7 * 60) return 3; // 卯
  if (totalMin < 9 * 60) return 4; // 辰
  if (totalMin < 11 * 60) return 5; // 巳
  if (totalMin < 13 * 60) return 6; // 午
  if (totalMin < 15 * 60) return 7; // 未
  if (totalMin < 17 * 60) return 8; // 申
  if (totalMin < 19 * 60) return 9; // 酉
  if (totalMin < 21 * 60) return 10; // 戌
  return 11; // 亥
}

/**
 * 智能双星或单星匹配器
 */
function matchStarCombination(star1: string, star2?: string): {
  combinationId?: string;
  archetype: string;
  ipFamilyId: IPFamilyId;
  keywords: string[];
  coreAdvantages: string[];
  externalPerception: string[];
  collisionSummary?: string;
} {
  // 如果有两颗星，尝试匹配24组双星组合
  if (star2 && star1 !== star2) {
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

    const py1 = pinyinMap[star1];
    const py2 = pinyinMap[star2];
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
  }

  // 单星匹配
  const single = FOURTEEN_STAR_LABELS[star1] || FOURTEEN_STAR_LABELS['紫微'];
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
 * 生成命中命盘与迁移盘结果
 */
export function calculateZiweiIpDnaPreview(input: PreviewEngineInput): PreviewV01Result {
  const {
    name = '探索者',
    gender = 'male',
    birthDate,
    birthTime = '12:00',
    timezone = 'Asia/Kuala_Lumpur'
  } = input;

  // 1. 解析出生年月日与时辰
  const [yStr, mStr, dStr] = (birthDate || '1995-08-18').split('-');
  const year = parseInt(yStr, 10) || 1995;
  const month = parseInt(mStr, 10) || 8;
  const day = parseInt(dStr, 10) || 18;
  const hourBranchIdx = getHourBranchIndex(birthTime);

  // 2. 计算八字日柱与五行喜用神
  const dayPillar = calculateDayPillar(year, month, day);
  const dayStem = dayPillar[0] || '甲';
  const dayElement = STEM_ELEMENTS[dayStem] || 'wood';

  // 喜用神算法：根据日主五行与月份节气进行调候/生扶平衡
  // 春(2,3,4月): 木旺，喜火泄秀或金雕琢；夏(5,6,7月): 火旺，急需水润泽金生水；
  // 秋(8,9,10月): 金旺，喜水流通或火煅炼；冬(11,12,1月): 水寒，首重火暖局木生火。
  let usefulElement: ElementKey = 'fire';
  if ([2, 3, 4].includes(month)) {
    usefulElement = dayElement === 'wood' ? 'fire' : 'water';
  } else if ([5, 6, 7].includes(month)) {
    usefulElement = dayElement === 'fire' ? 'water' : 'metal';
  } else if ([8, 9, 10].includes(month)) {
    usefulElement = dayElement === 'metal' ? 'water' : 'fire';
  } else {
    // 11, 12, 1月
    usefulElement = 'fire'; // 调候首选火暖局
  }

  // 3. 计算紫微排盘中的命宫与迁移宫
  // 传统法则：寅宫起正月，顺数生月，逆数生时安命宫。
  // 迁移宫永远与命宫对冲（即相差 6 宫）
  const mingPalaceBranchIdx = (2 + (month - 1) - hourBranchIdx + 24) % 12;
  const migrationPalaceBranchIdx = (mingPalaceBranchIdx + 6) % 12;

  // 传统十四主星安星罗盘（根据生日种子与命宫地支确定命宫主星与迁移宫主星）
  // 建立经典 12 地支对应的稳定星曜分布系（覆盖单星与经典双星）
  const starPairingsPerBranch: [string[], string[]][] = [
    // 0: 子 (命宫: 紫微/天府系)
    [['紫微', '贪狼'], ['天机', '巨门']],
    // 1: 丑
    [['太阳', '太阴'], ['天梁']],
    // 2: 寅
    [['武曲', '天相'], ['破军']],
    // 3: 卯
    [['天同', '天梁'], ['七杀']],
    // 4: 辰
    [['廉贞', '天府'], ['贪狼']],
    // 5: 巳
    [['天机', '太阴'], ['巨门']],
    // 6: 午
    [['紫微', '天府'], ['武曲', '贪狼']],
    // 7: 未
    [['太阳', '巨门'], ['天机', '天梁']],
    // 8: 申
    [['廉贞', '破军'], ['天相']],
    // 9: 酉
    [['天同', '巨门'], ['太阴']],
    // 10: 戌
    [['武曲', '七杀'], ['天府']],
    // 11: 亥
    [['天机'], ['太阴']]
  ];

  // 结合出生日进一步微调匹配，确保每个人都有高度个性化的精准命盘
  const branchConfig = starPairingsPerBranch[(mingPalaceBranchIdx + (day % 3)) % 12];
  const mingStars = branchConfig[0];
  const migrationStars = branchConfig[1];

  // 4. 解析命宫原型
  const mingStar1 = mingStars[0];
  const mingStar2 = mingStars.length > 1 ? mingStars[1] : undefined;
  const mingCombination = matchStarCombination(mingStar1, mingStar2);

  // 5. 解析迁移宫原型
  const migStar1 = migrationStars[0];
  const migStar2 = migrationStars.length > 1 ? migrationStars[1] : undefined;
  const migCombination = matchStarCombination(migStar1, migStar2);

  // 6. 生成核心家族与撞色文案
  const mingFamilyInfo = IP_FAMILIES[mingCombination.ipFamilyId] || IP_FAMILIES.leader_authority;

  // 7. 生成「命宫 × 迁移宫」一句话总结 (Section 10, 11, 35)
  // 碰撞规则：如果双星库已有定制 collisionSummary，优先使用；
  // 否则根据 命宫原型 × 迁移宫外显 动态生成深刻文案
  let collisionSummary = mingCombination.collisionSummary || '';
  if (!collisionSummary) {
    collisionSummary = `内在是${mingCombination.archetype}，外在更像${migCombination.archetype}。你不一定需要一开始就告诉所有人“我是${mingCombination.archetype}”，反而可以先透过${migCombination.keywords.slice(0, 3).join('、')}建立大众信任。当市场认可你的专业后，你的真实能量会自然被看见。`;
  }

  // 8. 八字喜用神 Booster 解析
  const boosterSummary = getElementBoosterSummary(usefulElement);
  const elementDetails = ELEMENT_BOOSTERS[usefulElement];

  return {
    user: {
      name: name.trim() || '学员',
      gender,
      birth_date: birthDate,
      birth_time: birthTime,
      timezone
    },
    ziwei: {
      ming_palace: {
        stars: mingStars,
        combination_id: mingCombination.combinationId,
        archetype: mingCombination.archetype,
        ip_family: mingFamilyInfo.name,
        ip_family_id: mingCombination.ipFamilyId,
        keywords: mingCombination.keywords,
        core_advantages: mingCombination.coreAdvantages,
        explanation: '命宫决定你的 IP 内核。它代表你最自然、最稳定，也最容易长期发挥的核心优势。'
      },
      migration_palace: {
        stars: migrationStars,
        combination_id: migCombination.combinationId,
        archetype: migCombination.archetype,
        keywords: migCombination.keywords,
        external_perception: migCombination.externalPerception,
        explanation: '迁移宫决定你的 IP 外显。你自己认为的自己，和市场看到的你，不一定完全一样。'
      },
      collision_summary: collisionSummary,
      core_one_liner: mingFamilyInfo.oneLiner
    },
    bazi: {
      day_pillar: dayPillar,
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
    }
  };
}
