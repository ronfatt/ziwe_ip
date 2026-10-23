// ==========================================
// ZIWEI IP DNA Strategic System | Internationalization (i18n) Module
// Complete English Data Dictionary & Cultural Brand Mapping
// Supporting Singapore, Malaysia, Hong Kong, Taiwan & Global Markets
// ==========================================

import { IPFamilyId, ElementKey } from './previewV01Data';

export const STAR_NAME_EN: Record<string, { en: string; title: string }> = {
  紫微: { en: 'Zi Wei', title: 'The Emperor (Zi Wei)' },
  天机: { en: 'Tian Ji', title: 'The Strategist (Tian Ji)' },
  太阳: { en: 'Tai Yang', title: 'The Sun (Tai Yang)' },
  武曲: { en: 'Wu Qu', title: 'The General (Wu Qu)' },
  天同: { en: 'Tian Tong', title: 'The Harmonizer (Tian Tong)' },
  廉贞: { en: 'Lian Zhen', title: 'The Diplomat (Lian Zhen)' },
  天府: { en: 'Tian Fu', title: 'The Treasury (Tian Fu)' },
  太阴: { en: 'Tai Yin', title: 'The Moon (Tai Yin)' },
  贪狼: { en: 'Tan Lang', title: 'The Innovator (Tan Lang)' },
  巨门: { en: 'Ju Men', title: 'The Advocate (Ju Men)' },
  天相: { en: 'Tian Xiang', title: 'The Chancellor (Tian Xiang)' },
  天梁: { en: 'Tian Liang', title: 'The Sage (Tian Liang)' },
  七杀: { en: 'Qi Sha', title: 'The Vanguard (Qi Sha)' },
  破军: { en: 'Po Jun', title: 'The Pioneer (Po Jun)' }
};

export const PALACE_NAME_EN: Record<string, string> = {
  命宫: 'Life Palace',
  兄弟宫: 'Siblings Palace',
  夫妻宫: 'Spouse Palace',
  子女宫: 'Children Palace',
  财帛宫: 'Wealth Palace',
  疾厄宫: 'Health Palace',
  迁移宫: 'Migration Palace',
  交友宫: 'Friends / Audience Palace',
  官禄宫: 'Career Palace',
  田宅宫: 'Assets Palace',
  福德宫: 'Mind & Soul Palace',
  父母宫: 'Parents Palace',
  身宫: 'Body Palace (Shen Palace)'
};

export const BUREAU_NAME_EN: Record<string, string> = {
  水二局: 'Water 2nd Bureau',
  木三局: 'Wood 3rd Bureau',
  金四局: 'Metal 4th Bureau',
  土五局: 'Earth 5th Bureau',
  火六局: 'Fire 6th Bureau'
};

export const SHEN_PALACE_IMPACT_EN: Record<string, string> = {
  命宫: 'Life & Body Unified: Independent visionary, self-driven mastery, unwilling to compromise personal principles.',
  夫妻宫: 'Body in Spouse Palace: Deep trust, win-win co-founders, and meaningful intimate bonds serve as your ultimate life pillars.',
  财帛宫: 'Body in Wealth Palace: Acutely attuned to commercial reality, cashflow ROI, and high-value transactional efficiency.',
  迁移宫: 'Body in Migration Palace: Destined for the global public stage, highly attuned to external market validation and audience connection.',
  官禄宫: 'Body in Career Palace: Relentless career commitment, striving for professional excellence, domain authority, and industry stature.',
  福德宫: 'Body in Mind & Soul Palace: Values intellectual freedom, spiritual sovereignty, and aligned inner conviction above all.'
};

export const IP_FAMILIES_EN: Record<IPFamilyId, {
  name: string;
  tagline: string;
  keywords: string[];
  ipAdvantage: string;
  contentTendency: string;
  oneLiner: string;
  coreDriver: string;
  avatarUrl?: string;
}> = {
  leader_authority: {
    name: 'Leader & Authority',
    tagline: 'The Direction Setter · Visionary Leadership · Standard Creator',
    keywords: ['Vision', 'Leadership', 'Coordination', 'Authority', 'Synergy', 'Standards', 'Order'],
    ipAdvantage: 'Best suited to build: Executive Authority, Founder IP, Strategic Advisory, Leadership IP, Corporate Governance IP.',
    contentTendency: 'Strategic Frameworks, Decision-Making Case Studies, Trend Forecasts, Executive Perspectives.',
    oneLiner: 'You are naturally wired to lead the way, not to spend your life following others.',
    coreDriver: 'Vision · Direction · Resource Integration · Authority · Decisive Power',
    avatarUrl: '/avatars/leader_authority.png'
  },
  strategy_intelligence: {
    name: 'Strategy & Intelligence',
    tagline: 'One Step Ahead · Deep Analytical Insight · Chief Strategist',
    keywords: ['Intellect', 'Insight', 'Analysis', 'Strategy', 'Research', 'Detail', 'Discernment'],
    ipAdvantage: 'Best suited to build: Subject Matter Expert IP, Strategic Advisor, Knowledge IP, Master Thinker, Behind-the-Scenes Counsel.',
    contentTendency: 'Proprietary Methodologies, Deconstructions, Masterclasses, High-Leverage Strategic Insights.',
    oneLiner: 'Your true leverage comes from seeing three steps ahead of the crowd.',
    coreDriver: 'Deep Thinking · Insight · Structured Analysis · High-Leverage Wisdom',
    avatarUrl: '/avatars/strategy_intelligence.png'
  },
  communication_influence: {
    name: 'Voice & Influence',
    tagline: 'Compelling Orator · Cross-Boundary Resonance · Magnetic Gravity',
    keywords: ['Expression', 'Influence', 'Storytelling', 'Charisma', 'Networking', 'Attention', 'Engagement'],
    ipAdvantage: 'Best suited to build: Media IP, Anchor / Keynote Speaker IP, Opinion Leader, Lifestyle IP, High-Conversion Social Brand.',
    contentTendency: 'Provocative Perspectives, Relatable Stories, In-Depth Interviews, High-Engagement Media.',
    oneLiner: 'Your superpower is not just what you know, but making people love listening to you.',
    coreDriver: 'Vocal Impact · Storytelling · Audience Magnetism · Cultural Resonance',
    avatarUrl: '/avatars/communication_influence.png'
  },
  disruption_pioneer: {
    name: 'Pioneer & Disruptor',
    tagline: 'Courage to Lead First · Paradigm Shifter · Bold Stance',
    keywords: ['Pioneer', 'Reform', 'Breakthrough', 'Challenge', 'Transformation', 'Audacity', 'Unconventional'],
    ipAdvantage: 'Best suited to build: Entrepreneurial Trailblazer, Industry Challenger, Bold Opinion IP, Turnaround Consultant.',
    contentTendency: 'Challenging Legacy Mindsets, Exposing Systemic Flaws, Radical Transformations, Contrarian Theses.',
    oneLiner: 'Your true worth shines when everyone else hesitates, and you dare to take the first leap.',
    coreDriver: 'Audacity · Radical Innovation · Unconventional Angles · Relentless Momentum',
    avatarUrl: '/avatars/disruption_pioneer.png'
  },
  trust_mentor: {
    name: 'Trust & Mentor',
    tagline: 'Enduring Trust · Empathic Guide · Lifelong Mentor',
    keywords: ['Trust', 'Empathy', 'Mentorship', 'Wisdom', 'Care', 'Integrity', 'Protection'],
    ipAdvantage: 'Best suited to build: Master Mentor IP, Holistic Educator, Transformational Coach, Trusted Family / Brand Advisory.',
    contentTendency: 'Transformational Pedagogy, Life Mastery Reflections, Student Growth Stories, Long-Horizon Principles.',
    oneLiner: 'Your deepest commercial gravity comes from people willing to trust you for life.',
    coreDriver: 'Deep Trust · Lifelong Companionship · Generational Wisdom · Grounded Integrity',
    avatarUrl: '/avatars/trust_mentor.png'
  },
  execution_results: {
    name: 'Execution & Results',
    tagline: 'Proven Outcomes · Pragmatic Builder · Impact Driver',
    keywords: ['Action', 'Execution', 'Results', 'Ownership', 'Pragmatism', 'Impact', 'Validation'],
    ipAdvantage: 'Best suited to build: Implementation Expert, High-ROI Operator, Battle-Tested Builder, Performance Advisor.',
    contentTendency: 'Real Case Studies, Hard Data, Transparent Before/After Metrics, Actionable Blueprints.',
    oneLiner: 'Rather than speaking eloquently, you let undeniable results earn market reverence.',
    coreDriver: 'Decisive Action · Flawless Delivery · Quantifiable Impact · Real World Execution',
    avatarUrl: '/avatars/execution_results.png'
  }
};

