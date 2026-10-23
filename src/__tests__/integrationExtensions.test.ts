import { describe, it, expect } from 'vitest';
import { calculateZiweiIpDnaPreview } from '../lib/previewEngine';
import { calculateTrueSolarTime } from '../lib/time/trueSolarTime';
import { findCityByName, POPULAR_CITIES } from '../lib/time/cities';
import { detectBrandFormations } from '../lib/patternEngine';
import { getClassicQuoteForStars } from '../lib/classicQuotes';
import { getFamousLeadersForArchetype } from '../lib/famousFigures';

describe('紫微斗数开源融合与高阶战略功能测试', () => {
  it('验证城市经纬度检索与真太阳时计算 (吉隆坡与新加坡)', () => {
    const klCity = findCityByName('吉隆坡');
    expect(klCity).toBeDefined();
    expect(klCity?.longitude).toBe(101.68);

    const sgCity = findCityByName('Singapore');
    expect(sgCity).toBeDefined();
    expect(sgCity?.name).toBe('新加坡');

    // 计算吉隆坡真太阳时
    const res = calculateTrueSolarTime({
      year: 2026,
      month: 10,
      day: 23,
      clockHour: 10,
      clockMinute: 30,
      longitude: klCity!.longitude
    });

    expect(res.isCorrected).toBe(true);
    // 东经 101.68° 比东经 120° 慢约 73 分钟
    expect(res.longitudeOffsetMinutes).toBeCloseTo(-73.28, 1);
    expect(res.totalOffsetMinutes).toBeLessThan(0);
  });

  it('验证大格局识别 (杀破狼 / 府相朝垣 / 极向离明)', () => {
    // 模拟午宫紫微坐命 (极向离明格)
    const chartJiXiang = {
      mingBranch: 6, // 午
      shenBranch: 6,
      yearStem: '甲',
      yearBranch: '午',
      palaces: [
        { branch: 6, name: '命宫', stars: ['紫微'] },
        { branch: 0, name: '迁移宫', stars: ['贪狼'] },
        { branch: 2, name: '官禄宫', stars: ['天府'] },
        { branch: 10, name: '财帛宫', stars: ['武曲', '天相'] }
      ]
    };

    const formations = detectBrandFormations(chartJiXiang);
    expect(formations.some(f => f.id === 'ji-xiang-li-ming')).toBe(true);
    const jiXiang = formations.find(f => f.id === 'ji-xiang-li-ming')!;
    expect(jiXiang.ipTitle).toContain('行业灯塔');
    expect(jiXiang.badge).toContain('罕见帝王大格局');
  });

  it('验证古籍原典点睛金句 (《骨髓赋》/《全书》)', () => {
    const quoteZiwei = getClassicQuoteForStars(['紫微']);
    expect(quoteZiwei?.source).toBe('《骨髓赋》');
    expect(quoteZiwei?.originalText).toContain('紫微帝座为众星之尊');
    expect(quoteZiwei?.modernInsight).toContain('易玺老师·IP点睛');

    const quoteTianji = getClassicQuoteForStars(['天机']);
    expect(quoteTianji?.originalText).toContain('智慧之宿');
  });

  it('验证商业领袖同频镜像检索', () => {
    const leadersPioneer = getFamousLeadersForArchetype('disruption_pioneer');
    expect(leadersPioneer.length).toBeGreaterThan(0);
    expect(leadersPioneer.some(l => l.name === '史蒂夫·乔布斯' || l.name === '埃隆·马斯克')).toBe(true);

    const leadersAuthority = getFamousLeadersForArchetype('leader_authority');
    expect(leadersAuthority.some(l => l.name === '李嘉诚')).toBe(true);
  });

  it('完整引擎输出包含四大高价值模块且字段完整', () => {
    const report = calculateZiweiIpDnaPreview({
      name: '易玺学员',
      gender: 'male',
      birthDate: '1990-06-15',
      birthTime: '14:30',
      city: '吉隆坡'
    });

    expect(report.user.city).toContain('吉隆坡');
    expect(report.user.true_solar_time_str).toBeDefined();
    expect(report.formations.length).toBeGreaterThan(0);
    expect(report.primary_formation).toBeDefined();
    expect(report.classic_quote).toBeDefined();
    expect(report.famous_leaders.length).toBeGreaterThan(0);
  });
});
