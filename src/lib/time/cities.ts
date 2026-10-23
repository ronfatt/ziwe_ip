// ==========================================
// 全球主要城市经纬度字典 (特别优化马来西亚、新加坡、大中华区与国际城市)
// 专为紫微 IP DNA 战略系统真太阳时校准定制
// ==========================================

export interface CityLocation {
  name: string;
  nameEn: string;
  region: string;
  regionEn: string;
  longitude: number; // 东经为正 (度)
  timezone: string;
}

export const POPULAR_CITIES: CityLocation[] = [
  // ── 马来西亚主要城市 (试听课核心首发地) ──
  { name: '吉隆坡', nameEn: 'Kuala Lumpur', region: '马来西亚', regionEn: 'Malaysia', longitude: 101.68, timezone: 'Asia/Kuala_Lumpur' },
  { name: '槟城', nameEn: 'Penang', region: '马来西亚', regionEn: 'Malaysia', longitude: 100.33, timezone: 'Asia/Kuala_Lumpur' },
  { name: '新山', nameEn: 'Johor Bahru', region: '马来西亚', regionEn: 'Malaysia', longitude: 103.74, timezone: 'Asia/Kuala_Lumpur' },
  { name: '怡保', nameEn: 'Ipoh', region: '马来西亚', regionEn: 'Malaysia', longitude: 101.09, timezone: 'Asia/Kuala_Lumpur' },
  { name: '马六甲', nameEn: 'Melaka', region: '马来西亚', regionEn: 'Malaysia', longitude: 102.25, timezone: 'Asia/Kuala_Lumpur' },
  { name: '古晋', nameEn: 'Kuching', region: '马来西亚', regionEn: 'Malaysia', longitude: 110.35, timezone: 'Asia/Kuching' },
  { name: '亚庇', nameEn: 'Kota Kinabalu', region: '马来西亚', regionEn: 'Malaysia', longitude: 116.07, timezone: 'Asia/Kuching' },

  // ── 新加坡 ──
  { name: '新加坡', nameEn: 'Singapore', region: '新加坡', regionEn: 'Singapore', longitude: 103.82, timezone: 'Asia/Singapore' },

  // ── 港澳台地区 ──
  { name: '香港', nameEn: 'Hong Kong', region: '香港', regionEn: 'Hong Kong', longitude: 114.17, timezone: 'Asia/Hong_Kong' },
  { name: '台北', nameEn: 'Taipei', region: '台湾', regionEn: 'Taiwan', longitude: 121.56, timezone: 'Asia/Taipei' },
  { name: '台中', nameEn: 'Taichung', region: '台湾', regionEn: 'Taiwan', longitude: 120.67, timezone: 'Asia/Taipei' },
  { name: '高雄', nameEn: 'Kaohsiung', region: '台湾', regionEn: 'Taiwan', longitude: 120.31, timezone: 'Asia/Taipei' },
  { name: '澳门', nameEn: 'Macau', region: '澳门', regionEn: 'Macau', longitude: 113.54, timezone: 'Asia/Macau' },

  // ── 中国主要省市 ──
  { name: '北京', nameEn: 'Beijing', region: '中国', regionEn: 'China', longitude: 116.40, timezone: 'Asia/Shanghai' },
  { name: '上海', nameEn: 'Shanghai', region: '中国', regionEn: 'China', longitude: 121.47, timezone: 'Asia/Shanghai' },
  { name: '广州', nameEn: 'Guangzhou', region: '中国', regionEn: 'China', longitude: 113.26, timezone: 'Asia/Shanghai' },
  { name: '深圳', nameEn: 'Shenzhen', region: '中国', regionEn: 'China', longitude: 114.06, timezone: 'Asia/Shanghai' },
  { name: '杭州', nameEn: 'Hangzhou', region: '中国', regionEn: 'China', longitude: 120.15, timezone: 'Asia/Shanghai' },
  { name: '成都', nameEn: 'Chengdu', region: '中国', regionEn: 'China', longitude: 104.06, timezone: 'Asia/Shanghai' },
  { name: '武汉', nameEn: 'Wuhan', region: '中国', regionEn: 'China', longitude: 114.30, timezone: 'Asia/Shanghai' },
  { name: '重庆', nameEn: 'Chongqing', region: '中国', regionEn: 'China', longitude: 106.55, timezone: 'Asia/Shanghai' },
  { name: '南京', nameEn: 'Nanjing', region: '中国', regionEn: 'China', longitude: 118.80, timezone: 'Asia/Shanghai' },
  { name: '西安', nameEn: 'Xi\'an', region: '中国', regionEn: 'China', longitude: 108.95, timezone: 'Asia/Shanghai' },
  { name: '厦门', nameEn: 'Xiamen', region: '中国', regionEn: 'China', longitude: 118.08, timezone: 'Asia/Shanghai' },

  // ── 国际代表城市 (支持海外华人听众) ──
  { name: '悉尼', nameEn: 'Sydney', region: '澳洲', regionEn: 'Australia', longitude: 151.21, timezone: 'Australia/Sydney' },
  { name: '墨尔本', nameEn: 'Melbourne', region: '澳洲', regionEn: 'Australia', longitude: 144.96, timezone: 'Australia/Melbourne' },
  { name: '伦敦', nameEn: 'London', region: '英国', regionEn: 'UK', longitude: -0.12, timezone: 'Europe/London' },
  { name: '纽约', nameEn: 'New York', region: '美国', regionEn: 'USA', longitude: -74.00, timezone: 'America/New_York' },
  { name: '洛杉矶', nameEn: 'Los Angeles', region: '美国', regionEn: 'USA', longitude: -118.24, timezone: 'America/Los_Angeles' },
  { name: '温哥华', nameEn: 'Vancouver', region: '加拿大', regionEn: 'Canada', longitude: -123.12, timezone: 'America/Vancouver' }
];

export function findCityByName(cityName: string): CityLocation | undefined {
  if (!cityName) return undefined;
  const clean = cityName.trim().toLowerCase();
  return POPULAR_CITIES.find(
    c => c.name.toLowerCase() === clean ||
         c.nameEn.toLowerCase() === clean ||
         clean.includes(c.name.toLowerCase()) ||
         c.name.toLowerCase().includes(clean)
  );
}