export const ELEMENT_BOOSTERS_EN: Record<ElementKey, {
  name: string;
  boost: string;
  keywords: string[];
  copy: string;
  suggestion: string;
  oneLiner: string;
  outfitColors: string[];
  backdropStyle: string;
}> = {
  wood: {
    name: 'Wood Element IP Booster',
    boost: 'Growth Power',
    keywords: ['Expansion', 'Continuous Evolution', 'Organic Vitality', 'Long-term Compounding'],
    copy: 'Your brand is naturally tuned to the Wood element. Infusing upward vitality, life-cycle evolution, and sustainable growth narratives will make your audience perceive boundless future upside.',
    suggestion: 'Focus on growth curves, evolution narratives, mentorship incubators, and compounding frameworks.',
    oneLiner: 'Let your brand embody flourishing life: rooted deeply in wisdom, constantly reaching toward new horizons.',
    outfitColors: ['Forest Green', 'Emerald Sage', 'Earth Khaki', 'Natural Olive'],
    backdropStyle: 'Botanical natural lighting, light wood architecture, expansive open space with organic textures.'
  },
  fire: {
    name: 'Fire Element IP Booster',
    boost: 'Exposure Power',
    keywords: ['Visibility', 'Stage Charisma', 'Passionate Energy', 'Inspirational Resonance'],
    copy: 'Your brand is energized by the Fire element. Leveraging spotlight visibility, dynamic stage presence, and infectious charisma allows you to instantly seize audience attention and achieve viral reach.',
    suggestion: 'Prioritize keynote presentations, live broadcasts, passionate thought leadership, and emotionally evocative visual design.',
    oneLiner: 'Do not shy away from the spotlight; your natural radiance is the exact beacon your audience is searching for.',
    outfitColors: ['Ruby Red', 'Solar Crimson', 'Royal Gold', 'Burnt Amber'],
    backdropStyle: 'High-contrast studio spotlights, warm amber backlighting, dynamic architectural depth.'
  },
  earth: {
    name: 'Earth Element IP Booster',
    boost: 'Trust Power',
    keywords: ['Stability', 'Grounded Authority', 'Reliable Standard', 'Unshakeable Gravitas'],
    copy: 'Your brand thrives on the Earth element. Emphasizing institutional stability, grounded methodology, and dependable operational rigor will make high-ticket clients view you as the ultimate safe haven.',
    suggestion: 'Position yourself as the foundational rock: structured systems, robust security frameworks, and risk-managed delivery.',
    oneLiner: 'When others chase fleeting hypes, your unshakeable stability commands the highest premium.',
    outfitColors: ['Warm Camel', 'Champagne Beige', 'Terracotta Taupe', 'Deep Charcoal'],
    backdropStyle: 'Solid stone textures, sophisticated gallery interior, clean bookshelf library backdrop.'
  },
  metal: {
    name: 'Metal Element IP Booster',
    boost: 'Precision Power',
    keywords: ['Sharp Edge', 'Executive Standard', 'Definitive Rules', 'Flawless Execution'],
    copy: 'Your brand is powered by the Metal element. Infusing razor-sharp clarity, premium curation, and definitive craftsmanship makes your IP stand out as an indispensable luxury tier in your sector.',
    suggestion: 'Emphasize precision execution, proprietary benchmarks, surgical deconstruction, and decisive standards.',
    oneLiner: 'Cut through ambiguity with precision: deliver the definitive benchmark that competitors cannot replicate.',
    outfitColors: ['Crisp Optical White', 'Titanium Silver', 'Midnight Obsidian', 'Platinum Gray'],
    backdropStyle: 'Minimalist metallic aesthetics, glass partitions, sleek executive desk with clean geometric lines.'
  },
  water: {
    name: 'Water Element IP Booster',
    boost: 'Insight Power',
    keywords: ['Profound Depth', 'Agile Adaptation', 'Audience Empathy', 'Ecosystem Synergy'],
    copy: 'Your brand is amplified by the Water element. Demonstrating fluid adaptability, psychological depth, and cross-boundary connection empowers you to navigate any market pivot with grace.',
    suggestion: 'Champion intuitive deconstruction, non-obvious market insights, ecosystem matchmaking, and holistic synergy.',
    oneLiner: 'Like water adapting to every vessel: soft yet conquering, effortlessly flowing around all resistance.',
    outfitColors: ['Midnight Navy', 'Deep Azure', 'Ink Black', 'Ethereal Slate Blue'],
    backdropStyle: 'Reflective crystal glass surfaces, moody deep navy ambient tones, flowing fluid textures.'
  }
};

