// ==========================================
// 商业领袖与名家 IP 原型镜像库
// 启发学员看见自己 IP 原型的商业标杆范例
// ==========================================

import { IPFamilyId } from '@/data/previewV01Data';

export interface FamousLeader {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  avatarBadge: string; // Emoji 图标或示意徽章
  ipFamilyId: IPFamilyId;
  keyStars: string[];
  resonancePoint: string;
  resonancePointEn: string;
  takeawayQuote: string;
  takeawayQuoteEn: string;
}

export const FAMOUS_LEADERS: FamousLeader[] = [
  // ── A. 领袖权威型 ──
  {
    id: 'li-ka-shing',
    name: '李嘉诚',
    nameEn: 'Li Ka-shing',
    title: '长江实业创始人 · 华人商业宗师',
    titleEn: 'Founder of CK Hutchison · Legendary Business Titan',
    avatarBadge: '👑',
    ipFamilyId: 'leader_authority',
    keyStars: ['天府', '禄存'],
    resonancePoint: '天生大局统筹与资产沉淀能力。善于在风云变幻中守正出奇，以稳健格局凝聚各方资本与顶级人才。',
    resonancePointEn: 'Master of macro strategic allocation and asset compounding. Anchors organizations with sovereign calm and compounding credibility.',
    takeawayQuote: '「做生意要有格局，建立信任需要一辈子，让别人愿意与你长期共赢。」',
    takeawayQuoteEn: '"True leadership lies in long-term integrity and shared mutual prosperity."'
  },
  {
    id: 'dong-mingzhu',
    name: '董明珠',
    nameEn: 'Dong Mingzhu',
    title: '格力电器董事长 · 产业铁腕领袖',
    titleEn: 'Chairwoman of Gree Electric · Industrial Authority',
    avatarBadge: '⚡',
    ipFamilyId: 'leader_authority',
    keyStars: ['紫微', '七杀'],
    resonancePoint: '强烈的标准制定意识与行业号召力。用严苛的行业标杆驱动企业前行，成为行业不可撼动的定海神针。',
    resonancePointEn: 'Defines industry gold standards with uncompromising authority and executive willpower.',
    takeawayQuote: '「让世界爱上中国造，唯有掌握核心标准与自主话语权。」',
    takeawayQuoteEn: '"Only those who set the benchmarks command true industry respect."'
  },

  // ── B. 智慧策略型 ──
  {
    id: 'charlie-munger',
    name: '查理·芒格',
    nameEn: 'Charlie Munger',
    title: '伯克希尔·哈撒韦副主席 · 跨学科思想家',
    titleEn: 'Vice Chairman of Berkshire Hathaway · Polymath Strategist',
    avatarBadge: '🧭',
    ipFamilyId: 'strategy_intelligence',
    keyStars: ['天机', '太阴'],
    resonancePoint: '比市场多看三步的终极谋士。善于用多元思维模型穿透繁杂表象，靠深刻洞见获得持续复利。',
    resonancePointEn: 'Sees three steps beyond the market through mental models, penetrating systemic noise with razor-sharp lucidity.',
    takeawayQuote: '「反过来想，总是反过来想。认知的边界就是财富与影响力的边界。」',
    takeawayQuoteEn: '"Invert, always invert. The boundaries of your cognition determine your brand frontier."'
  },
  {
    id: 'colin-huang',
    name: '黄峥',
    nameEn: 'Colin Huang',
    title: '拼多多创始人 · 底层商业算法构建者',
    titleEn: 'Founder of PDD Holdings · Algorithmic Strategist',
    avatarBadge: '♟️',
    ipFamilyId: 'strategy_intelligence',
    keyStars: ['天机', '天梁'],
    resonancePoint: '深谙商业博弈与供需本质的战略天才。深居幕后以算法与机制重构供应链，以体系取胜。',
    resonancePointEn: 'Deep architectural understanding of commercial incentives and systemic dynamics, winning through structural advantages.',
    takeawayQuote: '「专注在真实本质上，用最本质的常识建立长期护城河。」',
    takeawayQuoteEn: '"Root yourself in foundational first principles to forge defensible moats."'
  },

  // ── C. 表达传播型 ──
  {
    id: 'jack-ma',
    name: '马云',
    nameEn: 'Jack Ma',
    title: '阿里巴巴创始人 · 极具煽动力的愿景布道者',
    titleEn: 'Founder of Alibaba · Visionary Global Evangelist',
    avatarBadge: '🎙️',
    ipFamilyId: 'communication_influence',
    keyStars: ['巨门', '太阳'],
    resonancePoint: '言出必达的超级连接者。拥有将抽象愿景化为大众澎湃热情的非凡表达力，让全世界听懂他的故事。',
    resonancePointEn: 'Master of visionary persuasion and public resonance, turning abstract visions into viral global movements.',
    takeawayQuote: '「因为相信，所以看见。你的表达，决定了你能感召多大的舞台。」',
    takeawayQuoteEn: '"Because we believe, we see. Your voice determines the magnitude of your audience."'
  },
  {
    id: 'jay-chou',
    name: '周杰伦',
    nameEn: 'Jay Chou',
    title: '华语流行音乐天王 · 跨时代文化传播符号',
    titleEn: 'Mandopop Cultural Icon · Creative Trendsetter',
    avatarBadge: '🎵',
    ipFamilyId: 'communication_influence',
    keyStars: ['贪狼', '文曲'],
    resonancePoint: '艺术与流行的绝对捕手。敏锐捕捉大众情感共鸣点，打造跨越两代人的现象级超级文化符号。',
    resonancePointEn: 'Instinctive mastery of aesthetic sentiment, forging cross-generational cultural resonance.',
    takeawayQuote: '「谁说流行音乐只能跟风？走自己的路，让市场为你着迷。」',
    takeawayQuoteEn: '"Why follow trends when you can pioneer the standard people fall in love with?"'
  },

  // ── D. 开创破局型 ──
  {
    id: 'steve-jobs',
    name: '史蒂夫·乔布斯',
    nameEn: 'Steve Jobs',
    title: '苹果公司联合创始人 · 颠覆式创新先驱',
    titleEn: 'Co-founder of Apple · Revolutionary Disruptor',
    avatarBadge: '🚀',
    ipFamilyId: 'disruption_pioneer',
    keyStars: ['破军', '七杀'],
    resonancePoint: '大破大立的终极颠覆者。拒绝在原有体系内修修补补，以极致的破局勇气重新定义手机与计算机行业。',
    resonancePointEn: 'The definitive creative destroyer. Refuses to make minor tweaks, reinventing whole industries from ground zero.',
    takeawayQuote: '「活着就是为了改变世界。唯有那些疯狂到以为自己能改变世界的人，才能真正改变它。」',
    takeawayQuoteEn: '"Here’s to the crazy ones. The people who are crazy enough to think they can change the world are the ones who do."'
  },
  {
    id: 'elon-musk',
    name: '埃隆·马斯克',
    nameEn: 'Elon Musk',
    title: '特斯拉 & SpaceX 创始人 · 激进冒险开拓者',
    titleEn: 'CEO of Tesla & SpaceX · Frontier Pioneer',
    avatarBadge: '🔥',
    ipFamilyId: 'disruption_pioneer',
    keyStars: ['七杀', '破军', '贪狼'],
    resonancePoint: '杀破狼能量的极致体现。一生在突破人类认知边界，越受质疑越爆发，把不可能变成现实。',
    resonancePointEn: 'A textbook incarnation of Sha-Po-Lang breakthrough energy, defying conventional wisdom to unlock frontiers.',
    takeawayQuote: '「如果某件事足够重要，即使几率对你极其不利，你也应当去做。」',
    takeawayQuoteEn: '"When something is important enough, you do it even if the odds are not in your favor."'
  },
  {
    id: 'ren-zhengfei',
    name: '任正非',
    nameEn: 'Ren Zhengfei',
    title: '华为创始人 · 极限承压与攻坚统帅',
    titleEn: 'Founder of Huawei · Resilient Wartime Commander',
    avatarBadge: '🛡️',
    ipFamilyId: 'disruption_pioneer',
    keyStars: ['七杀'],
    resonancePoint: '逆风翻盘的将帅风骨。面对极限施压展现出惊人的战略定力，带领团队在危机中硬生生撕开突围之路。',
    resonancePointEn: 'Unwavering fortitude under extreme external pressure, converting systemic siege into an epic triumph.',
    takeawayQuote: '「烧不死的鸟是凤凰。从泥坑里爬起来的人，才是真正的圣人。」',
    takeawayQuoteEn: '"The bird that survives the inferno is the phoenix. Real strength is forged in the trenches."'
  },

  // ── E. 信任导师型 ──
  {
    id: 'kazuo-inamori',
    name: '稻盛和夫',
    nameEn: 'Kazuo Inamori',
    title: '京瓷创始人 · 经营哲学导师',
    titleEn: 'Founder of Kyocera · Master of Business Philosophy',
    avatarBadge: '🌱',
    ipFamilyId: 'trust_mentor',
    keyStars: ['天梁', '天同'],
    resonancePoint: '德行载物的宗师典范。以敬天爱人的人生哲学浸润人心，品牌影响力建立在坚不可摧的伦理与长期信任之上。',
    resonancePointEn: 'Lineage mentor guided by virtuous stewardship. Built an enduring brand rooted in benevolence and timeless principles.',
    takeawayQuote: '「作为人，何为正确？心纯见真，利他才是最好的利己。」',
    takeawayQuoteEn: '"What is right as a human being? Altruism is ultimately the highest form of self-actualization."'
  },
  {
    id: 'yao-ming',
    name: '姚明',
    nameEn: 'Yao Ming',
    title: '篮球名人堂巨星 · 全球体育公信力大使',
    titleEn: 'Basketball Hall of Famer · Global Ambassador of Trust',
    avatarBadge: '🤝',
    ipFamilyId: 'trust_mentor',
    keyStars: ['天梁'],
    resonancePoint: '谦逊高大、温厚可靠的形象图腾。用长期的克制、幽默与担当，赢得东西方世界一致的深厚尊重与托付。',
    resonancePointEn: 'Generous warmth, integrity, and towering reliability, bridging cultural divides through universal respect.',
    takeawayQuote: '「无论是球场还是人生，真诚与尊重才能让你走得更远。」',
    takeawayQuoteEn: '"On or off the court, sincere respect is what carries you across the longest journeys."'
  },

  // ── F. 实战结果型 ──
  {
    id: 'lei-jun',
    name: '雷军',
    nameEn: 'Lei Jun',
    title: '小米集团创始人 · 硬核实操变现实干家',
    titleEn: 'Founder of Xiaomi · Hardcore Operational Executor',
    avatarBadge: '🎯',
    ipFamilyId: 'execution_results',
    keyStars: ['武曲', '太阳'],
    resonancePoint: '极度注重细节与落地交付的实战派标杆。不玩虚无缥缈的营销，真刀真枪做产品，用硬核性价比征服市场。',
    resonancePointEn: 'Relentless focus on pragmatic deliverables and tangible metrics, winning market trust through undeniable execution.',
    takeawayQuote: '「生死看淡，不服就干。认认真真做好每一件小事，结果自然会发生。」',
    takeawayQuoteEn: '"Put in the hard yards without excuses. Deliver authentic value, and the market responds."'
  },
  {
    id: 'cho-tak-wong',
    name: '曹德旺',
    nameEn: 'Cho Tak Wong',
    title: '福耀玻璃创始人 · 全球汽车玻璃工业实干家',
    titleEn: 'Founder of Fuyao Glass · Industrial Execution Titan',
    avatarBadge: '💎',
    ipFamilyId: 'execution_results',
    keyStars: ['武曲'],
    resonancePoint: '心无旁骛的实业家。一辈子只做一片玻璃，以极强的工匠执行力和商业闭环能力做到世界第一。',
    resonancePointEn: 'Laser-focused industrial dedication. Dedicates a lifetime to mastering one domain, forging global dominance through execution.',
    takeawayQuote: '「做人要有一颗感恩的心，做事要脚踏实地，没有捷径可走。」',
    takeawayQuoteEn: '"Ground yourself in disciplined craftsmanship. There are no shortcuts to authentic mastery."'
  }
];

export function getFamousLeadersForArchetype(ipFamilyId: IPFamilyId): FamousLeader[] {
  const matches = FAMOUS_LEADERS.filter(l => l.ipFamilyId === ipFamilyId);
  return matches.length > 0 ? matches : FAMOUS_LEADERS.slice(0, 2);
}
