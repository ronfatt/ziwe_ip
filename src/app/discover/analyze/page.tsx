'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Sparkles, CheckCircle2, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AnalyzeAnimationPage() {
  const router = useRouter();
  const { runAnalysis, activePresetId } = useAssessmentStore();
  const [currentStepText, setCurrentStepText] = useState('正在校准出生干支与八字日柱坐标...');
  const [starDiscovered, setStarDiscovered] = useState(false);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    runAnalysis();

    const t1 = setTimeout(() => {
      setProgress(45);
      setCurrentStepText('正在读取紫微命宫主星与对宫迁移宫原型...');
    }, 600);

    const t2 = setTimeout(() => {
      setProgress(72);
      setCurrentStepText('正在匹配六大核心 IP 家族与优势原型...');
    }, 1300);

    const t3 = setTimeout(() => {
      setProgress(92);
      setStarDiscovered(true);
      setCurrentStepText('计算八字喜用神，激活五行 IP 能量放大器...');
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
  }, [runAnalysis, router]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 max-w-md mx-auto">
      <div className="w-full text-center space-y-6 p-7 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-100/60 rounded-full blur-2xl pointer-events-none" />

        {/* Dynamic 3D Logo Emblem Animation */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-blue-400/20 opacity-40 animate-ping duration-1000" />
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-950 border border-blue-400/30 shadow-xl shadow-blue-500/25 flex items-center justify-center text-white relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="ZIWEI IP DNA Logo"
              className="w-full h-full object-cover animate-pulse"
            />
            {starDiscovered && (
              <span className="absolute -top-1 -right-1 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 items-center justify-center text-white text-[10px] font-black">✓</span>
              </span>
            )}
          </div>
        </div>

        {/* Text descriptions */}
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-[#2563EB]">
            <Zap className="w-3 h-3 fill-[#2563EB]" />
            <span>AI 原型推演计算中</span>
          </div>

          <h2 className="text-lg font-black text-slate-900 tracking-tight">
            {starDiscovered ? '🎉 核心天赋原型匹配成功！' : '正在解码你的商业天赋基因...'}
          </h2>

          <p className="text-xs text-slate-500 h-8 font-medium transition-all leading-relaxed">
            {currentStepText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 relative z-10">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
            <span>SYNTHESIS</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Bottom security assurance */}
        <div className="pt-2 text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1.5 border-t border-slate-100">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>本地沙盒运算 · 科学心智归纳 · 严守隐私</span>
        </div>
      </div>
    </div>
  );
}
