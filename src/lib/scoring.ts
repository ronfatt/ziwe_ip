import {
  BirthInfo,
  ProfessionalProfile,
  QuizDimension,
  CareerDNAOutput,
  PersonalBrandDNAOutput,
  BusinessDNAOutput,
  RoadmapOutput
} from '@/types';
import { FOURTEEN_STARS, DEMO_PRESETS } from '@/data/archetypes';
import { QUIZ_QUESTIONS } from '@/data/questions';

export function calculateQuizScores(answers: Record<string, string>): Record<QuizDimension, number> {
  const sums: Record<QuizDimension, number> = {
    leadership: 0,
    strategic_thinking: 0,
    creativity: 0,
    execution: 0,
    communication: 0,
    relationship_building: 0,
    business_dev: 0,
    independence: 0,
    risk_tolerance: 0,
    knowledge_sharing: 0
  };

  const counts: Record<QuizDimension, number> = {
    leadership: 0,
    strategic_thinking: 0,
    creativity: 0,
    execution: 0,
    communication: 0,
    relationship_building: 0,
    business_dev: 0,
    independence: 0,
    risk_tolerance: 0,
    knowledge_sharing: 0
  };

  QUIZ_QUESTIONS.forEach((q) => {
    const selectedOptionId = answers[q.id];
    if (selectedOptionId) {
      const option = q.options.find((opt) => opt.id === selectedOptionId);
      if (option) {
        sums[q.dimension] += option.scoreWeight;
        counts[q.dimension] += 1;
      }
    }
  });

  const finalScores: Record<QuizDimension, number> = {} as any;
  (Object.keys(sums) as QuizDimension[]).forEach((dim) => {
    const count = counts[dim];
    // Baseline default 3.5 if unselected, normalized to 100 max
    const avg = count > 0 ? sums[dim] / count : 3.5;
    // Scale 1-5 to 50-98 range for clean radar chart display
    finalScores[dim] = Math.round(50 + (avg - 1) * 12);
  });

  return finalScores;
}

