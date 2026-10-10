import { describe, it, expect } from 'vitest';
import {
  calculateQuizScores,
  synthesizeCareerDNA,
  synthesizeBrandDNA,
  synthesizeBusinessDNA,
  synthesizeRoadmap
} from '../lib/scoring';
import { FOURTEEN_STARS, DEMO_PRESETS } from '../data/archetypes';
import { ProfessionalProfile } from '../types';

describe('Scoring & Synthesis Logic Tests', () => {
  const sampleProfile: ProfessionalProfile = {
    currentProfession: '战略顾问',
    industry: '数字化增长',
    education: '商学院硕士',
    yearsOfExperience: 6,
    topSkills: ['商业推演', '高客单成交', 'SOP构建'],
    topInterests: ['战略', '东方哲学'],
    availableResources: ['高净值客户网络'],
    careerChallenge: '缺乏标准化产品线',
    workingStyle: '深度思考',
    businessGoals: ['打造知识IP'],
    desiredIncomeModel: '闭门顾问',
    publicBrandWillingness: 'moderate',
    desiredProfessionalFuture: '独立商业架构师'
  };

  it('calculates deterministic scores bounded between 50 and 98', () => {
    const answers = {
      q1: 'q1_a',
      q2: 'q2_a',
      q3: 'q3_a'
    };
    const scores = calculateQuizScores(answers);
    expect(scores.leadership).toBeGreaterThanOrEqual(50);
    expect(scores.leadership).toBeLessThanOrEqual(98);
    expect(scores.strategic_thinking).toBeGreaterThanOrEqual(50);
  });

  it('synthesizes Career DNA with 3-5 industries and valid fit reasons', () => {
    const scores = calculateQuizScores({});
    const careerDNA = synthesizeCareerDNA(sampleProfile, scores, 'tian_ji');

    expect(careerDNA.recommendedIndustries.length).toBeGreaterThanOrEqual(3);
    expect(careerDNA.recommendedIndustries[0].name).toContain('咨询');
    expect(careerDNA.roleArchetypeFit.length).toBeGreaterThanOrEqual(4);
    expect(careerDNA.primaryThemes.length).toBeGreaterThan(0);
  });

  it('synthesizes Personal Brand DNA with the exact Positioning Formula structure', () => {
    const scores = calculateQuizScores({});
    const brandDNA = synthesizeBrandDNA(sampleProfile, scores, 'tian_ji');

    expect(brandDNA.positioningStatement).toContain('我帮助');
    expect(brandDNA.positioningStatement).toContain('通过');
    expect(brandDNA.positioningStatement).toContain('实现');
    expect(brandDNA.positioningStatement).toContain('基于');
    expect(brandDNA.positioningAlternatives.length).toBe(3);
    expect(brandDNA.contentPillars.length).toBe(3);
  });

  it('synthesizes Business DNA with feasibility-ranked models', () => {
    const scores = calculateQuizScores({});
    const businessDNA = synthesizeBusinessDNA(sampleProfile, scores, 'tian_ji');

    expect(businessDNA.recommendedModels.length).toBeGreaterThanOrEqual(3);
    expect(businessDNA.recommendedModels[0].feasibilityScore).toBeGreaterThan(0);
    expect(businessDNA.recommendedModels[0].revenueHypothesis).toBeDefined();
  });

  it('synthesizes 90-day roadmap across 3 clear phases', () => {
    const roadmap = synthesizeRoadmap(sampleProfile, 'tian_ji');

    expect(roadmap.plan90Days.length).toBe(3);
    expect(roadmap.strategic3Year.length).toBe(3);
    expect(roadmap.plan90Days[0].duration).toBe('第 1 - 30 天');
    expect(roadmap.plan90Days[1].duration).toBe('第 31 - 60 天');
    expect(roadmap.plan90Days[2].duration).toBe('第 61 - 90 天');
  });

  it('verifies all 14 stars contain required academic and career fields', () => {
    const starKeys = Object.keys(FOURTEEN_STARS);
    expect(starKeys.length).toBe(14);

    starKeys.forEach((key) => {
      const star = FOURTEEN_STARS[key];
      expect(star.nameCn).toBeDefined();
      expect(star.nameEn).toBeDefined();
      expect(star.archetypeTitle).toBeDefined();
      expect(star.strengths.length).toBeGreaterThanOrEqual(3);
      expect(star.blindSpots.length).toBeGreaterThanOrEqual(2);
      expect(star.interpretationSource).toBeDefined();
      expect(star.expertReviewStatus).toBe('verified');
    });
  });
});
