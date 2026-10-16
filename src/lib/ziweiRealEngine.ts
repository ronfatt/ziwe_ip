// ==========================================
// 专业级紫微斗数排盘与推演计算核心
// 依据《紫微斗数课程讲义》（入门班、初阶班、进阶班·大耕老师/ISZN国际紫微学会）
// 100% 还原传统南派排盘法则与解盘逻辑
// ==========================================

import {
  HEAVENLY_STEMS,
  EARTHLY_BRANCHES,
  getLunarAndGanZhi,
  LunarDateResult
} from './lunarCalendar';
import {
  IPFamilyId,
  ElementKey,
  IP_FAMILIES,
  FOURTEEN_STAR_LABELS,
  DUAL_STAR_ARCHETYPES,
  ELEMENT_BOOSTERS,
  getElementBoosterSummary
} from '@/data/previewV01Data';

// 宫位名称常数
export const TWELVE_PALACES = [
  '命宫', '兄弟宫', '夫妻宫', '子女宫',
  '财帛宫', '疾厄宫', '迁移宫', '交友宫',
  '官禄宫', '田宅宫', '福德宫', '父母宫'
];

// 六十甲子纳音五行局字典 (大耕老师入门班核心五行局)
// 水二局=2, 木三局=3, 金四局=4, 土五局=5, 火六局=6
const NAYIN_BUREAU_MAP: Record<string, { bureauName: string; bureauNum: number; element: string }> = {
  甲子: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  乙丑: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  丙寅: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  丁卯: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  戊辰: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  己巳: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  庚午: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  辛未: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  壬申: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  癸酉: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  甲戌: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  乙亥: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  丙子: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  丁丑: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  戊寅: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  己卯: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  庚辰: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  辛巳: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  壬午: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  癸未: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  甲申: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  乙酉: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  丙戌: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  丁亥: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  戊子: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  己丑: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  庚寅: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  辛卯: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  壬辰: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  癸巳: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  甲午: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  乙未: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  丙申: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  丁酉: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  戊戌: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  己亥: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  庚子: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  辛丑: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  壬寅: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  癸卯: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  甲辰: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  乙巳: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  丙午: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  丁未: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  戊申: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  己酉: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  庚戌: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  辛亥: { bureauName: '金四局', bureauNum: 4, element: 'metal' },
  壬子: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  癸丑: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  甲寅: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  乙卯: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  丙辰: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  丁巳: { bureauName: '土五局', bureauNum: 5, element: 'earth' },
  戊午: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  己未: { bureauName: '火六局', bureauNum: 6, element: 'fire' },
  庚申: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  辛酉: { bureauName: '木三局', bureauNum: 3, element: 'wood' },
  壬戌: { bureauName: '水二局', bureauNum: 2, element: 'water' },
  癸亥: { bureauName: '水二局', bureauNum: 2, element: 'water' }
};

// 生年十干四化对照表 (大耕老师入门班第25页、初阶班第89页)
export const BIRTH_YEAR_MUTAGENS: Record<string, { lu: string; quan: string; ke: string; ji: string }> = {
  甲: { lu: '廉贞', quan: '破军', ke: '武曲', ji: '太阳' },
  乙: { lu: '天机', quan: '天梁', ke: '紫微', ji: '太阴' },
  丙: { lu: '天同', quan: '天机', ke: '文昌', ji: '廉贞' },
  丁: { lu: '太阴', quan: '天同', ke: '天机', ji: '巨门' },
  戊: { lu: '贪狼', quan: '太阴', ke: '右弼', ji: '天机' },
  己: { lu: '武曲', quan: '贪狼', ke: '天梁', ji: '文曲' },
  庚: { lu: '太阳', quan: '武曲', ke: '太阴', ji: '天同' },
  辛: { lu: '巨门', quan: '太阳', ke: '文曲', ji: '文昌' },
  壬: { lu: '天梁', quan: '紫微', ke: '左辅', ji: '武曲' },
  癸: { lu: '破军', quan: '巨门', ke: '太阴', ji: '贪狼' }
};

// 身宫落六大宫位之深层追求解析 (大耕老师入门班第14页)
export const SHEN_PALACE_IMPACT: Record<string, string> = {
  命宫: '身命同宫：自我主见鲜明，一生最看重自我实现与独立掌控权，不易随波逐流。',
  夫妻宫: '身在夫妻：感情与深度合伙是你的生命支点，极度重视亲密关系滋养与合伙共赢。',
  财帛宫: '身在财帛：注重现金流与商业变现，务实敏锐，追求真实回报与商业闭环。',
  迁移宫: '身在迁移：极其在乎公众形象与外界认可，天生具有公众影响力意识与社交舞台感。',
  官禄宫: '身在官禄：事业成就心极强，不折不扣的事业奋斗型，以行业话语权与专业建树为荣。',
  福德宫: '身在福德：重视精神自由与精神生活品质，讲究顺心从容与内心信念。'
};