export function synthesizeCareerDNA(
  profile: ProfessionalProfile,
  scores: Record<QuizDimension, number>,
  archetypeKey: string
): CareerDNAOutput {
  const star = FOURTEEN_STARS[archetypeKey] || FOURTEEN_STARS['tian_ji'];

  // Combine reported abilities
  const abilities = [
    ...(profile.topSkills.length > 0 ? profile.topSkills : ['战略推演与架构', '系统化深度思考', '用户需求洞察']),
    ...(scores.leadership >= 85 ? ['大局协调与统领'] : []),
    ...(scores.strategic_thinking >= 85 ? ['前沿商业敏锐度'] : []),
    ...(scores.communication >= 85 ? ['高影响力说服表达'] : [])
  ];

  const primaryThemes = [
    `${star.archetypeTitle}（核心角色底色）`,
    profile.workingStyle || '高自主度深度探索与专家式交付',
    `基于 ${profile.yearsOfExperience || 5} 年实战经验的降维赋能`,
    '轻资产高客单个人咨询与高价值知识IP'
  ];

  const preferredRoles = [
    '行业战略架构师 / 智囊军师',
    '高价值独立顾问与咨询操盘手',
    '深度内容创作者与知识IP布道者',
    '商业闭环与新增长模式探索者'
  ];

  const developmentAreas = [
    star.blindSpots[0] || '注意平衡宏观推演与阶段微观交付节奏',
    '克服过度思考带来的决策延迟，建立最小闭环验证习惯',
    '强化公开个人品牌发声边界，建立系统化内容分发SOP'
  ];

  const targetIndustries = [
    {
      name: '知识付费与高客单咨询 (Consulting & Knowledge IP)',
      fitReason: `与${star.nameCn}的${star.strengths[0]}高度契合，能将您沉淀的${profile.topSkills[0] || '核心技能'}转化为高价值服务交付。`,
      requiredSkills: ['体系化方法论提炼', '高客单成交谈单', '深度用户交付能力'],
      relevantExperienceMatch: `已有 ${profile.yearsOfExperience || 3} 年实战背景，在真实业务中踩过坑并形成了认知壁垒。`,
      marketValidationQuestions: [
        '是否有老客户或同行愿意为你的1对1深度咨询支付预付款？',
        '你的方法论是否能在3句话内讲清对客户的核心商业增量？'
      ],
      entryBarriers: '中等偏低：轻资产启动，极度依赖个人认知厚度与信任背书。',
      potentialDrawbacks: '早期容易变成“以时间换金钱”，需要及早建立产品化与标准化意识。',
      recommendedNextSteps: [
        '梳理过去最成功的3个操盘案例，形成可复用的解题SOP',
        '寻找3位种子客户开展半公益式深度诊断，收集详实背书案例'
      ]
    },
    {
      name: '数字新媒体与超级个体生态 (Digital Media & Solopreneur)',
      fitReason: `利用现代网络杠杆，放大个人品牌的公信力，释放${star.archetypeTitle}的辐射效应。`,
      requiredSkills: ['核心内容矩阵搭建', '私域精细化运营', '高转化率文案呈现'],
      relevantExperienceMatch: `自述倾向为：${profile.desiredIncomeModel || '多元复利变现'}，符合数字资产长效复利逻辑。`,
      marketValidationQuestions: [
        '在目标社群或平台发表深度长文，能否引发目标人群的主动收藏与私信？',
        '是否能稳定产出具有反直觉洞察的行业干货？'
      ],
      entryBarriers: '低门槛但高竞争：需要独特的切入视角与持续输出的耐心。',
      potentialDrawbacks: '算法推荐的不确定性容易带来流量焦虑，需聚焦高精准私域转化。',
      recommendedNextSteps: [
        '确定个人唯一主阵地（如微信公众号/小红书/即刻/Substack）',
        '构建30篇深度干货选题库，完成前3篇标杆样章'
      ]
    },
    {
      name: '企业级轻咨询与高管幕僚 (Corporate Strategic Advisory)',
      fitReason: `针对B端中小企业主或创始人，提供定制化破局方案，充分发挥${star.strengths[1] || '专业深度'}。`,
      requiredSkills: ['B端决策链把控', '商业模式解构', '风险控制与合规思维'],
      relevantExperienceMatch: `行业积累（${profile.industry || '专业服务'}），具备理解企业真实痛点的同理心。`,
      marketValidationQuestions: [
        '目标企业是否有迫切需要外部军师破局的卡点？',
        '你能否帮企业决策者节省至少10倍咨询费的试错成本？'
      ],
      entryBarriers: '高：依赖信用圈层引荐与成熟的商业全景把控力。',
      potentialDrawbacks: 'B端决策周期偏长，交付往往需要深度涉入客户业务。',
      recommendedNextSteps: [
        '设计标准化的《企业现状48小时诊断清单》作为引流钩子',
        '与2家互补型服务机构（如财税/法务/营销）建立互推生态'
      ]
    }
  ];

  const roleFit = [
    { role: '行业智囊与战略架构师 (Strategist)', fitScore: scores.strategic_thinking, description: '超前推演，洞察趋势与破局点，为关键决策护航' },
    { role: '高客单独立咨询顾问 (Advisor)', fitScore: Math.round((scores.communication + scores.knowledge_sharing) / 2), description: '深度解决具体卡点，提供高确定性的陪伴赋能' },
    { role: '知识IP与思想布道者 (Creator)', fitScore: scores.knowledge_sharing, description: '将复杂专业降维为大众通识，建立强大的公信力' },
    { role: '商业模式破局先锋 (Pioneer)', fitScore: scores.business_dev, description: '勇于尝试非标打法，打造颠覆性商业闭环' },
    { role: '稳健体系守门人 (Operator)', fitScore: scores.execution, description: '重视SOP与流程沉淀，确保交付标准与资产保值' }
  ];

  return {
    primaryThemes,
    preferredRoles,
    strongestReportedAbilities: abilities.slice(0, 5),
    developmentAreas,
    recommendedIndustries: targetIndustries,
    roleArchetypeFit: roleFit
  };
}

