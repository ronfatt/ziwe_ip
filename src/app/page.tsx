'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  ChevronDown,
  Target,
  TrendingUp,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { Gender } from '@/types';

export default function HomePage() {
  const router = useRouter();
  const { quickAnalyzeFromBirth } = useAssessmentStore();

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
    <div className="min-h-[calc(100vh-3.5rem)] max-w-lg md:max-w-xl mx-auto px-4 py-4 md:py-6 space-y-4">
      {/* 1. HERO BANNER: 发现你的天赋，让个人品牌发光 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 p-5 border border-blue-100/60 shadow-xs">
        {/* Official Brand Logo Emblem with Orbit & Light Effects */}
        <div className="absolute -top-1 -right-2 w-32 h-32 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Glowing ambient ring */}
            <div className="absolute w-24 h-24 rounded-full bg-blue-500/20 blur-md animate-pulse" />
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/25 border border-blue-400/30 bg-slate-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="ZIWEI IP DNA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tiny stars */}
            <span className="absolute top-1 left-2 text-blue-500 text-xs font-bold">✦</span>
            <span className="absolute bottom-2 right-1 text-indigo-400 text-xs font-bold">★</span>
          </div>
        </div>

        <div className="relative z-10 max-w-[70%] space-y-1.5">
          <span className="inline-block text-[11px] font-bold text-[#2563EB] tracking-wide">
            探索你的 IP DNA
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            发现你的天赋，<br />让个人品牌发光。
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed pt-0.5">
            从传统星曜原型出发，探索事业与品牌方向。
          </p>
        </div>
      </div>

      {/* 2. CORE ACTION CARD: 开启你的探索 */}
      <div className="rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
            <h2 className="text-sm font-bold text-slate-900">
              开启你的探索
            </h2>
          </div>
          <span className="text-[11px] font-medium text-[#2563EB]">
            一键生成专属分析
          </span>
        </div>

        <form onSubmit={handleStartAnalysis} className="space-y-3.5">
          {/* Birth date input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-600">
              出生日期（阳历）<span className="text-rose-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Collapsible toggle for optional fields */}
          <div className="pt-0.5">
            <button
              type="button"
              onClick={() => setShowOptional(!showOptional)}
              className="w-full flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium transition"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>补充称呼、时辰与性别（选填）</span>
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showOptional ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Optional drawer */}
          {showOptional && (
            <div className="space-y-3 pt-2 p-3 rounded-xl bg-slate-50 border border-slate-200/60 animate-fadeIn text-xs">
              <div>
                <label className="block text-[11px] font-medium text-slate-500 mb-1">
                  称呼 / 英文名
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="如：Alex / 林奕凡"
                  className="w-full rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-1">
                    出生时辰 (选填)
                  </label>
                  <input
                    type="time"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full rounded-lg bg-white border border-slate-200 px-2.5 py-2 text-xs text-slate-800 focus:border-[#2563EB] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-1">
                    性别 (顺逆排盘)
                  </label>
                  <div className="flex bg-white border border-slate-200 rounded-lg p-0.5">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`flex-1 py-1 rounded text-[11px] font-medium transition ${gender === 'male' ? 'bg-[#2563EB] text-white' : 'text-slate-500'}`}
                    >
                      男
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`flex-1 py-1 rounded text-[11px] font-medium transition ${gender === 'female' ? 'bg-[#2563EB] text-white' : 'text-slate-500'}`}
                    >
                      女
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Primary CTA Button: 生成我的 IP DNA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span>{isSubmitting ? '正在计算生成...' : '生成我的 IP DNA →'}</span>
          </button>
        </form>

        {/* Local Security & Sandbox Notice */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            本地沙盒运算，严格保护你的隐私
          </span>
          <span className="text-slate-400">无需注册 即开即用</span>
        </div>
      </div>

      {/* 3. FOUR MODERN ICON CARDS: 4大核心模块 */}
      <div className="grid grid-cols-2 gap-3">
        {/* 1. 职业天赋 */}
        <div className="rounded-2xl bg-white p-3.5 border border-slate-200/90 shadow-2xs space-y-1.5">
          <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">职业天赋</div>
            <div className="text-[10px] text-orange-500 font-medium">发现优势角色</div>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            看清你的核心能力与适合的事业角色
          </p>
        </div>

        {/* 2. 品牌定位 */}
        <div className="rounded-2xl bg-white p-3.5 border border-slate-200/90 shadow-2xs space-y-1.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">品牌定位</div>
            <div className="text-[10px] text-[#2563EB] font-medium">找到表达方向</div>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            提炼个人特色，打造独特的品牌定位
          </p>
        </div>

        {/* 3. 变现思路 */}
        <div className="rounded-2xl bg-white p-3.5 border border-slate-200/90 shadow-2xs space-y-1.5">
          <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">变现思路</div>
            <div className="text-[10px] text-rose-500 font-medium">探索商业可能</div>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            从能力到产品，找到可持续的变现路径
          </p>
        </div>

        {/* 4. 90 天行动 */}
        <div className="rounded-2xl bg-white p-3.5 border border-slate-200/90 shadow-2xs space-y-1.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">90 天行动</div>
            <div className="text-[10px] text-emerald-600 font-medium">把想法变成计划</div>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            提供可执行的阶段建议，从 0 到 1 落地实践
          </p>
        </div>
      </div>

      {/* 4. BOTTOM PILL: 更深入地探索？测试深度问卷探索 */}
      <div className="pt-1">
        <Link
          href="/discover"
          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 text-xs font-medium transition flex items-center justify-center gap-1.5"
        >
          <span>📑 更深入地探索？试试 <strong>深度问卷探索</strong> →</span>
        </Link>
      </div>
    </div>
  );
}
