export type FiveElement = 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';

export interface BaziVisualAesthetics {
  favorableElement: FiveElement; // 喜用神五行
  elementNameCn: string; // 木、火、土、金、水
  elementPinyin: string;
  seasonContext: string; // 节气时令分析背景
  dressingGuidance: {
    primaryColors: string[]; // 适合穿的衣服主色
    accentColors: string[]; // 适合搭配的点缀色
    colorDescription: string;
    clothingStyle: string; // 服装款式建议
    accessories: string; // 饰品/配饰材质
  };
  studioAesthetics: {
    backdropStyle: string; // 直播间/拍摄布景风格
    lightingTone: string; // 灯光色调
    materialTextures: string; // 空间材质与道具
    visualAtmosphere: string; // 传递的视觉气场
  };
  avoidanceAdvice: {
    avoidColors: string[]; // 避开的沉闷或耗损颜色
    avoidAtmosphere: string; // 避开的布景雷区
  };
}

export const FIVE_ELEMENT_AESTHETICS: Record<FiveElement, BaziVisualAesthetics> = {
  Wood: {
    favorableElement: 'Wood',
    elementNameCn: '木 (Wood)',
    elementPinyin: 'Mù',
    seasonContext: '调候生发，如初春破土。需以生机、舒展、清新之气通达气场。',
    dressingGuidance: {
      primaryColors: ['森林青绿', '翡翠绿', '橄榄绿', '薄荷青', '原木色'],
      accentColors: ['浅青绿', '淡蓝', '本白色'],
      colorDescription: '自然生机绿意、雅致青绿、大地植物系色调',
      clothingStyle: '自然棉麻、舒展宽松剪裁、微廓形休闲西装、植物纤维材质',
      accessories: '木质腕表、天然绿松石/翡翠珠串、竹节元素、植物胸针'
    },
    studioAesthetics: {
      backdropStyle: '绿植生机书房风 · 极简木质书架、高挑龟背竹/琴叶榕、日式原木微水泥',
      lightingTone: '4000K 自然晨光暖白，模拟清晨穿透树冠的柔和漫射光',
      materialTextures: '原木长桌、亚麻窗帘、自然竹编、纸质手稿道具',
      visualAtmosphere: '生机盎然、博学温润、蓬勃向上的成长型导师气场'
    },
    avoidanceAdvice: {
      avoidColors: ['大面积冷银金属灰', '极冷白色', '尖锐金属质感'],
      avoidAtmosphere: '避免全冰冷钢铁工业风或毫无生机的暗黑封闭小房间'
    }
  },
  Fire: {
    favorableElement: 'Fire',
    elementNameCn: '火 (Fire)',
    elementPinyin: 'Huǒ',
    seasonContext: '寒谷回春，暖局破冰。需以热情、明艳、聚焦之光点燃公众磁场。',
    dressingGuidance: {
      primaryColors: ['勃艮第酒红', '朱红', '暖橙', '正红', '丁香紫/电光紫'],
      accentColors: ['玫瑰金', '暖珊瑚色', '亮紫'],
      colorDescription: '饱满热烈的红紫暖调、高级感酒红与活力暖橙',
      clothingStyle: '剪裁利落修身、枪驳领红色系西装、质感真丝衬衫、高辨识度亮眼单品',
      accessories: '红宝石/南红玛瑙配饰、玫瑰金腕表、精致亮眼胸针'
    },
    studioAesthetics: {
      backdropStyle: '焦点舞台与高端演播室风 · 暖光壁炉、轻奢暖色吸音板、霓虹发光品牌灯牌',
      lightingTone: '3200K 温暖聚焦聚光灯，高饱和度轮廓光，打造面部红润立体焦点',
      materialTextures: '丝绒吸音软包、暖红砖纹背景、黄铜金属线条点缀',
      visualAtmosphere: '热情澎湃、自带光环、高能量吸睛的超级演说家气场'
    },
    avoidanceAdvice: {
      avoidColors: ['深黑沉滞色', '极冷蓝灰', '湿冷暗色'],
      avoidAtmosphere: '避免阴暗无光、死气沉沉或冷蓝冰库式的直播布景'
    }
  },
  Earth: {
    favorableElement: 'Earth',
    elementNameCn: '土 (Earth)',
    elementPinyin: 'Tǔ',
    seasonContext: '厚德载物，坤仪稳厚。需以稳重、包容、信任之底蕴承托商业基业。',
    dressingGuidance: {
      primaryColors: ['大地驼色', '焦糖色', '暖卡其', '杏仁奶黄', '陶土棕'],
      accentColors: ['香槟金', '米白', '深棕'],
      colorDescription: '温暖大地色系、老钱风浅驼、奶茶与陶土系高级中性色',
      clothingStyle: '羊绒大衣、老钱风高领针织衫、大地色质感西裤、双面呢羊毛西服',
      accessories: '天然琥珀/蜜蜡、黄水晶、古铜色腕表、大地色皮革表带'
    },
    studioAesthetics: {
      backdropStyle: '高端私人智库/私董会茶室风 · 微水泥陶土墙面、厚重实木大平案、艺术紫砂/陶艺摆件',
      lightingTone: '3500K 柔和暖调漫反射，营造包容从容、令人心安的谈话氛围',
      materialTextures: '石材大理石台面、夯土微水泥、厚实地毯、粗陶艺术器皿',
      visualAtmosphere: '从容厚重、值得托付、老钱底蕴沉淀的资深战略操盘官气场'
    },
    avoidanceAdvice: {
      avoidColors: ['大面积荧光绿', '跳跃艳粉色', '过于轻浮的塑料彩色'],
      avoidAtmosphere: '避免过于轻浮跳脱、花里胡哨或缺乏重量感的塑料感布景'
    }
  },
  Metal: {
    favorableElement: 'Metal',
    elementNameCn: '金 (Metal)',
    elementPinyin: 'Jīn',
    seasonContext: '肃杀决断，精金百炼。需以克制、干练、精密之利落彰显专业锋芒。',
    dressingGuidance: {
      primaryColors: ['纯净皓白', '浅银灰', '香槟白', '枪灰色', '冷白'],
      accentColors: ['拉丝银', '钛金白', '极简冷灰'],
      colorDescription: '极简冷白、金属钛色、无瑕纯白与高冷浅灰',
      clothingStyle: '极简主义立体剪裁、平整免烫高支白衬衫、精裁单排扣冷灰西服、几何硬挺轮廓',
      accessories: '白金/钛金属腕表、冷银极简袖扣、高精尖几何首饰、无框/银丝眼镜'
    },
    studioAesthetics: {
      backdropStyle: '未来极简科技实验室风 · 纯净白墙搭配精密线条、悬浮极简收纳、雾面磨砂金属隔断',
      lightingTone: '4500K-5000K 纯净高显色冷白光，线条灯带打亮轮廓，展现硬核专业度',
      materialTextures: '铝合金拉丝板、无缝一体岩板桌面、冷感玻璃、无尘科技摆件',
      visualAtmosphere: '理性冷静、精细入微、直击本质的硬核专家与评测官气场'
    },
    avoidanceAdvice: {
      avoidColors: ['大面积脏橘色', '暗红泥泞色', '土气杂乱碎花'],
      avoidAtmosphere: '避免杂乱无章、电线缠绕或软趴趴慵懒风的杂货铺背景'
    }
  },
  Water: {
    favorableElement: 'Water',
    elementNameCn: '水 (Water)',
    elementPinyin: 'Shuǐ',
    seasonContext: '润下通灵，渊深不测。需以深邃、流动、智慧之灵动穿透商业迷雾。',
    dressingGuidance: {
      primaryColors: ['深邃曜黑', '深海藏青', '午夜蓝', '墨蓝', '青蓝钛晶'],
      accentColors: ['水波青蓝 (#38D9D0)', '深灰蓝', '透光蓝'],
      colorDescription: '深海藏青、曜石黑、神秘午夜蓝与微光水蓝',
      clothingStyle: '垂坠感极佳的醋酸/真丝混纺、沉稳深蓝双排扣西装、流动感风衣',
      accessories: '黑曜石手串、蓝宝石腕表、黑色珍珠、流线型波浪纹银饰'
    },
    studioAesthetics: {
      backdropStyle: '深夜深度访谈空间 · 深蓝暗调背景墙、柔光曲面水纹波光屏、深色悬浮书墙',
      lightingTone: '暗调主光搭配冷青蓝 (#38D9D0) 边缘轮廓光 (Rim Light)，极具电影质感',
      materialTextures: '深黑石墨烯吸音板、黑色哑光桌、波纹水感玻璃器皿、深度音响设备',
      visualAtmosphere: '深谋远虑、神秘深邃、智识穿透力极强的隐士军师气场'
    },
    avoidanceAdvice: {
      avoidColors: ['大面积土黄色', '混浊泥浆棕', '燥热暗黄'],
      avoidAtmosphere: '避免土气燥热、泥沙杂乱感或干燥乏味的黄色打光'
    }
  }
};

