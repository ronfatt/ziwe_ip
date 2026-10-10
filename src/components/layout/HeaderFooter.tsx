'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { translations } from '@/data/translations';
import { Sparkles, Compass, FileText, User, Users } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useAssessmentStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#080D18]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-lg md:max-w-7xl items-center justify-between px-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-[#9375FF] to-[#38D9D0] p-[1px] shadow-md shadow-[#9375FF]/20">
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#080D18]">
              <Sparkles className="h-4 w-4 text-[#38D9D0]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-white flex items-center gap-1">
              ZIWEI IP DNA<span className="text-[10px] text-[#9375FF] font-mono">™</span>
            </span>
            <span className="text-[9px] text-gray-400 font-mono tracking-tight -mt-0.5">
              CAREER INTELLIGENCE
            </span>
          </div>
        </Link>

        {/* Top-right quick actions: language switcher & demo report */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-[11px]">
            <button
              onClick={() => setLanguage('zh-CN')}
              className={`px-2 py-0.5 rounded transition-colors ${
                language === 'zh-CN' ? 'bg-[#9375FF] text-white font-medium' : 'text-gray-400 hover:text-white'
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded transition-colors ${
                language === 'en' ? 'bg-[#9375FF] text-white font-medium' : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/report"
            className="text-[11px] px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-[#38D9D0]/30 transition"
          >
            示范报告
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-white/10 bg-[#080D18]/95 backdrop-blur-2xl pb-safe">
      <div className="max-w-lg mx-auto grid grid-cols-4 h-14">
        {items.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 text-[11px] transition-colors ${
                isActive ? 'text-[#38D9D0] font-semibold' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#38D9D0]' : 'text-gray-400'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050811] text-gray-500 text-xs py-8 pb-20 md:pb-8">
      <div className="max-w-lg md:max-w-5xl mx-auto px-4 text-center space-y-2">
        <p className="text-gray-400 text-xs">
          ZIWEI IP DNA™ · 探索事业天赋，定义个人品牌，规划未来方向
        </p>
        <p className="text-[10px] text-gray-600 leading-relaxed max-w-md mx-auto">
          传统东方星宿模型仅作心智反思参照，不作绝对命运预测。严谨遵循数据最小化与隐私合规。
        </p>
        <div className="text-[10px] text-gray-600">
          © 2026 ZIWEI IP DNA™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