export const SINGLE_STAR_ARCHETYPES_EN: Record<string, {
  singleArchetype: string;
  tags: string[];
  coreAdvantages: string[];
  externalPerception: string[];
}> = {
  紫微: {
    singleArchetype: 'The Sovereign Monarch',
    tags: ['Leadership', 'Grand Vision', 'Natural Authority'],
    coreAdvantages: [
      'Naturally commands the macro view; excels at setting overarching strategic directions',
      'Exudes innate executive presence, unencumbered by petty details or reactive chaos',
      'Highly suited for enterprise-grade advisory, high-ticket consulting, and visionary founder IP',
      'Decisive under pressure, naturally becoming the stabilizing anchor for teams and followers'
    ],
    externalPerception: [
      'Instantly perceived as weighty, composed, and commanding undeniable respect',
      'Effortlessly commands authority and stage presence in front of cameras and audiences',
      'Strangers instinctively entrust high-stakes decisions to your leadership'
    ]
  },
  天机: {
    singleArchetype: 'The Master Strategist',
    tags: ['Strategy', 'Analysis', 'Chief Counsel'],
    coreAdvantages: [
      'Incredibly agile intellect; rapidly identifies systemic vulnerabilities and non-obvious solutions',
      'Master of methodology; distills complex, chaotic ideas into structured, actionable frameworks',
      'Premier behind-the-scenes advisor; finds the optimal path across high-dimensional variables',
      'Captivates audiences through profound cognitive reframing and intellectual depth'
    ],
    externalPerception: [
      'Market immediately registers your sharp intellect, clarity, and analytical precision',
      'Communicates with ironclad logic, structured reasoning, and clear pedagogy',
      'The first person leaders turn to when confronted with complex, paralyzing bottlenecks'
    ]
  },
  太阳: {
    singleArchetype: 'The Radiant Luminary',
    tags: ['Influence', 'Visionary', 'Altruistic Drive'],
    coreAdvantages: [
      'Fierce proactive ownership and mission-driven generosity; thrives on the public stage',
      'Deep emotional contagiousness; naturally built for mass communication and inspiring movements',
      'Generous, expansive mindset that easily amasses broad goodwill, public acclaim, and high reputation',
      'Builds profound public trust by championing noble causes, transparency, and communal empowerment'
    ],
    externalPerception: [
      'Felt by the market as warm, candid, honorable, and brimming with infectious vitality',
      'Radiates authenticity and magnetic conviction on camera, disarming audience skepticism',
      'Commands immense credibility, naturally magnetizing seekers in search of illumination'
    ]
  },
  武曲: {
    singleArchetype: 'The Hardcore Operator',
    tags: ['Execution', 'Proven Results', 'Commercial Realism'],
    coreAdvantages: [
      'Relentlessly focused on tangible bottom-line outcomes; refuses theoretical fluff',
      'Exceptional execution velocity; rapidly translates abstract concepts into cashflow products',
      'Acutely sensitive to commercial economics; lets hard data and validated milestones do the talking',
      'Ideal for outcome-guaranteed, high-accountability, performance-driven IP offerings'
    ],
    externalPerception: [
      'Instantly recognized as pragmatic, highly capable, and intensely outcome-oriented',
      'Cuts straight to the point on camera: zero fluff, maximum high-density value',
      'Clients place absolute faith in your ability to generate real, quantifiable transformation'
    ]
  },
  天同: {
    singleArchetype: 'The Empathic Harmonizer',
    tags: ['Warmth', 'Affinity', 'Restorative Field'],
    coreAdvantages: [
      'Profound emotional empathy and accessibility; dissolves barriers in seconds',
      'Exceptional listener; creates a deeply safe, restorative space for vulnerable connection',
      'Never triggers toxic rivalry; blessed with effortless relational harmony and benefactor luck',
      'Perfect for nurturing community ecosystems, wellbeing brands, and enduring relationship-based IP'
    ],
    externalPerception: [
      'Felt as completely non-threatening, gentle, generous, and delightfully approachable',
      'Audiences readily lower their emotional armor and share their deepest, truest aspirations',
      'Exudes natural restorative charm, securing deep and lasting audience affection'
    ]
  },
  廉贞: {
    singleArchetype: 'The Bold Provocateur',
    tags: ['Standpoint', 'Magnetism', 'Paradigm Shift'],
    coreAdvantages: [
      'Uncompromising individuality and razor-sharp perspective; refuses mediocre consensus',
      'Innate, avant-garde aesthetic instinct; crafts striking, unforgettable visual branding',
      'Master at dismantling stale dogma; attacks markets with counter-intuitive, bold theses',
      'Perfect for high-definition, polarized, cult-following thought leadership IP'
    ],
    externalPerception: [
      'Leaves an unforgettable, distinct, and strikingly charismatic first impression',
      'Electrifying presence on camera; bold viewpoints that linger in the audience\'s mind',
      'Audiences either passionately rally around you or are deeply captivated by your audacity'
    ]
  },
  天府: {
    singleArchetype: 'The Sovereign Builder',
    tags: ['Asset Curation', 'Ecosystem', 'Solidity'],
    coreAdvantages: [
      'Superior resource orchestration and capital stewardship; built for ecosystem scale',
      'Disciplined, risk-controlled approach; champions long-term compounding over fleeting trends',
      'Naturally aligns disparate resources into self-sustaining, recurring commercial engines',
      'Ideal for enterprise foundations, brand asset governance, and enduring business schools'
    ],
    externalPerception: [
      'Instantly conveys an unshakeable sense of legacy, heritage, and institutional gravitas',
      'Projects absolute stability, giving high-stakes clients complete peace of mind',
      'Major corporate accounts and institutional partners naturally seek foundational alliances with you'
    ]
  },
  太阴: {
    singleArchetype: 'The Nurturing Visionary',
    tags: ['Intuition', 'Patience', 'Aesthetic Depth'],
    coreAdvantages: [
      'Deep psychological intuition and emotional subtlety; senses subtle cultural undercurrents',
      'Master of long-term compounding; steadily accumulates assets and trust like compound interest',
      'Exquisite taste and emotional sensitivity; transforms products into heartfelt artistic experiences',
      'Highly suited for private-wealth curation, aesthetic lifestyle brands, and transformational incubators'
    ],
    externalPerception: [
      'Perceived as elegant, perceptive, deeply considerate, and emotionally comforting',
      'Builds audience loyalty quietly and deeply; listeners feel intimately understood and valued',
      'Attracts premium patrons who resonate with refined craftsmanship and emotional sophistication'
    ]
  },
  贪狼: {
    singleArchetype: 'The Multi-Hyphenate Innovator',
    tags: ['Desire', 'Adaptability', 'Cultural Polymath'],
    coreAdvantages: [
      'Electrifying curiosity and versatility; effortlessly bridges diverse domains and subcultures',
      'Acutely senses audience desires; creates offerings that spark irresistible cravings',
      'Master of the social arena; connects with anyone effortlessly across all social tiers',
      'Ideal for lifestyle trends, high-energy networking hubs, experiential IP, and cultural lifestyle empires'
    ],
    externalPerception: [
      'Exudes dazzling charisma, multi-faceted intrigue, and vibrant social magnetism',
      'Commands audience fascination on camera; dynamic, witty, and impossible to pigeonhole',
      'Audiences are magnetically drawn into your lifestyle, taste, and vibrant worldview'
    ]
  },
  巨门: {
    singleArchetype: 'The Truth Advocate',
    tags: ['Deconstruction', 'Eloquence', 'Critical Truth'],
    coreAdvantages: [
      'Penetrating analytical mind; sees straight through corporate facades and buzzwords',
      'Exceptional gift of oratory; deconstructs complicated truths with surgical clarity',
      'Natural champion for consumer rights and industry transparency; builds deep, principled trust',
      'Ideal for investigative reviews, educational commentary, and high-trust advisory IP'
    ],
    externalPerception: [
      'Viewed as outspoken, intellectually rigorous, razor-sharp, and courageous',
      'On camera, speaks with clarity and conviction that commands immediate attention',
      'Followers trust your objective word over polished marketing hype every time'
    ]
  },
  天相: {
    singleArchetype: 'The Trusted Chancellor',
    tags: ['Elegance', 'Diplomacy', 'Quality Seal'],
    coreAdvantages: [
      'Incomparable diplomatic grace; harmonizes complex interpersonal and organizational tensions',
      'Impeccable ethical standards and taste; acts as the living seal of quality and trust',
      'Flawless operational professionalism; excels as the premier co-founder or strategic chief of staff',
      'Ideal for high-end boutique advisory, industry accreditation, and executive concierge IP'
    ],
    externalPerception: [
      'Exudes dignified refinement, impeccable etiquette, and trustworthy professional poise',
      'Projects balanced, fair-minded, and highly articulate composure on camera',
      'Decision-makers eagerly rely on your judgment to mediate critical alliances'
    ]
  },
  天梁: {
    singleArchetype: 'The Grand Mentor',
    tags: ['Elder Wisdom', 'Protection', 'Generational Legacy'],
    coreAdvantages: [
      'Innate spiritual maturity and ethical gravitas; naturally sought out for life guidance',
      'Fearless sense of duty; stands as the protective roof for mentees during severe storms',
      'Masters generational wisdom; distills timeless principles that withstand market volatility',
      'Ideal for master academies, elder-counsel IP, and timeless philosophical leadership'
    ],
    externalPerception: [
      'Carries the honorable dignity of an accomplished mentor; deeply reassuring and paternal',
      'Words carry historical depth and moral weight on camera, commanding quiet reverence',
      'Mentees remain loyal for decades, treating your guidance as their north star'
    ]
  },
  七杀: {
    singleArchetype: 'The Vanguard Commander',
    tags: ['Courage', 'Decisive', 'Breakthrough Vanguard'],
    coreAdvantages: [
      'Unyielding resolve to conquer virgin territory; leads from the front lines of adversity',
      'Extraordinary crisis tolerance; turns dire setbacks into high-leverage market breakthroughs',
      'Refuses complacency; sets ambitious targets and achieves them through sheer willpower',
      'Ideal for turnaround operators, high-stakes coaching, and zero-to-one venture pioneers'
    ],
    externalPerception: [
      'Commands instant respect with an intense, fearless, and unmistakably decisive aura',
      'Exudes electric grit and unstoppable forward drive on camera; awakens stagnant audiences',
      'Followers paralyzed by hesitation find instant courage in your audacious confidence'
    ]
  },
  破军: {
    singleArchetype: 'The Creative Disruptor',
    tags: ['Revolution', 'Regeneration', 'Bold Reinvention'],
    coreAdvantages: [
      'Radical creator who fearlessly tears down obsolete structures to build the new',
      'Thrives in disruptive volatility; consistently innovates before market stagnation hits',
      'Unbound by conventional dogma; envisions entirely new business models and cultural formats',
      'Ideal for paradigm-shifting founders, boundary-breaking creators, and innovation prophets'
    ],
    externalPerception: [
      'Perceived as a daring visionary, unpredictable, bold, and fiercely original',
      'Captivates audiences on camera through revolutionary concepts that shatter legacy norms',
      'Audiences seeking liberation from outdated paradigms naturally gravitate to your crusade'
    ]
  }
};

