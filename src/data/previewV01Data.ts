// ==========================================
// 紫微 IP DNA 战略系统｜引流测试版 / Preview Test Version V0.1
// 数据字典与核心知识库 (Section 12 - Section 39)
// ==========================================

export type IPFamilyId =
  | 'leader_authority'
  | 'strategy_intelligence'
  | 'communication_influence'
  | 'disruption_pioneer'
  | 'trust_mentor'
  | 'execution_results';

export type ElementKey = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export interface IPFamilyInfo {
  id: IPFamilyId;
  name: string;
  tagline: string;
  stars: string[];
  keywords: string[];
  ipAdvantage: string;
  contentTendency: string;
  oneLiner: string;
  coreDriver: string;
  accentColor: string;
  bgGradient: string;
  badgeBorder: string;
  iconName: string;
  avatarUrl?: string;
}

// 1. 六大核心 IP 家族 (Section 12 - 17, 38)
export const IP_FAMILIES: Record<IPFamilyId, IPFamilyInfo> = {
  leader_authority: {
    id: 'leader_authority',
    name: '领袖权威型',
    tagline: '带方向的人 · 高维格局 · 标准制定者',
    stars: ['紫微', '天府', '天相'],
    keywords: ['格局', '领导', '统筹', '权威', '资源整合', '标准', '秩序'],
    ipAdvantage: '适合建立专业权威、领导者形象、企业家 IP、顾问型 IP、战略型 IP、管理型 IP。',
    contentTendency: '提出框架、制定标准、分享决策、解读趋势、管理经验、高层视角。',
    oneLiner: '你更适合成为“带方向的人”，而不是永远跟着别人走的人。',
    coreDriver: '格局 · 方向感 · 资源整合 · 权威 · 决策',
    accentColor: '#D97706', // amber-600
    bgGradient: 'from-amber-500 via-amber-600 to-yellow-600',
    badgeBorder: 'border-amber-200 bg-amber-50 text-amber-900',
    iconName: 'Crown',
    avatarUrl: '/avatars/leader_authority.png'
  },
  strategy_intelligence: {
    id: 'strategy_intelligence',
    name: '智慧策略型',
    tagline: '比别人多看一步 · 深度洞察 · 智谋军师',
    stars: ['天机', '太阴'],
    keywords: ['思考', '洞察', '分析', '策略', '研究', '细节', '判断'],
    ipAdvantage: '适合建立专家型 IP、策略顾问、知识型 IP、分析型 IP、幕后军师、研究型 IP。',
    contentTendency: '方法论、分析、拆解、教学、趋势判断、深度知识。',
    oneLiner: '你的影响力，更容易来自“比别人多看一步”。',
    coreDriver: '思考 · 洞察 · 分析 · 策略 · 深度知识',
    accentColor: '#2563EB', // blue-600
    bgGradient: 'from-blue-600 via-indigo-600 to-cyan-600',
    badgeBorder: 'border-blue-200 bg-blue-50 text-blue-900',
    iconName: 'Brain',
    avatarUrl: '/avatars/strategy_intelligence.png'
  },
  communication_influence: {
    id: 'communication_influence',
    name: '表达传播型',
    tagline: '让人愿意听你说 · 破圈穿透 · 磁场吸引',
    stars: ['巨门', '贪狼'],
    keywords: ['表达', '传播', '话题', '互动', '社交', '吸引力', '注意力'],
    ipAdvantage: '适合建立内容型 IP、主播型 IP、观点型 IP、社交影响力 IP、娱乐型 IP、生活方式 IP。',
    contentTendency: '说观点、讲故事、评论、访谈、社交内容、高互动内容。',
    oneLiner: '你的优势，不只是知道什么，而是让别人愿意听你说。',
    coreDriver: '表达 · 传播 · 话题 · 互动 · 吸引力',
    accentColor: '#9333EA', // purple-600
    bgGradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
    badgeBorder: 'border-purple-200 bg-purple-50 text-purple-900',
    iconName: 'Megaphone',
    avatarUrl: '/avatars/communication_influence.png'
  },
  disruption_pioneer: {
    id: 'disruption_pioneer',
    name: '开创破局型',
    tagline: '敢先走一步 · 打破陈规 · 鲜明立场',
    stars: ['七杀', '破军', '廉贞'],
    keywords: ['开创', '改革', '突破', '挑战', '转型', '鲜明', '不走寻常路'],
    ipAdvantage: '适合建立创业者 IP、改革者 IP、强观点 IP、转型专家、破局顾问、创新型 IP。',
    contentTendency: '挑战旧观念、揭露问题、改革方法、转型案例、反常识内容、鲜明立场。',
    oneLiner: '你的价值，往往来自别人不敢动的时候，你敢先走一步。',
    coreDriver: '开创 · 改革 · 突破 · 挑战 · 鲜明立场',
    accentColor: '#E11D48', // rose-600
    bgGradient: 'from-rose-600 via-red-600 to-orange-600',
    badgeBorder: 'border-rose-200 bg-rose-50 text-rose-900',
    iconName: 'Flame',
    avatarUrl: '/avatars/disruption_pioneer.png'
  },
  trust_mentor: {
    id: 'trust_mentor',
    name: '信任导师型',
    tagline: '长期信任 · 润物陪伴 · 泰斗引路',
    stars: ['天同', '天梁'],
    keywords: ['信任', '陪伴', '引导', '经验', '关怀', '原则', '守护'],
    ipAdvantage: '适合建立导师型 IP、教育型 IP、疗愈型 IP、顾问型 IP、陪伴型 IP、长期信任型品牌。',
    contentTendency: '教学、人生经验、陪伴成长、案例分享、问题解答、价值观内容。',
    oneLiner: '你真正强大的影响力，来自别人愿意长期相信你。',
    coreDriver: '信任 · 陪伴 · 引导 · 经验 · 长期托付',
    accentColor: '#0D9488', // teal-600
    bgGradient: 'from-teal-600 via-emerald-600 to-green-600',
    badgeBorder: 'border-teal-200 bg-teal-50 text-teal-900',
    iconName: 'HeartHandshake',
    avatarUrl: '/avatars/trust_mentor.png'
  },
  execution_results: {
    id: 'execution_results',
    name: '实战结果型',
    tagline: '用事实说话 · 成果交付 · 硬核行动',
    stars: ['武曲', '太阳'],
    keywords: ['行动', '执行', '成果', '承担', '实践', '影响', '证明'],
    ipAdvantage: '适合建立实战专家、结果型顾问、企业家 IP、行动派 IP、案例型 IP、业绩型 IP。',
    contentTendency: '案例、数据、成果、Before / After、实操方法、经验总结。',
    oneLiner: '比起说得漂亮，你更适合用结果让市场相信你。',
    coreDriver: '行动 · 执行 · 成果 · 承担 · 真实数据',
    accentColor: '#EA580C', // orange-600
    bgGradient: 'from-orange-600 via-amber-600 to-yellow-600',
    badgeBorder: 'border-orange-200 bg-orange-50 text-orange-900',
    iconName: 'Target',
    avatarUrl: '/avatars/execution_results.png'
  }
};

