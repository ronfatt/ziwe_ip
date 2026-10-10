export interface SimplifiedIndustryFit {
  rank: number;
  industryCategory: string; // 行业性质类别
  roleTitle: string; // 适合做什么角色
  coreTrait: string; // 核心特质一句话
  suitableDoing: string[]; // 具体适合做什么业务/产品
  monetizationPath: string; // 变现模式
  tagColor: string;
}

export const STAR_INDUSTRY_MAPPING: Record<string, SimplifiedIndustryFit[]> = {
  zi_wei: [
    {
      rank: 1,
      industryCategory: '高端战略咨询与企业顶层架构',
      roleTitle: '行业标杆顾问 / 创始人幕僚',
      coreTrait: '大局观极强、具天然号召力与权威感，不喜琐碎微操',
      suitableDoing: ['企业高管闭门私享会', '商业战略顶层设计', '行业标准/白皮书背书'],
      monetizationPath: '高客单咨询费、顾问年费、合伙股权',
      tagColor: '#9375FF'
    },
    {
      rank: 2,
      industryCategory: '高净值私董会与精英社群主理',
      roleTitle: '圈层领袖 / 标杆发起人',
      coreTrait: '善于整合高维资源，让各行业精英愿意追随聚合',
      suitableDoing: ['高门槛商业私董会', '顶级行业资源撮合', '企业生态游学'],
      monetizationPath: '高门槛会员年费 (¥30k-100k/年)',
      tagColor: '#38D9D0'
    },
    {
      rank: 3,
      industryCategory: '轻奢与高端品牌孵化服务',
      roleTitle: '品牌定位旗手 / 首席品位背书官',
      coreTrait: '自带贵气与公信力，擅长树立溢价与品牌调性',
      suitableDoing: ['新品牌首发战略全案', '高溢价产品概念包装', '代言级商业策划'],
      monetizationPath: '品牌全案策划费 + 销售抽成',
      tagColor: '#F6D365'
    }
  ],
  tian_ji: [
    {
      rank: 1,
      industryCategory: '知识IP、专业方法论研发与方案设计',
      roleTitle: '商业军师 / 首席架构智囊',
      coreTrait: '思维极度敏捷，逻辑严密，擅长把复杂问题极速结构化拆解',
      suitableDoing: ['输出实战商业方案', '商业模型诊断推演', '设计业务落地SOP与框架'],
      monetizationPath: '一对一定制方案咨询、知识付费专栏',
      tagColor: '#38D9D0'
    },
    {
      rank: 2,
      industryCategory: '数字化转型、AI应用与科技创新咨询',
      roleTitle: '新技术解构师 / 敏捷业务教练',
      coreTrait: '学习与吸收新趋势极快，善于化抽象工具为实操打法',
      suitableDoing: ['企业AI提效工作流搭建', '数智化产品设计', '知识库与数据流搭建'],
      monetizationPath: '交付专项系统、企业内训教练',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '超级个体认知成长与教育培训',
      roleTitle: '认知导师 / 高密度干货博主',
      coreTrait: '擅长启发心智，一针见血指出逻辑漏洞与弯路',
      suitableDoing: ['小班思维训练营', '高价值复利数字工具包', '知识星球/付费社群'],
      monetizationPath: '社群年费、数字模板工具包自动化销售',
      tagColor: '#38D9D0'
    }
  ],
  tai_yang: [
    {
      rank: 1,
      industryCategory: '公众新媒体传播、演说与全网IP布道',
      roleTitle: '行业KOL / 激情布道者',
      coreTrait: '舞台感强、乐于利他发声、自带光热与强大煽动力',
      suitableDoing: ['公众演讲与千人直播', '短视频金句矩阵', '行业峰会主旨分享'],
      monetizationPath: '广告代言、门票发售、大会主办',
      tagColor: '#FDA085'
    },
    {
      rank: 2,
      industryCategory: '大型社群经济、用户增长与泛众教育',
      roleTitle: '万人社群精神领袖 / 破圈组织者',
      coreTrait: '不辞劳苦照亮他人，极易快速聚集庞大粉丝受众',
      suitableDoing: ['万人打卡成长营', '公益与商业结合项目', '全国巡回线下研学会'],
      monetizationPath: '高转化公开课规模化发售、赞助分成',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '公关传播、出海拓展与政商资源对接',
      roleTitle: '品牌外交官 / 跨圈层连接官',
      coreTrait: '坦荡开朗，天然适合面对陌生市场与跨国界圈层拓展',
      suitableDoing: ['品牌出海PR公关', '跨界合作破圈', '大型展会与峰会招商'],
      monetizationPath: '公关代理佣金、项目招商提成',
      tagColor: '#38D9D0'
    }
  ],
  wu_qu: [
    {
      rank: 1,
      industryCategory: '财务规划、财富配置与现金流操盘',
      roleTitle: '财富架构师 / 硬核算账导师',
      coreTrait: '数字极度敏感，雷厉风行，凡事必谈ROI与商业闭环',
      suitableDoing: ['企业降本增效操盘', '个人资产配置方案', '商业闭环精细化算账'],
      monetizationPath: '业绩对赌分成、高客单理财诊断',
      tagColor: '#F6D365'
    },
    {
      rank: 2,
      industryCategory: '供应链电商、硬核实业与实体赋能',
      roleTitle: '实干操盘手 / 供应链管家',
      coreTrait: '抗压韧性极强，讲求交付结果，执行力不打折',
      suitableDoing: ['供应链资源整合', '硬核单品爆款打底', '选品与品控流程搭建'],
      monetizationPath: '差价利润、供货佣金、合伙分红',
      tagColor: '#38D9D0'
    },
    {
      rank: 3,
      industryCategory: '高确定性技能实训（硬技能交付）',
      roleTitle: '结果交付教练 / 赚钱实战派教官',
      coreTrait: '话少干货多，直奔赚钱与实操结果，不画大饼',
      suitableDoing: ['副业赚钱闭环特训营', '销售促成与获客实战班', 'SOP通关式打卡'],
      monetizationPath: '实战营学费 (¥1,999-¥5,999)',
      tagColor: '#9375FF'
    }
  ],
  tian_tong: [
    {
      rank: 1,
      industryCategory: '身心疗愈、心理咨询与情绪价值服务',
      roleTitle: '治愈系导师 / 温暖陪伴者',
      coreTrait: '同理心极高，让人放下防备，自带令人舒缓的安全感',
      suitableDoing: ['一对一深度心灵倾听', '冥想与压力舒缓工作坊', '女性心理成长私享会'],
      monetizationPath: '高粘性个案咨询费、沉浸式工作坊',
      tagColor: '#38D9D0'
    },
    {
      rank: 2,
      industryCategory: '生活美学、文旅民宿与慢生活社群',
      roleTitle: '生活方式主理人 / 体验策展人',
      coreTrait: '懂生活、懂享受、对审美与体验细节有天生灵性',
      suitableDoing: ['周末疗愈避世营', '生活美学好物选品推荐', '茶道/花道慢空间主理'],
      monetizationPath: '高溢价体验活动门票、美学文创销售',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '轻陪伴会员制圈子与暖心俱乐部',
      roleTitle: '温暖社群家长 / 氛围缔造者',
      coreTrait: '柔性协调，营造包容、无评判、高亲密的长期温情场域',
      suitableDoing: ['长期打卡互助陪伴圈', '读书会与灵魂对谈', '互助型小而美俱乐部'],
      monetizationPath: '按月/按年持续自动订阅制 (MRR)',
      tagColor: '#FDA085'
    }
  ],
  lian_zhen: [
    {
      rank: 1,
      industryCategory: '高端商务公关、政企关系与商业谈判',
      roleTitle: '高维斡旋顾问 / 危机公关操盘手',
      coreTrait: '情商与智商双高，深谙人情世故博弈，善解棘手难题',
      suitableDoing: ['关键商业合作谈判', '品牌公关危机化解', '政商关键圈层引荐'],
      monetizationPath: '专案公关操盘大额佣金、专项咨询费',
      tagColor: '#9375FF'
    },
    {
      rank: 2,
      industryCategory: '精英职场社交、法务合规与猎头高端撮合',
      roleTitle: '高管经纪人 / 战略人才合伙人',
      coreTrait: '对规则与分寸拿捏精微，擅长高层资源精准配对',
      suitableDoing: ['CXO高管职场定位', '高净值合伙人撮合', '企业雇主品牌赋能'],
      monetizationPath: '按年薪比例抽佣、高管私密陪跑',
      tagColor: '#38D9D0'
    },
    {
      rank: 3,
      industryCategory: '时尚设计、先锋美学与奢侈品买手',
      roleTitle: '高级感设计师 / 风格品味意见领袖',
      coreTrait: '审美挑剔犀利，自带个性张力与神秘魅力',
      suitableDoing: ['轻奢高阶服饰穿搭指导', '视觉美学风格全案', '高品位买手集合店'],
      monetizationPath: '高端形象定制、买手高毛利带货',
      tagColor: '#F6D365'
    }
  ],
  tian_fu: [
    {
      rank: 1,
      industryCategory: '企业标准化运营、SOP体系与组织咨询',
      roleTitle: '体系化操盘官 / 稳健运营守门人',
      coreTrait: '沉稳周全，擅长把混乱流程梳理成滴水不漏的标准化资产',
      suitableDoing: ['企业运营体系搭建', '连锁加盟SOP输出', '降本增效流程审计'],
      monetizationPath: '年度运营顾问年费、全套SOP授权',
      tagColor: '#F6D365'
    },
    {
      rank: 2,
      industryCategory: '家族财富管理、资产保值与信托咨询',
      roleTitle: '财富守护导师 / 守业智库专家',
      coreTrait: '风控意识强，重信守诺，给人极强的托付安全感',
      suitableDoing: ['中产与高净值资产配置保全', '保险与信托规划', '家族传承架构'],
      monetizationPath: '资产规划咨询费、配置服务佣金',
      tagColor: '#38D9D0'
    },
    {
      rank: 3,
      industryCategory: '中大型实体连锁管理与商学院教培',
      roleTitle: '经营商学院导师 / 落地教官',
      coreTrait: '端庄稳重，理论与实操兼备，深受传统老板信赖',
      suitableDoing: ['店长/中层干部特训营', '实体老板经营沙盘', '企业内部流程内训'],
      monetizationPath: '线下企业大班内训费、教材版权',
      tagColor: '#9375FF'
    }
  ],
  tai_yin: [
    {
      rank: 1,
      industryCategory: '深度内容创作、长效出版与数字资产沉淀',
      roleTitle: '深度专栏作家 / 幕后资产架构师',
      coreTrait: '心思细腻、耐得住寂寞，文字与视觉审美极有底蕴',
      suitableDoing: ['出版长销专业书籍', '深度公众号/Substack长文', '数字知识产权(IP)打磨'],
      monetizationPath: '图书版税、长效订阅、版权分成',
      tagColor: '#38D9D0'
    },
    {
      rank: 2,
      industryCategory: '女性商业觉醒、精致生活方式与心理成长',
      roleTitle: '女性力量觉醒导师 / 优雅主理人',
      coreTrait: '天然贴近女性细腻心理，温润深沉，共鸣极深',
      suitableDoing: ['女性创业内功修养营', '私密情感智慧私教', '精致生活美学自媒体'],
      monetizationPath: '高净值女性私教课、品牌联合定制',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '被动资产投资、不动产与长期复利理财',
      roleTitle: '慢富之道教练 / 睡后收入规划师',
      coreTrait: '专注长期复利，注重积少成多，排斥赌徒投机',
      suitableDoing: ['定投与被动收入打法拆解', '全球核心不动产选筹', '养老与被动现金流设计'],
      monetizationPath: '理财规划课、一对一深度资产梳理',
      tagColor: '#F6D365'
    }
  ],
  tan_lang: [
    {
      rank: 1,
      industryCategory: '泛娱乐爆款内容、短视频直播与流量获客',
      roleTitle: '爆款流量操盘手 / 魅力型演播导师',
      coreTrait: '情商与荷尔蒙拉满，多才多艺，极度懂得撩拨大众情绪与欲望',
      suitableDoing: ['短视频起号与爆款钩子打造', '高客单直播间转化', '自媒体人格IP孵化'],
      monetizationPath: '直播带货分成、流量代操盘对赌',
      tagColor: '#FDA085'
    },
    {
      rank: 2,
      industryCategory: '身形体态、形体魅力、社交艺术与亲密关系',
      roleTitle: '魅力提升教练 / 社交吸引力主理人',
      coreTrait: '对人际磁场与两性心理有天生敏锐嗅觉，实战破冰能力强',
      suitableDoing: ['个人魅力与社交破局课', '高情商沟通秘籍', '脱单与亲密关系升级营'],
      monetizationPath: '高转化线上特训营 (¥999-¥2,999)',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '跨界新消费、潮流潮流潮玩与先锋社群',
      roleTitle: '新物种探索家 / 跨界联名策划官',
      coreTrait: '求新求变，善于把不同行业的好玩元素进行跨界融合',
      suitableDoing: ['潮牌与文创联名策划', '青年潮人社交活动', '新奇特产品首发实验'],
      monetizationPath: '联名销售抽成、品牌创意赞助',
      tagColor: '#38D9D0'
    }
  ],
  ju_men: [
    {
      rank: 1,
      industryCategory: '专业咨询诊断、深度测评与行业打假公关',
      roleTitle: '硬核评测官 / 商业照妖镜顾问',
      coreTrait: '直击核心痛点，口才与笔锋极具穿透力，敢于拆穿行业皇帝新衣',
      suitableDoing: ['企业商业模式全面体检', '竞品深度拆解与测评报告', '避坑指南深度长文'],
      monetizationPath: '深度诊断报告收费、高客单企业问诊',
      tagColor: '#38D9D0'
    },
    {
      rank: 2,
      industryCategory: '口才演讲、商业论辩、法务公关与说服表达',
      roleTitle: '王牌说服教练 / 商业辩手',
      coreTrait: '逻辑反驳与思维穿透力极强，能把死理讲活、让人信服',
      suitableDoing: ['领导力当众表达训练', '高难度谈判攻防课', '危机公关发言人辅导'],
      monetizationPath: '私教演说课、争议专案顾问',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '深度播客对谈、访谈类自媒体与思想辩难',
      roleTitle: '深度访谈主持人 / 行业观察家',
      coreTrait: '善于提问、追问核心真相，挖掘嘉宾未被发现的底层逻辑',
      suitableDoing: ['高端深度商业播客', '百位创始人深度访谈录', '行业争议议题圆桌'],
      monetizationPath: '品牌冠名播客赞助、付费深度内参',
      tagColor: '#F6D365'
    }
  ],
  tian_xiang: [
    {
      rank: 1,
      industryCategory: '商业撮合平台、商务中介与超级资源中枢',
      roleTitle: '超级连接人 / 值得托付的首席撮合官',
      coreTrait: '信誉极佳，中正端正，能同时平衡多方利益并促成握手',
      suitableDoing: ['大客户与供应商撮合', '企业并购与战略合作中介', '行业闭门供需对接会'],
      monetizationPath: '促成交易佣金分成 (1%-5%)',
      tagColor: '#38D9D0'
    },
    {
      rank: 2,
      industryCategory: '企业首席幕僚、总裁秘书长与高端助理孵化',
      roleTitle: '特使幕僚长 / 职业经理人导师',
      coreTrait: '恪尽职守，行事极其周到得体，极具高层代言人风范',
      suitableDoing: ['总裁办/幕僚长工作流搭建', '商务礼仪与外交互信辅导', '高端选品与背书'],
      monetizationPath: '长期幕僚年费、总裁私董会运营费',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '企业信用背书、权威测评与认证经纪',
      roleTitle: '行业信用背书官 / 优质好物选品主理人',
      coreTrait: '个人形象端正严谨，自带官方与制度信任感',
      suitableDoing: ['联合认证标准发布', '严选好物信任推荐', '专业机构名誉理事长'],
      monetizationPath: '品牌信任代理费、选品提成',
      tagColor: '#F6D365'
    }
  ],
  tian_liang: [
    {
      rank: 1,
      industryCategory: '终身教育传承、名师学徒班与心智宗师',
      roleTitle: '宗师级传道人 / 精神长者',
      coreTrait: '德高望重、善于渡人与庇荫后辈，说话具厚重定海神针力量',
      suitableDoing: ['亲传弟子弟子班', '行业真传心法长训营', '人生重大关头指点迷津'],
      monetizationPath: '高额弟子学费 (¥20k-50k/人)、终身传承班',
      tagColor: '#F6D365'
    },
    {
      rank: 2,
      industryCategory: '大健康养生、中医传统文化与生命哲学',
      roleTitle: '健康长寿哲人 / 身心颐养导师',
      coreTrait: '化险为夷，对生命、节律与身心固本培元有深刻透悟',
      suitableDoing: ['四季养生与治未病方案', '生命哲学研学会', '高净值人群康养避世营'],
      monetizationPath: '高端康养咨询、闭门养生会门票',
      tagColor: '#38D9D0'
    },
    {
      rank: 3,
      industryCategory: '行业伦理仲裁、慈善基金会与公义事业',
      roleTitle: '行业长者调解官 / 公益商业顾问',
      coreTrait: '公正不阿，大家遇到纷争时最愿意找的公道人',
      suitableDoing: ['行业纠纷民间仲裁', '家族办公室伦理治理', '商业向善与慈善项目'],
      monetizationPath: '调解咨询顾问费、基金会运营津贴',
      tagColor: '#9375FF'
    }
  ],
  qi_sha: [
    {
      rank: 1,
      industryCategory: '从0到1新业务攻坚、危机重组与死局破局',
      roleTitle: '破局先锋特种兵 / 逆境翻盘教练',
      coreTrait: '意志如铁，敢啃最硬骨头，擅长在毫无希望的死局中杀出血路',
      suitableDoing: ['滞销项目起死回生操盘', '从0到1开拓新区域市场', '企业危机业绩对赌交付'],
      monetizationPath: '高比例成功对赌提成、攻坚咨询费',
      tagColor: '#FDA085'
    },
    {
      rank: 2,
      industryCategory: '极速获客攻坚、狼性特训营与实战特战队',
      roleTitle: '铁血执行教官 / 突击队长',
      coreTrait: '身先士卒，执行力极其强悍，绝不允许借口和拖延',
      suitableDoing: ['7天极速出单封闭特训', '团队战斗力重塑营', '销售铁军军规打造'],
      monetizationPath: '封闭营培训费、业绩超额分润',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '独立开发者、极客单兵突破与前沿单点突击',
      roleTitle: '超级单兵创造者 / 独立攻坚手',
      coreTrait: '不喜抱团内耗，单兵战斗力极强，一人即一支军队',
      suitableDoing: ['独立开发垂直小工具', '单点击穿细分赛道', '极限个人超级交付'],
      monetizationPath: '软件订阅、直接买断交付',
      tagColor: '#38D9D0'
    }
  ],
  po_jun: [
    {
      rank: 1,
      industryCategory: '旧产业颠覆式创新、传统业务数智化重构',
      roleTitle: '行业破局颠覆者 / 新物种缔造先锋',
      coreTrait: '敢于推倒重来、先破后立，对陈腐旧模式有生理性排斥',
      suitableDoing: ['打破旧行业行规玩法', '传统实体全面转型新商业', '新物种商业模式实验'],
      monetizationPath: '创新项目早期合伙股权、颠覆案全案咨询',
      tagColor: '#38D9D0'
    },
    {
      rank: 2,
      industryCategory: '前沿AI工具重构、未来科技商业化落地',
      roleTitle: '新科技先锋探索家 / AI实验导师',
      coreTrait: '拥抱剧烈变革，敢于第一个吃螃蟹并快速跑通全新工作流',
      suitableDoing: ['AI重塑传统内容制作', '全新自动化个人公司搭建', '前沿工具实战通识'],
      monetizationPath: '前沿技术变现训练营、企业重构内训',
      tagColor: '#9375FF'
    },
    {
      rank: 3,
      industryCategory: '先锋潮流品牌、反传统个人IP打造',
      roleTitle: '叛逆先锋主理人 / 态度文化领袖',
      coreTrait: '不走寻常路，态度鲜明尖锐，对厌倦套路的人群有极强吸引力',
      suitableDoing: ['反内卷/反套路风格自媒体', '先锋潮牌策划', '小众文化破圈商业化'],
      monetizationPath: '自有态度品牌发售、高忠诚度私域变现',
      tagColor: '#FDA085'
    }
  ]
};

export function getSimplifiedIndustryFit(archetypeKey: string): SimplifiedIndustryFit[] {
  return STAR_INDUSTRY_MAPPING[archetypeKey] || STAR_INDUSTRY_MAPPING['tian_ji'];
}
