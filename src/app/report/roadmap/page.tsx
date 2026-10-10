'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Calendar, CheckSquare, Target, Compass, ArrowRight, ShieldCheck, Clock, Flag } from 'lucide-react';

export default function RoadmapPage() {
  const { roadmap } = useAssessmentStore();

  if (!roadmap) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400">正在生成路线图...</p>
        <Link href="/discover" className="mt-4 inline-block text-xs text-[#38D9D0] underline">
          前往开启评测
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono text-[#38D9D0] uppercase">DIMENSION 04</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            实战行动路线图 (Personal Growth Roadmap)
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            将宏观定位落地为 90 天关键战役节奏与三年战略飞轮，拒绝纸上谈兵。
          </p>
        </div>
        <Link
          href="/report"
          className="text-xs text-gray-400 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 border border-white/10"
        >
          返回报告全景概览
        </Link>
      </div>

      {/* 1. 90-Day Tactical Battle Plan (30 - 60 - 90 Days) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#38D9D0]" />
            <span>90 天破局冲刺战役 (90-Day Tactical Execution Plan)</span>
          </h2>
          <span className="text-xs font-mono text-[#9375FF]">敏捷攻坚模式</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmap.plan90Days.map((phase, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel-elevated p-6 border border-white/10 space-y-4 flex flex-col justify-between relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#9375FF]/20 text-[#9375FF] border border-[#9375FF]/30">
                    {phase.duration}
                  </span>
                  <span className="text-2xl font-black font-mono text-white/10">0{idx + 1}</span>
                </div>

                <h3 className="text-sm font-bold text-white">{phase.phase}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{phase.focus}</p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono text-[#38D9D0] block">阶段里程碑检验 (Milestones)：</span>
                  <ul className="text-xs text-gray-300 space-y-1.5">
                    {phase.milestones.map((m, midx) => (
                      <li key={midx} className="flex items-start gap-1.5">
                        <CheckSquare className="w-3.5 h-3.5 text-[#38D9D0] shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs">
                <span className="text-[11px] font-mono text-gray-400 block">核心抓手动作：</span>
                <ul className="text-gray-400 space-y-1 list-disc list-inside text-[11px]">
                  {phase.keyActions.map((act, aidx) => (
                    <li key={aidx} className="leading-relaxed">{act}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Three-Year Strategic Evolution */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Flag className="w-4 h-4 text-[#9375FF]" />
            <span>三年战略演进飞轮 (Three-Year Strategic Roadmap)</span>
          </h2>
          <span className="text-xs font-mono text-gray-400">复利与护城河建设</span>
        </div>

        <div className="space-y-4">
          {roadmap.strategic3Year.map((yr, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#38D9D0] bg-[#38D9D0]/10 px-2 py-0.5 rounded border border-[#38D9D0]/20">
                    {yr.year}
                  </span>
                  <h3 className="text-sm font-bold text-white">{yr.title}</h3>
                </div>
                <span className="text-xs font-mono text-gray-400">{yr.theme}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                <div>
                  <span className="text-[11px] font-mono text-[#9375FF] block mb-1">年度核心战略里程碑：</span>
                  <ul className="space-y-1 text-gray-300">
                    {yr.strategicMilestones.map((st, sidx) => (
                      <li key={sidx} className="flex items-start gap-1.5">
                        <span className="text-[#9375FF] font-bold">✓</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-rose-400 block mb-1">该周期重点防范风险：</span>
                  <p className="text-gray-400 leading-relaxed">
                    {yr.potentialRisksToManage.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisor Consultation Callout Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121B2D] via-[#1A2540] to-[#121B2D] border border-[#9375FF]/30 text-center space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          希望根据个人真实资源，定制专属 90 天落地甘特图？
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
          预约专业导师，在 1 对 1 战略推演工作坊中逐字打磨定位、梳理定价方案并锁定前三位付费客户线索。
        </p>
        <Link
          href="/consultation"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs shadow-lg shadow-[#9375FF]/20 hover:opacity-95"
        >
          <span>预约专业导师 1对1 咨询</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center pt-4">
        <Link href="/report/business" className="text-xs text-gray-400 hover:text-white">
          ← 上一维度：商业变现模型
        </Link>
        <Link
          href="/report"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition"
        >
          <span>查看完整综合报告</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