/**
 * 根据五行局和农历生日推算紫微星地支索引 (0=子, 1=丑, ..., 11=亥)
 * 采用标准紫微数理公式
 */
export function getZiweiStarBranchIndex(bureauNum: number, lunarDay: number): number {
  const rem = lunarDay % bureauNum;
  let q: number;
  let k: number;
  if (rem === 0) {
    q = Math.floor(lunarDay / bureauNum);
    k = 0;
  } else {
    k = bureauNum - rem;
    q = Math.floor((lunarDay + k) / bureauNum);
  }
  const step = k % 2 === 1 ? q - k : q + k;
  // 从寅宫(索引2)起算
  const pos = (2 + step - 1) % 12;
  return (pos + 12) % 12;
}

export interface ZiweiRealChartOutput {
  lunar: LunarDateResult;
  mingPalaceBranchIndex: number;
  mingPalaceBranchName: string;
  mingPalaceStemName: string;
  mingPalacePillar: string;
  bureauName: string;
  bureauNum: number;
  shenPalaceName: string;
  shenPalaceMeaning: string;
  ziweiBranchIndex: number;
  tianfuBranchIndex: number;
  palaces: {
    name: string;
    branchIndex: number;
    branchName: string;
    stemName: string;
    majorStars: string[];
  }[];
  mingStars: string[];
  migrationStars: string[];
  isMingEmpty: boolean;
  isMigrationEmpty: boolean;
  effectiveMingStars: string[];
  effectiveMigrationStars: string[];
  mutagens: {
    lu: string;
    quan: string;
    ke: string;
    ji: string;
    mingMutagens: string[];
    migrationMutagens: string[];
  };
}

/**
 * 计算全盘十二宫及十四主星分布
 */