// ==========================================
// 24 Classic Dual-Star Archetypes in English
// ==========================================
export const DUAL_STAR_ARCHETYPES_EN: Record<string, {
  archetype: string;
  keywords: string[];
  coreAdvantages: string[];
  externalPerception: string[];
  collisionSummary: string;
}> = {
  ziwei_tanlang: {
    archetype: 'The Charismatic Sovereign',
    keywords: ['Leadership', 'Charisma', 'Presence', 'Influence'],
    coreAdvantages: [
      'Innate commanding leadership presence paired with electrifying personal magnetism',
      'Effortlessly forms an irreplaceable and unforgettable persona in the minds of audiences',
      'Highly suited to build category-defining personal brand empires with cult followings',
      'Personal charisma acts as an appreciating intangible balance-sheet asset',
      'Master at raising thought-leadership banners and rallying high-caliber allies'
    ],
    externalPerception: [
      'Market immediately senses your distinctive executive aura and regal charisma',
      'Commands authoritative reverence on camera while remaining delightfully engaging',
      'Audiences naturally gravitate toward your aspirational lifestyle and macro vision'
    ],
    collisionSummary: 'An intrinsic visionary commander paired with an extrinsic magnetic star. You need not put on airs—your natural vitality and social magnetism are the exact channels that amplify your macro vision.'
  },
  ziwei_tianfu: {
    archetype: 'The Supreme Empire Builder',
    keywords: ['Governance', 'Dynasty', 'Stability', 'Macro Vision'],
    coreAdvantages: [
      'Unites emperor-level strategic audacity with impeccable treasury governance and risk control',
      'Master at building scalable platform ecosystems with generational endurance',
      'Never swayed by transient market fads; relentlessly compounds high-barrier competitive moats',
      'Ideal for patriarch / matriarch founders, industry flagships, and enduring enterprise brands'
    ],
    externalPerception: [
      'Instantly conveys unshakeable institutional gravitas, stability, and historical weight',
      'Projects absolute composure in public, granting clients complete psychological security',
      'Tier-1 enterprise accounts and institutional capital eagerly seek foundational alliances with you'
    ],
    collisionSummary: 'Uniting the commanding authority of Zi Wei with the formidable treasury discipline of Tian Fu. Your brand needs no cheap hype—your unshakeable anchor position is your greatest commercial premium.'
  },
  ziwei_tianxiang: {
    archetype: 'The Executive Consigliere',
    keywords: ['High-Order', 'Strategic Counsel', 'Standards', 'Sovereign Order'],
    coreAdvantages: [
      'Able to craft macro vision while simultaneously enforcing surgical delivery standards',
      'Master at aligning multi-stakeholder interests across complex corporate and political networks',
      'Commands impeccable commercial trust, refined taste, and private-client exclusivity',
      'Ideal for confidential C-suite counsel, top-tier strategy architects, and elite advisory IP'
    ],
    externalPerception: [
      'Market immediately registers your high professionalism, executive discipline, and elite poise',
      'Speaks with measured eloquence on camera: ironclad logic, impeccable tact, and high conviction',
      'Founders and key executives eagerly recruit you into their innermost strategic councils'
    ],
    collisionSummary: 'Possessing both the strategic brain to command and the executive seal of rigorous delivery. Empowering high-potential visionaries with your impeccable standards is your highest-leverage path.'
  },
  ziwei_qisha: {
    archetype: 'The Iron Commander',
    keywords: ['Decisiveness', 'Breakthrough', 'Audacity', 'Frontline Conquest'],
    coreAdvantages: [
      'A battle-hardened commander who conquers virgin territory where others fear to tread',
      'Thrives in severe crises; leads teams through dire bottlenecks with ruthless resolve',
      'Refuses second-place mediocrity; driven by near-obsessive commitment to mission success',
      'Ideal for turnaround practitioners, crisis operators, and fearless zero-to-one venture leaders'
    ],
    externalPerception: [
      'Market instantly feels your commanding presence, razor-sharp focus, and intense aura',
      'Radiates unstoppable frontline momentum and valiant spirit on camera',
      'Paralyzed or struggling followers are instantly galvanized and awakened by your resolve'
    ],
    collisionSummary: 'Zi Wei\'s sovereign dignity forged with Qi Sha\'s relentless battle grit. Never a hothouse flower—let your hard-won victories and proven frontline scars stand as the monumental pillars of your personal brand.'
  },
  ziwei_pojun: {
    archetype: 'The Disruptive Monarch',
    keywords: ['Revolution', 'Reconstruction', 'Audacity', 'Paradigm Shift'],
    coreAdvantages: [
      'A revolutionary leader who tears down obsolete regimes to establish groundbreaking rules',
      'Insatiable drive for personal and systemic reinvention; constantly shatters comfort zones',
      'Excels at cross-boundary synthesis to birth new commercial categories and new business species',
      'Ideal for industry reformers, paradigm shifters, and avant-garde venture creators'
    ],
    externalPerception: [
      'Market immediately senses your bold rebellion and massive explosive potential',
      'Fearlessly calls out systemic industry hypocrisy on camera with unyielding conviction',
      'Next-generation innovators and restless creators are magnetically drawn to your standard'
    ],
    collisionSummary: 'Shatter legacy structures and build a new empire. Never appease complacent incumbents; your audience is the surging new vanguard eager for industry revolution.'
  },
  tianji_taiyin: {
    archetype: 'The Master Strategist & Intuitive Mind',
    keywords: ['Profound Insight', 'Cognitive Simulation', 'Subtlety', 'Intellectual Strategy'],
    coreAdvantages: [
      'Razor-sharp cognitive agility combined with deep empathy; effortlessly distills complex systems',
      'Innate psychological intuition for hidden human drivers and subtle market undercurrents',
      'Excels at designing elegant, high-conversion commercial pathways that compound silently',
      'Ideal for depth psychology, private wealth counsel, precision data growth, and elite think-tanks'
    ],
    externalPerception: [
      'Market perceives you as deeply wise, gentle, sophisticated, and completely devoid of arrogance',
      'Demonstrates surgical deconstruction skills and refined aesthetic elegance on camera',
      'Audiences feel deeply understood, safe, and enlightened in your presence'
    ],
    collisionSummary: 'Tian Ji\'s agile intellect merged with Tai Yin\'s psychological depth. Your strategy is never cold dogma, but infused with profound empathy for human nature that pierces straight to the heart.'
  },
  tianji_jumen: {
    archetype: 'The Dialectical Chief Counsel',
    keywords: ['Dialectics', 'Deep Insight', 'Logic', 'Sharp Theses'],
    coreAdvantages: [
      'Relentless analytical rigor; uses dialectical deconstruction to reveal first principles',
      'World-class oratorical power; illuminates difficult concepts with surgical clarity',
      'Master at articulating counter-intuitive insights that trigger massive industry debate',
      'Ideal for investigative commentary, intellectual super-IP, and high-ticket cognitive training'
    ],
    externalPerception: [
      'Market immediately recognizes your profound intellect and astonishing analytical depth',
      'Speaks with fluency and dense value on camera: packed with insights and zero fluff',
      'Audiences view you as an indispensable cognitive mentor and eagerly invest in your pedagogy'
    ],
    collisionSummary: 'Rigorous analytical strategy on the inside, razor-sharp viewpoints on the outside. Bridging ideas through logic and deconstruction, your cognitive depth is your premier monetization asset.'
  },
  tianji_tianliang: {
    archetype: 'The Sage Strategist',
    keywords: ['Foresight', 'Elder Wisdom', 'Clarity', 'Transcendent Strategy'],
    coreAdvantages: [
      'Exudes the calm composure of a master counselor; untangles long-standing life bottlenecks',
      'Flawlessly unites Tian Ji\'s sharp methodology with Tian Liang\'s generational wisdom',
      'Deeply altruistic and principled; commands unconditional respect across professional sectors',
      'Ideal for master academies, corporate chief mentors, and timeless philosophical IP'
    ],
    externalPerception: [
      'Market senses your seasoned maturity, panoramic foresight, and unshakeable dependability',
      'Every word carries profound substance on camera, soothing existential and professional anxiety',
      'Leaders confronting pivotal crossroads seek you out as their definitive beacon of direction'
    ],
    collisionSummary: 'Brilliant without superficiality, experienced without dogma. Your brand radiates the unshakeable composure of an elder guide, steering mentees through complex transitional cycles.'
  },
  taiyang_jumen: {
    archetype: 'The Radiant Advocate',
    keywords: ['Public Voice', 'Evangelism', 'Credibility', 'Cross-Cultural'],
    coreAdvantages: [
      'The brilliance of Tai Yang dispels the obscurity of Ju Men; electrifying public keynote presence',
      'Fearlessly advocates for deserving communities, illuminating minds with unvarnished truth',
      'Excels at cross-cultural resonance and global dissemination across borders and demographics',
      'Ideal for industry evangelists, cause-driven crusaders, and visionary keynote speakers'
    ],
    externalPerception: [
      'Market feels your righteous integrity, astonishing eloquence, and high emotional resonance',
      'Full of passion on camera, effortlessly rallying collective energy and sparking movements',
      'Audiences believe in your selfless mission and reward you with fierce brand loyalty'
    ],
    collisionSummary: 'The brilliance of Tai Yang dispels the shadows of Ju Men. Public speaking and bold advocacy are your natural habitat—unite generosity with eloquence under the public spotlight.'
  },
  taiyang_tianliang: {
    archetype: 'The Altruistic Luminary',
    keywords: ['Benefactor', 'Stature', 'Noble Duty', 'Human Transformation'],
    coreAdvantages: [
      'Expansive altruism anchored upon unshakeable moral integrity; universally revered',
      'Naturally dedicated to mentoring future leaders and injecting positive energy into society',
      'Untainted by petty commercial greed; commands towering stature in professional circles',
      'Ideal for master educators, foundation chairs, and high-impact social enterprise IP'
    ],
    externalPerception: [
      'Market instantly feels your broad-minded generosity, paternal warmth, and dignified stature',
      'Outputs inspiring, values-driven pedagogy that deeply touches hearts and minds',
      'Audiences harbor innate moral trust and spiritual belonging around your leadership'
    ],
    collisionSummary: 'Deliver value selflessly, and enduring prestige naturally follows. Your commercial gravity is anchored upon towering ethical stature and generational service.'
  },
  taiyang_taiyin: {
    archetype: 'The Omni-Dimensional Luminary',
    keywords: ['Harmony', 'Equilibrium', 'Panoramic View', 'Adaptability'],
    coreAdvantages: [
      'Integrates Tai Yang\'s macro pioneering with Tai Yin\'s precision introspection',
      'Synthesizes multifaceted perspectives; remains balanced, fair, and profoundly inclusive',
      'Rapidly adapts across volatile environments with extraordinary emotional resilience',
      'Ideal for cross-sector business analysts, cultural synthesis mentors, and macro economists'
    ],
    externalPerception: [
      'Market experiences your dual brilliance: radiantly inspiring yet subtly profound and empathetic',
      'Exhibits exceptional grace, welcoming diverse perspectives and intellectual debate',
      'Clients receive the most balanced, holistic, and non-biased strategic roadmaps from you'
    ],
    collisionSummary: 'Harmonizing Yin and Yang, strength and subtlety. Igniting the crowd on stage by day, diving into contemplative depth by night—this dynamic polarity is your unique brand signature.'
  },
  wuqu_tianfu: {
    archetype: 'The Capital Mastermind',
    keywords: ['Wealth Creation', 'Financial Mastery', 'Pragmatism', 'Asset Compounding'],
    coreAdvantages: [
      'Anchored by dual wealth stars; extraordinary talent for cashflow, valuation, and capital stewardship',
      'Equally balances ruthless execution with ironclad risk control; never fights unprepared battles',
      'Master at engineering high-ticket recurring business engines and compounding balance-sheet wealth',
      'Ideal for private equity advisors, corporate finance strategists, and wealth-building mentors'
    ],
    externalPerception: [
      'Market instantly senses your commercial acumen, financial gravitas, and pragmatic confidence',
      'Direct and concise on camera: every insight ties directly to bottom-line profitability and ROI',
      'Clients place absolute faith in your ability to engineer real-world financial transformations'
    ],
    collisionSummary: 'A dual-wealth powerhouse. Reject hollow sentimentality and let your validated balance sheets, cashflow mastery, and repeatable profitability models do all the talking.'
  },
  wuqu_tanlang: {
    archetype: 'The Commercial Hunter',
    keywords: ['Market Instinct', 'Cross-Domain', 'Late Bloomer', 'Explosive Momentum'],
    coreAdvantages: [
      'Fuses Wu Qu\'s pragmatic grit with Tan Lang\'s social diplomacy; razor-sharp commercial nose',
      'The more market cycles you navigate, the more formidable your deal-making monetization becomes',
      'Master of cross-boundary monetization and high-stakes negotiation',
      'Ideal for venture dealmakers, commercial rainmakers, and high-growth joint-venture operators'
    ],
    externalPerception: [
      'Market registers your sharp business acumen, charismatic street-smarts, and social leverage',
      'Witty yet surgically addresses real business pain points on camera; highly magnetic',
      'Peers admire your commercial competence and respect your formidable deal-making reach'
    ],
    collisionSummary: 'Early accumulation forms deep bedrock; later explosive breakthrough is inevitable. Blending battle-tested grit with shrewd social diplomacy creates an irresistible commercial gravity field.'
  },
  wuqu_tianxiang: {
    archetype: 'The Pragmatic Architect',
    keywords: ['Definitive Standards', 'Flawless Delivery', 'Professionalism', 'Integrity'],
    coreAdvantages: [
      'Wu Qu\'s decisive velocity combined with Tian Xiang\'s institutional protocol; superior delivery',
      'Reveres commitments and contracts; never over-promises, compounding organic word-of-mouth',
      'Master at codifying chaotic operations into high-efficiency, standardized corporate blueprints',
      'Ideal for management consultants, operational architects, and premium execution IP'
    ],
    externalPerception: [
      'Market experiences your absolute reliability, surgical precision, and deep contractual integrity',
      'Projects crisp, disciplined, and refined executive professionalism on digital platforms',
      'Clients who work with you once develop deep, enduring operational dependence on your stewardship'
    ],
    collisionSummary: 'Every word honored, every standard upheld. Your brand equity compounds from 100% uncompromising delivery—unshakeable trust is your greatest trump card.'
  },
  wuqu_qisha: {
    archetype: 'The Ironclad Vanguard',
    keywords: ['Frontline Grit', 'Decisive Blade', 'Resilience', 'Battle-Tested'],
    coreAdvantages: [
      'Dual metal warrior stars; possesses indomitable willpower to crush systemic resistance',
      'Fearlessly leads the charge through industry downturns and existential crises',
      'Despises corporate evasion; eliminates roadblocks through direct, decisive action',
      'Ideal for high-intensity turnaround operators, crisis leadership coaches, and frontline commanders'
    ],
    externalPerception: [
      'Market perceives your razor-sharp edge, maxed-out operational velocity, and fearless aura',
      'Powerful presence on camera: cuts straight to the root of the problem without a single wasted word',
      'Founders in distress find immediate salvation and courage in your unyielding resolve'
    ],
    collisionSummary: 'Forged in intense fire. Display the frontline battle scars of real execution; your undeniable results and hardened competence are the most persuasive proof in the market.'
  },
  wuqu_pojun: {
    archetype: 'The Pragmatic Pioneer',
    keywords: ['Audacious Destruction', 'Radical Creation', 'Frontier Conquest', 'Pioneer Velocity'],
    coreAdvantages: [
      'Dares to tear down legacy infrastructure to build modern monuments; supreme pioneering courage',
      'Willing to bet heavily on emerging blue-ocean spaces and seize dominant market share',
      'Deploys hard execution assets squarely into revolutionary frontiers, generating astonishing wins',
      'Ideal for consumer innovation founders, breakthrough tech operators, and market disruptors'
    ],
    externalPerception: [
      'Market senses your primal audacity, raw power, and extraordinary momentum',
      'Projects a fearless, battle-ready ethos in public: willing to wager boldly and deliver triumphantly',
      'New-economy builders view you as the fearless trailblazer shattering legacy stagnation'
    ],
    collisionSummary: 'Without radical deconstruction, there can be no monumental rebirth. Prove to the market with hard results: those who dare to take the boldest risks reap the greatest triumphs.'
  },
  tiantong_taiyin: {
    archetype: 'The Restorative Aesthetician',
    keywords: ['Healing Field', 'Refinement', 'Aesthetic Grace', 'Soul Sanctuary'],
    coreAdvantages: [
      'Endowed with poetic artistic vision and aesthetic grace; crafts peaceful, nourishing environments',
      'Tian Tong\'s non-combative harmony combined with Tai Yin\'s gentle beauty commands affection',
      'Soothes audience exhaustion and psychological stress, offering spiritual sanctuary',
      'Ideal for holistic aesthetics, mind-body wellbeing, reflective writing, and aesthetic arts IP'
    ],
    externalPerception: [
      'Market is instantly soothed by your tranquil, water-like grace and gentle elegance',
      'Soothing vocal cadence on camera melts away audience cynicism and performance anxiety',
      'High-stress executives treat your brand content as their essential daily sanctuary'
    ],
    collisionSummary: 'Life is not merely ruthless competition—it requires poetry and peace. Your brand provides a serene sanctuary, soothing audience anxiety with gentle grace and beauty.'
  },
  tiantong_jumen: {
    archetype: 'The Empathic Communicator',
    keywords: ['Active Listening', 'Reconciliation', 'Transforming Shadows', 'Sincere Connection'],
    coreAdvantages: [
      'Tian Tong\'s warmth dissolves Ju Men\'s suspicion; converts skepticism into authentic dialogue',
      'Exceptionally skilled at mediating conflict and uniting polarized factions with grace',
      'Master storyteller with rich emotional cadence, forging vulnerable resonance with listeners',
      'Ideal for relationship counseling, master interviewer IP, mediation, and emotional healing'
    ],
    externalPerception: [
      'Market perceives you as deeply attentive, profoundly understanding, and emotionally authentic',
      'Effortlessly diffuses sensitive, heated disputes on camera with warmth and intellectual tact',
      'Audiences gladly entrust their deepest, most private vulnerabilities to your care'
    ],
    collisionSummary: 'Words can be weapons that hurt, or remedies that heal. Use warm, empathic articulation to dissolve deep emotional knots and foster enduring solidarity.'
  },
  tiantong_tianliang: {
    archetype: 'The Benevolent Sage',
    keywords: ['Compassion', 'Safe Custody', 'Sheltering Blessing', 'Timeless Trust'],
    coreAdvantages: [
      'Fuses youthful optimism with patriarchal shelter; creates an uplifting, protective aura',
      'Master at neutralizing life and business perils, bringing lasting fortune and sanctuary',
      'Blessed with lifelong benefactors, and generously acts as a life-changing benefactor for others',
      'Ideal for lifelong learning academies, life purpose mentors, and venerable holistic institutions'
    ],
    externalPerception: [
      'Market feels your benevolent warmth, profound sagacity, and unshakeable inner peace',
      'Provides reassuring certainty on camera regardless of how turbulent external storms become',
      'Followers eagerly stay committed for decades, forming generational bonds of loyalty'
    ],
    collisionSummary: 'Tian Tong brings joyful lightness; Tian Liang provides protective shelter. You do not need fear-mongering to monetize—your very presence is a calming blessing and profound safe haven.'
  },
  lianzhen_tianfu: {
    archetype: 'The Disciplined Flagship Navigator',
    keywords: ['Executive Rigor', 'Strategic Ambition', 'Operational Fortitude', 'Master Stewardship'],
    coreAdvantages: [
      'Lian Zhen\'s lofty ambition harmonized with Tian Fu\'s solid treasury discipline; general-grade poise',
      'Exceptional self-discipline and professional ethics; operates with flawless precision',
      'Possesses both aggressive strategic vision and an impenetrable financial bedrock',
      'Ideal for luxury flagship brands, corporate scale-up advisors, and enduring commercial dynasties'
    ],
    externalPerception: [
      'Market immediately senses your aristocratic presence, executive precision, and noble standards',
      'Demonstrates consummate dignity and commanding composure in public appearances',
      'Partners know you uphold commitments rigorously, making them eager for long-term collaboration'
    ],
    collisionSummary: 'Lofty ambition anchored in solid operational bedrock. Build your strategic vision upon impeccable execution, becoming the premier leader high-ticket clients trust unconditionally.'
  },
  lianzhen_tanlang: {
    archetype: 'The Ultimate Charismatic Icon',
    keywords: ['Avant-Garde Aesthetic', 'Magnetic Voltage', 'Cultural Vanguard', 'Viral Stature'],
    coreAdvantages: [
      'Supreme synthesis of dual romance stars; possesses hypnotic personal magnetism and aesthetic vision',
      'Acutely senses pop-culture waves; forever pioneers the vanguard of fashion, design, and culture',
      'Master of atmospheric brand rituals and visually breathtaking digital experiences',
      'Ideal for luxury lifestyle, high-fashion brands, visual arts empires, and superstar creative IP'
    ],
    externalPerception: [
      'Market is completely captivated at first sight by your breathtaking aesthetic and personal aura',
      'Electrifying presence on camera: a single post effortlessly commands viral discussion',
      'Aesthetically discerning crowds and elite tastemakers revere you as their ultimate trendsetter'
    ],
    collisionSummary: 'Charisma is pure leverage. Never tone down your sharp edge or distinct flair; express your bold aesthetic without apology, and the market will gladly revere you.'
  },
  lianzhen_tianxiang: {
    archetype: 'The Principled Strategist',
    keywords: ['Governance', 'Integrity', 'Equitable Counsel', 'Institutional Standard'],
    coreAdvantages: [
      'Lian Zhen\'s lucid logic combined with Tian Xiang\'s legal decorum; incorruptible fairness',
      'Master at designing regulatory governance frameworks and mitigating systemic operational risks',
      'Serves as the indispensable backbone and chief compliance officer in high-stakes organizations',
      'Ideal for legal counsel, corporate governance architecture, and institutional advisory IP'
    ],
    externalPerception: [
      'Market registers your upright integrity, dependability, executive polish, and principled ethics',
      'Articulates logic on camera with structured elegance and airtight intellectual precision',
      'Enterprise founders confronted with precarious legal or ethical disputes rely on your verdict'
    ],
    collisionSummary: 'Command authority through institutional standards; establish prestige through impeccable integrity. Order and rigorous governance are your highest commercial moats.'
  },
  lianzhen_qisha: {
    archetype: 'The Resilient Wave-Breaker',
    keywords: ['Grit', 'Breakthrough Momentum', 'Unyielding Vitality', 'Warrior Spirit'],
    coreAdvantages: [
      'Unyielding warrior mindset that takes full ownership; possesses astonishing survival grit',
      'Thrives in brutal market combat, taking ground through sheer relentless perseverance',
      'Dares to challenge stagnant legacy monopolies, shattering industry ceilings through real wins',
      'Ideal for turnaround coaching, resilience training, and consecutive serial entrepreneurship IP'
    ],
    externalPerception: [
      'Market immediately feels your raw vitality, passionate drive, and unshakeable resilience',
      'Digital content is intensely empowering, sparking fire in the hearts of stagnant builders',
      'Struggling strivers trapped in adversity are deeply inspired and mobilized by your fortitude'
    ],
    collisionSummary: 'Through the darkest night blossoms the purest strength. Your real-world triumphs over adversity are an emotional powerhouse—inspire the market with your authentic turnaround story.'
  },
  lianzhen_pojun: {
    archetype: 'The Maverick Paradigm Shifter',
    keywords: ['Subversion', 'Unconventional Path', 'Avant-Garde', 'Creative Rebellion'],
    coreAdvantages: [
      'Natural-born rebel and iconoclast; adamantly refuses to walk well-trodden legacy paths',
      'Disdainful of stale orthodoxies and mediocre formulas; triggers cognitive earthquakes',
      'Cross-pollinates seemingly unrelated elements to forge paradigm-shifting cultural products',
      'Ideal for frontier exploration, cyberpunk futurists, and radical intellectual subversion IP'
    ],
    externalPerception: [
      'Market senses your singular originality, rebellious flair, and unpredictable creative genius',
      'Boldly articulates uncomfortable truths on camera that provoke fierce, polarized devotion',
      'Creators exhausted by corporate mediocrity become your most fiercely loyal disciples'
    ],
    collisionSummary: 'Mediocrity is the only unforgivable sin. Be the electrifying catalyst in your sector—your defiance is not destruction, but fertile soil for radical industry rebirth.'
  }
};

