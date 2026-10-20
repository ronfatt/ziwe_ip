import { describe, it, expect } from 'vitest';
import { calculateZiweiIpDnaPreview } from '../lib/previewEngine';
import {
  getLocalizedPreviewResult,
  STAR_NAME_EN,
  IP_FAMILIES_EN,
  DUAL_STAR_ARCHETYPES_EN,
  ELEMENT_BOOSTERS_EN
} from '../data/i18nPreviewData';

describe('ZIWEI IP DNA English Localization Tests', () => {
  it('translates single star chart into full fluent English', () => {
    const raw = calculateZiweiIpDnaPreview({
      name: 'Alexander',
      gender: 'male',
      birthDate: '1995-08-18',
      birthTime: '12:00'
    });

    const localized = getLocalizedPreviewResult(raw, true);

    expect(localized.user.name).toBe('Alexander');
    expect(localized.ziwei.ming_palace.explanation).toContain('The Life Palace defines your intrinsic IP core');
    expect(localized.ziwei.migration_palace.explanation).toContain('The Migration Palace defines your external IP projection');
    
    // Check stars are in English
    localized.ziwei.ming_palace.stars.forEach(s => {
      expect(s).toMatch(/^[A-Za-z\s]+$/);
    });

    // Check four pillars formatted in English
    expect(localized.bazi.year_pillar).toContain('-');
    expect(localized.bazi.day_pillar).toContain('-');

    // Check Element Booster in English
    expect(localized.bazi.ip_booster.name).toContain('IP Booster');
    expect(localized.bazi.ip_booster.outfit_colors.length).toBeGreaterThan(0);
    expect(localized.bazi.ip_booster.outfit_colors[0]).toMatch(/^[A-Za-z\s]+$/);
  });

  it('translates dual star chart into full fluent English', () => {
    // 1976-01-22 10:00 produces Wu Qu + Tian Xiang
    const raw = calculateZiweiIpDnaPreview({
      name: 'David Tan',
      gender: 'male',
      birthDate: '1976-01-22',
      birthTime: '10:00'
    });

    const localized = getLocalizedPreviewResult(raw, true);

    expect(localized.ziwei.ming_palace.archetype).toBe('The Pragmatic Architect');
    expect(localized.ziwei.ming_palace.ip_family).toBe('Execution & Results');
    expect(localized.ziwei.collision_summary).toContain('Every word honored');
  });

  it('leaves Chinese intact when isEn is false', () => {
    const raw = calculateZiweiIpDnaPreview({
      name: '奕凡',
      gender: 'male',
      birthDate: '1995-08-18',
      birthTime: '12:00'
    });

    const notLocalized = getLocalizedPreviewResult(raw, false);
    expect(notLocalized.ziwei.ming_palace.explanation).toContain('命宫决定你的 IP 内核');
  });
});