// 2. 十四主星快速标签与原型 (Section 18)
export interface StarQuickInfo {
  name: string;
  tags: string[];
  singleArchetype: string;
  defaultFamily: IPFamilyId;
  coreAdvantagePoints: string[];
  externalPerception: string[];
}

export const FOURTEEN_STAR_LABELS: Record<string, StarQuickInfo> = {
  紫微: {
    name: '紫微',
    tags: ['领导', '格局', '权威'],
    singleArchetype: '王者领袖型',
    defaultFamily: 'leader_authority',
    coreAdvantagePoints: [
      '天然具备全局视野，擅长统筹与定战略方向',
      '自带高阶人格气场，不容易被琐碎杂事牵制',
      '适合建立高客单、企业级与权威型专业 IP',
      '决策果断，容易成为团队与追随者的定海神针'
    ],
    externalPerception: [
      '第一眼让人感到有分量、沉稳且具有威信',
      '在公众或镜头前容易自然展现出高位把控力',
      '陌生人容易对你的综合决策产生信任'
    ]
  },
  天机: {
    name: '天机',
    tags: ['策略', '分析', '智囊'],
    singleArchetype: '智慧军师型',
    defaultFamily: 'strategy_intelligence',
    coreAdvantagePoints: [
      '思维极其敏捷，擅长发现系统漏洞与破局解法',
      '擅长方法论提炼与框架梳理，将复杂逻辑结构化',
      '天生的顶级幕僚，能在多维度变数中找到最优解',
      '适合以深度洞察、认知升维为核心打动受众'
    ],
    externalPerception: [
      '市场第一眼感知到你的聪明、专业与敏锐',
      '在公众面前展现出极强逻辑推理与条理性',
      '别人遇到复杂难题时，最容易想要向你请教'
    ]
  },
  太阳: {
    name: '太阳',
    tags: ['传播', '影响', '承担'],
    singleArchetype: '能量播撒型',
    defaultFamily: 'execution_results',
    coreAdvantagePoints: [
      '极强的主动担当与奉献精神，愿意走上台前发光',
      '具有极高感染力，天然适合做公开传播与感召',
      '不计较细微得失的大格局，极容易积累广泛声誉',
      '适合以使命愿景与阳光担当建立个人公信力'
    ],
    externalPerception: [
      '市场感受你热忱、正直、光明磊落且富有活力',
      '在镜头前容易放大真诚与号召力，让人放下防备',
      '极具公信力，容易吸引需要方向指引的追随者'
    ]
  },
  武曲: {
    name: '武曲',
    tags: ['实战', '结果', '执行'],
    singleArchetype: '硬核操盘型',
    defaultFamily: 'execution_results',
    coreAdvantagePoints: [
      '极度注重实际产出与商业回报，绝不纸上谈兵',
      '执行力极强，能迅速把概念落地为可变现产品',
      '数字敏感度高，善于用真实结果与数据说话',
      '适合打造硬核交付、结果对赌型的高价值IP'
    ],
    externalPerception: [
      '外界第一眼感知到你的务实、干练与专业执行力',
      '镜头前往往直接切入重点，少废话、多干货',
      '客户容易相信你能帮他们带来真金白银的改变'
    ]
  },
  天同: {
    name: '天同',
    tags: ['陪伴', '亲和', '疗愈'],
    singleArchetype: '温情陪伴型',
    defaultFamily: 'trust_mentor',
    coreAdvantagePoints: [
      '极高同理心与亲和力，能迅速拉近人与人的距离',
      '善于倾听与情绪共振，为受众提供安心滋养场域',
      '不容易激起同业防备与竞争，拥有天然贵人运',
      '适合打造温暖陪伴、身心平衡与长期信任社群'
    ],
    externalPerception: [
      '市场感到你毫无攻击性、温润包容、值得亲近',
      '受众面对你时更容易敞开心扉、倾诉真实困惑',
      '外在形象具有天然治愈感，极易获得长线好感'
    ]
  },
  廉贞: {
    name: '廉贞',
    tags: ['观点', '魅力', '改革'],
    singleArchetype: '锋芒策动型',
    defaultFamily: 'disruption_pioneer',
    coreAdvantagePoints: [
      '立场鲜明有锋芒，绝不随波逐流或中庸迎合',
      '对审美与品牌视觉有独到直觉，极具视觉冲击力',
      '擅长挑战旧观念，以反常识或前卫视角切入市场',
      '适合建立高辨识度、强态度、自带拥趸的人物IP'
    ],
    externalPerception: [
      '第一眼给人留下深刻、特别甚至有些惊艳的印象',
      '在镜头前张力极强，观点犀利让人过目难忘',
      '受众要么极度认同要么深受震撼，极具破圈穿透力'
    ]
  },
  天府: {
    name: '天府',
    tags: ['经营', '资源', '稳健'],
    singleArchetype: '基业统驭型',
    defaultFamily: 'leader_authority',
    coreAdvantagePoints: [
      '极强资产守护与资源调配能力，擅长大盘运营',
      '做事稳扎稳打、风控意识极强，走长期主义路线',
      '善于整合各方资源，搭建可持续运转的商业体系',
      '适合建立大盘底座、品牌资产管理与稳健商学IP'
    ],
    externalPerception: [
      '市场第一眼感知到你的可靠、大气与充裕底气',
      '公众面前展现出不动如山的定力与成熟企业家范',
      '合作方更愿意与你做大体量、长期深度的商业合作'
    ]
  },
  太阴: {
    name: '太阴',
    tags: ['洞察', '审美', '细节'],
    singleArchetype: '润物赋能型',
    defaultFamily: 'strategy_intelligence',
    coreAdvantagePoints: [
      '感知力极其敏锐，能洞察市场与人性的幽微细节',
      '天生具备高级审美水准与内容打磨的匠人精神',
      '善于以柔克刚，在安静中积累深厚的专业沉淀',
      '适合打造美学生活、深度研究、高粘性私域IP'
    ],
    externalPerception: [
      '外界第一眼感受到你的精致、内敛、深度与知性',
      '在镜头前给人如沐春风的宁静感与美学质感',
      '受众容易被你的细腻品位与专业耐心所折服'
    ]
  },
  贪狼: {
    name: '贪狼',
    tags: ['魅力', '社交', '创意'],
    singleArchetype: '全域连接型',
    defaultFamily: 'communication_influence',
    coreAdvantagePoints: [
      '极强的多面才华与好奇心，擅长创造新鲜体验',
      '顶级社交穿透力，能轻松打通不同圈层与人群',
      '对时代流行、流量风向与用户欲望有超常嗅觉',
      '适合打造时尚生活、跨界创意、高互动社交IP'
    ],
    externalPerception: [
      '市场第一眼就被你的生动、风趣与个人魅力所吸引',
      '在公众平台天然自带聚光灯，举手投足皆是内容',
      '互动感极强，容易迅速激活粉丝的活跃度与追随'
    ]
  },
  巨门: {
    name: '巨门',
    tags: ['表达', '辩证', '观点'],
    singleArchetype: '真知解构型',
    defaultFamily: 'communication_influence',
    coreAdvantagePoints: [
      '语言表达与辩论拆解力超群，擅长一针见血剖析真相',
      '具有深度探究欲与批判思维，不轻信表面现象',
      '擅长通过演讲、写作与观点输出打动公众心智',
      '适合打造犀利评论、知识解构与思想布道型IP'
    ],
    externalPerception: [
      '市场感知到你的思辨锐利、敢讲真话与真知灼见',
      '在镜头前讲话极具说服力，能牢牢抓住观众注意力',
      '读者和听众容易被你的深刻见解引发深度思考'
    ]
  },
  天相: {
    name: '天相',
    tags: ['顾问', '专业', '协调'],
    singleArchetype: '首席智囊型',
    defaultFamily: 'leader_authority',
    coreAdvantagePoints: [
      '极高的职业素养与规范度，擅长标准建立与协调统筹',
      '天生懂得分寸感与边界，深得高层与核心客户信任',
      '能够将复杂商业利益多方平衡，促进方案落地',
      '适合打造高端顾问、企业陪跑、行业中枢型IP'
    ],
    externalPerception: [
      '市场感受你体面、克制、职业化且非常靠谱',
      '镜头前展现出高水准的商务礼仪与专业顾问风范',
      '高净值人群非常愿意向你开放内部资源寻求咨询'
    ]
  },
  天梁: {
    name: '天梁',
    tags: ['导师', '原则', '经验'],
    singleArchetype: '泰斗领航型',
    defaultFamily: 'trust_mentor',
    coreAdvantagePoints: [
      '自带长者智慧与德高望重特质，擅长解人于危难',
      '坚守原则与道德底线，具有极强的行业庇荫庇佑力',
      '人生阅历丰富，擅长传道授业与沉淀经典方法论',
      '适合打造泰斗名师、行业教父、长期传承型品牌'
    ],
    externalPerception: [
      '外界第一眼感受到你的威望、厚重感与值得信赖',
      '在公众面前犹如行业宗师，发言具有极高分量',
      '遇到行业变局或迷茫时，大众会主动寻找你的定见'
    ]
  },
  七杀: {
    name: '七杀',
    tags: ['突破', '决策', '挑战'],
    singleArchetype: '铁血战将型',
    defaultFamily: 'disruption_pioneer',
    coreAdvantagePoints: [
      '极强冒险精神与独立作战能力，敢啃最硬的骨头',
      '杀伐果断，在危机面前能够快速做出关键决策',
      '不依赖外界资源，靠一己之力打下江山的韧性',
      '适合打造连续创业者、逆风翻盘、破局突围型IP'
    ],
    externalPerception: [
      '市场感知到你的决绝、雷厉风行与强大攻坚力',
      '镜头前风格凌厉，不拐弯抹角，极具战斗力气场',
      '受众会被你的坚毅与不服输的精神深深激励'
    ]
  },
  破军: {
    name: '破军',
    tags: ['颠覆', '转型', '创新'],
    singleArchetype: '先锋破局型',
    defaultFamily: 'disruption_pioneer',
    coreAdvantagePoints: [
      '敢于推翻旧秩序、打破固有规则的极客颠覆力',
      '对新兴赛道与未来趋势有天生冲动，永远走在最前沿',
      '擅长跨界创新与新物种创造，引领行业转型浪潮',
      '适合打造颠覆式创新、新商业探索、先锋极客IP'
    ],
    externalPerception: [
      '外界第一眼感受到你的前卫、不羁与革新者锐气',
      '在公众面前展现出敢想敢干、颠覆陈腐常规的魄力',
      '新一代年轻人与行业创新者非常容易成为你的拥趸'
    ]
  }
};

