import { ZiWeiStar, DemoChartPreset } from '@/types';

export const FOURTEEN_STARS: Record<string, ZiWeiStar> = {
  zi_wei: {
    id: 'zi_wei',
    nameCn: '紫微星',
    nameEn: 'The Emperor (Zi Wei)',
    pinyin: 'Zǐ Wēi',
    traditionalSymbol: '帝王之星 · 尊贵稳健',
    archetypeTitle: '最高战略统领 / 行业旗手',
    leadershipStyle: '大局主导、授权赋能、气度稳健，善于汇聚精英共赴宏愿',
    workPreferences: '高纬度决策、制度制定、品牌标杆打造、不喜陷入微观事务琐碎',
    strengths: ['宏观格局宽阔', '凝聚号召力强', '天然权威感', '整合顶级资源'],
    blindSpots: ['好面子不易妥协', '下放细节时易脱离实操', '对平庸缺乏耐心'],
    communicationStyle: '提纲挈领、尊贵克制、重承诺、强调愿景与荣誉感',
    brandArchetypeSuggestions: ['战略领袖', '顶级顾问', '行业标准制定者', '生态组织者'],
    monetizationAffinity: ['高端闭门咨询', '合伙人分润', '企业战略操盘', '高客单私享会'],
    interpretationSource: '《紫微斗数全书》卷一 · 帝座星要',
    expertReviewStatus: 'verified'
  },
  tian_ji: {
    id: 'tian_ji',
    nameCn: '天机星',
    nameEn: 'The Strategist (Tian Ji)',
    pinyin: 'Tiān Jī',
    traditionalSymbol: '智慧智多星 · 灵动推演',
    archetypeTitle: '首席智囊 / 商业军师',
    leadershipStyle: '敏捷应变、逻辑推理见长、以智力资本服人，提供超前解法',
    workPreferences: '策略规划、产品研发、方案设计、模型推演、知识框架构建',
    strengths: ['极速学习领悟', '系统化逻辑拆解', '对市场机会嗅觉敏锐', '灵活应变'],
    blindSpots: ['思虑过度容易内耗', '计划更迭太快导致团队疲惫', '执行耐力需加强'],
    communicationStyle: '条理清晰、善用数据与类比、洞察犀利、启发式引导',
    brandArchetypeSuggestions: ['实战军师', '商业架构师', '知识IP思想库', '认知导师'],
    monetizationAffinity: ['知识付费专栏', '定制商业方案策划', '架构设计咨询', '高价值社群'],
    interpretationSource: '《紫微斗数全书》卷二 · 益智谋士',
    expertReviewStatus: 'verified'
  },
  tai_yang: {
    id: 'tai_yang',
    nameCn: '太阳星',
    nameEn: 'The Radiator (Tai Yang)',
    pinyin: 'Tài Yáng',
    traditionalSymbol: '光明普照 · 传播公义',
    archetypeTitle: '公众布道者 / 意见领袖 (KOL)',
    leadershipStyle: '公义坦荡、热忱利他、用使命感与价值观感染所有人',
    workPreferences: '公众演讲、市场公关、跨圈层拓展、内容大传播、行业布道',
    strengths: ['强大的舞台感与说服力', '真诚利他的人格魅力', '善于破圈破壁', '不知疲倦的传播'],
    blindSpots: ['过度付出耗竭自我', '不善拒绝导致负荷超标', '轻信他人而疏于防范'],
    communicationStyle: '富有激情、鼓舞人心、透明公开、具有强烈感染力',
    brandArchetypeSuggestions: ['时代布道者', '社群火种', '大流量主理人', '公益商业倡导者'],
    monetizationAffinity: ['大班直播演说', '赞助与商业代言', '万人峰会主办', '个人IP自媒体矩阵'],
    interpretationSource: '《太微赋》· 太阳司权贵',
    expertReviewStatus: 'verified'
  },
  wu_qu: {
    id: 'wu_qu',
    nameCn: '武曲星',
    nameEn: 'The Monetizer (Wu Qu)',
    pinyin: 'Wǔ Qū',
    traditionalSymbol: '正财之星 · 刚毅坚韧',
    archetypeTitle: '硬核实干操盘手 / 财富架构师',
    leadershipStyle: '结果导向、严明纪律、数字说话、奖惩分明、雷厉风行',
    workPreferences: '商业闭环验证、财务投融资、供应链操盘、硬核实操、利润把控',
    strengths: ['超凡的商业嗅觉', '极高的抗压与执行力', '严守财务纪律', '极度务实'],
    blindSpots: ['言辞直接略显冰冷', '过分重利轻情容易造成隔阂', '容易亲力亲为劳累'],
    communicationStyle: '言简意赅、直击核心、用ROI与结果说话、不谈虚浮概念',
    brandArchetypeSuggestions: ['硬核搞钱操盘手', '资产配置导师', '商业闭环教练', '务实企业家'],
    monetizationAffinity: ['佣金抽成合作', '投资入股', '精准获客变现操盘', '企业成本与利润顾问'],
    interpretationSource: '《紫微斗数全书》· 财帛主武曲',
    expertReviewStatus: 'verified'
  },
  tian_tong: {
    id: 'tian_tong',
    nameCn: '天同星',
    nameEn: 'The Harmonizer (Tian Tong)',
    pinyin: 'Tiān Tóng',
    traditionalSymbol: '福德之星 · 和气乐天',
    archetypeTitle: '治愈系导师 / 体验与美学设计师',
    leadershipStyle: '温和包容、润物细无声、注重团队身心健康与长期幸福感',
    workPreferences: '文化美学、生活方式、心理咨询、文旅社群、柔性协作环境',
    strengths: ['同理心极强', '善于化解冲突', '生活美学感知力高', '让用户感到舒适安全'],
    blindSpots: ['遇逆境易产生退避心态', '决策时过于顾及情面', '行动力需要外部推动'],
    communicationStyle: '温柔暖心、善于倾听、亲和自然、极具疗愈力量',
    brandArchetypeSuggestions: ['疗愈生活家', '身心成长导师', '生活美学主理人', '暖心社群发起人'],
    monetizationAffinity: ['身心疗愈工作坊', '轻奢生活美学产品', '陪伴式会员社群', '定制化体验营'],
    interpretationSource: '《斗数骨髓赋》· 天同化福',
    expertReviewStatus: 'verified'
  },
  lian_zhen: {
    id: 'lian_zhen',
    nameCn: '廉贞星',
    nameEn: 'The Tactician (Lian Zhen)',
    pinyin: 'Lián Zhēn',
    traditionalSymbol: '次桃花 · 事业硬手与公关外交',
    archetypeTitle: '高情商公关操盘手 / 复杂关系突破者',
    leadershipStyle: '审时度势、法理情兼备、善于在复杂博弈中稳操胜券',
    workPreferences: '政企关系、品牌高端公关、危机化解、前沿商务谈判、精密风控',
    strengths: ['敏锐的人情与政商洞察', '严密的规则把控力', '在险境中化被动为主动'],
    blindSpots: ['个性要强易较劲', '情绪内敛防备心过重', '有时过于执着原则'],
    communicationStyle: '刚柔并济、分寸感极佳、善于把握潜在潜台词与利益平衡',
    brandArchetypeSuggestions: ['政企操盘军师', '危机公关导师', '顶级谈判教练', '高端圈层连接者'],
    monetizationAffinity: ['大客户专案公关', '政企协同咨询', '高端斡旋中介', '合规与风险顾问'],
    interpretationSource: '《太微赋》· 廉贞次桃花兼司权令',
    expertReviewStatus: 'verified'
  },
  tian_fu: {
    id: 'tian_fu',
    nameCn: '天府星',
    nameEn: 'The Administrator (Tian Fu)',
    pinyin: 'Tiān Fǔ',
    traditionalSymbol: '南斗令星 · 库藏稳实',
    archetypeTitle: '稳健体系操盘官 / 财富与组织守门人',
    leadershipStyle: '从容端庄、稳扎稳打、注重风险控制与流程资产积累',
    workPreferences: '大型组织管理、资产保值、标准化运营体系、长期主义业务构建',
    strengths: ['极强的系统化承载力', '守业与保全能力极强', '行事周全滴水不漏', '值得托付'],
    blindSpots: ['进取开拓性相对保守', '变革迟疑错过激进风口', '不愿承担高风险试错'],
    communicationStyle: '厚重从容、温和有力、讲求信用、注重契约与流程',
    brandArchetypeSuggestions: ['财富守护导师', '企业体系化操盘官', '稳健组织顾问', '家族信托顾问'],
    monetizationAffinity: ['长期管理顾问年费', '体系化SOP课程', '大客户资产管理', '高价值私董会'],
    interpretationSource: '《斗数全书》· 天府南斗主财库',
    expertReviewStatus: 'verified'
  },
  tai_yin: {
    id: 'tai_yin',
    nameCn: '太阴星',
    nameEn: 'The Cultivator (Tai Yin)',
    pinyin: 'Tài Yīn',
    traditionalSymbol: '月精之光 · 细腻深沉',
    archetypeTitle: '深度内容匠人 / 幕后资产沉淀者',
    leadershipStyle: '以静制动、关注细节与成员情感需求、深耕细作不急于求成',
    workPreferences: '长周期内容创作、深度学术研究、女性经济、不动产与长期复利产品',
    strengths: ['超强的文字与美学耐受力', '洞察细腻入微', '稳健的被动资产积累意识'],
    blindSpots: ['多愁善感容易情绪受扰', '缺乏公开当面冲突的勇气', '行动节奏偏慢'],
    communicationStyle: '文雅含蓄、意境悠远、娓娓道来、触动心弦',
    brandArchetypeSuggestions: ['深度专栏作家', '慢生活品牌主理人', '女性商业觉醒导师', '资产复利教练'],
    monetizationAffinity: ['出版与版权版税', '长效订阅制内容', '不动产/被动资产咨询', '高端文创IP'],
    interpretationSource: '《紫微斗数全书》· 太阴司富主财帛',
    expertReviewStatus: 'verified'
  },
  tan_lang: {
    id: 'tan_lang',
    nameCn: '贪狼星',
    nameEn: 'The Alchemist (Tan Lang)',
    pinyin: 'Tān Láng',
    traditionalSymbol: '欲望之星 · 多才多艺',
    archetypeTitle: '爆款制造机 / 跨界破局者',
    leadershipStyle: '魅力型领导、善于激发欲望与潜能、敢于打破常规',
    workPreferences: '文娱传媒、新兴潮流、身心形体、社交电商、高互动新物种打造',
    strengths: ['极高的人际亲和与勾人能力', '多才多艺跨界融合', '精准抓住大众情绪爽点'],
    blindSpots: ['兴趣广泛易分散精力', '耐性不足难以长期深耕单一事务', '容易追求捷径'],
    communicationStyle: '风趣幽默、极具煽动性、懂得投其所好、充满荷尔蒙活力',
    brandArchetypeSuggestions: ['跨界新星', '流量狂飙制造者', '潮流生活IP', '破局实战导师'],
    monetizationAffinity: ['爆款训练营', '流量IP孵化提成', '高转化现场发售', '品牌联名与跨界产品'],
    interpretationSource: '《斗数骨髓赋》· 贪狼为第一桃花与欲望之宿',
    expertReviewStatus: 'verified'
  },
  ju_men: {
    id: 'ju_men',
    nameCn: '巨门星',
    nameEn: 'The Clarifier (Ju Men)',
    pinyin: 'Jù Mén',
    traditionalSymbol: '暗曜辩才 · 洞察破障',
    archetypeTitle: '硬核评测官 / 思想辩手与真相发掘者',
    leadershipStyle: '直言不讳、批判性反思、不断通过质疑与辩难提升交付质量',
    workPreferences: '深度专业评测、法务合规、调查记者、学术论辩、公关喉舌、咨询诊断',
    strengths: ['极具穿透力的口才与笔锋', '找出逻辑漏洞与深层风险', '不怕得罪人坚持真相'],
    blindSpots: ['言辞锋利容易伤人', '多疑且难以快速建立信任', '易惹口舌是非'],
    communicationStyle: '犀利透彻、论证严谨、直言痛点、绝不粉饰太平',
    brandArchetypeSuggestions: ['行业打假与诊断专家', '犀利商评人', '王牌辩护人', '直言不讳的教练'],
    monetizationAffinity: ['深度诊断咨询报告', '行业内参与风险规避', '高端诉讼/危机解围', '高净值深度答疑'],
    interpretationSource: '《太微赋》· 巨门主口才与是非',
    expertReviewStatus: 'verified'
  },
  tian_xiang: {
    id: 'tian_xiang',
    nameCn: '天相星',
    nameEn: 'The Diplomat (Tian Xiang)',
    pinyin: 'Tiān Xiàng',
    traditionalSymbol: '印星宰辅 · 诚信中正',
    archetypeTitle: '超级连接人 / 值得托付的首席幕僚',
    leadershipStyle: '中正平和、协调各方利益、恪守职业道德、极具职业经理人典范',
    workPreferences: '商务撮合、品牌形象代言、高管秘书长、中介平台、高端选品与背书',
    strengths: ['天然令人信赖的职场信誉', '绝佳的外交与协调手腕', '品位端正恪尽职守'],
    blindSpots: ['缺乏主动颠覆规则的野心', '过度依赖平台与授权背景', '难做恶人裁决'],
    communicationStyle: '礼貌得体、严谨周密、令人信服、善于居中平衡',
    brandArchetypeSuggestions: ['顶级操盘秘书长', '商业连接专家', '企业信用背书官', '精英职业导师'],
    monetizationAffinity: ['中介交易佣金', '理事会/协会秘书长年薪', '品牌形象代理', '高端人脉圈层收费'],
    interpretationSource: '《斗数全书》· 天相为司衣食之主化气为印',
    expertReviewStatus: 'verified'
  },
  tian_liang: {
    id: 'tian_liang',
    nameCn: '天梁星',
    nameEn: 'The Sage (Tian Liang)',
    pinyin: 'Tiān Liáng',
    traditionalSymbol: '荫星长者 · 逢凶化吉',
    archetypeTitle: '精神宗师 / 行业终身导师',
    leadershipStyle: '德高望重、循循善诱、秉持长者风范，善于传道授业与解惑',
    workPreferences: '教育培训、中医与大健康、哲学与文化传播、行业伦理仲裁、公益慈善',
    strengths: ['极高的人生智慧与定力', '乐于庇荫提携晚辈', '关键时刻能化险为夷'],
    blindSpots: ['说教意味可能过重', '观念有时较为传统守旧', '容易背负他人因果负担'],
    communicationStyle: '沉稳慈祥、循循善诱、富有哲理深度、如长者春风化雨',
    brandArchetypeSuggestions: ['宗师级人生导师', '行业传道人', '健康与生命哲学家', '传承引路人'],
    monetizationAffinity: ['弟子班与传承课', '高端修心研学会', '私人家族伦理顾问', '经典出版与版税'],
    interpretationSource: '《太微赋》· 天梁司寿主化气为荫',
    expertReviewStatus: 'verified'
  },
  qi_sha: {
    id: 'qi_sha',
    nameCn: '七杀星',
    nameEn: 'The Pioneer (Qi Sha)',
    pinyin: 'Qī Shā',
    traditionalSymbol: '肃杀大将 · 勇破敌阵',
    archetypeTitle: '破局先锋 / 新赛道攻坚特种兵',
    leadershipStyle: '身先士卒、敢打硬仗、意志如铁、以强悍的个人战力撕开突破口',
    workPreferences: '从0到1开拓新市场、危机重组、极限攻坚项目、竞争激烈的红海突围',
    strengths: ['无所畏惧的决断魄力', '超强的单兵突击作战力', '对困难毫不退缩'],
    blindSpots: ['刚烈孤傲不喜抱团', '缺乏妥协回旋余地', '容易孤军深入受创'],
    communicationStyle: '斩钉截铁、掷地有声、直奔目标、没有任何废话',
    brandArchetypeSuggestions: ['破局孤勇者', '逆境翻盘教练', '0到1攻坚实战家', '硬核开拓先锋'],
    monetizationAffinity: ['危机重组业绩对赌', '新业务孵化成功分成', '攻坚战专项教练费', '先锋特训营'],
    interpretationSource: '《斗数骨髓赋》· 七杀为斗中大将化气为权',
    expertReviewStatus: 'verified'
  },
  po_jun: {
    id: 'po_jun',
    nameCn: '破军星',
    nameEn: 'The Disruptor (Po Jun)',
    pinyin: 'Pò Jūn',
    traditionalSymbol: '破耗先锋 · 先破后立',
    archetypeTitle: '行业颠覆者 / 破坏性创新先驱',
    leadershipStyle: '敢于推倒重来、打破旧秩序、以革命性的新物种带领团队突围',
    workPreferences: '技术革命、旧产业数智化重构、商业模式颠覆、先锋艺术实验',
    strengths: ['不破不立的创新胆魄', '对陈腐模式极度不耐受', '催生颠覆性创新的巨大能量'],
    blindSpots: ['容易破坏已有稳态资产', '情绪大起大落', '团队往往难以跟上剧烈变革'],
    communicationStyle: '具有叛逆先锋色彩、直击体制痛点、倡导重塑与进化',
    brandArchetypeSuggestions: ['颠覆性创新导师', '旧商业终结者', '新物种实验家', '极客先驱'],
    monetizationAffinity: ['颠覆性项目天使投资', '创新实验室孵化', '产业重构顾问', '前沿科技商业化辅导'],
    interpretationSource: '《太微赋》· 破军主耗化气为耗先破后立',
    expertReviewStatus: 'verified'
  }
};

