'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { TrendingUp, DollarSign, Layers, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BusinessDNAPage() {
  const { businessDNA } = useAssessmentStore();

  if (!businessDNA) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400">正在生成报告...</p>
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
          <span className="text-xs font-mono text-[#9375FF] uppercase">DIMENSION 03</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            商业变现 DNA (Business & Monetization Models)
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            拒绝脱离现实的盲目扩张，聚焦高利润率、轻资产运作的超级个体变现闭环。
          </p>
        </div>
        <Link
          href="/report"
          className="text-xs text-gray-400 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 border border-white/10"
        >
          返回报告全景概览
        </Link>
      </div>

      {/* Monetization Models Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#38D9D0]" />
            <span>推荐轻资产变现通道 (Feasibility Ranked Models)</span>
          </h2>
          <span className="text-[11px] font-mono text-gray-400">
            * 仅为模式可行性假设分析，不构成收益担保承诺
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {businessDNA.recommendedModels.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel-elevated p-6 border border-white/10 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-[#38D9D0] font-bold">
                    MODEL 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#9375FF]/20 text-[#9375FF] text-xs font-mono font-semibold">
                    <span>可行性指数: {item.feasibilityScore}%</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {item.model}
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 block">理想画像买家 (Ideal Client)</span>
                    <p className="text-gray-200">{item.idealCustomer}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#38D9D0] block">核心价值交付 (Value Proposition)</span>
                    <p className="text-gray-200 leading-relaxed">{item.valueProposition}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-amber-300 block">营收模型与客单价假设 (Revenue Hypothesis)</span>
                    <p className="text-amber-200/90 font-mono font-medium">{item.revenueHypothesis}</p>
                  </div>
                </div>

                {/* Validation Experiments */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-[#9375FF] block">第一批种子客户获取实验：</span>
                  <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                    {item.firstCustomerExperiments.map((exp, eidx) => (
                      <li key={eidx} className="leading-relaxed">{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Risks bottom info */}
              <div className="pt-3 border-t border-white/5 text-[11px] text-gray-400 space-y-1">
                <span className="text-rose-400 font-mono block">主要风险点：</span>
                <p>{item.risks.join(' · ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy of Monetization */}
      <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-[#38D9D0] space-y-3">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#38D9D0]" />
          <span>轻资产商业飞轮原则 (Solopreneur Flywheel Principles)</span>
        </h3>
        <p className="text-xs text-gray-300 leading-relaxed">
          1. <strong>先验证后扩张：</strong>在没有获得至少3位真实付费客户的完整交付好评之前，不要盲目开发重度APP或招聘全职团队。<br />
          2. <strong>高客单撬动现金流：</strong>用 1 对 1 咨询深度沉淀方法论，获取初期健康现金流，再降维封装为标准化产品。<br />
          3. <strong>严守信誉红线：</strong>个人IP的终极资产是你的商业信誉，宁可少赚一单，绝不过度承诺无法交付的结果。
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center pt-4">
        <Link href="/report/brand" className="text-xs text-gray-400 hover:text-white">
          ← 上一维度：个人品牌 DNA
        </Link>
        <Link
          href="/report/roadmap"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs hover:opacity-95"
        >
          <span>探索下一维度：90天实战蓝图</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