/**
 * 依据公历生日月份与日柱节气算法，推导八字五行喜用神（辅助视觉定位）
 */
export function calculateBaziVisualGuidance(birthDate: string): BaziVisualAesthetics {
  if (!birthDate) return FIVE_ELEMENT_AESTHETICS['Water'];

  const parts = birthDate.split('-');
  const month = parseInt(parts[1] || '6', 10);
  const day = parseInt(parts[2] || '15', 10);
  const year = parseInt(parts[0] || '1995', 10);

  // 传统月令调候通则：
  // 春季 (寅卯辰月: 2, 3, 4月) - 木旺需火泄秀或金雕琢；多喜火暖局或金利器
  // 夏季 (巳午未月: 5, 6, 7月) - 火炎土燥，首要调候喜水润局、金生水
  // 秋季 (申酉戌月: 8, 9, 10月) - 金肃燥烈，喜水淘洗或木繁荣
  // 冬季 (亥子丑月: 11, 12, 1月) - 天寒水冻，万物不发，第一喜用神必取丙火照暖，辅以土固

  let favorable: FiveElement = 'Water';

  if (month >= 5 && month <= 7) {
    // 夏生：喜水降燥或喜金
    favorable = (day % 2 === 0) ? 'Water' : 'Metal';
  } else if (month >= 11 || month === 1) {
    // 冬生：最喜火调候解冻
    favorable = 'Fire';
  } else if (month >= 2 && month <= 4) {
    // 春生：木盛喜火发越，或喜土培根
    favorable = (day % 2 === 0) ? 'Fire' : 'Earth';
  } else {
    // 秋生 (8, 9, 10月)：金旺喜木生财或喜水流秀
    favorable = (year % 2 === 0) ? 'Water' : 'Wood';
  }

  return FIVE_ELEMENT_AESTHETICS[favorable];
}
