'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Sparkles, Compass, FileText, Users, User } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useAssessmentStore();
  const isEn = language === 'en';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090E]/90 backdrop-blur-md border-b border-amber-500/20 shadow-md shadow-black/40">
      <div className="mx-auto flex h-14 max-w-lg md:max-w-2xl items-center justify-between px-4">
        {/* Brand Logo - Official Custom Star Emblem */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden shadow-sm shadow-amber-500/20 bg-slate-950 border border-amber-400/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="ZIWEI IP DNA Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-black tracking-tight text-white leading-none flex items-center gap-1">
              ZIWEI IP DNA<span className="text-[10px] text-amber-400 font-mono">™</span>
            </span>
            <span className="text-[9px] text-amber-400/90 font-bold tracking-wider mt-0.5 uppercase">
              {isEn ? 'Master Yixi · Brand Strategy' : '易玺老师 · 个人品牌战略'}
            </span>
          </div>
        </Link>

        {/* Top-right Actions: Language Pill Switcher & Demo Report */}
        <div className="flex items-center gap-2">
          {/* Segmented language button */}
          <div className="flex items-center bg-[#141624] p-0.5 rounded-lg border border-slate-700/60 text-xs">
            <button
              onClick={() => setLanguage('zh-CN')}
              className={`px-2 py-0.5 rounded-md font-semibold text-[11px] transition-all ${
                language === 'zh-CN' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-md font-semibold text-[11px] transition-all ${
                language === 'en' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/report"
            className="text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-400/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition shadow-2xs"
          >
            {isEn ? 'Demo Report' : '示例报告'}
          </Link>
        </div>
      </div>
    </header>
  );
};

export const MobileBottomNav = () => {
  const pathname = usePathname();
  const { language } = useAssessmentStore();
  const isEn = language === 'en';

  const items = [
    { href: '/', label: isEn ? 'Assess' : '测算', icon: Compass },
    { href: '/report', label: isEn ? 'Report' : '报告', icon: FileText },
    { href: '/consultation', label: isEn ? 'Consult' : '预约', icon: Users },
    { href: '/dashboard', label: isEn ? 'Profile' : '我的', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#090A11]/95 backdrop-blur-md border-t border-amber-500/20 pb-safe shadow-2xl">
      <div className="max-w-lg mx-auto grid grid-cols-4 h-14">
        {items.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                isActive ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`p-1 rounded-full ${isActive ? 'bg-amber-500/15 text-amber-400' : 'text-slate-400'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="-mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export const Footer = () => {
  const { language } = useAssessmentStore();
  const isEn = language === 'en';

  return (
    <footer className="border-t border-slate-800/80 bg-[#07080D] text-slate-400 text-xs py-6 pb-20 md:pb-6">
      <div className="max-w-lg md:max-w-xl mx-auto px-4 text-center space-y-1.5">
        <p className="text-amber-300/80 text-xs font-semibold">
          {isEn ? 'ZIWEI IP DNA™ · Find Your Light, Amplify Your Value' : '紫微 IP DNA™ · 找到你的光，放大你的价值'}
        </p>
        <p className="text-[10px] text-slate-500">
          {isEn
            ? 'Master Yixi | Corporate Feng Shui & Brand Strategist · Workshop Live Assessment'
            : '易玺老师｜企业风水战略顾问 · 现场试听课专用测试系统'}
        </p>
        <div className="text-[10px] text-slate-600">
          © 2026 ZIWEI IP DNA™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