// 3. 24 组经典双星融合原型库 (Dual-Star Archetypes)
export interface DualStarArchetype {
  id: string;
  stars: [string, string];
  archetype: string;
  ipFamily: IPFamilyId;
  keywords: string[];
  coreAdvantages: string[];
  externalPerception: string[];
  collisionSummary: string;
}

export const DUAL_STAR_ARCHETYPES: Record<string, DualStarArchetype> = {
  ziwei_tanlang: {
    id: 'ziwei_tanlang',
    stars: ['紫微', '贪狼'],
    archetype: '魅力领袖型',
    ipFamily: 'leader_authority',
    keywords: ['领导', '魅力', '存在感', '影响力'],
    coreAdvantages: [
      '天生具备强大的领导意识与个人磁场',
      '极易在受众心中形成不可替代的人物存在感',
      '适合建立高辨识度的人物品类大IP',
      '个人魅力是天然的品牌无形资产',
      '擅长举起观点旗帜并吸引志同道合者'
    ],
    externalPerception: [
      '市场第一眼感知到你的独特气场与领袖风采',
      '在镜头前既有权威感又充满人情味与灵动魅力',
      '公众容易主动被你的生活方式与格局所感召'
    ],
    collisionSummary: '内在是掌舵的领袖，外在是吸睛的明星。你不必刻意端着架子，你的生动与魅力恰恰是放大格局的最佳通道。'
  },
  ziwei_tianfu: {
    id: 'ziwei_tianfu',
    stars: ['紫微', '天府'],
    archetype: '王者掌舵型',
    ipFamily: 'leader_authority',
    keywords: ['统领', '基业', '稳健', '大局'],
    coreAdvantages: [
      '兼备帝王战略魄力与顶级府库运营定力',
      '擅长搭建大体量平台生态，拥有长青商业耐力',
      '不轻易被市场短期泡沫动摇，专注于筑高壁垒',
      '适合打造企业教父、产业领航者与基业常青品牌'
    ],
    externalPerception: [
      '外界第一眼就感知到不可撼动的厚重底蕴与格局',
      '公众面前极其稳健，给人以绝对安全感与托付感',
      '大客户与头部资本非常乐于与你进行底层合作'
    ],
    collisionSummary: '兼具紫微的号令天下与天府的深厚粮仓。你的IP不需要追逐热闹，稳如泰山的定海神针定位就是你的最大溢价。'
  },
  ziwei_tianxiang: {
    id: 'ziwei_tianxiang',
    stars: ['紫微', '天相'],
    archetype: '帝王军师型',
    ipFamily: 'leader_authority',
    keywords: ['高维', '顾问', '标准', '统筹'],
    coreAdvantages: [
      '既能站在宏观战略做决策，又能制定严谨交付标准',
      '极善于在复杂权力与利益网络中协调各方共赢',
      '拥有极高的商业信誉与品位，适合高端私密圈层',
      '适合打造高端战略闭门顾问、顶层商业架构师'
    ],
    externalPerception: [
      '市场感知到你的专业度、严谨自律与高端素养',
      '镜头前讲话体面有分寸，逻辑自洽且极具说服力',
      '企业决策者非常愿意邀请你进入核心战略智囊团'
    ],
    collisionSummary: '既有指挥方向的大脑，又有精雕细琢的印信。用你的专业标准去为有潜力的人赋能，是你的最快突围路径。'
  },
  ziwei_qisha: {
    id: 'ziwei_qisha',
    stars: ['紫微', '七杀'],
    archetype: '铁血统帅型',
    ipFamily: 'leader_authority',
    keywords: ['决断', '突围', '魄力', '征伐'],
    coreAdvantages: [
      '雷厉风行的实干统帅，敢于在无人区开辟新领地',
      '敢打硬仗，在逆境中带领团队破釜沉舟的决绝',
      '不甘居人之下，对目标有着近乎偏执的达成信念',
      '适合打造带领创业者破冰逆袭的实战先锋IP'
    ],
    externalPerception: [
      '市场第一眼感知到你的强大气场与锐利眼神',
      '在公众面前散发出一往无前的拼搏豪气',
      '受众在迷茫时极容易被你的笃定与刚强所唤醒'
    ],
    collisionSummary: '紫微之尊加上七杀之勇，绝非温室里的花朵。直接用你打下的一场场硬仗，作为你的个人品牌战功封碑。'
  },
  ziwei_pojun: {
    id: 'ziwei_pojun',
    stars: ['紫微', '破军'],
    archetype: '破局帝皇型',
    ipFamily: 'disruption_pioneer',
    keywords: ['颠覆', '改革', '重构', '魄力'],
    coreAdvantages: [
      '敢于砸碎旧体制并建立新规则的革命性领袖',
      '极强的自我迭代升级欲望，不断突破舒适圈',
      '擅长跨界整合创造新商业赛道，开创新物种',
      '适合打造行业变革先锋、商业范式重构者IP'
    ],
    externalPerception: [
      '外界感受到你的离经叛道与不可估量的爆发力',
      '在镜头前敢于直言行业痛点，毫不掩饰革新决心',
      '创新型人才与反思传统者会被你强力吸引'
    ],
    collisionSummary: '打破旧世界，建立新帝国。不要试图讨好既得利益者，你的受众是那些渴望看到行业变局的新生力量。'
  },
  tianji_taiyin: {
    id: 'tianji_taiyin',
    stars: ['天机', '太阴'],
    archetype: '深谋策略型',
    ipFamily: 'strategy_intelligence',
    keywords: ['洞察', '推演', '细腻', '谋略'],
    coreAdvantages: [
      '心细如发且思维精密，能把极其庞杂的数据化繁为简',
      '对人性心理与市场隐性需求有着天才般的直觉捕捉',
      '擅长策划出润物细无声的高转化商业通路',
      '适合打造深度心理咨询、精益数据增长与战略智库'
    ],
    externalPerception: [
      '市场感到你睿智而温和，充满智者底蕴而无盛气凌人',
      '在公众面前展现出极强拆解力与优雅审美品味',
      '受众面对你时有一种“被你深深看透且理解”的安全感'
    ],
    collisionSummary: '天机的灵动结合太阴的温润，你的战略不是冰冷的说教，而是带着对人性的深刻同理，直抵人心。'
  },
  tianji_jumen: {
    id: 'tianji_jumen',
    stars: ['天机', '巨门'],
    archetype: '思辨军师型',
    ipFamily: 'strategy_intelligence',
    keywords: ['思辨', '洞察', '逻辑', '观点'],
    coreAdvantages: [
      '思考极为严谨，擅长用辩证法找出事物底层本质',
      '表达能力出类拔萃，能把艰深概念讲得通透透彻',
      '擅长提出颠覆认知的独特观点，引发行业讨论',
      '适合打造观点独到、深度拆解的知识型超级IP'
    ],
    externalPerception: [
      '市场第一眼看到你的深刻思考力与惊人拆解力',
      '在镜头前侃侃而谈，观点密集、干货满满',
      '受众视你为认知破局的良师，愿意持续付费学习'
    ],
    collisionSummary: '内在是缜密的策略，外在是锋利的观点。以知识为桥梁，用逻辑服人，你的专业度就是你最大的变现资产。'
  },
  tianji_tianliang: {
    id: 'tianji_tianliang',
    stars: ['天机', '天梁'],
    archetype: '智囊导师型',
    ipFamily: 'strategy_intelligence',
    keywords: ['谋略', '长者', '解惑', '高瞻远瞩'],
    coreAdvantages: [
      '谋定而后动的智者风范，擅长解开长期人生死局',
      '把天机的方法论与天梁的传承经验完美结合',
      '极具奉献精神与正义感，受业内广泛尊重',
      '适合打造人生导师、企业首席常年顾问、经典大师IP'
    ],
    externalPerception: [
      '市场感知到你的老练、高瞻远瞩与极度可靠',
      '公众面前说话字字珠玑，自带一种安抚焦虑的能量',
      '面临重大关口的人群会把你视为首选指路明灯'
    ],
    collisionSummary: '聪明而不轻浮，老练而不僵化。你的IP自带一种“过来人”的定力，陪伴用户穿越迷茫周期。'
  },
  taiyang_jumen: {
    id: 'taiyang_jumen',
    stars: ['太阳', '巨门'],
    archetype: '观点领袖型',
    ipFamily: 'communication_influence',
    keywords: ['发声', '布道', '公信力', '跨界'],
    coreAdvantages: [
      '太阳的光芒驱散巨门的幽暗，极具公众演讲号召力',
      '敢于为特定群体发声，用声音点亮大众心智',
      '擅长跨界文化交流与海外传播，影响力跨越地域',
      '适合打造行业布道师、公益先锋、思想演讲家IP'
    ],
    externalPerception: [
      '市场感到你正气凛然、口才绝佳且极具穿透力',
      '在镜头前情绪饱满，极容易调动起全场共鸣',
      '受众相信你的发声是出于善意与担当，忠诚度极高'
    ],
    collisionSummary: '把你的真知灼见公之于众，太阳的无私与巨门的口才相得益彰，你的舞台就在聚光灯下。'
  },
  taiyang_tianliang: {
    id: 'taiyang_tianliang',
    stars: ['太阳', '天梁'],
    archetype: '公益导师型',
    ipFamily: 'trust_mentor',
    keywords: ['庇佑', '声誉', '责任', '育人'],
    coreAdvantages: [
      '光明博爱的胸襟加上正直无私的原则，声誉崇高',
      '天生热衷于培育后辈、传递社会正向能量',
      '不受铜臭庸俗气熏染，在专业圈层拥有极高尊崇度',
      '适合打造教育大家、非营利组织领袖、社会影响力IP'
    ],
    externalPerception: [
      '外界第一眼感知到你的博大胸襟与无私风范',
      '在公众平台输出的内容温暖正向，极具感染力',
      '大众对你有着天然的道德信任与精神归属感'
    ],
    collisionSummary: '先做利他之事，声名自然远扬。你的商业价值建立在崇高的社会信誉之上，走阳光大道最为顺遂。'
  },
  taiyang_taiyin: {
    id: 'taiyang_taiyin',
    stars: ['太阳', '太阴'],
    archetype: '全维洞察型',
    ipFamily: 'strategy_intelligence',
    keywords: ['平衡', '昼夜', '全景', '通达'],
    coreAdvantages: [
      '兼具太阳的宏观开拓与太阴的精微内省，思维立体',
      '能站在多重视角理解事物，不偏不倚、兼容并蓄',
      '在多变的环境中能够快速调适角色，极具韧性',
      '适合打造跨界商业观察家、文化融合导师IP'
    ],
    externalPerception: [
      '市场感受你既有阳光积极的一面，又有细腻深邃的一面',
      '镜头前表现出极高涵养与包容度，接纳不同声音',
      '用户能从你这里得到最客观、最全面的战略指引'
    ],
    collisionSummary: '阴阳调和，刚柔并济。既能上台前点燃众人，又能下台后潜心洞察，这种双重张力就是你的品牌特色。'
  },
  wuqu_tianfu: {
    id: 'wuqu_tianfu',
    stars: ['武曲', '天府'],
    archetype: '财富操盘型',
    ipFamily: 'execution_results',
    keywords: ['财帛', '财商', '实战', '积淀'],
    coreAdvantages: [
      '双财星坐镇，对现金流、商业变现与资本沉淀天赋异禀',
      '执行力与风控力并重，从不打无准备的盲目之战',
      '擅长打造高客单商业资产闭环，实现财富复利增长',
      '适合打造财富增长顾问、资本运营家、实战创富教练'
    ],
    externalPerception: [
      '市场第一眼感知到你的商业敏锐度与财务底气',
      '镜头前言简意赅，每句话都紧扣商业本质与利润',
      '客户对你的理财、创富与商业落地能力深信不疑'
    ],
    collisionSummary: '手中有剑，仓中有粮。不要讲虚无缥缈的情怀，用你扎实的财务战绩和可复制的盈利模型说话。'
  },
  wuqu_tanlang: {
    id: 'wuqu_tanlang',
    stars: ['武曲', '贪狼'],
    archetype: '商业猎手型',
    ipFamily: 'execution_results',
    keywords: ['嗅觉', '跨界', '大器晚成', '爆发力'],
    coreAdvantages: [
      '兼具武曲的刚毅实干与贪狼的八面玲珑，商业嗅觉极准',
      '越历经世事磨砺越能爆发惊人商业转化力',
      '擅长跨界资源变现，在商业谈判中无往不利',
      '适合打造新商业破局操盘手、跨界合伙人超级IP'
    ],
    externalPerception: [
      '外界感受到你的精明敏锐、干练且极具人情社交手腕',
      '镜头前幽默风趣却句句戳中商业痛点，吸睛度高',
      '同行既敬佩你的业务能力，又折服于你的社交破局力'
    ],
    collisionSummary: '前期的积累是沉淀，后期的爆发是必然。把你的实战经验与人情练达结合，打造不可复制的商业磁场。'
  },
  wuqu_tianxiang: {
    id: 'wuqu_tianxiang',
    stars: ['武曲', '天相'],
    archetype: '务实智囊型',
    ipFamily: 'execution_results',
    keywords: ['标准', '交付', '专业', '信义'],
    coreAdvantages: [
      '武曲的雷厉风行配合天相的严谨制度，交付水准极高',
      '重承诺守信用，从不夸大其词，靠口碑自发传播',
      '善于将复杂的企业管理工作制定出高效落地标准',
      '适合打造企业咨询、流程优化专家、高端交付IP'
    ],
    externalPerception: [
      '市场感知到你的极度靠谱、一丝不苟与极高契约精神',
      '在公众平台表现出干净利落、专业规范的高级感',
      '客户只要与你合作一次，就会产生深度的长期依赖'
    ],
    collisionSummary: '说到做到，标准第一。你的品牌资产是靠每一次百分之百的严苛交付累积出来的，信任是你最大的王牌。'
  },
  wuqu_qisha: {
    id: 'wuqu_qisha',
    stars: ['武曲', '七杀'],
    archetype: '铁血先锋型',
    ipFamily: 'execution_results',
    keywords: ['攻坚', '利刃', '不屈', '战功'],
    coreAdvantages: [
      '双金刚星组合，具有最坚定的意志与突破阻力的决心',
      '面对行业寒冬或危机能带头杀出血路，无所畏惧',
      '极度反感推诿扯皮，以最直接的方式摧毁阻碍',
      '适合打造狼性战队领袖、危机公关攻坚、实战突围IP'
    ],
    externalPerception: [
      '市场感知到你的锋芒毕露、战斗力拉满与无畏气魄',
      '镜头前气势磅礴，直击问题要害，没有一句废话',
      '受挫或身处绝境的创业者最容易被你的刚毅所挽救'
    ],
    collisionSummary: '千锤百炼出真金。展示你在火线上的实战痕迹，让你的硬核与战果成为市场上最无可争议的说服力。'
  },
  wuqu_pojun: {
    id: 'wuqu_pojun',
    stars: ['武曲', '破军'],
    archetype: '破局实战型',
    ipFamily: 'execution_results',
    keywords: ['敢破', '敢立', '开拓', '先锋'],
    coreAdvantages: [
      '敢于砸烂旧摊子重新起高楼，具备顶级开拓勇气',
      '在别人看不懂的新兴市场敢于重金下注并全力攻下',
      '把实战资源全部押注在创新方向，打出惊人战绩',
      '适合打造新消费新物种破局者、技术落地先锋IP'
    ],
    externalPerception: [
      '市场感到你的野性、魄力与非同凡响的冲劲',
      '在公众面前展现出敢想敢赌、能打能赢的硬核范',
      '新商业追随者视你为突破传统桎梏的带头大哥'
    ],
    collisionSummary: '不破不立，大破大立。用你的实际战绩向市场证明：最敢冒险的人，往往收获最丰厚的战果。'
  },
  tiantong_taiyin: {
    id: 'tiantong_taiyin',
    stars: ['天同', '太阴'],
    archetype: '唯美治愈型',
    ipFamily: 'trust_mentor',
    keywords: ['治愈', '温润', '美学', '心灵'],
    coreAdvantages: [
      '极富艺术灵感与审美意境，善于营造惬意温暖场域',
      '天同的无争加上太阴的柔美，具有不可抵挡的亲近感',
      '善于抚平受众内心的焦虑与创伤，给予灵魂陪伴',
      '适合打造美学生活、身心疗愈、心灵写作与美育IP'
    ],
    externalPerception: [
      '市场第一眼就被你的温和与如水般的气质所净化',
      '镜头前声音温润，让人不由自主放松警惕与焦虑',
      '高压人群会把你的内容当做每日必看的精神避难所'
    ],
    collisionSummary: '生活不只有激烈的竞争，还有诗意与宁静。你的IP核心是用美与温柔，为疲惫的世界提供停靠的港湾。'
  },
  tiantong_jumen: {
    id: 'tiantong_jumen',
    stars: ['天同', '巨门'],
    archetype: '温暖沟通型',
    ipFamily: 'communication_influence',
    keywords: ['倾听', '化解', '化暗为明', '真情'],
    coreAdvantages: [
      '以天同的包容化解巨门的暗曜，化猜忌为真诚沟通',
      '极其善于在冲突中找到平衡点，让人心悦诚服',
      '擅长讲故事与情感共鸣，具有细腻的语言感染力',
      '适合打造情感咨询、深度访谈、人际关系修护IP'
    ],
    externalPerception: [
      '市场感到你懂得倾听、善解人意且表达真挚',
      '公众面前能够把尖锐的话题用最温暖的方式化解开',
      '受众愿意把心底最深处的困扰向你全盘托出'
    ],
    collisionSummary: '言语是伤人的刀，也可以是愈人的药。用你带着温度的语言，去解开别人心头的千千结。'
  },
  tiantong_tianliang: {
    id: 'tiantong_tianliang',
    stars: ['天同', '天梁'],
    archetype: '慈悲导师型',
    ipFamily: 'trust_mentor',
    keywords: ['慈祥', '托付', '荫庇', '长青'],
    coreAdvantages: [
      '老顽童般纯真乐观心态与泰斗般博大胸怀的完美融合',
      '善于化解生活与事业中的各种凶险，带来福气庇荫',
      '一生多遇贵人，也极度乐于成为他人的命中贵人',
      '适合打造终身学习成长社群、生命教练、慈悲名宿IP'
    ],
    externalPerception: [
      '市场感知到你的慈祥、睿智与不可动摇的长者定力',
      '公众面前无论风雨如何，总能给予大众安定的信心',
      '大众愿意一生追随，建立十几年甚至几十年的深度连接'
    ],
    collisionSummary: '天同带给人快乐，天梁带给人庇护。你不需要制造焦虑来变现，你的存在本身就是对用户的莫大托付与福气。'
  },
  lianzhen_tianfu: {
    id: 'lianzhen_tianfu',
    stars: ['廉贞', '天府'],
    archetype: '务实领航型',
    ipFamily: 'leader_authority',
    keywords: ['严谨', '抱负', '稳健', '操盘'],
    coreAdvantages: [
      '廉贞的远大抱负与天府的稳健守成相得益彰，大将之风',
      '极高的自律能力与职业操守，做事滴水不漏',
      '既有进取的战略眼光，又有扎实守盘的财务底座',
      '适合打造高品质商业品牌、成熟企业常年战略顾问'
    ],
    externalPerception: [
      '市场第一眼感到你器宇轩昂、做事极为专业严谨',
      '公众面前展现出极佳的修养与令人肃然起敬的风度',
      '合作伙伴知道你重合同、守规矩，极乐于长期共赢'
    ],
    collisionSummary: '心怀高远，脚踏实地。把你的战略雄心放在稳扎稳打的业务底座上，你会成为细分领域最值得托付的领航者。'
  },
  lianzhen_tanlang: {
    id: 'lianzhen_tanlang',
    stars: ['廉贞', '贪狼'],
    archetype: '极致魅力型',
    ipFamily: 'communication_influence',
    keywords: ['美感', '张力', '潮流', '破圈'],
    coreAdvantages: [
      '双桃花星的顶级融合，拥有无与伦比的人格魅力与审美',
      '极强的时代流行敏感度，永远走在时尚与创意潮头',
      '善于营造极具仪式感与视觉震撼力的品牌场域',
      '适合打造高端时尚生活方式、美学艺术、超级明星IP'
    ],
    externalPerception: [
      '市场第一眼被你的极佳审美与强大个人魅力彻底俘获',
      '在镜头前张力惊人，随手一条动态都能引发热议',
      '年轻受众与审美高阶人群会将你视为审美风向标'
    ],
    collisionSummary: '魅力就是生产力。不必隐藏你的锋芒与个性，将你的独特美学极致表达，市场自会为你买单。'
  },
  lianzhen_tianxiang: {
    id: 'lianzhen_tianxiang',
    stars: ['廉贞', '天相'],
    archetype: '严谨策士型',
    ipFamily: 'leader_authority',
    keywords: ['法理', '守正', '公正', '智囊'],
    coreAdvantages: [
      '廉贞的清醒逻辑加上天相的合规分寸，公正不阿',
      '擅长制定规范制度与法务合规框架，防范重大风险',
      '在团队中扮演不可或缺的中流砥柱与核心执政官',
      '适合打造法务咨询、高阶运营体系架构、合规智囊IP'
    ],
    externalPerception: [
      '市场感知到你的正派、可靠、干练且讲究原则',
      '镜头前表达逻辑严谨，条理清晰，让人无可挑剔',
      '企业家遇到棘手纠纷或合规问题时，最信任你的判断'
    ],
    collisionSummary: '以制度立威，以信义立本。为市场建立秩序与规矩，你的严谨就是你的最高商业护城河。'
  },
  lianzhen_qisha: {
    id: 'lianzhen_qisha',
    stars: ['廉贞', '七杀'],
    archetype: '破浪战将型',
    ipFamily: 'disruption_pioneer',
    keywords: ['拼搏', '突破', '硬朗', '战意'],
    coreAdvantages: [
      '敢作敢当、绝不服输的硬派作风，生命力极其顽强',
      '在最残酷的市场竞争中敢于贴身肉搏并夺取胜利',
      '敢于向既有权威发起挑战，用扎实的突破颠覆行业格局',
      '适合打造硬核突围教练、连续破局创业者IP'
    ],
    externalPerception: [
      '外界感受到你扑面而来的野性生命力与拼搏激情',
      '在公众平台输出的内容热血沸腾，极其催人奋进',
      '渴望突破困境的奋斗者最容易被你的热血精神所感染'
    ],
    collisionSummary: '不经一番寒彻骨，怎得梅花扑鼻香。你的个人经历就是最强的情感核弹，用真实的突围故事撼动市场。'
  },
  lianzhen_pojun: {
    id: 'lianzhen_pojun',
    stars: ['廉贞', '破军'],
    archetype: '叛逆破局型',
    ipFamily: 'disruption_pioneer',
    keywords: ['颠覆', '不走寻常路', '前卫', '反骨'],
    coreAdvantages: [
      '天生的反叛者与创新家，永远不走别人走过的旧路',
      '对陈旧思想与平庸常规充满不屑，敢于掀起认知风暴',
      '能够将看似毫不相干的元素跨界重组，创造震撼奇迹',
      '适合打造前沿探索、先锋极客、认知颠覆类IP'
    ],
    externalPerception: [
      '市场感知到你的独特、叛逆、锐利与难以捉摸的才华',
      '镜头前敢说所有人不敢说的话，迅速引发两极化热议',
      '那些受够了平庸的人会成为你最死忠的铁粉'
    ],
    collisionSummary: '平庸是唯一的罪过。做市场上那条最鲜活的鲶鱼，你的反叛不是破坏，而是为行业开辟新生的土壤。'
  }
};