export function calculateRealZiweiChart(
  solarYear: number,
  solarMonth: number,
  solarDay: number,
  birthTime: string = '12:00'
): ZiweiRealChartOutput {
  // 1. 取得农历信息与干支四柱
  const lunar = getLunarAndGanZhi(solarYear, solarMonth, solarDay, birthTime);
  const { lunarMonth, lunarDay, yearStem, hourBranchIndex } = lunar;

  // 2. 起命宫与身宫
  // 寅宫(2)起正月，顺数到农历生月
  const monthStartPos = (2 + (lunarMonth - 1)) % 12;
  // 从月所在宫逆数生时安命宫
  const mingPalaceBranchIndex = (monthStartPos - hourBranchIndex + 12) % 12;
  // 从月所在宫顺数生时安身宫
  const shenPalaceBranchIndex = (monthStartPos + hourBranchIndex) % 12;

  // 3. 五虎遁布十二宫天干（以年干起寅宫）
  const tigerStartMap: Record<string, number> = {
    甲: 2, 己: 2,
    乙: 4, 庚: 4,
    丙: 6, 辛: 6,
    丁: 8, 壬: 8,
    戊: 0, 癸: 0
  };
  const tigerStart = tigerStartMap[yearStem] ?? 2;

  // 计算每个地支宫位对应的天干
  // 寅(2), 卯(3), ..., 亥(11), 子(0), 丑(1)
  const palaceStems: string[] = new Array(12);
  for (let i = 0; i < 12; i++) {
    // 距离寅宫的格数
    const offsetFromTiger = (i - 2 + 12) % 12;
    const stemIdx = (tigerStart + offsetFromTiger) % 10;
    palaceStems[i] = HEAVENLY_STEMS[stemIdx];
  }

  // 命宫天干地支
  const mingStem = palaceStems[mingPalaceBranchIndex];
  const mingBranch = EARTHLY_BRANCHES[mingPalaceBranchIndex];
  const mingPillar = `${mingStem}${mingBranch}`;

  // 4. 定五行局
  const bureauInfo = NAYIN_BUREAU_MAP[mingPillar] || {
    bureauName: '水二局',
    bureauNum: 2,
    element: 'water'
  };

  // 5. 定紫微星位置与天府星位置
  const ziweiBranchIndex = getZiweiStarBranchIndex(bureauInfo.bureauNum, lunarDay);
  // 天府星位置（与紫微关于寅申轴对称）：(4 - ziwei + 12) % 12
  const tianfuBranchIndex = (4 - ziweiBranchIndex + 12) % 12;

  // 6. 排布十四主星到十二地支
  const branchStars: Record<number, string[]> = {};
  for (let i = 0; i < 12; i++) branchStars[i] = [];

  // 紫微星系（逆时针安星）
  branchStars[ziweiBranchIndex].push('紫微');
  branchStars[(ziweiBranchIndex - 1 + 12) % 12].push('天机');
  branchStars[(ziweiBranchIndex - 3 + 12) % 12].push('太阳');
  branchStars[(ziweiBranchIndex - 4 + 12) % 12].push('武曲');
  branchStars[(ziweiBranchIndex - 5 + 12) % 12].push('天同');
  branchStars[(ziweiBranchIndex - 8 + 12) % 12].push('廉贞');

  // 天府星系（顺时针安星）
  branchStars[tianfuBranchIndex].push('天府');
  branchStars[(tianfuBranchIndex + 1) % 12].push('太阴');
  branchStars[(tianfuBranchIndex + 2) % 12].push('贪狼');
  branchStars[(tianfuBranchIndex + 3) % 12].push('巨门');
  branchStars[(tianfuBranchIndex + 4) % 12].push('天相');
  branchStars[(tianfuBranchIndex + 5) % 12].push('天梁');
  branchStars[(tianfuBranchIndex + 6) % 12].push('七杀');
  branchStars[(tianfuBranchIndex + 10) % 12].push('破军');

  // 7. 构建十二宫完整结构 (从命宫逆时针或顺时针？传统命盘宫位逆布：命、兄、夫、子、财、疾、迁、友、官、田、福、父)
  const palaces = TWELVE_PALACES.map((palaceName, idx) => {
    // 传统十二宫地支位置：命宫逆时针分布各宫位
    const branchIdx = (mingPalaceBranchIndex - idx + 12) % 12;
    return {
      name: palaceName,
      branchIndex: branchIdx,
      branchName: EARTHLY_BRANCHES[branchIdx],
      stemName: palaceStems[branchIdx],
      majorStars: branchStars[branchIdx]
    };
  });

  // 8. 身宫归属名称与解读
  const shenPalaceObj = palaces.find((p) => p.branchIndex === shenPalaceBranchIndex);
  const shenPalaceName = shenPalaceObj ? shenPalaceObj.name : '命宫';
  const shenPalaceMeaning = SHEN_PALACE_IMPACT[shenPalaceName] || SHEN_PALACE_IMPACT['命宫'];

  // 9. 提取命宫与迁移宫主星
  const mingStars = branchStars[mingPalaceBranchIndex] || [];
  const migrationBranchIndex = (mingPalaceBranchIndex + 6) % 12;
  const migrationStars = branchStars[migrationBranchIndex] || [];

  // 南派斗数大耕老师核心规则：空宫借对宫！
  const isMingEmpty = mingStars.length === 0;
  const isMigrationEmpty = migrationStars.length === 0;

  const effectiveMingStars = isMingEmpty ? [...migrationStars] : [...mingStars];
  const effectiveMigrationStars = isMigrationEmpty ? [...mingStars] : [...migrationStars];

  // 10. 生年四化计算
  const yearMutagenInfo = BIRTH_YEAR_MUTAGENS[yearStem] || BIRTH_YEAR_MUTAGENS['甲'];
  const mingMutagens: string[] = [];
  const migrationMutagens: string[] = [];

  const checkMutagens = (stars: string[]) => {
    const list: string[] = [];
    stars.forEach((s) => {
      if (s === yearMutagenInfo.lu) list.push(`${s}化禄`);
      if (s === yearMutagenInfo.quan) list.push(`${s}化权`);
      if (s === yearMutagenInfo.ke) list.push(`${s}化科`);
      if (s === yearMutagenInfo.ji) list.push(`${s}化忌`);
    });
    return list;
  };

  mingMutagens.push(...checkMutagens(effectiveMingStars));
  migrationMutagens.push(...checkMutagens(effectiveMigrationStars));

  return {
    lunar,
    mingPalaceBranchIndex,
    mingPalaceBranchName: mingBranch,
    mingPalaceStemName: mingStem,
    mingPalacePillar: mingPillar,
    bureauName: bureauInfo.bureauName,
    bureauNum: bureauInfo.bureauNum,
    shenPalaceName,
    shenPalaceMeaning,
    ziweiBranchIndex,
    tianfuBranchIndex,
    palaces,
    mingStars,
    migrationStars,
    isMingEmpty,
    isMigrationEmpty,
    effectiveMingStars,
    effectiveMigrationStars,
    mutagens: {
      lu: yearMutagenInfo.lu,
      quan: yearMutagenInfo.quan,
      ke: yearMutagenInfo.ke,
      ji: yearMutagenInfo.ji,
      mingMutagens,
      migrationMutagens
    }
  };
}
