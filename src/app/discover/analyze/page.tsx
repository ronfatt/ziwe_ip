'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Sparkles, CheckCircle2, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AnalyzeAnimationPage() {
  const router = useRouter();
  const { runAnalysis, activePresetId, language } = useAssessmentStore();
  const isEn = language === 'en';

  const [currentStepText, setCurrentStepText] = useState(
    isEn
      ? 'Calibrating birth stems and BaZi Day Pillar coordinates...'
      : '正在校准出生干支与八字日柱坐标...'
  );
  const [starDiscovered, setStarDiscovered] = useState(false);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    runAnalysis();

    const t1 = setTimeout(() => {
      setProgress(45);
      setCurrentStepText(
        isEn
          ? 'Reading Ziwei Life Palace and Migration Palace archetypes...'
          : '正在读取紫微命宫主星与对宫迁移宫原型...'
      );
    }, 600);

    const t2 = setTimeout(() => {
      setProgress(72);
      setCurrentStepText(
        isEn
          ? 'Matching 6 Core IP Archetype Families and strategic strengths...'
          : '正在匹配六大核心 IP 家族与优势原型...'
      );
    }, 1300);

    const t3 = setTimeout(() => {
      setProgress(92);
      setStarDiscovered(true);
      setCurrentStepText(
        isEn
          ? 'Calculating BaZi Useful Element & activating Five Elements IP Booster...'
          : '计算八字喜用神，激活五行 IP 能量放大器...'
      );
      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }, 2000);

    const t4 = setTimeout(() => {
      setProgress(100);
      router.push('/report');
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [runAnalysis, router, isEn]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 max-w-md mx-auto">
      <div className="w-full text-center space-y-6 p-7 rounded-3xl card-obsidian border border-amber-500/30 relative overflow-hidden shadow-2xl shadow-rose-950/40">
        {/* Soft cosmic background glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-600/25 rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic 3D Logo Emblem Animation with Solar Aura */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-rose-500/30 opacity-60 animate-ping duration-1000" />
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-950 border border-amber-400/50 shadow-2xl shadow-rose-900/40 flex items-center justify-center text-white relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="ZIWEI IP DNA Logo"
              className="w-full h-full object-cover animate-pulse"
            />
            {starDiscovered && (
              <span className="absolute -top-1 -right-1 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-gradient-to-r from-amber-500 to-amber-600 items-center justify-center text-slate-950 text-[10px] font-black shadow-md">✓</span>
              </span>
            )}
          </div>
        </div>

        {/* Text descriptions */}
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-[11px] font-bold text-amber-300">
            <Zap className="w-3 h-3 fill-amber-300 text-amber-300" />
            <span>{isEn ? 'Decoding Destiny Archetype' : '命盘原型深度解码中'}</span>
          </div>

          <h2 className="text-lg font-black text-white tracking-tight">
            {starDiscovered
              ? (isEn ? '🎉 Core Talent Archetype Matched!' : '🎉 核心天赋原型匹配成功！')
              : (isEn ? 'Decoding Your Personal Brand DNA...' : '正在解码你的个人品牌基因...')}
          </h2>

          <p className="text-xs text-slate-300 h-8 font-medium transition-all leading-relaxed">
            {currentStepText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 relative z-10">
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-rose-600 via-amber-500 to-amber-300 rounded-full transition-all duration-300 shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
            <span className="text-amber-400/80">
              {isEn ? 'Master Yixi · Brand Strategy' : '易玺老师 · 个人品牌战略'}
            </span>
            <span className="text-amber-300">{progress}%</span>
          </div>
        </div>

        {/* Bottom security assurance */}
        <div className="pt-2 text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1.5 border-t border-slate-800/80">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            {isEn
              ? 'Local Sandbox Deduction · Privacy Strictly Preserved'
              : '本地沙盒运算 · 科学心智归纳 · 严守隐私'}
          </span>
        </div>
      </div>
    </div>
  );
}