// ==========================================
// BaZi Four Pillars, Stems & Branches Dictionary
// ==========================================
export const STEM_NAME_EN: Record<string, string> = {
  甲: 'Jia (Yang Wood)',
  乙: 'Yi (Yin Wood)',
  丙: 'Bing (Yang Fire)',
  丁: 'Ding (Yin Fire)',
  戊: 'Wu (Yang Earth)',
  己: 'Ji (Yin Earth)',
  庚: 'Geng (Yang Metal)',
  辛: 'Xin (Yin Metal)',
  壬: 'Ren (Yang Water)',
  癸: 'Gui (Yin Water)'
};

export const BRANCH_NAME_EN: Record<string, string> = {
  子: 'Zi (Rat / Water)',
  丑: 'Chou (Ox / Earth)',
  寅: 'Yin (Tiger / Wood)',
  卯: 'Mao (Rabbit / Wood)',
  辰: 'Chen (Dragon / Earth)',
  巳: 'Si (Snake / Fire)',
  午: 'Wu (Horse / Fire)',
  未: 'Wei (Goat / Earth)',
  申: 'Shen (Monkey / Metal)',
  酉: 'You (Rooster / Metal)',
  戌: 'Xu (Dog / Earth)',
  亥: 'Hai (Pig / Water)'
};