// 4. 五行 IP Booster 数据库 (Section 28 - 33, 39)
export interface ElementBoosterInfo {
  element: ElementKey;
  name: string;
  boost: string;
  keywords: string[];
  copy: string;
  suggestion: string;
  oneLiner: string;
  outfitColors: string[];
  backdropStyle: string;
  accentHex: string;
}

export const ELEMENT_BOOSTERS: Record<ElementKey, ElementBoosterInfo> = {
  wood: {
    element: 'wood',
    name: '木',
    boost: '成长力',
    keywords: ['成长', '学习', '系统', '教育', '延展', '长期价值'],
    copy: '木能量帮助你的 IP 更有生长性与系统感。',
    suggestion: '你的品牌可以更重视：长期知识沉淀、持续学习陪伴、认知体系建构与个人成长故事。',
    oneLiner: '你的生长速度，就是你的品牌护城河。',
    outfitColors: ['森林绿', '翡翠青', '浅原木绿', '鼠尾草绿'],
    backdropStyle: '绿植环绕、自然采光、极简原木书架、开阔生长感空间',
    accentHex: '#10B981'
  },
  fire: {
    element: 'fire',
    name: '火',
    boost: '曝光力',
    keywords: ['表达', '传播', '镜头', '影响力', '舞台感', '个人存在感'],
    copy: '火能量帮助你的 IP 更有穿透力与感染力。',
    suggestion: '你的品牌可以更重视：敢于走上台前、镜头面对面短视频/直播、鲜明的观点情绪感染力。',
    oneLiner: '你需要的不一定是学更多，而是让更多人看见你已经拥有的价值。',
    outfitColors: ['活力珊瑚红', '日落暖橙', '朱砂赤红', '热烈酒红'],
    backdropStyle: '暖色氛围灯、明亮聚光舞台、动态光影、极具视觉冲击力的红暖背景',
    accentHex: '#EF4444'
  },
  earth: {
    element: 'earth',
    name: '土',
    boost: '信任力',
    keywords: ['稳定', '承诺', '专业', '长期经营', '服务体验', '厚重感'],
    copy: '土能量帮助你的 IP 更有厚重感与信任感。',
    suggestion: '你的品牌可以更重视：务实可靠的交付、长期客户陪伴口碑、不可动摇的信誉资产。',
    oneLiner: '不求一时喧哗，用时间沉淀最不可替代的托付感。',
    outfitColors: ['燕麦大地棕', '暖卡其', '驼色', '岩石哑光灰'],
    backdropStyle: '微水泥质感墙面、暖光落地灯、厚重羊绒地毯、稳重静谧的私享洽谈室',
    accentHex: '#D97706'
  },
  metal: {
    element: 'metal',
    name: '金',
    boost: '专业力',
    keywords: ['结构', '标准', '决策', '效率', '方法', '精准'],
    copy: '金能量帮助你的 IP 更有结构与专业感。',
    suggestion: '你的品牌可以更重视：严谨交付标准、清晰方法论框架、高效决断力与极简高级审美。',
    oneLiner: '把专业做到极致，标准就是你最锋利的武器。',
    outfitColors: ['极简纯白', '香槟浅金', '高级冷银', '枪灰色'],
    backdropStyle: '金属线条轻奢风、冷色极简会议室、高定亚克力白板、利落光影结构',
    accentHex: '#64748B'
  },
  water: {
    element: 'water',
    name: '水',
    boost: '洞察力',
    keywords: ['洞察', '沟通', '创意', '流动', '连接', '市场适应'],
    copy: '水能量帮助你的 IP 更有洞察与流动性。',
    suggestion: '你的品牌可以更重视：敏锐的市场触觉、柔软温润的沟通连接、跨界创新与灵活变通。',
    oneLiner: '以柔克刚，在市场的动态流动中看见别人看不见的暗涌与机会。',
    outfitColors: ['深海宝蓝', '冰晶澈青', '克莱因蓝', '高级黑'],
    backdropStyle: '水波纹光影投射、弧形流动线条空间、深蓝渐变科技背景、静水微澜意境',
    accentHex: '#0284C7'
  }
};

// 5. 喜用神结果示范与解析生成 (Section 33, 35)
export function getElementBoosterSummary(usefulElement: ElementKey): {
  element: ElementKey;
  elementName: string;
  boostName: string;
  copy: string;
  suggestion: string;
  oneLiner: string;
  keywords: string[];
} {
  const booster = ELEMENT_BOOSTERS[usefulElement] || ELEMENT_BOOSTERS.fire;
  return {
    element: booster.element,
    elementName: booster.name,
    boostName: booster.boost,
    copy: booster.copy,
    suggestion: booster.suggestion,
    oneLiner: booster.oneLiner,
    keywords: booster.keywords
  };
}

// 6. 系统免责声明 (Section 42)
export const SYSTEM_DISCLAIMER =
  '本测试属于《紫微 IP DNA 战略系统》的体验版本，以紫微斗数与八字作为个人特质及品牌策略探索工具。测试结果用于自我观察、品牌定位与内容策略参考，并不代表对个人能力、职业、财富或未来结果的绝对判断。';
