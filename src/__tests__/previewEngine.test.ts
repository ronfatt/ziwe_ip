import { describe, it, expect } from 'vitest';
import { calculateZiweiIpDnaPreview } from '../lib/previewEngine';
import { IP_FAMILIES, FOURTEEN_STAR_LABELS, DUAL_STAR_ARCHETYPES, ELEMENT_BOOSTERS } from '../data/previewV01Data';

describe('紫微 IP DNA 战略系统｜引流测试版 Preview V0.1 Engine Tests', () => {
  it('correctly calculates Calven sample data structure matching Section 35 and Section 37', () => {
    const result = calculateZiweiIpDnaPreview({
      name: 'Calven',
      gender: 'male',
      birthDate: '1980-01-01',
      birthTime: '12:00'
    });

    // 01 姓名
    expect(result.user.name).toBe('Calven');
    expect(result.user.gender).toBe('male');

    // 02 & 03 六大核心 IP 家族
    expect(result.ziwei.ming_palace.ip_family).toBeDefined();
    expect(result.ziwei.ming_palace.ip_family_id).toBeDefined();
    expect(IP_FAMILIES[result.ziwei.ming_palace.ip_family_id]).toBeDefined();

    // 04 命宫主星 & 05 命宫核心原型 & 06 核心优势
    expect(result.ziwei.ming_palace.stars.length).toBeGreaterThanOrEqual(1);
    expect(result.ziwei.ming_palace.archetype).toBeDefined();
    expect(result.ziwei.ming_palace.core_advantages.length).toBeGreaterThanOrEqual(3);

    // 07 迁移宫主星 & 08 迁移宫外显原型 & 09 市场如何看你
    expect(result.ziwei.migration_palace.stars.length).toBeGreaterThanOrEqual(1);
    expect(result.ziwei.migration_palace.archetype).toBeDefined();
    expect(result.ziwei.migration_palace.keywords.length).toBeGreaterThanOrEqual(2);

    // 10 命宫 × 迁移宫一句话总结
    expect(result.ziwei.collision_summary).toBeDefined();
    expect(result.ziwei.collision_summary.length).toBeGreaterThan(15);

    // 11 八字日柱 & 12 喜用神 & 13 五行 IP Booster
    expect(result.bazi.day_pillar).toBeDefined();
    expect(result.bazi.useful_element).toBeDefined();
    expect(result.bazi.useful_element_name).toBeDefined();
    expect(result.bazi.ip_booster.name).toBeDefined();
    expect(result.bazi.ip_booster.boost).toBeDefined();
    expect(result.bazi.ip_booster.keywords.length).toBeGreaterThanOrEqual(3);
    expect(result.bazi.ip_booster.outfit_colors.length).toBeGreaterThanOrEqual(3);

    // 14 真实农历与南派排盘特有字段
    expect(result.user.lunar_date_str).toContain('农历');
    expect(result.ziwei.ming_palace.bureau_name).toBeDefined();
    expect(result.ziwei.ming_palace.palace_pillar).toBeDefined();
    expect(result.ziwei.shen_palace.name).toBeDefined();
    expect(result.ziwei.shen_palace.meaning).toBeDefined();
    expect(result.ziwei.mutagen_insight).toBeDefined();
  });

  it('validates all 6 IP Families integrity per spec Section 12-17', () => {
    const familyKeys = Object.keys(IP_FAMILIES);
    expect(familyKeys.length).toBe(6);

    familyKeys.forEach((key) => {
      const family = IP_FAMILIES[key as keyof typeof IP_FAMILIES];
      expect(family.name).toBeDefined();
      expect(family.stars.length).toBeGreaterThanOrEqual(2);
      expect(family.keywords.length).toBeGreaterThanOrEqual(4);
      expect(family.ipAdvantage).toBeDefined();
      expect(family.contentTendency).toBeDefined();
      expect(family.oneLiner).toBeDefined();
    });
  });

  it('validates all 14 stars preview labels per spec Section 18', () => {
    const starKeys = Object.keys(FOURTEEN_STAR_LABELS);
    expect(starKeys.length).toBe(14);

    starKeys.forEach((starName) => {
      const star = FOURTEEN_STAR_LABELS[starName];
      expect(star.name).toBe(starName);
      expect(star.tags.length).toBe(3);
      expect(star.singleArchetype).toBeDefined();
      expect(star.coreAdvantagePoints.length).toBeGreaterThanOrEqual(3);
      expect(star.externalPerception.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('validates all 5 Elements IP Boosters per spec Section 28-33', () => {
    const elementKeys = Object.keys(ELEMENT_BOOSTERS);
    expect(elementKeys.length).toBe(5);

    const expectedBoosts: Record<string, string> = {
      wood: '成长力',
      fire: '曝光力',
      earth: '信任力',
      metal: '专业力',
      water: '洞察力'
    };

    elementKeys.forEach((elKey) => {
      const b = ELEMENT_BOOSTERS[elKey as keyof typeof ELEMENT_BOOSTERS];
      expect(b.boost).toBe(expectedBoosts[elKey]);
      expect(b.keywords.length).toBeGreaterThanOrEqual(4);
      expect(b.copy).toBeDefined();
      expect(b.suggestion).toBeDefined();
      expect(b.oneLiner).toBeDefined();
      expect(b.outfitColors.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('verifies deterministic consistency for identical input', () => {
    const resA = calculateZiweiIpDnaPreview({
      name: 'TestUser',
      birthDate: '1992-06-18',
      birthTime: '09:30'
    });
    const resB = calculateZiweiIpDnaPreview({
      name: 'TestUser',
      birthDate: '1992-06-18',
      birthTime: '09:30'
    });

    expect(resA.bazi.day_pillar).toBe(resB.bazi.day_pillar);
    expect(resA.ziwei.ming_palace.archetype).toBe(resB.ziwei.ming_palace.archetype);
    expect(resA.ziwei.migration_palace.archetype).toBe(resB.ziwei.migration_palace.archetype);
    expect(resA.bazi.useful_element).toBe(resB.bazi.useful_element);
  });
});