export function formatPillarEn(pillarZh: string): string {
  if (!pillarZh || pillarZh.length < 2) return pillarZh || 'N/A';
  const stem = pillarZh[0];
  const branch = pillarZh[1];
  const stemEn = STEM_NAME_EN[stem] ? STEM_NAME_EN[stem].split(' ')[0] : stem;
  const branchEn = BRANCH_NAME_EN[branch] ? BRANCH_NAME_EN[branch].split(' ')[0] : branch;
  return `${stemEn}-${branchEn}`;
}

export const MUTAGEN_NAME_EN: Record<string, string> = {
  化禄: 'Hua-Lu (Prosperity Catalyst)',
  化权: 'Hua-Quan (Authority Catalyst)',
  化科: 'Hua-Ke (Fame Catalyst)',
  化忌: 'Hua-Ji (Transformation Catalyst)'
};

export function formatMutagenEn(m: string): string {
  for (const [zh, en] of Object.entries(MUTAGEN_NAME_EN)) {
    if (m.includes(zh)) {
      const star = m.replace(zh, '').replace('生年', '').trim();
      const starEn = STAR_NAME_EN[star]?.en || star;
      return `${starEn} · ${en}`;
    }
  }
  return m;
}

export const SYSTEM_DISCLAIMER_EN =
  'ZIWEI IP DNA Strategic System is a modern decision-support framework integrating traditional Ziwei Dou Shu, BaZi Useful Elements, and personal branding archetypes. It is designed for cognitive self-discovery and commercial brand strategy rather than predictive fortune-telling. All rights reserved © Master Yixi Strategic Consulting.';