export function synthesizeBrandDNA(
  profile: ProfessionalProfile,
  scores: Record<QuizDimension, number>,
  archetypeKey: string
): PersonalBrandDNAOutput {
  const star = FOURTEEN_STARS[archetypeKey] || FOURTEEN_STARS['tian_ji'];
  const audience = profile.targetAudience || '追求职业跃迁的深耕专业人士与初创创始人';
  const outcome = '突破当前增长瓶颈，构建属于自己的高客单个人品牌商业飞轮';
  const method = `结合 ${star.nameCn} 的${star.archetypeTitle}认知模型与实战方法论`;
  const proof = `${profile.yearsOfExperience || 5}年真实业务淬炼与数十个真实案例沉淀`;

  const formula = `我帮助【${audience}】，通过【${method}】，实现【${outcome}】，基于【${proof}】。`;

  const alternatives = [
    `助力【${audience}】理清底层优势，用最轻资产路径跑通高净值个人商业闭环。`,
    `以独特的【${star.archetypeTitle}】视角，为处于转型迷茫期的专业人士打造坚不可摧的个人IP护城河。`,
    `拒绝平庸内卷：用系统化策略思维，将你的专业绝活转化为具备市场溢价的咨询与知识产品。`
  ];

  return {
    brandArchetype: `${star.brandArchetypeSuggestions[0] || '商业智囊'} · ${star.nameCn}`,
    positioningStatement: formula,
    positioningAlternatives: alternatives,
    uniqueValueProposition: `不仅懂理论，更深刻理解真实商业战场的痛点，用“双层洞察”为你量身定制最小可行性变现模型。`,
    targetAudience: audience,
    brandPersonality: ['专业克制', '洞察犀利', '从容笃定', '求真务实'],
    communicationStyle: star.communicationStyle,
    contentPillars: [
      {
        pillar: '认知重构 (Mindset Shift)',
        description: '打破行业常见误区，分享反直觉的底层商业思考与个人成长顿悟。',
        sampleTopics: [
          '为什么大部分人搞个人IP注定沦为流量韭菜？',
          '专业人士转型的致命陷阱：以勤奋掩盖战略懒惰',
          '高客单成交的底层逻辑：信任大于技巧'
        ]
      },
      {
        pillar: '实战拆解 (Case Deconstructions)',
        description: '深度复盘真实客户案例与操盘经验，输出可执行的SOP与避坑指南。',
        sampleTopics: [
          '复盘：一个普通独立顾问如何90天将客单价提升3倍？',
          '拆解我的咨询交付工具包：从首次沟通到长效锁客',
          '商业体检清单：你的商业模型究竟卡在哪个环节？'
        ]
      },
      {
        pillar: '生活哲学与长效主义 (Life Philosophy)',
        description: '展现个人真实思考、阅读反刍与身心平衡理念，构建立体可信的灵魂温度。',
        sampleTopics: [
          '在不确定的时代，如何守住自己的心力与节奏感？',
          '写给所有正在经历阵痛期的深耕者：静候花开的定力'
        ]
      }
    ],
    suggestedBrandStory: `从深耕多年的实战一线，到经历行业洗牌与认知跃迁，我深知仅靠死磕体力无法带来真正的从容。直到我将东方传统智慧中对“本质天赋与时势格局”的理解，与严谨的现代商业战略逻辑深度融合，才跑通了属于自己的轻资产个人商业飞轮。今天，我致力于成为你的长期战友，帮你擦亮属于你的IP核心资产。`,
    credibilityPlan: [
      '建立专属《实战案例白皮书》，收录带有客户真实评价的交付成果',
      '在专业权威媒体或垂直社群发表万字深度行业分析报告',
      '与行业头部标杆人物联合开展闭门对谈或连麦直播',
      '设立明确的交付保障与复盘机制，让每一位客户都成为主动口碑推荐者'
    ],
    recommendedChannels: [
      { channel: '微信公众号 / 深度专栏', purpose: '沉淀高客单核心认知长文与权威背书', priority: 'primary' },
      { channel: '朋友圈 / 个人私域生态', purpose: '展现日常交付细节与真实温度，促成高净值转化', priority: 'primary' },
      { channel: '即刻 / 知识星球 / 播客', purpose: '触达高净值同频圈层与高质量同行交流', priority: 'secondary' },
      { channel: '短视频 / 直播切片', purpose: '扩大公众漏斗第一层触达面（有精力时试水）', priority: 'experimental' }
    ],
    visualDirection: {
      aesthetic: '未来极简科技 · 高端私人智库风',
      paletteSuggestions: ['星空深邃蓝 (#080D18)', '电光紫 (#9375FF)', '青蓝钛晶 (#38D9D0)', '极简米白 (#F4F6FC)'],
      toneKeywords: ['Editorial', 'Visionary', 'Understated Luxury', 'Sharp & Intellect']
    }
  };
}

