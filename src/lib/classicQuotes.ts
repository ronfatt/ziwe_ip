// ==========================================
// 古籍原典背书库 (《紫微斗数全书》/《骨髓赋》)
// 融入易玺老师个人品牌与现代商业战略转译
// ==========================================

export interface ClassicQuote {
  star: string;
  source: string;
  sourceEn: string;
  originalText: string;
  originalTextEn: string;
  modernInsight: string;
  modernInsightEn: string;
}

export const CLASSIC_STAR_QUOTES: Record<string, ClassicQuote> = {
  紫微: {
    star: '紫微',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '紫微帝座为众星之尊，得辅弼为相，得昌曲为秀。面南称帝，化被万方。',
    originalTextEn: 'Ziwei, the Sovereign Emperor, reigns supreme among all stars; assisted by Left and Right, elevated by literary brilliance.',
    modernInsight: '【易玺老师·IP点睛】天生自带王者气场与顶层视野。不必在细碎执行中内耗，你站立的地方就是核心，以宏大格局与标准输出吸引千军万马。',
    modernInsightEn: 'Master Yixi Insight: Natural sovereign presence. Avoid being bogged down by trivial execution; articulate grand industry frameworks and command natural authority.'
  },
  天机: {
    star: '天机',
    source: '《紫微斗数全书》',
    sourceEn: 'Complete Compendium of Ziwei Doushu',
    originalText: '天机为智慧之宿，敏捷而善筹谋，与人多智，察人微细，动静皆宜。',
    originalTextEn: 'Tianji is the star of strategic wisdom and mental agility, keen in foresight and systemic design.',
    modernInsight: '【易玺老师·IP点睛】你的核心武器是战略推演与认知深度。比市场多看三步棋，用方法论和认知闭环打造让对手难以复制的智慧护城河。',
    modernInsightEn: 'Master Yixi Insight: Your core weapon is foresight and methodological clarity. Think three steps ahead to build a defensible strategic moat.'
  },
  太阳: {
    star: '太阳',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '太阳为大贵之曜，官禄之主，光明普照，利于公义与声名远播。',
    originalTextEn: 'Taiyang embodies radiant nobility and public acclaim, illuminating afar with boundless energy.',
    modernInsight: '【易玺老师·IP点睛】自带聚光灯与破圈穿透力。勇敢站上演讲台与镜头前，用大爱与利他精神照耀公众，你的声量就是你的生产力。',
    modernInsightEn: 'Master Yixi Insight: Natural radiance in front of audiences. Stand boldly under the spotlight to build high-reach, mission-driven public authority.'
  },
  武曲: {
    star: '武曲',
    source: '《紫微斗数全书》',
    sourceEn: 'Complete Compendium of Ziwei Doushu',
    originalText: '武曲为财帛之主，刚毅果决，行事严谨，用兵有法，生财有道。',
    originalTextEn: 'Wuqu commands the Wealth Palace with resolute pragmatism and tactical discipline.',
    modernInsight: '【易玺老师·IP点睛】不谈空洞情怀，一切用真实数据与变现结果说话。用极度扎实的实战交付与铁血执行力，树立硬核结果型标杆。',
    modernInsightEn: 'Master Yixi Insight: Zero fluff, pure execution. Build an unshakable reputation around verifiable results and clear commercial returns.'
  },
  天同: {
    star: '天同',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '天同为福德之曜，温良清润，化解百难，主亲和长情与同理之德。',
    originalTextEn: 'Tiantong radiates gentle benevolence and enduring warmth, resolving friction with profound empathy.',
    modernInsight: '【易玺老师·IP点睛】极高亲和力与润物细无声的情感疗愈力。学员购买的不只是课程，更是对你人格的长期托付与情感依赖。',
    modernInsightEn: 'Master Yixi Insight: Deep relational empathy. Attendees invest not merely in your products, but in your human warmth and authentic companionship.'
  },
  廉贞: {
    star: '廉贞',
    source: '《紫微斗数全书》',
    sourceEn: 'Complete Compendium of Ziwei Doushu',
    originalText: '廉贞主气场独特，立异求新，才艺绝群，兼具锋芒与权威之风。',
    originalTextEn: 'Lianzhen projects intense magnetism, original aesthetic mastery, and bold conviction.',
    modernInsight: '【易玺老师·IP点睛】极具辨识度的个人主张与独特美感。拒绝平庸折中，用鲜明锋利的观点吸引真正同频的铁杆忠粉。',
    modernInsightEn: 'Master Yixi Insight: Unmistakable stylistic identity and incisive points of view. Reject mediocrity to foster fierce brand loyalty.'
  },
  天府: {
    star: '天府',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '天府为南斗令星，号称财库，雍容稳重，兼纳百川，守正而出奇。',
    originalTextEn: 'Tianfu is the celestial treasury of the South, steady, magnanimous, and conserving long-term capital.',
    modernInsight: '【易玺老师·IP点睛】大盘操盘手与资本沉淀者。擅长构建稳定生态与长青品牌，靠深度信任与高客单持续沉淀品牌无形资产。',
    modernInsightEn: 'Master Yixi Insight: The ultimate platform architect and steward. Cultivate lasting trust and compound brand equity through high-ticket stability.'
  },
  太阴: {
    star: '太阴',
    source: '《紫微斗数全书》',
    sourceEn: 'Complete Compendium of Ziwei Doushu',
    originalText: '太阴为富宿，主母仪天下与细腻审美，心思洞若观火，润物无声。',
    originalTextEn: 'Taiyin bestows deep aesthetic refinement, subtle perceptiveness, and nurturing elegance.',
    modernInsight: '【易玺老师·IP点睛】极致审美、细腻感知与高阶品味。以润物无声的方式塑造高端品牌调性，让用户在极具质感的情境中主动买单。',
    modernInsightEn: 'Master Yixi Insight: Supreme aesthetic curation and subtle resonance. Inspire premium conversions through impeccable atmosphere and craftsmanship.'
  },
  贪狼: {
    star: '贪狼',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '贪狼为灵动机变之神，才艺百端，极具交游之能，风云际会能成大事。',
    originalTextEn: 'Tanlang is the master of charismatic engagement and versatile artistry, seizing opportunities at the confluence of trends.',
    modernInsight: '【易玺老师·IP点睛】风口捕手与爆款发动机。拥有调动大众情绪与社交好奇心的天才天赋，善于创造话题并迅速实现流量变现。',
    modernInsightEn: 'Master Yixi Insight: Master trend capturer and viral catalyst. Possesses the innate gift of captivating audience emotions and driving high conversion.'
  },
  巨门: {
    star: '巨门',
    source: '《紫微斗数全书》',
    sourceEn: 'Complete Compendium of Ziwei Doushu',
    originalText: '巨门为辨才之主，善解机微，明察秋毫，言出必有骨力，振聋发聩。',
    originalTextEn: 'Jumen commands dialectical articulation, penetrating truth, and resonant intellectual clarity.',
    modernInsight: '【易玺老师·IP点睛】言出必达的超级布道者。敢于直击行业痛点、拆穿虚假包装，你的言辞如同手术刀，用深度真知重建行业认知。',
    modernInsightEn: 'Master Yixi Insight: The definitive truth-teller and public evangelist. Dissect industry illusions with surgical precision to set cognitive benchmarks.'
  },
  天相: {
    star: '天相',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '天相为印星，辅佐帝座，司衣食之荣，公正稳妥，端方有信。',
    originalTextEn: 'Tianxiang is the prime seal of state, bestowing honor, balanced diplomacy, and institutional credibility.',
    modernInsight: '【易玺老师·IP点睛】行业最高信誉官与超级赋能枢纽。作为各方信赖的战略推手与合伙人，适合构建高端圈层与资源整合商业体。',
    modernInsightEn: 'Master Yixi Insight: The trusted institutional envoy and strategic orchestrator. Excel at high-net-worth alliances and enterprise advisory.'
  },
  天梁: {
    star: '天梁',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '天梁为老人星、荫庇之主，性情清高，好为人师，逢凶化吉，福泽延绵。',
    originalTextEn: 'Tianliang is the venerated mentor star, bestowing protective stewardship, wisdom, and moral prestige.',
    modernInsight: '【易玺老师·IP点睛】德高望重的宗师型导师。以深厚阅历与崇高伦理引导学员走正道，你的品牌自带穿越周期的时间复利与精神图腾。',
    modernInsightEn: 'Master Yixi Insight: Venerated lineage mentor. Guide audiences through enduring principles, commanding generational reverence and compounding trust.'
  },
  七杀: {
    star: '七杀',
    source: '《紫微斗数全书》',
    sourceEn: 'Complete Compendium of Ziwei Doushu',
    originalText: '七杀为将星，斗中之上将，勇冠三军，不畏艰难，逆流而上成大功。',
    originalTextEn: 'Qisha is the celestial commander, forging triumph through relentless determination in the face of adversity.',
    modernInsight: '【易玺老师·IP点睛】无所畏惧的先锋战将。敢于在危机中反向冲锋，用雷霆魄力带领团队打硬仗，以不可阻挡的战绩确立行业威信。',
    modernInsightEn: 'Master Yixi Insight: Fearless battlefield commander. Charge against headwinds and turn turbulence into definitive competitive breakthroughs.'
  },
  破军: {
    star: '破军',
    source: '《骨髓赋》',
    sourceEn: 'Aphorisms of the Marrow (Gu Sui Fu)',
    originalText: '破军为开路先锋，破而后立，大破大立，不立危墙，敢造全新乾坤。',
    originalTextEn: 'Pojun is the trailblazer of renewal, courageously dismantling the obsolete to forge a new paradigm.',
    modernInsight: '【易玺老师·IP点睛】颠覆性商业重构者。不屑于在旧赛道内卷，敢于推倒陈腐重塑全新商业模式，做定义新蓝海的划时代领袖。',
    modernInsightEn: 'Master Yixi Insight: Paradigm-shifting disruptor. Refuse to compete in stale red oceans; reinvent rules to pioneer an uncontested blue ocean.'
  }
};

export function getClassicQuoteForStars(stars: string[]): ClassicQuote | undefined {
  if (!stars || stars.length === 0) return CLASSIC_STAR_QUOTES['紫微'];
  for (const s of stars) {
    if (CLASSIC_STAR_QUOTES[s]) return CLASSIC_STAR_QUOTES[s];
  }
  return CLASSIC_STAR_QUOTES['紫微'];
}
