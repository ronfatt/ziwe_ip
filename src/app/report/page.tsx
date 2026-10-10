'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { FOURTEEN_STARS, DEMO_PRESETS } from '@/data/archetypes';
import { getSimplifiedIndustryFit } from '@/data/industryFitData';
import {
  Sparkles,
  Download,
  Printer,
  Compass,
  Briefcase,
  Target,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  Zap,
  HelpCircle
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

export default function ReportSummaryPage() {
  const {
    birthInfo,
    activePresetId,
    computedScores,
    brandDNA,
    businessDNA
  } = useAssessmentStore();

  const preset = DEMO_PRESETS.find((p) => p.id === activePresetId) || DEMO_PRESETS[0];
  const star = FOURTEEN_STARS[preset.archetypeKey] || FOURTEEN_STARS['tian_ji'];

  // 3 Clear Industry Fits (Direct, Simple, Explicit)
  const threeIndustryFits = getSimplifiedIndustryFit(preset.archetypeKey);

  // Radar chart data
  const radarData = [
    { subject: '大局统筹', score: computedScores.leadership || 75 },
    { subject: '战略推演', score: computedScores.strategic_thinking || 88 },
    { subject: '创意创新', score: computedScores.creativity || 82 },
    { subject: '结果执行', score: computedScores.execution || 78 },
    { subject: '说服沟通', score: computedScores.communication || 85 },
    { subject: '人脉协同', score: computedScores.relationship_building || 70 },
    { subject: '商业敏锐', score: computedScores.business_dev || 80 },
    { subject: '知识布道', score: computedScores.knowledge_sharing || 86 }
  ];

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
      {/* 1. Header with Compact Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono text-[#38D9D0] px-2 py-0.5 rounded bg-[#38D9D0]/10 border border-[#38D9D0]/20">
              IP DNA 结论报告
            </span>
            <span className="text-[11px] text-gray-400 font-mono">
              学员：{birthInfo.displayName || '个人'} · {birthInfo.birthDate}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>你的核心原型：</span>
            <span className="text-gradient-violet-cyan">{star.nameCn} · {star.archetypeTitle}</span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-gray-300 flex items-center gap-1 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>保存/打印</span>
          </button>
          <Link
            href="/consultation"
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-[11px] transition"
          >
            预约导师
          </Link>
        </div>
      </div>

      {/* 2. PRIORITY SECTION: TOP 3 SUITABLE IP DNA INDUSTRIES (首先明确指出3个适合他的行业) */}
      <div className="rounded-2xl glass-panel-elevated p-5 sm:p-6 border border-[#38D9D0]/30 space-y-4 relative overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#38D9D0]" />
            <h2 className="text-base font-bold text-white">
              最适合你的 3 个 IP DNA 行业性质定位
            </h2>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            高匹配优先排序
          </span>
        </div>

        <p className="text-xs text-gray-300">
          基于你的【{star.nameCn}】天赋底色与心智特质，你最容易发挥优势、避开精力内耗的 3 大行业性质如下：
        </p>

        {/* 3 Industry Cards - Direct, Concise, Practical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
          {threeIndustryFits.map((item) => (
            <div
              key={item.rank}
              className="p-4 rounded-xl bg-[#080D18]/90 border border-white/10 space-y-3 flex flex-col justify-between hover:border-[#38D9D0]/50 transition"
            >
              <div className="space-y-2">
                {/* Rank & Industry Title */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold font-mono px-2 py-0.5 rounded"
                    style={{ backgroundColor: `${item.tagColor}20`, color: item.tagColor }}
                  >
                    行业 0{item.rank}
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono">适合角色</span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">
                  {item.industryCategory}
                </h3>

                <div className="text-xs font-semibold text-[#38D9D0]">
                  ➔ {item.roleTitle}
                </div>

                {/* Core Trait */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-gray-400 font-mono block">特质优势：</span>
                  <p className="text-xs text-gray-200 leading-relaxed font-medium">
                    {item.coreTrait}
                  </p>
                </div>

                {/* Suitable Doing */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] text-gray-400 font-mono block">具体适合做什么业务：</span>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {item.suitableDoing.map((action, aidx) => (
                      <li key={aidx} className="flex items-start gap-1.5">
                        <span className="text-[#38D9D0] font-bold text-xs mt-0.5">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Monetization Path */}
              <div className="pt-2.5 border-t border-white/10">
                <span className="text-[10px] text-gray-400 font-mono block">建议变现模式：</span>
                <span className="text-xs font-semibold text-amber-300">
                  {item.monetizationPath}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SIMPLIFIED ESSENCE: CHARACTERISTICS & BLINDSPOTS (简单明了的特质说明) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Natural Strengths */}
        <div className="p-4 rounded-xl glass-panel space-y-2.5 border-l-4 border-l-[#38D9D0]">
          <h3 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#38D9D0]" />
            <span>天然天赋底牌 (做什么最顺手)</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-gray-200">
            {star.strengths.map((str, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38D9D0]" />
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Blindspots to Avoid */}
        <div className="p-4 rounded-xl glass-panel space-y-2.5 border-l-4 border-l-rose-500">
          <h3 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase font-mono">
            <span className="text-rose-400">!</span>
            <span>注意防范的盲区 (避开耗损陷阱)</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-rose-200/90">
            {star.blindSpots.map((b, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 4. BRAND POSITIONING SUMMARY (一句话定位公式) */}
      {brandDNA && (
        <div className="p-4 sm:p-5 rounded-xl glass-panel space-y-2 border border-white/10">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#9375FF]" />
              <span>你的一句话个人品牌定位公式</span>
            </span>
            <Link href="/report/brand" className="text-[11px] text-[#38D9D0] hover:underline">
              查看更多变体 →
            </Link>
          </div>
          <div className="p-3 rounded-lg bg-[#080D18] border border-[#9375FF]/30 text-xs sm:text-sm text-gray-100 font-medium leading-relaxed">
            &ldquo;{brandDNA.positioningStatement}&rdquo;
          </div>
        </div>
      )}

      {/* 5. RADAR & MONETIZATION SNAPSHOT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Radar */}
        <div className="p-4 rounded-xl glass-panel space-y-2 flex flex-col items-center">
          <span className="text-xs font-semibold text-white self-start">8 维能力评估雷达</span>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="68%" data={radarData}>
                <PolarGrid stroke="#2A3855" />
                <PolarAngleAxis dataKey="subject" stroke="#9DA9C0" tick={{ fill: '#9DA9C0', fontSize: 10 }} />
                <PolarRadiusAxis stroke="#1A2540" angle={30} domain={[0, 100]} />
                <Radar name="指数" dataKey="score" stroke="#38D9D0" fill="#9375FF" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 90-Day Quick Action */}
        <div className="p-4 rounded-xl glass-panel space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#38D9D0]" />
              <span>未来 90 天最紧要的三件事</span>
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#080D18]/80 border border-white/5">
                <span className="text-[10px] text-[#9375FF] font-mono block">1-30天：</span>
                <span className="text-gray-200">打磨上述行业01的单点方案，完成前2位真实客户交付。</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#080D18]/80 border border-white/5">
                <span className="text-[10px] text-[#38D9D0] font-mono block">31-60天：</span>
                <span className="text-gray-200">围绕核心特质发表3篇深度干货长文，沉淀案例背书。</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#080D18]/80 border border-white/5">
                <span className="text-[10px] text-amber-300 font-mono block">61-90天：</span>
                <span className="text-gray-200">正式推出高客单闭门咨询/小班营，跑通正向现金流。</span>
              </div>
            </div>
          </div>

          <Link
            href="/report/roadmap"
            className="text-[11px] text-[#38D9D0] hover:underline self-end"
          >
            查看完整90天路线表 →
          </Link>
        </div>
      </div>

      {/* 6. Bottom Advisor CTA */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#121B2D] via-[#1A2540] to-[#121B2D] border border-[#9375FF]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-white">想进一步根据手头资源定制变现路径？</h4>
          <p className="text-xs text-gray-400">预约专业导师 1对1 闭门推演，逐条梳理首批高客单客户线索。</p>
        </div>
        <Link
          href="/consultation"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs whitespace-nowrap hover:opacity-95 transition"
        >
          预约导师 1对1 咨询
        </Link>
      </div>
    </div>
  );
}
