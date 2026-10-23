// ==========================================
// 经典命理大格局识别与现代个人品牌战略转译引擎
// 融入《紫微斗数全书》《骨髓赋》严格规则
// 全量转译为易玺老师个人品牌与商业战略护城河
// ==========================================

export interface BrandFormation {
  id: string;
  name: string;
  nameEn: string;
  level: 'legendary' | 'excellent' | 'good' | 'special';
  badge: string;
  badgeEn: string;
  source: string;
  sourceEn: string;
  ipTitle: string;
  ipTitleEn: string;
  ipMoat: string;
  ipMoatEn: string;
  strategicAdvice: string;
  strategicAdviceEn: string;
  conditionsMet: string[];
}

export interface SimplifiedPalace {
  branch: number; // 0=子, 1=丑, ..., 11=亥
  name: string;
  stars: string[];
}

export interface SimplifiedChart {
  mingBranch: number;
  shenBranch: number;
  yearStem: string;
  yearBranch: string;
  palaces: SimplifiedPalace[];
}

// 辅助检测工具
function findPalaceByStar(chart: SimplifiedChart, starName: string): SimplifiedPalace | undefined {
  return chart.palaces.find(p => p.stars.includes(starName));
}

function hasStarInPalace(palace: SimplifiedPalace | undefined, starName: string): boolean {
  if (!palace) return false;
  return palace.stars.includes(starName);
}

function getSanFangPalaces(chart: SimplifiedChart): SimplifiedPalace[] {
  const m = chart.mingBranch;
  const branches = [m, (m + 4) % 12, (m + 8) % 12, (m + 6) % 12];
  return chart.palaces.filter(p => branches.includes(p.branch));
}

function getSanFangStarSet(chart: SimplifiedChart): Set<string> {
  const set = new Set<string>();
  for (const p of getSanFangPalaces(chart)) {
    p.stars.forEach(s => set.add(s));
  }
  return set;
}

function getJiaPalaces(chart: SimplifiedChart, targetBranch: number): { prev: SimplifiedPalace | undefined; next: SimplifiedPalace | undefined } {
  const prevBranch = (targetBranch - 1 + 12) % 12;
  const nextBranch = (targetBranch + 1) % 12;
  return {
    prev: chart.palaces.find(p => p.branch === prevBranch),
    next: chart.palaces.find(p => p.branch === nextBranch)
  };
}

/**
 * 全量大格局识别与品牌战略转译
 */