import type { PreviewV01Result } from '@/lib/previewEngine';

export function getLocalizedPreviewResult(res: PreviewV01Result, isEn: boolean): PreviewV01Result {
  if (!isEn) return res;

  const mingStarNames = res.ziwei.ming_palace.stars.map(
    s => STAR_NAME_EN[s]?.en || s
  );
  const migStarNames = res.ziwei.migration_palace.stars.map(
    s => STAR_NAME_EN[s]?.en || s
  );

  const mingCombId = res.ziwei.ming_palace.combination_id || '';
  const migCombId = res.ziwei.migration_palace.combination_id || '';

  // Ming Palace Archetype EN
  let mingArchetypeEn = res.ziwei.ming_palace.archetype;
  let mingKeywordsEn = res.ziwei.ming_palace.keywords;
  let mingAdvantagesEn = res.ziwei.ming_palace.core_advantages;
  let collisionSummaryEn = res.ziwei.collision_summary;

  if (DUAL_STAR_ARCHETYPES_EN[mingCombId]) {
    const d = DUAL_STAR_ARCHETYPES_EN[mingCombId];
    mingArchetypeEn = d.archetype;
    mingKeywordsEn = d.keywords;
    mingAdvantagesEn = d.coreAdvantages;
    if (d.collisionSummary) collisionSummaryEn = d.collisionSummary;
  } else if (res.ziwei.ming_palace.stars[0] && SINGLE_STAR_ARCHETYPES_EN[res.ziwei.ming_palace.stars[0]]) {
    const s = SINGLE_STAR_ARCHETYPES_EN[res.ziwei.ming_palace.stars[0]];
    mingArchetypeEn = s.singleArchetype;
    mingKeywordsEn = s.tags;
    mingAdvantagesEn = s.coreAdvantages;
  }

  // Migration Palace Archetype EN
  let migArchetypeEn = res.ziwei.migration_palace.archetype;
  let migKeywordsEn = res.ziwei.migration_palace.keywords;
  let migPerceptionEn = res.ziwei.migration_palace.external_perception;

  if (DUAL_STAR_ARCHETYPES_EN[migCombId]) {
    const d = DUAL_STAR_ARCHETYPES_EN[migCombId];
    migArchetypeEn = d.archetype;
    migKeywordsEn = d.keywords;
    migPerceptionEn = d.externalPerception;
  } else if (res.ziwei.migration_palace.stars[0] && SINGLE_STAR_ARCHETYPES_EN[res.ziwei.migration_palace.stars[0]]) {
    const s = SINGLE_STAR_ARCHETYPES_EN[res.ziwei.migration_palace.stars[0]];
    migArchetypeEn = s.singleArchetype;
    migKeywordsEn = s.tags;
    migPerceptionEn = s.externalPerception;
  }

  // IP Family EN
  const familyEn = IP_FAMILIES_EN[res.ziwei.ming_palace.ip_family_id] || IP_FAMILIES_EN.leader_authority;

  // Element Booster EN
  const boosterEn = ELEMENT_BOOSTERS_EN[res.bazi.useful_element] || ELEMENT_BOOSTERS_EN.fire;

  // Shen Palace EN
  const rawShenName = res.ziwei.shen_palace.name.replace('宫', '');
  const shenMatchKey = Object.keys(SHEN_PALACE_IMPACT_EN).find(k => k.includes(rawShenName)) || '命宫';
  const shenEnMeaning = SHEN_PALACE_IMPACT_EN[shenMatchKey] || res.ziwei.shen_palace.meaning;
  const shenPalaceNameEn = PALACE_NAME_EN[res.ziwei.shen_palace.name] || res.ziwei.shen_palace.name;

  // Branch and Bureau EN
  const mingBranchEn = BRANCH_NAME_EN[res.ziwei.ming_palace.palace_branch]?.split(' ')[0] || res.ziwei.ming_palace.palace_branch;
  const migBranchEn = BRANCH_NAME_EN[res.ziwei.migration_palace.palace_branch]?.split(' ')[0] || res.ziwei.migration_palace.palace_branch;
  const bureauEn = BUREAU_NAME_EN[res.ziwei.ming_palace.bureau_name] || res.ziwei.ming_palace.bureau_name;
  const palacePillarEn = formatPillarEn(res.ziwei.ming_palace.palace_pillar);

  // Four Pillars EN
  const yearPillarEn = formatPillarEn(res.bazi.year_pillar);
  const monthPillarEn = formatPillarEn(res.bazi.month_pillar);
  const dayPillarEn = formatPillarEn(res.bazi.day_pillar);
  const hourPillarEn = formatPillarEn(res.bazi.hour_pillar);

  // Mutagens EN
  const mingMutagensEn = res.ziwei.ming_palace.mutagens?.map(formatMutagenEn) || [];
  const migMutagensEn = res.ziwei.migration_palace.mutagens?.map(formatMutagenEn) || [];

  // Mutagen Insight EN
  let mutagenInsightEn = 'Your natal chart demonstrates poised structural balance across the Life and Migration axis, ideal for steady authority and enduring compounding.';
  if (mingMutagensEn.length > 0 || migMutagensEn.length > 0) {
    mutagenInsightEn = `Active Mutagen Catalysts on the Life-Migration Axis: ${[...mingMutagensEn, ...migMutagensEn].join(' | ')}. These catalysts unlock major inflection points when building your public thought leadership.`;
  }

  // Collision Summary EN
  if (!collisionSummaryEn || collisionSummaryEn.includes('内在是') || collisionSummaryEn.includes('命无主星')) {
    collisionSummaryEn = `Intrinsic archetype: ${mingArchetypeEn}, extrinsic perception: ${migArchetypeEn}. You don't need to force an artificial label—leverage your external perception (${migKeywordsEn.slice(0, 3).join(', ')}) to build initial market trust. Once your authority is established, your full core power will shine.`;
  }

  return {
    ...res,
    user: {
      ...res.user,
      lunar_date_str: `Lunar Year ${yearPillarEn} · ${monthPillarEn} · Day ${dayPillarEn}`
    },
    ziwei: {
      ...res.ziwei,
      ming_palace: {
        ...res.ziwei.ming_palace,
        stars: mingStarNames,
        palace_branch: mingBranchEn,
        palace_pillar: palacePillarEn,
        bureau_name: bureauEn,
        archetype: mingArchetypeEn,
        ip_family: familyEn.name,
        keywords: mingKeywordsEn,
        core_advantages: mingAdvantagesEn,
        mutagens: mingMutagensEn,
        explanation: 'The Life Palace defines your intrinsic IP core: your most natural, enduring, and sustainable competitive advantage.'
      },
      migration_palace: {
        ...res.ziwei.migration_palace,
        stars: migStarNames,
        palace_branch: migBranchEn,
        archetype: migArchetypeEn,
        keywords: migKeywordsEn,
        external_perception: migPerceptionEn,
        mutagens: migMutagensEn,
        explanation: 'The Migration Palace defines your external IP projection: how the market and public perceive your presence.'
      },
      shen_palace: {
        name: shenPalaceNameEn,
        meaning: shenEnMeaning
      },
      collision_summary: collisionSummaryEn,
      core_one_liner: familyEn.oneLiner,
      mutagen_insight: mutagenInsightEn
    },
    bazi: {
      ...res.bazi,
      year_pillar: yearPillarEn,
      month_pillar: monthPillarEn,
      day_pillar: dayPillarEn,
      hour_pillar: hourPillarEn,
      useful_element_name: boosterEn.name,
      ip_booster: {
        name: boosterEn.name,
        boost: boosterEn.boost,
        keywords: boosterEn.keywords,
        copy: boosterEn.copy,
        suggestion: boosterEn.suggestion,
        one_liner: boosterEn.oneLiner,
        outfit_colors: boosterEn.outfitColors,
        backdrop_style: boosterEn.backdropStyle
      }
    },
    formations: res.formations,
    primary_formation: res.primary_formation,
    classic_quote: res.classic_quote,
    famous_leaders: res.famous_leaders
  };
}


