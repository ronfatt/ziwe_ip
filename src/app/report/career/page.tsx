'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Compass, Briefcase, CheckCircle2, AlertTriangle, ArrowRight, Layers, Target } from 'lucide-react';

export default function CareerDNAPage() {
  const { careerDNA, profile } = useAssessmentStore();

  if (!careerDNA) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400">正在加载数据或尚未完成测试...</p>
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
          <span className="text-xs font-mono text-[#9375FF] uppercase">DIMENSION 01</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            职业发展 DNA (Career DNA Engine)
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            深度解构您的职业角色、适合的行业生态、高契合岗位与潜在发展瓶颈。
          </p>
        </div>
        <Link
          href="/report"
          className="text-xs text-gray-400 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 border border-white/10"
        >
          返回报告全景概览
        </Link>
      </div>

      {/* Role Fit Index Cards */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">
          <Target className="w-4 h-4 text-[#38D9D0]" />
          <span>核心角色原型适配度指数 (Role Archetype Fit)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {careerDNA.roleArchetypeFit.map((role, idx) => (
            <div key={idx} className="p-4 rounded-xl glass-panel space-y-2 border-t-2 border-t-[#38D9D0]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">{role.role}</span>
                <span className="text-xs font-mono font-bold text-[#38D9D0]">{role.fitScore}% 匹配</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#9375FF] to-[#38D9D0] rounded-full"
                  style={{ width: `${role.fitScore}%` }}
                />
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Industries Breakdown */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[#9375FF]" />
          <span>高契合产业赛道探索 (3-5 Recommended Industries)</span>
        </h2>
        <div className="space-y-6">
          {careerDNA.recommendedIndustries.map((ind, idx) => (
            <div key={idx} className="rounded-2xl glass-panel-elevated p-6 border border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-xs font-mono text-[#38D9D0] px-2 py-0.5 rounded bg-[#38D9D0]/10 border border-[#38D9D0]/20">
                    赛道 0{idx + 1}
                  </span>
                  <span>{ind.name}</span>
                </h3>
                <span className="text-xs font-mono text-gray-400">{ind.entryBarriers}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-[#9375FF]">为什么高度契合 (Why Fit)</span>
                    <p className="text-gray-200 leading-relaxed">{ind.fitReason}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-[#38D9D0]">已有实战背景匹配 (Background Match)</span>
                    <p className="text-gray-300 leading-relaxed">{ind.relevantExperienceMatch}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-amber-400">市场验证关键提问 (Validation Questions)</span>
                    <ul className="text-gray-300 space-y-1 list-disc list-inside">
                      {ind.marketValidationQuestions.map((q, qidx) => (
                        <li key={qidx}>{q}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-rose-400">潜在弊端与陷阱预警 (Potential Drawbacks)</span>
                    <p className="text-gray-300 leading-relaxed">{ind.potentialDrawbacks}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="font-semibold text-white">推荐下一步行动：</span>
                  <span>{ind.recommendedNextSteps.join(' ➔ ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Development Areas & Blindspots */}
      <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-rose-500 space-y-3">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>潜在心智盲区与发展瓶颈 (Blind Spots to Navigate)</span>
        </h3>
        <p className="text-xs text-gray-300 leading-relaxed">
          再优秀的战略大脑也必须提防内在惯性。以下是基于您的原型推演出的典型盲区：
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {careerDNA.developmentAreas.map((area, idx) => (
            <li key={idx} className="p-3 rounded-xl bg-[#080D18]/80 text-xs text-gray-200 border border-white/5 leading-relaxed">
              ⚠️ {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Nav CTA */}
      <div className="flex justify-between items-center pt-4">
        <Link href="/report" className="text-xs text-gray-400 hover:text-white">
          ← 返回全景概览
        </Link>
        <Link
          href="/report/brand"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs hover:opacity-95"
        >
          <span>探索下一维度：个人品牌 DNA</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
