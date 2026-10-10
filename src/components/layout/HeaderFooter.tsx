'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Sparkles, Compass, FileText, Users, User } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useAssessmentStore();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="mx-auto flex h-14 max-w-lg md:max-w-2xl items-center justify-between px-4">
        {/* Brand Logo - Crisp Royal Blue Rounded Icon */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] shadow-sm shadow-blue-500/20 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-black tracking-tight text-slate-900 leading-none flex items-center gap-1">
              ZIWEI IP DNA<span className="text-[10px] text-[#2563EB] font-mono">™</span>
            </span>
            <span className="text-[9px] text-slate-400 font-bold tracking-wider mt-0.5 uppercase">
              Career Intelligence
            </span>
          </div>
        </Link>

        {/* Top-right Actions: Language Pill Switcher & Demo Report */}
        <div className="flex items-center gap-2">
          {/* Segmented language button */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/60 text-xs">
            <button
              onClick={() => setLanguage('zh-CN')}
              className={`px-2 py-0.5 rounded-md font-semibold text-[11px] transition-all ${
                language === 'zh-CN' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-md font-semibold text-[11px] transition-all ${
                language === 'en' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/report"
            className="text-[12px] font-medium px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-[#2563EB] hover:border-blue-200 transition shadow-2xs"
          >
            示例报告
          </Link>
        </div>
      </div>
    </header>
  );
};

export const MobileBottomNav = () => {
  const pathname = usePathname();

  const items = [
    { href: '/', label: '测算', icon: Compass },
    { href: '/report', label: '报告', icon: FileText },
    { href: '/consultation', label: '预约', icon: Users },
    { href: '/dashboard', label: '我的', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/80 pb-safe shadow-lg">
      <div className="max-w-lg mx-auto grid grid-cols-4 h-14">
        {items.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                isActive ? 'text-[#2563EB] font-bold' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className={`p-1 rounded-full ${isActive ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-400'}`}>
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
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-400 text-xs py-6 pb-20 md:pb-6">
      <div className="max-w-lg md:max-w-xl mx-auto px-4 text-center space-y-1.5">
        <p className="text-slate-500 text-xs font-medium">
          ZIWEI IP DNA™ · 探索你的天赋，让个人品牌发光
        </p>
        <p className="text-[10px] text-slate-400">
          传统星曜原型结合现代商业推演 · 数据仅在本地计算 · 严格保护隐私
        </p>
        <div className="text-[10px] text-slate-400">
          © 2026 ZIWEI IP DNA™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