export function synthesizeBusinessDNA(
  profile: ProfessionalProfile,
  scores: Record<QuizDimension, number>,
  archetypeKey: string
): BusinessDNAOutput {
  const star = FOURTEEN_STARS[archetypeKey] || FOURTEEN_STARS['tian_ji'];

  return {
    recommendedModels: [
      {
        model: '1对1高客单战略咨询与陪跑 (Bespoke 1-on-1 Advisory)',
        idealCustomer: '预算充足、时间宝贵、面临关键转型决策的中小企业主或高管',
        valueProposition: '快速梳理战略卡点，量身打造破局方案，避免数十万元的试错成本',
        resourceRequirements: ['个人核心时间投入', '标准化诊断工具包', '高信任度背书案例'],
        initialValidationCost: '极低（0额外研发成本，依靠个人认知即可启动）',
        revenueHypothesis: '首期定价 ¥3,800 - ¥9,800 / 单次深度交付，逐步跃迁为季度陪跑',
        risks: ['受限于个人精力上限', '过早消耗人脉信用', '交付期望管理不善'],
        firstCustomerExperiments: [
          '主动向3位老同事或老客户发起45分钟“免费诊断”，以收集详实评价为条件',
          '在朋友圈发布《针对3个特定痛点的限时诊断名额》，仅限2人'
        ],
        feasibilityScore: 94
      },
      {
        model: '小班实战训练营与私享会 (Cohort-Based Mastermind)',
        idealCustomer: '有一定基础、渴望获得系统化方法与同频人脉圈层的进阶践行者',
        valueProposition: '不仅学方法，更有高密度的作业点评与同频圈层互助，获得突破动力',
        resourceRequirements: ['4-6周体系化课纲', '社群运营助教机制', '可复用的打卡模板'],
        initialValidationCost: '中等（需要耗费时间撰写课件与录制视频）',
        revenueHypothesis: '每期15-20人，客单价 ¥1,999 - ¥3,999，单期营收 ¥30k - ¥80k',
        risks: ['完课率和交付口碑压力较大', '需要稳定的公域获客引流漏斗'],
        firstCustomerExperiments: [
          '举办一次低门槛线上闭门主题分享会，现场发起小班意向预定',
          '通过问卷调研收集潜在学员最迫切想要解决的3个具体场景'
        ],
        feasibilityScore: 86
      },
      {
        model: '高价值数字资产库与SOP工具包 (Digital Assets & Toolkits)',
        idealCustomer: '执行力强、更喜欢自己动手、预算在数百元区间的独立从业者',
        valueProposition: '即拿即用的实战模板，直接跳过探索期，节省数十小时摸索时间',
        resourceRequirements: ['结构化文档', 'Notion/飞书模板', '开箱即用自动化工作流'],
        initialValidationCost: '低（梳理已有实战产出，打包封装）',
        revenueHypothesis: '单套 ¥199 - ¥499，依托长尾内容自动化被动成交',
        risks: ['盗版传播风险', '对被动流量依赖度高'],
        firstCustomerExperiments: [
          '在干货长文文末附上“工具包试用申请”，验证真实下载意向',
          '在知识平台或个人小店上线首发内测早鸟版'
        ],
        feasibilityScore: 78
      }
    ]
  };
}

