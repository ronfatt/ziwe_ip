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
  Flame,
  CheckCircle2,
  Lock,
  Layers,
  Compass,
  Radio
} from 'lucide-react';
import { Gender } from '@/types';

export default function HomePage() {
  const router = useRouter();
  const { quickAnalyzeFromBirth } = useAssessmentStore();

  // Mobile Web App Input State
  const [displayName, setDisplayName] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  const [birthDate, setBirthDate] = useState('1995-08-18');
  const [birthTime, setBirthTime] = useState('12:00');
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
      {/* 1. HERO BANNER: 找出你的紫微 IP DNA */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/70 p-5 border border-blue-100/70 shadow-xs">
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
            {/* Ambient stars */}
            <span className="absolute top-1 left-2 text-blue-500 text-xs font-bold">✦</span>
            <span className="absolute bottom-2 right-1 text-indigo-400 text-xs font-bold">★</span>
          </div>
        </div>

        <div className="relative z-10 max-w-[70%] space-y-2">
          {/* Section 41: Visual Language Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/70 border border-blue-200/80 text-[10px] font-black text-[#2563EB] tracking-wider uppercase">
            <span>ZIWEI</span>
            <span>·</span>
            <span>IP</span>
            <span>·</span>
            <span>DNA</span>
            <span className="text-[9px] font-normal text-blue-500">Preview V0.1</span>
          </div>

          {/* Section 4: Main Headline */}
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            找出你的紫微 IP DNA
          </h1>

          {/* Section 4: Subtitle */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            你的个人品牌，不一定要从模仿别人开始。从你的命宫、迁移宫与八字能量，看见你天生更容易被市场记住的方式。
          </p>

          <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-500">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <Zap className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              2–3 分钟快速测出
            </span>
            <span className="text-slate-300">|</span>
            <span>东方命理 × 品牌战略</span>
          </div>
        </div>
      </div>

      {/* 2. CORE ACTION CARD: 用户输入资料 (Section 5) */}
      <div className="rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#2563EB]" />
            <h2 className="text-sm font-bold text-slate-900">
              输入出生资料进行排盘
            </h2>
          </div>
          <span className="text-[11px] font-medium text-slate-400">
            默认时区 GMT+8
          </span>
        </div>

        <form onSubmit={handleStartAnalysis} className="space-y-3.5">
          {/* 姓名与性别 */}
          <div className="grid grid-cols-5 gap-2.5">
            <div className="col-span-3 space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                姓名 / 英文名
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="如：Calven / 奕凡"
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="col-span-2 space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                性别
              </label>
              <div className="flex bg-slate-100 border border-slate-200 rounded-xl p-1 h-[42px] items-center">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`flex-1 h-full rounded-lg text-xs font-bold transition flex items-center justify-center ${gender === 'male' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  男
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`flex-1 h-full rounded-lg text-xs font-bold transition flex items-center justify-center ${gender === 'female' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  女
                </button>
              </div>
            </div>
          </div>

          {/* 出生日期 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-700">
                出生日期（阳历 / 公历）<span className="text-rose-500 ml-0.5">*</span>
              </label>
              <span className="text-[10px] text-slate-400">系统自动换算农历与干支</span>
            </div>
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

          {/* 出生时间 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-700">
                出生时间
              </label>
              <span className="text-[10px] text-slate-400">若不确定可保留默认午时 (12:00)</span>
            </div>
            <div className="relative">
              <input
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Primary CTA Button: 开始测试我的 IP DNA (Section 4) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span>{isSubmitting ? '系统正在精准排盘...' : '开始测试我的 IP DNA →'}</span>
          </button>
        </form>

        {/* Local Security & Sandbox Notice */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            权威排盘算法 · 严格保护隐私
          </span>
          <span className="text-slate-400">无需注册 即开即测</span>
        </div>
      </div>

      {/* 3. 核心测算公式说明 (Section 1 & 11) */}
      <div className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            Preview 版为你揭示三大核心能量
          </span>
          <span className="text-[10px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md">
            核心公式
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          {/* 1. 命宫主星 */}
          <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-blue-600 block">命宫主星</span>
              <span className="text-xs font-black text-slate-800 block">我是谁</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 leading-tight">
              核心特质与优势原型
            </p>
          </div>

          {/* 2. 迁移宫主星 */}
          <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100 flex flex-col justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-indigo-600 block">迁移宫主星</span>
              <span className="text-xs font-black text-slate-800 block">别人怎么看我</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 leading-tight">
              公众感知与外显形象
            </p>
          </div>

          {/* 3. 八字喜用神 */}
          <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-100 flex flex-col justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-amber-600 block">八字喜用神</span>
              <span className="text-xs font-black text-slate-800 block">能量放大</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 leading-tight">
              品牌表达与五行加速器
            </p>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-[11px] text-slate-600 leading-relaxed">
          <span className="font-bold text-slate-800">💡 为什么是命宫 × 迁移宫？</span>
          你自己认为的自己，和市场看到的你，不一定完全一样。真正的个人影响力，是<strong>「核心的你」</strong>与<strong>「市场看到的你」</strong>碰撞出的化学反应。
        </div>
      </div>

      {/* 4. 六大家族一览标签 */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-800">你属于六大核心 IP 家族的哪一类？</span>
          <span className="text-[10px] text-slate-400">14主星融合归纳</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-[11px]">
          <div className="px-2 py-1.5 rounded-lg bg-amber-50 text-amber-800 font-semibold border border-amber-200/60 text-center">
            👑 领袖权威型
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-blue-50 text-blue-800 font-semibold border border-blue-200/60 text-center">
            🧠 智慧策略型
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-purple-50 text-purple-800 font-semibold border border-purple-200/60 text-center">
            📢 表达传播型
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-rose-50 text-rose-800 font-semibold border border-rose-200/60 text-center">
            🔥 开创破局型
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-semibold border border-teal-200/60 text-center">
            🤝 信任导师型
          </div>
          <div className="px-2 py-1.5 rounded-lg bg-orange-50 text-orange-800 font-semibold border border-orange-200/60 text-center">
            🎯 实战结果型
          </div>
        </div>
      </div>

      {/* 5. 底部免责与版权 */}
      <div className="text-center text-[10px] text-slate-400 py-1">
        紫微 IP DNA 战略系统 · Preview Test Version V0.1 · 试听课现场测试版
      </div>
    </div>
  );
}
