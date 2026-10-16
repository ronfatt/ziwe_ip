export type Language = 'zh-CN' | 'en' | 'ms';

export type Gender = 'male' | 'female' | 'unspecified';
export type TimeConfidence = 'exact' | 'approximate' | 'unknown';

export interface BirthInfo {
  displayName: string;
  birthDate: string; // YYYY-MM-DD
  birthTime: string; // HH:mm or 'unknown'
  birthLocation: string;
  timeConfidence: TimeConfidence;
  gender: Gender;
  privacyConsent: boolean;
}

export interface ProfessionalProfile {
  currentProfession: string;
  industry: string;
  education: string;
  yearsOfExperience: number;
  topSkills: string[];
  topInterests: string[];
  availableResources: string[];
  careerChallenge: string;
  workingStyle: string;
  businessGoals: string[];
  desiredIncomeModel: string;
  publicBrandWillingness: 'high' | 'moderate' | 'private' | 'behind_scenes';
  desiredProfessionalFuture: string;
  targetAudience?: string;
}

export type QuizDimension = 
  | 'leadership'
  | 'strategic_thinking'
  | 'creativity'
  | 'execution'
  | 'communication'
  | 'relationship_building'
  | 'business_dev'
  | 'independence'
  | 'risk_tolerance'
  | 'knowledge_sharing';

export interface QuizQuestion {
  id: string;
  scenario: {
    'zh-CN': string;
    'en': string;
    'ms': string;
  };
  dimension: QuizDimension;
  options: {
    id: string;
    text: {
      'zh-CN': string;
      'en': string;
      'ms': string;
    };
    scoreWeight: number; // 1 to 5
    styleTag: string;
  }[];
}

export interface ZiWeiStar {
  id: string;
  nameCn: string;
  nameEn: string;
  pinyin: string;
  traditionalSymbol: string;
  archetypeTitle: string;
  leadershipStyle: string;
  workPreferences: string;
  strengths: string[];
  blindSpots: string[];
  communicationStyle: string;
  brandArchetypeSuggestions: string[];
  monetizationAffinity: string[];
  interpretationSource: string;
  expertReviewStatus: 'reviewed' | 'pending' | 'verified';
}

export interface DemoPalace {
  palaceName: string;
  palaceNameCn: string;
  majorStars: string[]; // star IDs
  minorStars?: string[];
  mutagen?: 'Lu' | 'Quan' | 'Ke' | 'Ji' | null; // 四化
  explanation: string;
}

export interface DemoChartPreset {
  id: string;
  name: string;
  archetypeKey: string;
  lifePalaceStars: string[];
  careerPalaceStars: string[];
  wealthPalaceStars: string[];
  travelPalaceStars: string[];
  palaces: Record<string, DemoPalace>;
  summary: string;
}

export interface CareerDNAOutput {
  primaryThemes: string[];
  preferredRoles: string[];
  strongestReportedAbilities: string[];
  developmentAreas: string[];
  recommendedIndustries: {
    name: string;
    fitReason: string;
    requiredSkills: string[];
    relevantExperienceMatch: string;
    marketValidationQuestions: string[];
    entryBarriers: string;
    potentialDrawbacks: string;
    recommendedNextSteps: string[];
  }[];
  roleArchetypeFit: {
    role: string;
    fitScore: number;
    description: string;
  }[];
}

export interface PersonalBrandDNAOutput {
  brandArchetype: string;
  positioningStatement: string;
  positioningAlternatives: string[];
  uniqueValueProposition: string;
  targetAudience: string;
  brandPersonality: string[];
  communicationStyle: string;
  contentPillars: {
    pillar: string;
    description: string;
    sampleTopics: string[];
  }[];
  suggestedBrandStory: string;
  credibilityPlan: string[];
  recommendedChannels: {
    channel: string;
    purpose: string;
    priority: 'primary' | 'secondary' | 'experimental';
  }[];
  visualDirection: {
    aesthetic: string;
    paletteSuggestions: string[];
    toneKeywords: string[];
  };
}

export interface BusinessDNAOutput {
  recommendedModels: {
    model: string;
    idealCustomer: string;
    valueProposition: string;
    resourceRequirements: string[];
    initialValidationCost: string;
    revenueHypothesis: string;
    risks: string[];
    firstCustomerExperiments: string[];
    feasibilityScore: number;
  }[];
}

export interface RoadmapOutput {
  plan90Days: {
    phase: string;
    duration: string;
    focus: string;
    milestones: string[];
    keyActions: string[];
  }[];
  strategic3Year: {
    year: string;
    title: string;
    theme: string;
    strategicMilestones: string[];
    potentialRisksToManage: string[];
  }[];
}

export interface ConsultationRequest {
  id: string;
  createdAt: string;
  clientName: string;
  email: string;
  phone: string;
  preferredDate?: string;
  preferredAdvisor?: string;
  primaryGoal: string;
  reportTier: 'free' | 'extended' | 'expert';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface AssessmentState {
  currentStep: number;
  birthInfo: BirthInfo;
  profile: ProfessionalProfile;
  quizAnswers: Record<string, string>; // questionId -> optionId
  activePresetId: string;
  isDemoChartMode: boolean;
  computedScores: Record<QuizDimension, number>;
  careerDNA?: CareerDNAOutput;
  brandDNA?: PersonalBrandDNAOutput;
  businessDNA?: BusinessDNAOutput;
  roadmap?: RoadmapOutput;
  previewV01Result?: any;
}

export * from '@/data/previewV01Data';
export type { PreviewV01Result, PreviewEngineInput } from '@/lib/previewEngine';