export const DEMO_PRESETS: DemoChartPreset[] = [
  {
    id: 'preset_strategist',
    name: '教学范例 A · 商业智囊与架构师（天机+太阴）',
    archetypeKey: 'tian_ji',
    lifePalaceStars: ['tian_ji', 'tai_yin'],
    careerPalaceStars: ['ju_men', 'tian_liang'],
    wealthPalaceStars: ['tian_tong'],
    travelPalaceStars: ['tai_yang'],
    summary: '思维敏捷，擅长知识建模与前沿商业策划，适合作为专家顾问与知识IP深耕高客单咨询。',
    palaces: {
      life: {
        palaceName: 'Life Palace',
        palaceNameCn: '命宫（内在特质）',
        majorStars: ['tian_ji', 'tai_yin'],
        mutagen: 'Lu',
        explanation: '天机星化禄与太阴相会，赋予超常的系统性思考能力与细腻的受众洞察力。'
      },
      career: {
        palaceName: 'Career Palace',
        palaceNameCn: '官禄宫（事业风格）',
        majorStars: ['ju_men'],
        mutagen: 'Quan',
        explanation: '巨门化权入官禄，以专业口才、咨询诊断与思想穿透力为立身之本。'
      },
      wealth: {
        palaceName: 'Wealth Palace',
        palaceNameCn: '财帛宫（变现通道）',
        majorStars: ['tian_tong'],
        mutagen: null,
        explanation: '天同主福德财，适合依靠口碑、柔性服务与长线会员机制实现持续现金流。'
      },
      travel: {
        palaceName: 'Travel Palace',
        palaceNameCn: '迁移宫（公众影响）',
        majorStars: ['tai_yang'],
        mutagen: 'Ke',
        explanation: '太阳化科在迁移，适合面向公众发声、开展公众演讲及新媒体传播。'
      }
    }
  },
  {
    id: 'preset_leader',
    name: '教学范例 B · 战略领袖与品牌旗手（紫微+天府）',
    archetypeKey: 'zi_wei',
    lifePalaceStars: ['zi_wei', 'tian_fu'],
    careerPalaceStars: ['wu_qu'],
    wealthPalaceStars: ['lian_zhen'],
    travelPalaceStars: ['qi_sha'],
    summary: '格局恢宏，稳重有威信，擅长整合高端资源与制度化运营，适合打造具有公信力的头部机构与个人标杆。',
    palaces: {
      life: {
        palaceName: 'Life Palace',
        palaceNameCn: '命宫（内在特质）',
        majorStars: ['zi_wei', 'tian_fu'],
        mutagen: 'Quan',
        explanation: '紫府同宫，自带王者气象与沉稳守成底气，容易获取行业高层信任。'
      },
      career: {
        palaceName: 'Career Palace',
        palaceNameCn: '官禄宫（事业风格）',
        majorStars: ['wu_qu'],
        mutagen: 'Lu',
        explanation: '武曲化禄，执行力极强且结果导向，对商业闭环与利润把控具有天然直觉。'
      },
      wealth: {
        palaceName: 'Wealth Palace',
        palaceNameCn: '财帛宫（变现通道）',
        majorStars: ['lian_zhen'],
        mutagen: null,
        explanation: '廉贞入财，依靠高端政商圈层与复杂资源撮合创造高附加值收益。'
      },
      travel: {
        palaceName: 'Travel Palace',
        palaceNameCn: '迁移宫（公众影响）',
        majorStars: ['qi_sha'],
        mutagen: null,
        explanation: '七杀向外，在外部市场开拓上极具冲击力，能独当一面攻克新蓝海。'
      }
    }
  },
  {
    id: 'preset_pioneer',
    name: '教学范例 C · 破局先锋与新物种缔造者（七杀+破军）',
    archetypeKey: 'po_jun',
    lifePalaceStars: ['po_jun'],
    careerPalaceStars: ['qi_sha'],
    wealthPalaceStars: ['tan_lang'],
    travelPalaceStars: ['tian_xiang'],
    summary: '颠覆力强，敢破敢立，适合在新兴赛道切入做破坏性创新，打造个性鲜明的先锋破局IP。',
    palaces: {
      life: {
        palaceName: 'Life Palace',
        palaceNameCn: '命宫（内在特质）',
        majorStars: ['po_jun'],
        mutagen: 'Lu',
        explanation: '破军化禄坐命，天生热爱打破陈旧，通过颠覆性创新释放生命力。'
      },
      career: {
        palaceName: 'Career Palace',
        palaceNameCn: '官禄宫（事业风格）',
        majorStars: ['qi_sha'],
        mutagen: 'Quan',
        explanation: '七杀化权，攻坚克难意志坚定，能够以一己之力撕开竞争红海。'
      },
      wealth: {
        palaceName: 'Wealth Palace',
        palaceNameCn: '财帛宫（变现通道）',
        majorStars: ['tan_lang'],
        mutagen: null,
        explanation: '贪狼主敏锐商机与多维跨界，擅长打造爆款与多渠道变现。'
      },
      travel: {
        palaceName: 'Travel Palace',
        palaceNameCn: '迁移宫（公众影响）',
        majorStars: ['tian_xiang'],
        mutagen: null,
        explanation: '天相在迁移，外部交往中保持专业端庄与契约精神，平衡内部叛逆特质。'
      }
    }
  }
];