export function synthesizeRoadmap(
  profile: ProfessionalProfile,
  archetypeKey: string
): RoadmapOutput {
  return {
    plan90Days: [
      {
        phase: '第一阶段：定位聚焦与最小闭环验证',
        duration: '第 1 - 30 天',
        focus: '明确受众核心痛点，打磨单点绝活，完成前3位种子的真实交付与口碑收集',
        milestones: [
          '确立唯一核心品牌定位公式与《个人价值说明书》',
          '梳理出包含3个代表性案例的交付底牌库',
          '完成3次低成本深度诊断交付，收获至少2份详实好评'
        ],
        keyActions: [
          '按照本报告的 Brand Positioning Formula 撰写三版定位，与5位信任的同行进行测试反馈',
          '整理过往职业生涯中可量化的成果数据，浓缩为单页个人商业简介',
          '向潜在高净值客户发起邀约，提供试跑版咨询体验'
        ]
      },
      {
        phase: '第二阶段：内容基建与信任资产沉淀',
        duration: '第 31 - 60 天',
        focus: '搭建主发声阵地，持续输出标杆深度干货，将私域池子盘活并建立公信力',
        milestones: [
          '搭建个人主阵地（深度长文专栏 + 朋友圈私域交付橱窗）',
          '连续发表 6-8 篇高密度实战干货，至少产生1篇被行业高管收藏的高赞内容',
          '跑通首次小规模引流与私信咨询初筛SOP'
        ],
        keyActions: [
          '制定每周1篇深度长文、每日3条交付感悟的发发布节奏',
          '将前30天收集的种子案例脱敏后撰写成深度复盘长文',
          '建立初筛问卷，筛选出真正具备高意向的付费潜在客户'
        ]
      },
      {
        phase: '第三阶段：商业化变现与高客单产品化',
        duration: '第 61 - 90 天',
        focus: '正式发布高客单咨询或第一期私享会产品，跑通正向商业现金流',
        milestones: [
          '正式发布《个人咨询/陪跑服务白皮书》，明确交付范围与价格',
          '斩获首批5位正式高客单签约客户，现金流跨越平衡点',
          '沉淀第一版交付SOP，为后续轻团队或产品化规模复制做准备'
        ],
        keyActions: [
          '向已建立信任的意向咨询者发送正式方案与报价',
          '针对首期签约客户提供超预期交付体验并记录全流程痛点',
          '复盘90天ROI与精力分配，调整下一季度的产品定价策略'
        ]
      }
    ],
    strategic3Year: [
      {
        year: 'Year 1: 立足与证据沉淀 (Positioning & Proof)',
        title: '个人标杆打磨年',
        theme: '以单点绝活打穿细分圈层，用十倍交付质量建立无可撼动的初期信誉',
        strategicMilestones: [
          '跑通年收入20-50万的轻资产个人咨询商业闭环',
          '积累至少20个具有说服力的高质量客户真实背书',
          '建立稳定的小而精私域高净值客户池（500-1000人）'
        ],
        potentialRisksToManage: [
          '过度亲力亲为导致精力被琐碎消耗，缺乏持续思考和自我迭代时间'
        ]
      },
      {
        year: 'Year 2: 产品化与复利飞轮 (Productization & Scale)',
        title: '服务产品化与生态协作年',
        theme: '将单次交付经验升级为标准化产品与高毛利小班营，实现时间杠杆释放',
        strategicMilestones: [
          '推出年费制会员私享会或定期小班导师训练营',
          '组建2-3人的精干外包交付与内容助理支持团队',
          '与2-3家行业平台或资本机构建立战略互推联营生态'
        ],
        potentialRisksToManage: [
          '规模扩张导致服务品质稀释，需严格守住品控红线'
        ]
      },
      {
        year: 'Year 3: 行业旗手与资本化布局 (Legacy & Authority)',
        title: '行业标准与生态领导力年',
        theme: '从个人IP升级为细分赛道的思想策源地与合伙人生态网络',
        strategicMilestones: [
          '出版具有行业标杆意义的专业专著或行业蓝皮书',
          '以合伙人或顾问入股形式深度赋能生态内的头部成长型企业',
          '实现财务自主与时间自由的终极平衡，专注于最高维度的战略投资与指导'
        ],
        potentialRisksToManage: [
          '行业技术或政策巨变带来老方法论失效，需保持谦逊的空杯学习心态'
        ]
      }
    ]
  };
}
