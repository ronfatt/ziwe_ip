'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { translations } from '@/data/translations';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Layers, 
  Compass,
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { Gender } from '@/types';

export default function HomePage() {
  const router = useRouter();
  const { language, quickAnalyzeFromBirth, loadDemoSeed } = useAssessmentStore();
  const t = translations[language] || translations['zh-CN'];

  // Mobile Web App Input State
  const [birthDate, setBirthDate] = useState('1995-08-18');
  const [displayName, setDisplayName] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  const [showOptional, setShowOptional] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) {
      alert('请选择您的出生日期');
      return;
    }
    setIsSubmitting(true);
    quickAnalyzeFromBirth(birthDate, displayName, birthTime, gender);
    router.push('/discover/analyze');
  };

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-between max-w-lg md:max-w-xl mx-auto px-4 py-4 md:py-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-[#9375FF]/20 via-[#38D9D0]/10 to-transparent blur-3xl opacity-75" />

      {/* Main App Container */}
      <div className="space-y-4">
        {/* App Hero Badge & Tagline */}
        <div className="text-center space-y-1.5 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#9375FF]/30 bg-[#121B2D]/90 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#38D9D0]">
            <Sparkles className="w-3 h-3 text-[#38D9D0]" />
            <span>AI CAREER & BRAND IP INTELLIGENCE</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
            探索你的事业天赋 · 锁定个人品牌
          </h1>
          <p className="text-xs text-[#9DA9C0] max-w-xs mx-auto">
            传统东方十四主星原型 × 现代商业策略推演，输入生日一键生成。
          </p>
        </div>

        {/* Core Mobile Input Card (Web App Form) */}
        <div className="rounded-2xl glass-panel-elevated p-4 sm:p-5 border border-[#9375FF]/30 shadow-2xl shadow-[#9375FF]/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 font-mono text-[10px] text-[#38D9D0] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38D9D0] animate-pulse" />
            ONE-CLICK SYNTHESIS
          </div>

          <form onSubmit={handleStartAnalysis} className="space-y-3.5">
            {/* 1. Date of Birth (Primary Input) */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#38D9D0]" />
                <span>出生日期 (阳历公历) <span className="text-rose-400">*</span></span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full rounded-xl bg-[#080D18] border border-white/15 px-3.5 py-2.5 text-sm font-mono text-white focus:border-[#38D9D0] focus:ring-1 focus:ring-[#38D9D0] focus:outline-none transition"
                />
              </div>
            </div>

            {/* Optional Fields Toggle */}
            <div className="pt-0.5">
              <button
                type="button"
                onClick={() => setShowOptional(!showOptional)}
                className="text-[11px] text-[#9375FF] hover:text-[#38D9D0] font-mono flex items-center gap-1 transition"
              >
                <span>{showOptional ? '▾ 收起选填信息 (称呼/时辰/性别)' : '▸ 展开选填信息 (称呼/时辰/性别，更精准)'}</span>
              </button>
            </div>

            {/* Optional Fields Accordion */}
            {showOptional && (
              <div className="space-y-3 pt-1 border-t border-white/5 animate-fadeIn">
                {/* Display Name */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-300 mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-[#38D9D0]" />
                    <span>你的称呼 / 英文名 (选填)</span>
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="如：Alex / 林奕凡"
                    className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3 py-2 text-xs text-white focus:border-[#9375FF] focus:outline-none"
                  />
                </div>

                {/* Birth Time & Gender */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-gray-300 mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#38D9D0]" />
                      <span>出生时辰 (选填)</span>
                    </label>
                    <input
                      type="time"
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                      className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3 py-2 text-xs text-white focus:border-[#9375FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-gray-300 mb-1">
                      性别 (顺逆排盘)
                    </label>
                    <div className="flex bg-[#080D18] border border-white/10 rounded-xl p-0.5">
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`flex-1 py-1.5 text-[11px] rounded-lg transition ${gender === 'male' ? 'bg-[#9375FF] text-white font-medium' : 'text-gray-400'}`}
                      >
                        乾造 (男)
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`flex-1 py-1.5 text-[11px] rounded-lg transition ${gender === 'female' ? 'bg-[#9375FF] text-white font-medium' : 'text-gray-400'}`}
                      >
                        坤造 (女)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Action CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#9375FF] via-[#38D9D0] to-[#9375FF] bg-size-200 text-black font-bold text-sm shadow-xl shadow-[#9375FF]/25 hover:shadow-[#38D9D0]/35 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>{isSubmitting ? '正在计算生成...' : '立即分析生成我的 IP DNA'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Privacy Note */}
          <div className="pt-3 border-t border-white/5 mt-3 flex items-center justify-between text-[10px] text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#38D9D0]" />
              本地沙盒运算 · 严守隐私
            </span>
            <span className="text-gray-500 font-mono">无需注册即开即用</span>
          </div>
        </div>

        {/* Quick Highlights: 4 Cards in 2x2 grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-3 rounded-xl bg-[#121B2D]/80 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-[#9375FF] flex items-center gap-1">
              <Compass className="w-3 h-3" /> 职业角色原型
            </span>
            <div className="text-xs font-semibold text-white">十四主星心智透视</div>
            <p className="text-[10px] text-gray-400 leading-tight">挖掘不内耗的事业角色</p>
          </div>

          <div className="p-3 rounded-xl bg-[#121B2D]/80 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-[#38D9D0] flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> 个人品牌定位
            </span>
            <div className="text-xs font-semibold text-white">独创定位金句公式</div>
            <p className="text-[10px] text-gray-400 leading-tight">一句话讲透商业护城河</p>
          </div>

          <div className="p-3 rounded-xl bg-[#121B2D]/80 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 轻资产变现
            </span>
            <div className="text-xs font-semibold text-white">高客单咨询与小班营</div>
            <p className="text-[10px] text-gray-400 leading-tight">验证首批种子买家</p>
          </div>

          <div className="p-3 rounded-xl bg-[#121B2D]/80 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 90天落地战役
            </span>
            <div className="text-xs font-semibold text-white">三阶段冲刺执行表</div>
            <p className="text-[10px] text-gray-400 leading-tight">可直接行动的排期</p>
          </div>
        </div>

        {/* Demo Report Quick Peek or Deep Discover Switch */}
        <div className="flex items-center justify-between px-2 pt-2 text-xs">
          <Link
            href="/report"
            onClick={() => loadDemoSeed()}
            className="text-gray-400 hover:text-white flex items-center gap-1 transition"
          >
            <span>👀 先看一份示范案例报告</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/discover"
            className="text-[#38D9D0] hover:underline flex items-center gap-1"
          >
            <span>深度12题情境问卷模式 →</span>
          </Link>
        </div>
      </div>

      {/* Mini App Bottom Bar Tip */}
      <div className="pt-4 text-center">
        <p className="text-[10px] text-gray-600 font-mono">
          ZIWEI IP DNA™ · 现代化移动端架构 · 毫秒级生成
        </p>
      </div>
    </div>
  );
}