export function detectBrandFormations(chart: SimplifiedChart): BrandFormation[] {
  const formations: BrandFormation[] = [];
  const mingPalace = chart.palaces.find(p => p.branch === chart.mingBranch);
  if (!mingPalace) return formations;

  const sanFangSet = getSanFangStarSet(chart);
  const mingStars = mingPalace.stars;

  // 1. 极向离明格：紫微在午宫坐命
  if (chart.mingBranch === 6 && mingStars.includes('紫微')) {
    formations.push({
      id: 'ji-xiang-li-ming',
      name: '极向离明格',
      nameEn: 'Radiant Sovereign Formation (Ji Xiang Li Ming)',
      level: 'legendary',
      badge: '罕见帝王大格局',
      badgeEn: 'Sovereign Pinnacle Archetype',
      source: '《紫微斗数全书·极向离明格》',
      sourceEn: 'Complete Compendium of Ziwei Doushu',
      ipTitle: '「行业灯塔·顶级教父/教母型 IP」',
      ipTitleEn: 'Beacon of the Industry: The Grand Sovereign Archetype',
      ipMoat: '天生自带高维战略视野与行业顶层话语权，不怒自威。',
      ipMoatEn: 'Natural sovereign gravitas, commanding macro perspective and supreme authority.',
      strategicAdvice: '切忌陷于琐碎技术细节与低客单内卷，务必立足赛道制高点，以“制定行业标准与思想框架”为核心打造标杆品牌。',
      strategicAdviceEn: 'Avoid low-ticket operational grind. Anchor yourself at the zenith of your field to formulate industry benchmarks.',
      conditionsMet: ['紫微坐午宫入命', '居南面北受万星朝拱']
    });
  }

  // 2. 紫府同宫格：紫微天府在寅或申同宫坐命
  if ((chart.mingBranch === 2 || chart.mingBranch === 8) && mingStars.includes('紫微') && mingStars.includes('天府')) {
    formations.push({
      id: 'zi-fu-tong-gong',
      name: '紫府同宫格',
      nameEn: 'Twin Monarchs Formation (Zi Fu Tong Gong)',
      level: 'legendary',
      badge: '文武兼备顶层格',
      badgeEn: 'Executive & Strategic Mastery',
      source: '《骨髓赋》',
      sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
      ipTitle: '「全能顶流·基业长青型 IP」',
      ipTitleEn: 'All-Round Master: Enduring Platform Brand',
      ipMoat: '兼具紫微的顶层战略决策与天府的资产精细化沉淀，稳健且深具扩张性。',
      ipMoatEn: 'Synthesizes visionary command with meticulous treasury management, creating an unassailable foundation.',
      strategicAdvice: '适合建立长青平台型或企业级顾问品牌，靠极深厚的信誉沉淀高客单产品，做穿越周期的长跑赢家。',
      strategicAdviceEn: 'Ideal for building long-term enterprise platform brands and compounding institutional credibility.',
      conditionsMet: ['紫微天府同坐命宫', '帝相并临']
    });
  }

  // 3. 杀破狼大格局：七杀、破军、贪狼在三方四正汇聚
  if (sanFangSet.has('七杀') && sanFangSet.has('破军') && sanFangSet.has('贪狼')) {
    formations.push({
      id: 'sha-po-lang',
      name: '杀破狼破局格',
      nameEn: 'Sha-Po-Lang Trailblazer Formation',
      level: 'excellent',
      badge: '蓝海颠覆攻坚格',
      badgeEn: 'Radical Disruptor Archetype',
      source: '《骨髓赋》',
      sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
      ipTitle: '「开路先锋·蓝海开拓者 IP」',
      ipTitleEn: 'Frontier Pioneer: Blue Ocean Trailblazer',
      ipMoat: '天生的赛道破局者，不畏逆境与竞争，越受质疑越爆发惊人动能。',
      ipMoatEn: 'Innate competitive catalyst; thrives under pressure to shatter market bottlenecks.',
      strategicAdvice: '千万不要跟在别人后面吃尾气，你的使命是用新观念、新模式彻底颠覆旧秩序，抢先占领全新的蓝海定义权。',
      strategicAdviceEn: 'Never replicate existing incumbents. Disrupt established paradigms and stake out bold, uncharted categories.',
      conditionsMet: ['七杀破军贪狼汇聚三方四正', '天生破立之气']
    });
  }

  // 4. 机月同梁格：天机、太阴、天同、天梁汇聚三方
  if (sanFangSet.has('天机') && sanFangSet.has('太阴') && sanFangSet.has('天同') && sanFangSet.has('天梁')) {
    formations.push({
      id: 'ji-yue-tong-liang',
      name: '机月同梁体系格',
      nameEn: 'Methodological Sage Formation (Ji Yue Tong Liang)',
      level: 'excellent',
      badge: '长青智慧体系格',
      badgeEn: 'Systemic Knowledge Architect',
      source: '《紫微斗数全书》',
      sourceEn: 'Complete Compendium of Ziwei Doushu',
      ipTitle: '「专业智囊·长青系统 IP」',
      ipTitleEn: 'Master Architect: Evergreen Knowledge Brand',
      ipMoat: '逻辑缜密、思维体系化极强，能够把复杂艰深的事物变成清晰的方法论。',
      ipMoatEn: 'Formidable structural acumen; translates nuanced complexity into scalable intellectual frameworks.',
      strategicAdvice: '专注打造标准化知识体系与长期复利产品，以专业度与长情陪伴赢得铁杆学员终身跟随。',
      strategicAdviceEn: 'Focus on codified methodology, publications, and evergreen education to compound trust over decades.',
      conditionsMet: ['机月同梁四星齐聚命宫三方四正']
    });
  }

  // 5. 府相朝垣格：天府、天相分别坐守三方四正
  const fuPalace = findPalaceByStar(chart, '天府');
  const xiangPalace = findPalaceByStar(chart, '天相');
  if (fuPalace && xiangPalace && fuPalace.branch !== xiangPalace.branch) {
    const sanFangBranches = [chart.mingBranch, (chart.mingBranch + 4) % 12, (chart.mingBranch + 8) % 12, (chart.mingBranch + 6) % 12];
    if (sanFangBranches.includes(fuPalace.branch) && sanFangBranches.includes(xiangPalace.branch)) {
      formations.push({
        id: 'fu-xiang-chao-yuan',
        name: '府相朝垣格',
        nameEn: 'Prime Ministers Alliance Formation (Fu Xiang Chao Yuan)',
        level: 'excellent',
        badge: '高客单赋能格',
        badgeEn: 'High-Ticket Strategic Advisor',
        source: '《紫微斗数全书·府相朝垣格》',
        sourceEn: 'Complete Compendium of Ziwei Doushu',
        ipTitle: '「资源枢纽·高客单战略顾问 IP」',
        ipTitleEn: 'Strategic Nexus: High-Ticket Trusted Envoy',
        ipMoat: '权印双辉，深得高净值群体信任，天生适合担任组织外脑与赋能操盘手。',
        ipMoatEn: 'Harmonious prestige and executive seal; effortlessly inspires high-net-worth patronage.',
        strategicAdvice: '走高端圈层和深度咨询路线，不打价格战，靠极致的交付品质与口碑转介绍实现可持续商业闭环。',
        strategicAdviceEn: 'Position yourself for premier bespoke consulting and high-net-worth alliances without competing on price.',
        conditionsMet: ['天府天相分守三方四正', '权印兼备']
      });
    }
  }

  // 6. 阳梁昌禄格：太阳、天梁、文昌、禄存齐聚三方
  if (sanFangSet.has('太阳') && sanFangSet.has('天梁') && sanFangSet.has('文昌') && sanFangSet.has('禄存')) {
    formations.push({
      id: 'yang-liang-chang-lu',
      name: '阳梁昌禄格',
      nameEn: 'Scholar Patriarch Formation (Yang Liang Chang Lu)',
      level: 'legendary',
      badge: '天下公信文魁格',
      badgeEn: 'Supreme Academic Authority',
      source: '《紫微斗数全书·阳梁昌禄格》',
      sourceEn: 'Complete Compendium of Ziwei Doushu',
      ipTitle: '「学术泰斗·考评认证型 IP」',
      ipTitleEn: 'Academic Sovereign: Certification Standard Bearer',
      ipMoat: '公信力与学术权威登峰造极，天生具有让行业信服的严谨度与背书力。',
      ipMoatEn: 'Supreme moral prestige and academic clout; commands uncontested credibility in education and research.',
      strategicAdvice: '适合制定行业考评标准、发起专业认证和出版权威著作，成为该领域的公认第一导师。',
      strategicAdviceEn: 'Publish definitive whitepapers, create accreditation systems, and assume the role of recognized industry authority.',
      conditionsMet: ['太阳天梁文昌禄存齐聚三方']
    });
  }

  // 7. 火贪格 / 铃贪格：贪狼在三方会火星或铃星
  if (sanFangSet.has('贪狼') && (sanFangSet.has('火星') || sanFangSet.has('铃星'))) {
    const sha = sanFangSet.has('火星') ? '火星' : '铃星';
    formations.push({
      id: 'huo-tan-ling-tan',
      name: sha === '火星' ? '火贪爆发格' : '铃贪奇谋格',
      nameEn: sha === '火星' ? 'Blazing Phoenix Formation (Huo Tan)' : 'Resonant Strategist Formation (Ling Tan)',
      level: 'excellent',
      badge: '爆款破圈聚财格',
      badgeEn: 'Viral Growth Catalyst',
      source: '《骨髓赋》',
      sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
      ipTitle: '「破圈爆发·超级风口爆款 IP」',
      ipTitleEn: 'Viral Dynamo: Trendsetting Breakthrough Brand',
      ipMoat: '极度敏锐的市场热点嗅觉，善于捕捉受众好奇心与时代红利，具备瞬间引爆全网流量的潜力。',
      ipMoatEn: 'Exceptional intuition for audience sentiment, turning viral cultural waves into high-converting windfalls.',
      strategicAdvice: '重在借势与快速变现闭环，研发具有强传播属性的爆款单品，见好就收，将瞬时流量沉淀为长期私域用户。',
      strategicAdviceEn: 'Capitalize on social momentum with high-converting flagship launches, channeling fleeting virality into owned media.',
      conditionsMet: [`贪狼于三方会照${sha}`, '突发横发之运']
    });
  }

  // 8. 巨日同宫格：太阳巨门同宫或会照
  if ((mingStars.includes('太阳') && mingStars.includes('巨门')) || (sanFangSet.has('太阳') && sanFangSet.has('巨门'))) {
    formations.push({
      id: 'ju-ri-tong-gong',
      name: '巨日同宫格',
      nameEn: 'Radiant Herald Formation (Ju Ri Tong Gong)',
      level: 'good',
      badge: '国际布道演说格',
      badgeEn: 'Global Evangelist Archetype',
      source: '《紫微斗数全书》',
      sourceEn: 'Complete Compendium of Ziwei Doushu',
      ipTitle: '「超级布道·跨界穿透演说 IP」',
      ipTitleEn: 'Global Herald: Penetrating Keynote Evangelist',
      ipMoat: '语言感染力与穿透力极强，能把极其深刻晦涩的底层逻辑讲得妇孺皆知，天生自带布道光环。',
      ipMoatEn: 'Extraordinary rhetorical power; illuminates complex truths into compelling public knowledge.',
      strategicAdvice: '深耕视频播客、大型公开巡讲和海外华语市场，用强有力的演说打破行业信息茧房。',
      strategicAdviceEn: 'Leverage podcasts, keynote speaking, and global distribution to shatter industry misconceptions.',
      conditionsMet: ['太阳巨门相会', '声名播于远方']
    });
  }

  // 9. 左右夹命 / 昌曲夹命 / 魁钺夹命
  const { prev, next } = getJiaPalaces(chart, chart.mingBranch);
  const checkJia = (starA: string, starB: string, name: string, ip: string, ipEn: string) => {
    if ((hasStarInPalace(prev, starA) && hasStarInPalace(next, starB)) || (hasStarInPalace(prev, starB) && hasStarInPalace(next, starA))) {
      formations.push({
        id: `jia-${starA}-${starB}`,
        name: `${name}格`,
        nameEn: `${starA} & ${starB} Flanking Formation`,
        level: 'good',
        badge: '贵人众捧生态格',
        badgeEn: 'Sovereign Patronage Archetype',
        source: '《紫微斗数全书》',
        sourceEn: 'Complete Compendium of Ziwei Doushu',
        ipTitle: `「${ip}」`,
        ipTitleEn: ipEn,
        ipMoat: '天生左右逢源，身旁常有贵人相扶与智囊辅佐，善于聚拢合伙人构建共赢生态。',
        ipMoatEn: 'Blessed with constant high-level benefactors and trusted confidants, easily forming thriving alliances.',
        strategicAdvice: '不要做孤家寡人，善用他人之长补己之短，做大平台发起人与合伙共赢倡导者。',
        strategicAdviceEn: 'Avoid working in isolation. Assemble exceptional specialists around your mission and govern as an alliance builder.',
        conditionsMet: [`${starA}与${starB}左右相夹命宫`]
      });
    }
  };

  checkJia('左辅', '右弼', '辅弼夹命', '生态聚拢·全能操盘手 IP', 'Ecosystem Architect: Master Team Orchestrator');
  checkJia('文昌', '文曲', '昌曲夹命', '文质彬彬·文化名片 IP', 'Cultural Icon: Eloquent Thought Leader');
  checkJia('天魁', '天钺', '魁钺夹命', '得道多助·超级贵人 IP', 'High-Trust Luminary: Magnet for Noble Patrons');

  // 10. 基础保障格局（如果以上特殊格局未触发，自动检测基础格局，确保人人有大格局勋章）
  if (formations.length === 0) {
    if (mingStars.includes('禄存') || sanFangSet.has('禄存')) {
      formations.push({
        id: 'lu-cun-shou-ming',
        name: '禄存得地格',
        nameEn: 'Enduring Prosperity Formation (Lu Cun)',
        level: 'good',
        badge: '基底深厚自强格',
        badgeEn: 'Resilient Foundation Archetype',
        source: '《骨髓赋》',
        sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
        ipTitle: '「底蕴深厚·守正出奇型 IP」',
        ipTitleEn: 'Resilient Anchor: Compounding Sustainable Brand',
        ipMoat: '品牌底盘极稳，不急功近利，靠长期交付建立他人难以动摇的信誉壁垒。',
        ipMoatEn: 'Unshakable commercial foundation; compounds trust methodically without reckless speculation.',
        strategicAdvice: '专注做深做透一个垂直细分，靠高复购率与铁杆老客户转介绍构建无惧经济周期的现金流。',
        strategicAdviceEn: 'Cultivate deep vertical expertise and prioritize high repeat rates to maintain robust counter-cyclical cash flow.',
        conditionsMet: ['禄存坐命或三方会合']
      });
    } else if (mingStars.includes('天马') || sanFangSet.has('天马')) {
      formations.push({
        id: 'tian-ma-ru-ming',
        name: '天马行空格',
        nameEn: 'Celestial Steed Formation (Tian Ma)',
        level: 'good',
        badge: '远行破界开疆格',
        badgeEn: 'Global Frontier Archetype',
        source: '《骨髓赋》',
        sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
        ipTitle: '「跨境出海·动态生长型 IP」',
        ipTitleEn: 'Frontier Voyager: Dynamic Cross-Border Brand',
        ipMoat: '动中得财、生生不息，市场越广阔越能激发你的商业潜能，不局限于一时一地。',
        ipMoatEn: 'Thrives in motion; gains momentum as the geographic and cultural market expands.',
        strategicAdvice: '布局全球华语市场与跨界出海，做不同圈层和地域的桥梁，在运动中不断捕获增长新曲线。',
        strategicAdviceEn: 'Expand across international diaspora markets, serving as a dynamic bridge across industries.',
        conditionsMet: ['天马会入命宫三方']
      });
    } else {
      // 默认通识格局
      formations.push({
        id: 'ziwei-chao-yuan',
        name: '紫微朝拱格',
        nameEn: 'Celestial Alignment Formation',
        level: 'good',
        badge: '独立自主开运格',
        badgeEn: 'Independent Sovereign Archetype',
        source: '《骨髓赋》',
        sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
        ipTitle: '「潜心笃行·厚积薄发型 IP」',
        ipTitleEn: 'Focused Artisan: Steadfast Compounding Brand',
        ipMoat: '自我进化意志极其坚定，善于在无人喝彩时打磨核心手艺，终成大器。',
        ipMoatEn: 'Tenacious self-refinement; hones core mastery in solitude to emerge as a respected specialist.',
        strategicAdvice: '找到属于你的核心绝活，耐住寂寞把一个产品打磨到极致，市场自然会给予超额奖赏。',
        strategicAdviceEn: 'Master your signature craft with unrelenting discipline; authentic excellence inevitably attracts market recognition.',
        conditionsMet: ['三方四正星曜相依生旺']
      });
    }
  }

  return formations;
}
