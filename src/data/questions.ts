import { QuizQuestion } from '@/types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    dimension: 'leadership',
    scenario: {
      'zh-CN': '当你接手一个目标宏大但分工混乱的新团队或项目时，你的第一反应往往是：',
      'en': 'When taking over a high-stakes initiative with an ambiguous team structure, what is your immediate instinct?',
      'ms': 'Apabila mengambil alih inisiatif penting dengan struktur pasukan yang tidak jelas, apakah naluri pertama anda?'
    },
    options: [
      {
        id: 'q1_a',
        text: {
          'zh-CN': '确立宏观愿景与阶段里程碑，明确责权利并授权给关键骨干',
          'en': 'Set the overarching vision, milestone goals, and empower key owners.',
          'ms': 'Tetapkan visi menyeluruh, sasaran fasa dan berikan kuasa kepada pemilik utama.'
        },
        scoreWeight: 5,
        styleTag: '愿景统御型'
      },
      {
        id: 'q1_b',
        text: {
          'zh-CN': '迅速梳理底层逻辑与信息流，制作系统化的推进 SOP 和甘特图',
          'en': 'Map the underlying logic, build systematized SOPs and tracking workflows.',
          'ms': 'Petakan logik asas, bina SOP tersusun dan aliran kerja penjejakan.'
        },
        scoreWeight: 4,
        styleTag: '架构理顺型'
      },
      {
        id: 'q1_c',
        text: {
          'zh-CN': '与核心成员逐一深聊，消除心理顾虑，激发大家的内驱凝聚力',
          'en': 'Hold 1-on-1 dialogues to align expectations and inspire emotional commitment.',
          'ms': 'Lakukan sesi dialog individu untuk selaraskan jangkaan dan beri inspirasi.'
        },
        scoreWeight: 3,
        styleTag: '润物共情型'
      },
      {
        id: 'q1_d',
        text: {
          'zh-CN': '亲自率先攻下最难的技术或业务堵点，以身作则树立标杆',
          'en': 'Lead by example by directly breaking through the hardest technical or commercial bottleneck.',
          'ms': 'Tunjukkan contoh dengan memecahkan halangan teknikal/komersial paling sukar.'
        },
        scoreWeight: 4,
        styleTag: '先锋突击型'
      }
    ]
  },
  {
    id: 'q2',
    dimension: 'strategic_thinking',
    scenario: {
      'zh-CN': '面对行业突发的政策变动或 AI 等新技术冲击时，你通常如何推演自己的应对策略？',
      'en': 'When sudden regulatory shifts or AI disruptions hit your field, how do you formulate strategic moves?',
      'ms': 'Apabila perubahan dasar mengejut atau gangguan AI melanda bidang anda, bagaimanakah anda merumuskan langkah strategi?'
    },
    options: [
      {
        id: 'q2_a',
        text: {
          'zh-CN': '追溯历史演进周期，建立多套情景分支模型，寻找结构性套利机会',
          'en': 'Model multiple scenario branches, uncover counter-cyclical arbitrage opportunities.',
          'ms': 'Bina model senario berbilang cabang, cari peluang arbitraj kitaran balas.'
        },
        scoreWeight: 5,
        styleTag: '深度推演型'
      },
      {
        id: 'q2_b',
        text: {
          'zh-CN': '立即组织敏捷试验，用最低成本快速试水3个全新交付模型',
          'en': 'Run low-cost agile pilots immediately across 3 distinct delivery mechanisms.',
          'ms': 'Jalankan eksperimen tangkas kos rendah merentasi 3 mekanisme penyampaian berbeza.'
        },
        scoreWeight: 4,
        styleTag: '敏捷迭代型'
      },
      {
        id: 'q2_c',
        text: {
          'zh-CN': '整合圈内顶尖同行与专家闭门切磋，交换未公开的市场真实体感',
          'en': 'Gather industry peers for private roundtables to exchange first-hand market signals.',
          'ms': 'Kumpulkan rakan industri untuk perbincangan tertutup bagi bertukar isyarat pasaran sebenar.'
        },
        scoreWeight: 4,
        styleTag: '生态情报型'
      },
      {
        id: 'q2_d',
        text: {
          'zh-CN': '保持战略定力，深挖客户不可替代的本质刚需，强化长期护城河',
          'en': 'Preserve strategic focus, deepen customer core retention, and strengthen core moat.',
          'ms': 'Kekalkan fokus strategik, perkukuh pengekalan teras pelanggan dan parit pertahanan.'
        },
        scoreWeight: 3,
        styleTag: '护城河防御型'
      }
    ]
  },
  {
    id: 'q3',
    dimension: 'creativity',
    scenario: {
      'zh-CN': '如果要求你策划一款打破行业现有套路的全新产品或服务，你最享受的过程是：',
      'en': 'If tasked with designing an industry-defying product or service, what stage brings you the highest creative thrill?',
      'ms': 'Jika ditugaskan mereka bentuk produk/perkhidmatan yang luar biasa, peringkat manakah yang paling menyeronokkan anda?'
    },
    options: [
      {
        id: 'q3_a',
        text: {
          'zh-CN': '把两个完全不相干的领域跨界融合（如哲学+商业咨询、美学+科技）',
          'en': 'Synthesizing two completely unrelated disciplines (e.g. philosophy + SaaS, aesthetics + finance).',
          'ms': 'Menggabungkan dua disiplin berbeza sama sekali (cth. falsafah + perundingan, estetika + teknologi).'
        },
        scoreWeight: 5,
        styleTag: '跨界融合型'
      },
      {
        id: 'q3_b',
        text: {
          'zh-CN': '彻底重构用户体验与感知细节，做出让人眼前一亮的顶级质感',
          'en': 'Radically elevating user sensory experience and emotional resonance to luxury standards.',
          'ms': 'Meningkatkan pengalaman deria pengguna dan resonans emosi ke tahap kemewahan.'
        },
        scoreWeight: 4,
        styleTag: '体验美学型'
      },
      {
        id: 'q3_c',
        text: {
          'zh-CN': '设计颠覆性的商业闭环与分成机制，让各方自发蜂拥而至',
          'en': 'Designing an unconventional monetization and incentive mechanism that turns market dynamics.',
          'ms': 'Mereka bentuk mekanisme insentif dan monetisasi luar biasa yang menarik pasaran secara automatik.'
        },
        scoreWeight: 4,
        styleTag: '模式重构型'
      },
      {
        id: 'q3_d',
        text: {
          'zh-CN': '用精炼而震撼的语言与叙事包装，创造极具辨识度的全新名词与理论',
          'en': 'Inventing proprietary vernacular, conceptual frameworks, and magnetic cultural narratives.',
          'ms': 'Mencipta istilah proprietari, kerangka konseptual, dan naratif budaya yang magnetik.'
        },
        scoreWeight: 4,
        styleTag: '叙事概念型'
      }
    ]
  },
  {
    id: 'q4',
    dimension: 'execution',
    scenario: {
      'zh-CN': '在一个关键交付周期只有7天、外部资源匮乏的突发攻坚战中，你的作战方式是：',
      'en': 'During a high-stakes 7-day sprint under scarce resources, what is your operational rhythm?',
      'ms': 'Dalam pecutan 7 hari berisiko tinggi dengan sumber terhad, apakah rentak operasi anda?'
    },
    options: [
      {
        id: 'q4_a',
        text: {
          'zh-CN': '砍掉所有枝节，将目标死磕在唯一决定胜负的核心交付物上，日夜推进',
          'en': 'Eliminate all non-essentials, relentlessly focus on the sole pivotal deliverable day and night.',
          'ms': 'Hapuskan perkara tidak penting, tumpukan tanpa henti pada hasil teras penting siang dan malam.'
        },
        scoreWeight: 5,
        styleTag: '极限聚焦型'
      },
      {
        id: 'q4_b',
        text: {
          'zh-CN': '拆解每小时甘特进度，设立容错缓冲点，按精密流程有条不紊落地',
          'en': 'Break down into hourly checkpoints, build mitigation buffers, execute methodically.',
          'ms': 'Pecahkan kepada titik semakan setiap jam, bina penampan risiko, laksanakan secara tersusun.'
        },
        scoreWeight: 4,
        styleTag: '精密节拍型'
      },
      {
        id: 'q4_c',
        text: {
          'zh-CN': '动用自己的人脉信用紧急借力，调集外部成熟力量快速补足缺口',
          'en': 'Leverage personal relationship capital to mobilize external proven experts rapidly.',
          'ms': 'Manfaatkan modal hubungan peribadi untuk menggerakkan pakar luar dengan pantas.'
        },
        scoreWeight: 4,
        styleTag: '杠杆借力型'
      },
      {
        id: 'q4_d',
        text: {
          'zh-CN': '重新定义客户的交付期望，用更聪明省力的创新形式达到同等或更好效果',
          'en': 'Reframe stakeholder expectations cleverly to deliver superior perceived value with lean assets.',
          'ms': 'Bingkai semula jangkaan pihak berkepentingan secara bijak untuk nilai lebih tinggi dengan aset ringkas.'
        },
        scoreWeight: 3,
        styleTag: '四两拨千斤型'
      }
    ]
  },
  {
    id: 'q5',
    dimension: 'communication',
    scenario: {
      'zh-CN': '在向非专业客户或投资者解释极其复杂的专业方案时，你最擅长的表达方式是：',
      'en': 'When presenting a highly sophisticated technical solution to layperson investors or buyers, what is your signature style?',
      'ms': 'Apabila mempersembahkan penyelesaian teknikal yang rumit kepada pelabur/pembeli awam, apakah gaya utama anda?'
    },
    options: [
      {
        id: 'q5_a',
        text: {
          'zh-CN': '运用生动生活类比与降维打击的极简金句，让外行也能在3分钟内听懂顿悟',
          'en': 'Using vivid metaphors and concise punchlines so anyone grasps the essence in 3 minutes.',
          'ms': 'Menggunakan metafora hidup dan ayat ringkas supaya sesiapa sahaja faham dalam 3 minit.'
        },
        scoreWeight: 5,
        styleTag: '降维布道型'
      },
      {
        id: 'q5_b',
        text: {
          'zh-CN': '直陈痛点与商业投入产出比（ROI），用硬核数据与逻辑让对方心悦诚服',
          'en': 'Laying out raw pain points and hard financial ROI metrics with undeniable logic.',
          'ms': 'Menjelaskan masalah sebenar dan metrik ROI kewangan dengan logik yang kukuh.'
        },
        scoreWeight: 4,
        styleTag: '硬核数据型'
      },
      {
        id: 'q5_c',
        text: {
          'zh-CN': '先倾听并共情对方的深层担忧与顾虑，在情感共鸣的基础上顺势给出方案',
          'en': 'Actively listening and empathizing with hidden anxieties before gently offering solutions.',
          'ms': 'Mendengar dan menyelami kebimbangan tersembunyi sebelum menawarkan penyelesaian secara lembut.'
        },
        scoreWeight: 4,
        styleTag: '润物共情型'
      },
      {
        id: 'q5_d',
        text: {
          'zh-CN': '以沉稳从容的行业权威风范，条分缕析地展现全景图与底牌实力',
          'en': 'Projecting an authoritative presence with a comprehensive panoramic blueprint.',
          'ms': 'Menzahirkan kewibawaan yang tenang dengan pelan tindakan menyeluruh.'
        },
        scoreWeight: 4,
        styleTag: '权威全景型'
      }
    ]
  },
  {
    id: 'q6',
    dimension: 'relationship_building',
    scenario: {
      'zh-CN': '对于拓展高价值人脉与圈层，你的真实偏好与舒适区是：',
      'en': 'Regarding high-value network development, what is your genuine comfort zone and preference?',
      'ms': 'Mengenai perkembangan rangkaian bernilai tinggi, apakah zon selesa dan pilihan sebenar anda?'
    },
    options: [
      {
        id: 'q6_a',
        text: {
          'zh-CN': '不刻意社交，专注打磨绝活；靠无可替代的专业能力吸引优质圈层主动靠拢',
          'en': 'Avoid frivolous networking; let rare mastery attract high-calibre partners organically.',
          'ms': 'Elakkan rangkaian sia-sia; biarkan kemahiran unik menarik rakan berkaliber tinggi secara semula jadi.'
        },
        scoreWeight: 4,
        styleTag: '价值引力型'
      },
      {
        id: 'q6_b',
        text: {
          'zh-CN': '通过一对一深度交流或私享小圈子，建立深厚而持久的信任互助关系',
          'en': 'Build deep, intimate 1-on-1 reciprocal trust through close-knit private circles.',
          'ms': 'Bina kepercayaan mendalam 1-sama-1 melalui bulatan peribadi yang akrab.'
        },
        scoreWeight: 4,
        styleTag: '深度私交型'
      },
      {
        id: 'q6_c',
        text: {
          'zh-CN': '作为超级节点，乐于撮合资源与信息，让大家通过你获得双赢',
          'en': 'Act as a super-connector, matching resources and brokering win-win collaborations.',
          'ms': 'Bertindak sebagai penyambung utama, memadankan sumber dan memudahkan kerjasama menang-menang.'
        },
        scoreWeight: 5,
        styleTag: '超级节点型'
      },
      {
        id: 'q6_d',
        text: {
          'zh-CN': '以高端平台或协会发起人身份，搭建行业生态标准与俱乐部机制',
          'en': 'Convene an official alliance or elite salon as an institutional platform builder.',
          'ms': 'Bina persekutuan rasmi atau salon elit sebagai pembina platform institusi.'
        },
        scoreWeight: 4,
        styleTag: '生态造局型'
      }
    ]
  },
  {
    id: 'q7',
    dimension: 'business_dev',
    scenario: {
      'zh-CN': '当你要把一项专业经验转化为可持续盈利的个人商业体系时，你的核心切入点是：',
      'en': 'When translating your domain expertise into a sustainable monetization system, your core lever is:',
      'ms': 'Apabila menukar kepakaran bidang kepada sistem perniagaan yang mampan, tuas utama anda ialah:'
    },
    options: [
      {
        id: 'q7_a',
        text: {
          'zh-CN': '做高客单、深陪伴的高端私人咨询或战略操盘，走精品高毛利路线',
          'en': 'Deliver high-ticket, high-touch bespoke advisory for exceptional profit margins.',
          'ms': 'Menyampaikan nasihat tersuai bernilai tinggi untuk margin keuntungan luar biasa.'
        },
        scoreWeight: 5,
        styleTag: '精品高客单'
      },
      {
        id: 'q7_b',
        text: {
          'zh-CN': '把方法论产品化为数字课程、模板与社群，追求无边际成本的规模化复利',
          'en': 'Productize methodology into scalable digital assets, courses, and recurring subscriptions.',
          'ms': 'Jadikan metodologi sebagai produk digital berskala, kursus dan langganan berulang.'
        },
        scoreWeight: 4,
        styleTag: '规模化复利'
      },
      {
        id: 'q7_c',
        text: {
          'zh-CN': '与拥有现成流量或渠道的头部机构合作分成，分工明确轻资产运作',
          'en': 'Partner with existing platform gatekeepers via revenue-share joint ventures.',
          'ms': 'Bekerjasama dengan pemilik saluran/platform sedia ada melalui perkongsian hasil.'
        },
        scoreWeight: 4,
        styleTag: '渠道对赌联营'
      },
      {
        id: 'q7_d',
        text: {
          'zh-CN': '打造一支精干交付小团队，以代理或全案外包形式吃透产业链某一环节',
          'en': 'Deploy a specialized boutique agency to capture an end-to-end service niche.',
          'ms': 'Gunakan agensi butik khusus untuk menguasai segmen perkhidmatan hujung ke hujung.'
        },
        scoreWeight: 3,
        styleTag: '全案服务机构'
      }
    ]
  },
  {
    id: 'q8',
    dimension: 'independence',
    scenario: {
      'zh-CN': '在工作与商业环境的自主权方面，哪一种状态能让你感到最长久的自豪与自在？',
      'en': 'Regarding autonomy and professional freedom, which state brings you the deepest fulfillment?',
      'ms': 'Mengenai autonomi dan kebebasan profesional, keadaan manakah yang memberi anda kepuasan paling mendalam?'
    },
    options: [
      {
        id: 'q8_a',
        text: {
          'zh-CN': '对自己的时间、课题与合作对象享有100%自主决定权，不看任何老板脸色',
          'en': '100% sovereignty over your schedule, intellectual quests, and client selection.',
          'ms': 'Kedaulatan 100% ke atas jadual, pencarian intelek dan pemilihan pelanggan anda.'
        },
        scoreWeight: 5,
        styleTag: '绝对自由型'
      },
      {
        id: 'q8_b',
        text: {
          'zh-CN': '拥有受人尊重的社会声誉与平台背书，在体制或成熟体系内享有特殊话语权',
          'en': 'Commanding elite institutional prestige and discretionary influence inside established frameworks.',
          'ms': 'Memiliki prestij institusi elit dan pengaruh budi bicara dalam kerangka yang mapan.'
        },
        scoreWeight: 3,
        styleTag: '体制精英型'
      },
      {
        id: 'q8_c',
        text: {
          'zh-CN': '带领一支志同道合的独立特遣队，共同打造属于我们自己的事业根据地',
          'en': 'Leading a close-knit independent taskforce to conquer an autonomous business stronghold.',
          'ms': 'Memimpin pasukan khas bebas yang sepemikiran untuk membina kubu perniagaan sendiri.'
        },
        scoreWeight: 4,
        styleTag: '战队首领型'
      },
      {
        id: 'q8_d',
        text: {
          'zh-CN': '成为幕后不可替代的神秘顾问军师，低调掌握核心关键节点',
          'en': 'Acting as the indispensable behind-the-scenes consigliere controlling critical levers quietly.',
          'ms': 'Menjadi penasihat di sebalik tabir yang mengawal tuas penting secara senyap.'
        },
        scoreWeight: 4,
        styleTag: '幕后智囊型'
      }
    ]
  },
  {
    id: 'q9',
    dimension: 'risk_tolerance',
    scenario: {
      'zh-CN': '面对一份“高确定性中等回报（如稳定名企高薪）”与“高波动性超额回报（独立创业破局）”的抉择，你的底层心理倾向是：',
      'en': 'Faced with a choice between "predictable moderate safety" and "high-variance asymmetrical upside", your true appetite is:',
      'ms': 'Berdepan dengan pilihan antara "keselamatan sederhana terjamin" dan "potensi pulangan tinggi tetapi tidak menentu", kecenderungan anda ialah:'
    },
    options: [
      {
        id: 'q9_a',
        text: {
          'zh-CN': '果断下场创业！没有风浪的人生等于慢性平庸，我享受在不确定性中狩猎胜利',
          'en': 'Embrace bold venture! Stagnation is decay; I thrive on hunting asymmetric wins in turbulence.',
          'ms': 'Pilih pengembaraan berani! Kestabilan tanpa cabaran itu membosankan; saya suka memburu kejayaan dalam ketidaktentuan.'
        },
        scoreWeight: 5,
        styleTag: '冒险狩猎型'
      },
      {
        id: 'q9_b',
        text: {
          'zh-CN': '采用杠铃策略：主业保全底线现金流，业余探索高赔率个人品牌第二曲线',
          'en': 'The Barbell strategy: protect baseline cashflow while incubating a high-upside second curve.',
          'ms': 'Strategi Barbell: lindungi aliran tunai asas sambil mengeram keluk kedua berpotensi tinggi.'
        },
        scoreWeight: 4,
        styleTag: '杠铃稳健型'
      },
      {
        id: 'q9_c',
        text: {
          'zh-CN': '只有在做足详尽调研、拉满安全边际并有客户预付款的前提下，才迈出实质步伐',
          'en': 'Proceed only after exhaustive margin-of-safety modeling and secured prepayments.',
          'ms': 'Hanya melangkah selepas kajian mendalam, margin keselamatan kukuh dan bayaran pendahuluan pelanggan terjamin.'
        },
        scoreWeight: 2,
        styleTag: '严格风控型'
      },
      {
        id: 'q9_d',
        text: {
          'zh-CN': '与强势互补的合伙人共同分担风险与压力，抱团取暖共担盈亏',
          'en': 'Share downside risks and emotional pressure alongside a complementary co-founder.',
          'ms': 'Kongsi risiko dan tekanan emosi bersama rakan kongsi pelengkap.'
        },
        scoreWeight: 3,
        styleTag: '协同分担型'
      }
    ]
  },
  {
    id: 'q10',
    dimension: 'knowledge_sharing',
    scenario: {
      'zh-CN': '当你沉淀出一套经过实战检验的高价值认知或经验模型时，你最想如何对待它？',
      'en': 'When you crystallize a proven, battle-tested proprietary framework, what is your chosen stance?',
      'ms': 'Apabila anda menghasilkan kerangka proprietary yang terbukti berkesan, apakah pendirian pilihan anda?'
    },
    options: [
      {
        id: 'q10_a',
        text: {
          'zh-CN': '公开开源出版或演讲，通过最大化声量确立思想发源地地位，倒逼自己不断迭代',
          'en': 'Publish and preach openly; establish intellectual origin and force continuous evolution.',
          'ms': 'Terbitkan dan kongsi secara terbuka; tetapkan kedudukan perintis intelek dan paksa evolusi berterusan.'
        },
        scoreWeight: 5,
        styleTag: '开源布道型'
      },
      {
        id: 'q10_b',
        text: {
          'zh-CN': '将其精雕细琢成体系化课程或著作，仅传授给经过筛选、具备悟性的门徒弟子',
          'en': 'Codify into disciplined apprenticeship for discerning disciples with real affinity.',
          'ms': 'Kodifikasi kepada kurikulum tersusun untuk murid terpilih yang benar-benar memahaminya.'
        },
        scoreWeight: 4,
        styleTag: '门徒传承型'
      },
      {
        id: 'q10_c',
        text: {
          'zh-CN': '严守作为核心商业机密或交易算法，通过实际业务成果默默赚取巨额回报',
          'en': 'Guard it as proprietary algorithmic alpha, quietly extracting value through execution.',
          'ms': 'Simpan sebagai rahsia perdagangan eksklusif, raih pulangan lumayan secara senyap melalui pelaksanaan.'
        },
        scoreWeight: 2,
        styleTag: '黑盒阿尔法型'
      },
      {
        id: 'q10_d',
        text: {
          'zh-CN': '开发为实用生产力工具或SaaS，让普通人也能低门槛使用并受益',
          'en': 'Engineer it into workflow software or templates so practitioners automate leverage.',
          'ms': 'Jadikan perisian alat atau templat supaya pengamal boleh menggunakannya dengan mudah.'
        },
        scoreWeight: 4,
        styleTag: '工具赋能型'
      }
    ]
  },
  {
    id: 'q11',
    dimension: 'execution',
    scenario: {
      'zh-CN': '在日常推进个人事业时，你最容易因为哪种状态而产生最高效的心流？',
      'en': 'In daily business creation, which operating state triggers your deepest flow state?',
      'ms': 'Dalam membina kerjaya, keadaan operasi manakah yang mencetuskan tumpuan paling mendalam anda?'
    },
    options: [
      {
        id: 'q11_a',
        text: {
          'zh-CN': '沉浸在连续数小时的不被打扰的深度创作、推演或模型编写中',
          'en': 'Uninterrupted deep work blocks sculpting intellectual models, writing, or strategic design.',
          'ms': 'Fokus mendalam berjam-jam tanpa gangguan mencipta model, menulis atau reka bentuk strategik.'
        },
        scoreWeight: 5,
        styleTag: '深度沉浸型'
      },
      {
        id: 'q11_b',
        text: {
          'zh-CN': '在激烈的现场谈判、直播分享或舞台发声中，实时获得正反馈与共鸣',
          'en': 'High-octane live speaking, negotiations, or broadcasts delivering instant resonance.',
          'ms': 'Perbincangan hangat, siaran langsung atau pengucapan awam yang memberi tindak balas segera.'
        },
        scoreWeight: 4,
        styleTag: '即时反馈型'
      },
      {
        id: 'q11_c',
        text: {
          'zh-CN': '看到后台关键业务指标跳动增长、每一笔成交自动化落袋时',
          'en': 'Watching conversion dashboards tick up as automated systems register real transactions.',
          'ms': 'Melihat papan pemuka penukaran meningkat apabila sistem automatik merekodkan transaksi.'
        },
        scoreWeight: 4,
        styleTag: '指标驱动型'
      },
      {
        id: 'q11_d',
        text: {
          'zh-CN': '看到学员或客户因你的指导而发生实质蜕变、发来发自肺腑的感激反馈',
          'en': 'Receiving heartfelt testimonials from clients who underwent tangible breakthrough under your care.',
          'ms': 'Menerima testimoni ikhlas daripada pelanggan yang mengalami perubahan ketara hasil bimbingan anda.'
        },
        scoreWeight: 4,
        styleTag: '意义成就型'
      }
    ]
  },
  {
    id: 'q12',
    dimension: 'communication',
    scenario: {
      'zh-CN': '当面对外界质疑或同行的公开评判时，你的典型心智模式与应对策略是：',
      'en': 'When facing external controversy or professional peer criticism, what is your mindset and response?',
      'ms': 'Apabila menghadapi kontroversi luaran atau kritikan rakan profesional, apakah corak pemikiran anda?'
    },
    options: [
      {
        id: 'q12_a',
        text: {
          'zh-CN': '用无可辩驳的事实数据与长期成果回应，时间自会洗尽浮华',
          'en': 'Answer with undeniable factual track records and compounding long-term results.',
          'ms': 'Jawab dengan rekod fakta yang tidak dapat disangkal dan hasil jangka panjang.'
        },
        scoreWeight: 4,
        styleTag: '结果自证型'
      },
      {
        id: 'q12_b',
        text: {
          'zh-CN': '撰写有理有据、逻辑严密的高质量长文公开展开学术商榷，展现思想气度',
          'en': 'Publish rigorous, high-ground analytical discourse turning debate into intellectual authority.',
          'ms': 'Terbitkan analisis berwibawa dan beralasan kukuh yang mengubah perdebatan menjadi autoriti intelek.'
        },
        scoreWeight: 5,
        styleTag: '公义辩驳型'
      },
      {
        id: 'q12_c',
        text: {
          'zh-CN': '完全不受干扰，甚至将其转化为个人品牌的免费曝光话题与流量杠杆',
          'en': 'Remain completely unfazed; transform the friction into asymmetric public PR buzz.',
          'ms': 'Kekal tenang sepenuhnya; tukarkan perhatian tersebut kepada publisiti dan momentum jenama.'
        },
        scoreWeight: 5,
        styleTag: '破局造势型'
      },
      {
        id: 'q12_d',
        text: {
          'zh-CN': '反求诸己，审视是否有认知盲区并迅速吸收合理部分修正自我体系',
          'en': 'Reflect introspectively, integrate constructive kernels, and upgrade internal architecture.',
          'ms': 'Bermuhasabah, serap pandangan membina dan pertingkatkan kerangka diri.'
        },
        scoreWeight: 3,
        styleTag: '反思精进型'
      }
    ]
  }
];
