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
import { IP_FAMILIES } from '@/data/previewV01Data';
import { IP_FAMILIES_EN } from '@/data/i18nPreviewData';

export default function HomePage() {
  const router = useRouter();
  const { quickAnalyzeFromBirth, language } = useAssessmentStore();
  const isEn = language === 'en';

  // Mobile Web App Input State
  const [displayName, setDisplayName] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  const [birthDate, setBirthDate] = useState('1995-08-18');
  const [birthTime, setBirthTime] = useState('12:00');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 12 时辰快捷定义表 (Bilingual)
  const SHICHEN_LIST = [
    { label: isEn ? 'Zi Hour' : '子时', time: '00:00', desc: '23:00-01:00' },
    { label: isEn ? 'Chou' : '丑时', time: '02:00', desc: '01:00-03:00' },
    { label: isEn ? 'Yin' : '寅时', time: '04:00', desc: '03:00-05:00' },
    { label: isEn ? 'Mao' : '卯时', time: '06:00', desc: '05:00-07:00' },
    { label: isEn ? 'Chen' : '辰时', time: '08:00', desc: '07:00-09:00' },
    { label: isEn ? 'Si' : '巳时', time: '10:00', desc: '09:00-11:00' },
    { label: isEn ? 'Wu (Noon)' : '午时', time: '12:00', desc: '11:00-13:00' },
    { label: isEn ? 'Wei' : '未时', time: '14:00', desc: '13:00-15:00' },
    { label: isEn ? 'Shen' : '申时', time: '16:00', desc: '15:00-17:00' },
    { label: isEn ? 'You' : '酉时', time: '18:00', desc: '17:00-19:00' },
    { label: isEn ? 'Xu' : '戌时', time: '20:00', desc: '19:00-21:00' },
    { label: isEn ? 'Hai' : '亥时', time: '22:00', desc: '21:00-23:00' },
  ];

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) {
      alert(isEn ? 'Please select your birth date' : '请选择您的出生日期');
      return;
    }
    setIsSubmitting(true);
    quickAnalyzeFromBirth(birthDate, displayName, birthTime, gender);
    router.push('/discover/analyze');
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] max-w-lg md:max-w-xl mx-auto px-4 py-4 md:py-6 space-y-4">
      {/* 1. HERO BANNER: 100% 呼应讲座大屏 PPT 主视觉 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#18111A] via-[#10121B] to-[#0A0C14] p-6 border border-amber-500/30 shadow-2xl shadow-rose-950/20">
        {/* Background Cosmic Energy Glow (Glowing Red Solar Orb from PPT) */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br from-rose-600/35 via-amber-600/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

        {/* Right floating official logo emblem with golden rim */}
        <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none opacity-90">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full bg-rose-500/20 blur-md animate-pulse" />
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-xl shadow-rose-950/60 border border-amber-400/40 bg-slate-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="ZIWEI IP DNA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -top-1 left-0 text-amber-300 text-xs font-bold animate-ping">✦</span>
          </div>
        </div>

        <div className="relative z-10 space-y-2.5 max-w-[82%]">
          {/* Keynote Tag: PERSONAL BRAND STRATEGY × DESTINY DNA */}
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-rose-400 tracking-widest uppercase">
            <span>PERSONAL BRAND STRATEGY</span>
            <span className="text-amber-400">×</span>
            <span>DESTINY DNA</span>
          </div>

          {/* Keynote Title: 紫微 IP DNA */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4D2] via-[#F6D268] to-[#D5A021]">
              ZIWEI IP DNA
            </h1>
            {/* Golden divider line */}
            <div className="h-0.5 w-16 bg-gradient-to-r from-amber-400 via-rose-500 to-transparent mt-1.5" />
          </div>

          {/* Keynote Subtitle */}
          <h2 className="text-sm sm:text-base font-bold text-[#F3E5C8] tracking-tight leading-snug">
            {isEn
              ? 'Discover Your Most Influential Personal Brand from Your Destiny Chart'
              : '从命盘找到你最有影响力的个人品牌'}
          </h2>

          {/* Keynote Quote */}
          <p className="text-xs text-slate-300 font-normal leading-relaxed pt-1 border-t border-white/10">
            {isEn ? (
              <>
                Not to teach you how to imitate others,<br />
                but to uncover the truest version of you that deserves to be seen.
              </>
            ) : (
              <>
                不是教你成为别人，<br />
                而是找出你最值得被看见的那一面。
              </>
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="text-amber-300 font-bold flex items-center gap-1 bg-amber-500/15 border border-amber-400/30 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {isEn ? 'Find Your Light · Amplify Your Value' : '找到你的光，放大你的价值'}
            </span>
            <span className="text-slate-400 text-[10px]">
              {isEn ? 'Master Yixi | Corporate Feng Shui & Brand Strategist' : '易玺老师 ｜ 企业风水战略顾问'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. CORE ACTION CARD: 输入出生资料进行排盘 */}
      <div className="rounded-2xl card-obsidian p-5 space-y-4">
        <div className="flex items-center justify-between pb-2.5 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-sm font-bold text-white tracking-wide">
              {isEn ? 'Enter Birth Details · Instant Live Deduction' : '输入出生资料 · 现场极速推演'}
            </h2>
          </div>
          <span className="text-[10px] font-semibold text-amber-400/80 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded-full">
            {isEn ? 'Workshop Exclusive' : '现场试听课专用'}
          </span>
        </div>

        <form onSubmit={handleStartAnalysis} className="space-y-4">
          {/* 姓名与性别 */}
          <div className="grid grid-cols-5 gap-2.5">
            <div className="col-span-3 space-y-1">
              <label className="block text-xs font-semibold text-slate-300">
                {isEn ? 'Full Name / English Name' : '姓名 / 英文名'}
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder={isEn ? 'e.g. Calven / Evan' : '如：Calven / 奕凡'}
                className="w-full rounded-xl bg-[#0F111D] border border-slate-700/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-white placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
              />
            </div>

            <div className="col-span-2 space-y-1">
              <label className="block text-xs font-semibold text-slate-300">
                {isEn ? 'Gender' : '性别'}
              </label>
              <div className="flex bg-[#0F111D] border border-slate-700/80 rounded-xl p-1 h-[42px] items-center">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`flex-1 h-full rounded-lg text-xs font-bold transition flex items-center justify-center ${
                    gender === 'male'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isEn ? 'Male' : '男'}
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`flex-1 h-full rounded-lg text-xs font-bold transition flex items-center justify-center ${
                    gender === 'female'
                      ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isEn ? 'Female' : '女'}
                </button>
              </div>
            </div>
          </div>

          {/* 出生日期 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-300">
                {isEn ? 'Date of Birth (Solar / Gregorian)' : '出生日期（阳历 / 公历）'}
                <span className="text-rose-400 ml-0.5">*</span>
              </label>
              <span className="text-[10px] text-amber-400/80">
                {isEn ? 'Auto calculates Lunar & BaZi Four Pillars' : '系统自动排布农历与天干地支'}
              </span>
            </div>
            <input
              type="date"
              required
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full rounded-xl bg-[#0F111D] border border-slate-700/80 px-3.5 py-2.5 text-sm font-medium text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition [color-scheme:dark]"
            />
          </div>

          {/* 出生时辰（快捷选择 + 精确时间） */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-300">
                {isEn ? 'Birth Hour / Shichen' : '出生时辰 / 时间'}
              </label>
              <span className="text-[10px] text-slate-400">
                {isEn ? 'Select Shichen pill below or keep default' : '可一键点选时辰，或保留默认午时'}
              </span>
            </div>

            {/* 12时辰一键胶囊选择栏 */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-1">
              {SHICHEN_LIST.map((sc) => {
                const isSelected = birthTime.startsWith(sc.time.slice(0, 2));
                return (
                  <button
                    key={sc.label}
                    type="button"
                    onClick={() => setBirthTime(sc.time)}
                    className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition border text-center ${
                      isSelected
                        ? 'bg-amber-500/25 border-amber-400 text-amber-300 shadow-sm'
                        : 'bg-[#0E1019] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div>{sc.label}</div>
                    <div className="text-[9px] opacity-70 scale-90">{sc.desc.split('-')[0]}</div>
                  </button>
                );
              })}
            </div>

            {/* 精确时间微调 */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] text-slate-400 shrink-0">
                {isEn ? 'Exact Clock Time:' : '精确钟表时间：'}
              </span>
              <input
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="rounded-xl bg-[#0F111D] border border-slate-700/80 px-3 py-1.5 text-xs font-medium text-white focus:border-amber-400 focus:outline-none [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Primary CTA Button: 讲座同款太阳流光金焰按钮 */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 rounded-xl btn-solar-gold font-bold text-sm tracking-wide transition flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-rose-950/50"
          >
            <Sparkles className="w-4 h-4 fill-amber-200 text-amber-200" />
            <span>
              {isSubmitting
                ? (isEn ? 'Deducing IP DNA from Destiny Chart...' : '正在结合命盘推演 IP DNA...')
                : (isEn ? 'Discover My IP DNA →' : '开始测试我的 IP DNA →')}
            </span>
          </button>
        </form>

        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-center text-[11px] text-slate-400">
          <span className="text-amber-400/80 font-mono">
            {isEn ? '⚡ 2–3 Mins Instant Result' : '⚡ 2–3 分钟测出结果'}
          </span>
        </div>
      </div>

      {/* 3. 核心测算公式说明 (Section 1 & 11) */}
      <div className="rounded-2xl card-obsidian p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            {isEn ? 'Preview Core Deduction Formula' : 'Preview 核心推演公式'}
          </span>
          <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-2 py-0.5 rounded-md">
            {isEn ? '3 Energy Pillars' : '三大能量支柱'}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          {/* 1. 命宫主星 */}
          <div className="p-2.5 rounded-xl bg-[#0D0F1A] border border-amber-500/20 flex flex-col justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-amber-400 block">
                {isEn ? 'Life Palace Star' : '命宫主星'}
              </span>
              <span className="text-xs font-black text-white block">
                {isEn ? 'Who I Am' : '我是谁'}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              {isEn ? 'Core Strengths & Intrinsic Archetype' : '核心优势与内在原型'}
            </p>
          </div>

          {/* 2. 迁移宫主星 */}
          <div className="p-2.5 rounded-xl bg-[#0D0F1A] border border-rose-500/20 flex flex-col justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-rose-400 block">
                {isEn ? 'Migration Star' : '迁移宫主星'}
              </span>
              <span className="text-xs font-black text-white block">
                {isEn ? 'How Others See Me' : '别人怎么看我'}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              {isEn ? 'Public Perception & External Persona' : '公众感知与外显人设'}
            </p>
          </div>

          {/* 3. 八字喜用神 */}
          <div className="p-2.5 rounded-xl bg-[#0D0F1A] border border-amber-500/20 flex flex-col justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-amber-300 block">
                {isEn ? 'BaZi Useful Element' : '八字喜用神'}
              </span>
              <span className="text-xs font-black text-white block">
                {isEn ? 'Energy Amplifier' : '能量放大'}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              {isEn ? 'Brand Styling & Visual Synergy' : '品牌穿搭与视觉赋能'}
            </p>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#0C0E17] border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
          <span className="font-bold text-amber-300">
            {isEn ? '💡 Why Life Palace × Migration Palace?' : '💡 为什么是命宫 × 迁移宫？'}
          </span>{' '}
          {isEn
            ? 'How you perceive yourself and how the market perceives you are not always identical. True personal brand power comes from the explosive synergy between "Your Core Self" and "What the Market Sees".'
            : '你自己认为的自己，和市场看到的你，不一定完全一样。真正的个人品牌爆发力，是「核心的你」与「市场看到的你」碰撞出的化学反应。'}
        </div>
      </div>

      {/* 4. 六大核心 IP 家族快速认知 */}
      <div className="p-4 rounded-2xl card-obsidian space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-white">
            {isEn ? '6 Core IP Archetype Families' : '六大核心 IP 家族原型'}
          </span>
          <span className="text-[10px] text-amber-400">
            {isEn ? '14 Stars Positioning System' : '14 主星定位系统'}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
          {Object.values(IP_FAMILIES).map((fam) => {
            const displayName = isEn ? (IP_FAMILIES_EN[fam.id]?.name || fam.name) : fam.name;
            return (
              <div
                key={fam.id}
                className="p-2 rounded-xl bg-[#0E101B] border border-amber-500/20 hover:border-amber-400/40 transition flex items-center gap-2 text-left shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg overflow-hidden border border-amber-400/40 shrink-0 bg-slate-950 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={fam.avatarUrl || `/avatars/${fam.id}.png`}
                    alt={displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-amber-200 text-[11px] truncate leading-tight">
                    {displayName}
                  </div>
                  <div className="text-[9px] text-slate-400 truncate mt-0.5">
                    {fam.stars.slice(0, 3).join(' · ')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. 底部版权 */}
      <div className="text-center text-[10px] text-slate-500 py-1">
        {isEn
          ? 'ZIWEI IP DNA Strategic System · Preview V0.1 · Master Yixi Workshop Exclusive'
          : '紫微 IP DNA 战略系统 · Preview V0.1 · 易玺老师试听课专研'}
      </div>
    </div>
  );
}

