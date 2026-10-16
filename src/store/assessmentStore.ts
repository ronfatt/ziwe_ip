import { create } from 'zustand';
import {
  AssessmentState,
  BirthInfo,
  ProfessionalProfile,
  QuizDimension,
  Language
} from '@/types';
import { DEMO_PRESETS } from '@/data/archetypes';
import {
  calculateQuizScores,
  synthesizeCareerDNA,
  synthesizeBrandDNA,
  synthesizeBusinessDNA,
  synthesizeRoadmap
} from '@/lib/scoring';
import { calculateZiweiIpDnaPreview } from '@/lib/previewEngine';

const INITIAL_BIRTH_INFO: BirthInfo = {
  displayName: '林奕凡 Evan',
  birthDate: '1992-06-18',
  birthTime: '09:30',
  birthLocation: '中国 上海 / 马来西亚 吉隆坡',
  timeConfidence: 'exact',
  gender: 'male',
  privacyConsent: true
};

const INITIAL_PROFILE: ProfessionalProfile = {
  currentProfession: '资深产品架构师 / 独立数字化增长顾问',
  industry: '产业互联网 & 数字化咨询',
  education: '计算机科学与商业管理 双学士',
  yearsOfExperience: 8,
  topSkills: ['商业模式顶层拆解', '高转化产品体系架构', '复杂业务流程SOP化'],
  topInterests: ['战略推演与认知建构', '东方哲学与个人效能', '超级个体商业闭环'],
  availableResources: ['高质量互联网圈层人脉', '深度写作与公开演讲能力', '敏捷软件原型开发能力'],
  careerChallenge: '从平台螺丝钉跃迁为拥有独立定价权的高客单知识IP与战略军师',
  workingStyle: '高自主权、深度思考、拒绝无效低质社交与内耗会议',
  businessGoals: ['打造具有行业辨识度的个人品牌', '建立年化高利润轻资产咨询业务', '实现时间与地点的真正自由'],
  desiredIncomeModel: '高客单1对1闭门战略顾问 + 数字化资产被动复利',
  publicBrandWillingness: 'moderate',
  desiredProfessionalFuture: '成为细分赛道最值得托付的首席智囊，赋能100位新商业创造者突破瓶颈'
};

const DEFAULT_QUIZ_ANSWERS: Record<string, string> = {
  q1: 'q1_a',
  q2: 'q2_a',
  q3: 'q3_a',
  q4: 'q4_a',
  q5: 'q5_a',
  q6: 'q6_c',
  q7: 'q7_a',
  q8: 'q8_a',
  q9: 'q9_b',
  q10: 'q10_a',
  q11: 'q11_a',
  q12: 'q12_b'
};

interface AssessmentStore extends AssessmentState {
  language: Language;
  setLanguage: (lang: Language) => void;
  setStep: (step: number) => void;
  updateBirthInfo: (info: Partial<BirthInfo>) => void;
  updateProfile: (profile: Partial<ProfessionalProfile>) => void;
  setQuizAnswer: (questionId: string, optionId: string) => void;
  setActivePreset: (presetId: string) => void;
  setDemoChartMode: (isDemo: boolean) => void;
  runAnalysis: () => void;
  resetAll: () => void;
  loadDemoSeed: () => void;
  quickAnalyzeFromBirth: (birthDate: string, displayName?: string, birthTime?: string, gender?: any) => void;
}

const STORAGE_KEY = 'ziwei_ip_dna_state_v2';

const getInitialState = (): AssessmentState => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse saved state from localStorage', e);
    }
  }

  // Fallback initial
  const defaultScores = calculateQuizScores(DEFAULT_QUIZ_ANSWERS);
  const preset = DEMO_PRESETS[0];

  return {
    currentStep: 1,
    birthInfo: INITIAL_BIRTH_INFO,
    profile: INITIAL_PROFILE,
    quizAnswers: DEFAULT_QUIZ_ANSWERS,
    activePresetId: preset.id,
    isDemoChartMode: true,
    computedScores: defaultScores,
    careerDNA: synthesizeCareerDNA(INITIAL_PROFILE, defaultScores, preset.archetypeKey),
    brandDNA: synthesizeBrandDNA(INITIAL_PROFILE, defaultScores, preset.archetypeKey),
    businessDNA: synthesizeBusinessDNA(INITIAL_PROFILE, defaultScores, preset.archetypeKey),
    roadmap: synthesizeRoadmap(INITIAL_PROFILE, preset.archetypeKey),
    previewV01Result: calculateZiweiIpDnaPreview({
      name: INITIAL_BIRTH_INFO.displayName,
      gender: INITIAL_BIRTH_INFO.gender,
      birthDate: INITIAL_BIRTH_INFO.birthDate,
      birthTime: INITIAL_BIRTH_INFO.birthTime
    })
  };
};

