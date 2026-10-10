'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Sparkles, Cpu, Layers, CheckCircle2, Compass, ShieldAlert } from 'lucide-react';

export default function AnalyzeAnimationPage() {
  const router = useRouter();
  const { runAnalysis } = useAssessmentStore();
  const [currentStepText, setCurrentStepText] = useState('初始化双层智能分析引擎...');
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    runAnalysis();

    const t1 = setTimeout(() => {
      setProgress(40);
      setCurrentStepText('解析传统紫微斗数命理文化原型与十四主星能量...');
    }, 900);

    const t2 = setTimeout(() => {
      setProgress(75);
      setCurrentStepText('交叉检验现代商业技能、工作经历与12项情境偏好...');
    }, 1900);

    const t3 = setTimeout(() => {
      setProgress(95);
      setCurrentStepText('合成 Career DNA、定位公式与90天落地战役蓝图...');
    }, 2800);

    const t4 = setTimeout(() => {
      setProgress(100);
      router.push('/report');
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [runAnalysis, router]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8 p-8 rounded-3xl glass-panel-elevated border border-[#9375FF]/30 relative overflow-hidden">
        {/* Glow orb */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#9375FF] to-[#38D9D0] mx-auto p-1 shadow-2xl shadow-[#9375FF]/40 relative flex items-center justify-center animate-pulse">
          <div className="w-full h-full rounded-full bg-[#080D18] flex items-center justify-center">
            <Cpu className="w-12 h-12 text-[#38D9D0] animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-wide">
            ZIWEI IP DNA™ 智能推演中
          </h2>
          <p className="text-xs text-gray-400 font-mono h-6 transition-all">
            {currentStepText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#9375FF] via-[#38D9D0] to-[#9375FF] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-gray-400">
            <span>SYNTHESIZING</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Badge */}
        <div className="pt-2 text-[11px] text-gray-400 font-mono flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#38D9D0]" />
          <span>采用严谨交叉算法 · 杜绝宿命迷信</span>
        </div>
      </div>
    </div>
  );
}