export const useAssessmentStore = create<AssessmentStore>((set, get) => ({
  ...getInitialState(),
  language: 'zh-CN',

  setLanguage: (lang) => set({ language: lang }),

  setStep: (step) => {
    set({ currentStep: step });
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(get()));
    }
  },

  updateBirthInfo: (info) => {
    set((state) => ({
      birthInfo: { ...state.birthInfo, ...info }
    }));
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(get()));
    }
  },

  updateProfile: (profileUpdate) => {
    set((state) => ({
      profile: { ...state.profile, ...profileUpdate }
    }));
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(get()));
    }
  },

  setQuizAnswer: (questionId, optionId) => {
    set((state) => {
      const nextAnswers = { ...state.quizAnswers, [questionId]: optionId };
      const nextScores = calculateQuizScores(nextAnswers);
      return {
        quizAnswers: nextAnswers,
        computedScores: nextScores
      };
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(get()));
    }
  },

  setActivePreset: (presetId) => {
    set({ activePresetId: presetId });
    get().runAnalysis();
  },

  setDemoChartMode: (isDemo) => {
    set({ isDemoChartMode: isDemo });
  },

  runAnalysis: () => {
    const state = get();
    const scores = calculateQuizScores(state.quizAnswers);
    const preset = DEMO_PRESETS.find((p) => p.id === state.activePresetId) || DEMO_PRESETS[0];

    const careerDNA = synthesizeCareerDNA(state.profile, scores, preset.archetypeKey);
    const brandDNA = synthesizeBrandDNA(state.profile, scores, preset.archetypeKey);
    const businessDNA = synthesizeBusinessDNA(state.profile, scores, preset.archetypeKey);
    const roadmap = synthesizeRoadmap(state.profile, preset.archetypeKey);

    const previewV01Result = calculateZiweiIpDnaPreview({
      name: state.birthInfo.displayName,
      gender: state.birthInfo.gender,
      birthDate: state.birthInfo.birthDate,
      birthTime: state.birthInfo.birthTime
    });

    set({
      computedScores: scores,
      careerDNA,
      brandDNA,
      businessDNA,
      roadmap,
      previewV01Result
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(get()));
    }
  },

  resetAll: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    const defaultScores = calculateQuizScores({});
    set({
      currentStep: 1,
      birthInfo: {
        displayName: '',
        birthDate: '',
        birthTime: '',
        birthLocation: '',
        timeConfidence: 'exact',
        gender: 'unspecified',
        privacyConsent: false
      },
      profile: {
        currentProfession: '',
        industry: '',
        education: '',
        yearsOfExperience: 0,
        topSkills: [],
        topInterests: [],
        availableResources: [],
        careerChallenge: '',
        workingStyle: '',
        businessGoals: [],
        desiredIncomeModel: '',
        publicBrandWillingness: 'moderate',
        desiredProfessionalFuture: ''
      },
      quizAnswers: {},
      computedScores: defaultScores,
      careerDNA: undefined,
      brandDNA: undefined,
      businessDNA: undefined,
      roadmap: undefined,
      previewV01Result: undefined
    });
  },

  loadDemoSeed: () => {
    const defaultScores = calculateQuizScores(DEFAULT_QUIZ_ANSWERS);
    const preset = DEMO_PRESETS[0];
    const previewV01Result = calculateZiweiIpDnaPreview({
      name: INITIAL_BIRTH_INFO.displayName,
      gender: INITIAL_BIRTH_INFO.gender,
      birthDate: INITIAL_BIRTH_INFO.birthDate,
      birthTime: INITIAL_BIRTH_INFO.birthTime
    });

    const newState = {
      currentStep: 4,
      birthInfo: INITIAL_BIRTH_INFO,
      profile: INITIAL_PROFILE,
      quizAnswers: DEFAULT_QUIZ_ANSWERS,
      activePresetId: preset.id,
      isDemoChartMode: true,
      computedScores: defaultScores,
      careerDNA: synthesizeCareerDNA(INITIAL_PROFILE, defaultScores, preset.archetypeKey),
      brandDNA: synthesizeBrandDNA(INITIAL_PROFILE, defaultScores, preset.archetypeKey),
      businessDNA: synthesizeBusinessDNA(INITIAL_PROFILE, defaultScores, preset.archetypeKey),
      roadmap: synthesizeRoadmap(INITIAL_PROFILE, preset.archetypeKey),
      previewV01Result
    };
    set(newState);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(get()));
    }
  },

  quickAnalyzeFromBirth: (birthDate: string, displayName?: string, birthTime?: string, gender?: any) => {
    // Map birth date to one of presets deterministically
    let hash = 0;
    for (let i = 0; i < birthDate.length; i++) {
      hash = (hash << 5) - hash + birthDate.charCodeAt(i);
      hash |= 0;
    }
    const presetIndex = Math.abs(hash) % DEMO_PRESETS.length;
    const selectedPreset = DEMO_PRESETS[presetIndex];

    const updatedBirthInfo: BirthInfo = {
      displayName: displayName?.trim() || '学员',
      birthDate,
      birthTime: birthTime || '10:00',
      birthLocation: '中国 / 东南亚',
      timeConfidence: birthTime ? 'exact' : 'approximate',
      gender: gender || 'unspecified',
      privacyConsent: true
    };

    const updatedProfile: ProfessionalProfile = {
      ...get().profile,
      currentProfession: get().profile.currentProfession || '独立专业顾问 / 创作者',
      industry: get().profile.industry || '新商业与数字化服务',
      yearsOfExperience: get().profile.yearsOfExperience || 5
    };

    const scores = calculateQuizScores(get().quizAnswers || DEFAULT_QUIZ_ANSWERS);
    const careerDNA = synthesizeCareerDNA(updatedProfile, scores, selectedPreset.archetypeKey);
    const brandDNA = synthesizeBrandDNA(updatedProfile, scores, selectedPreset.archetypeKey);
    const businessDNA = synthesizeBusinessDNA(updatedProfile, scores, selectedPreset.archetypeKey);
    const roadmap = synthesizeRoadmap(updatedProfile, selectedPreset.archetypeKey);

    const previewV01Result = calculateZiweiIpDnaPreview({
      name: updatedBirthInfo.displayName,
      gender: updatedBirthInfo.gender,
      birthDate: updatedBirthInfo.birthDate,
      birthTime: updatedBirthInfo.birthTime
    });

    set({
      currentStep: 4,
      birthInfo: updatedBirthInfo,
      profile: updatedProfile,
      activePresetId: selectedPreset.id,
      computedScores: scores,
      careerDNA,
      brandDNA,
      businessDNA,
      roadmap,
      previewV01Result
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(get()));
    }
  }
}));
