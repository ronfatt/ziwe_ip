'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { FOURTEEN_STARS, DEMO_PRESETS } from '@/data/archetypes';
import {
  Sparkles,
  Download,
  Share2,
  Printer,
  Compass,
  Briefcase,
  Target,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Award
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
    profile,
    activePresetId,
    computedScores,
    careerDNA,
    brandDNA,
    businessDNA,
    roadmap,
    isDemoChartMode
  } = useAssessmentStore();

  const preset = DEMO_PRESETS.find((p) => p.id === activePresetId) || DEMO_PRESETS[0];
  const star = FOURTEEN_STARS[preset.archetypeKey] || FOURTEEN_STARS['tian_ji'];

  // Radar chart data preparation
  const radarData = [
    { subject: '领导大局', score: computedScores.leadership || 75 },
    { subject: '战略推演', score: computedScores.strategic_thinking || 88 },
    { subject: '创新创造', score: computedScores.creativity || 82 },
    { subject: '坚毅执行', score: computedScores.execution || 78 },
    { subject: '表达说服', score: computedScores.communication || 85 },
    { subject: '高价值人脉', score: computedScores.relationship_building || 70 },
    { subject: '商业敏锐', score: computedScores.business_dev || 80 },
    { subject: '知识布道', score: computedScores.knowledge_sharing || 86 }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* 1. Header Bar with Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-[#38D9D0] px-2.5 py-0.5 rounded bg-[#38D9D0]/10 border border-[#38D9D0]/20">
              CONFIDENTIAL REPORT
            </span>
            <span className="text-xs font-mono text-gray-400">
              ID: ZW-{Math.abs(birthInfo.displayName.length * 892 + 1024).toString(16).toUpperCase()}
            </span>
            {isDemoChartMode && (
              <span className="text-xs font-mono text-[#9375FF] px-2 py-0.5 rounded bg-[#9375FF]/10 border border-[#9375FF]/20">
                教学范例盘
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {birthInfo.displayName || '学员'} 的专属 IP DNA™ 战略全景报告
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            生成时间：2026-10-09 · 基于东方原型与现代商业双层交叉校验
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-300 flex items-center gap-1.5 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>打印 / 导出 PDF</span>
          </button>

          <Link
            href="/consultation"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs shadow-md shadow-[#9375FF]/20 hover:opacity-95 transition"
          >
            <span>预约专家解读</span>
          </Link>
        </div>
      </div>

      {/* 2. Sub-Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3 text-xs font-medium">
        <Link
          href="/report"
          className="px-4 py-2 rounded-lg bg-[#1A2540] text-[#38D9D0] border border-[#38D9D0]/30"
        >
          全景概览 (Overview)
        </Link>
        <Link
          href="/report/career"
          className="px-4 py-2 rounded-lg bg-[#121B2D] text-gray-300 hover:text-white border border-white/5 transition"
        >
          职业发展 DNA (Career)
        </Link>
        <Link
          href="/report/brand"
          className="px-4 py-2 rounded-lg bg-[#121B2D] text-gray-300 hover:text-white border border-white/5 transition"
        >
          个人品牌定位 (Brand)
        </Link>
        <Link
          href="/report/business"
          className="px-4 py-2 rounded-lg bg-[#121B2D] text-gray-300 hover:text-white border border-white/5 transition"
        >
          商业变现模型 (Business)
        </Link>
        <Link
          href="/report/roadmap"
          className="px-4 py-2 rounded-lg bg-[#121B2D] text-gray-300 hover:text-white border border-white/5 transition"
        >
          90天行动路线图 (Roadmap)
        </Link>
      </div>

      {/* 3. Executive Summary Hero Card */}
      <div className="rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-[#9375FF]/30 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9375FF]/10 text-[#9375FF] text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>CORE ARCHETYPE SYNTHESIS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              核心战略原型：{star.archetypeTitle}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              基于您的命宫主星【{star.nameCn}】及深耕 {profile.yearsOfExperience || 5} 年的【{profile.industry || '专业服务'}】实战底色，推演显示你具备极强的【{star.strengths[0]}】与【{star.strengths[1]}】。你天然适合从单一体力交付转型为拥有知识溢价的独立战略军师。
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
              <div className="p-3 rounded-xl bg-[#080D18]/80 border border-white/5">
                <span className="text-[10px] text-gray-400 block">主导文化星宿</span>
                <span className="text-xs font-bold text-[#9375FF]">{star.nameCn}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D18]/80 border border-white/5">
                <span className="text-[10px] text-gray-400 block">核心角色形态</span>
                <span className="text-xs font-bold text-[#38D9D0]">战略架构师</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D18]/80 border border-white/5">
                <span className="text-[10px] text-gray-400 block">首选变现路径</span>
                <span className="text-xs font-bold text-white">高客单闭门顾问</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D18]/80 border border-white/5">
                <span className="text-[10px] text-gray-400 block">首要盲区防范</span>
                <span className="text-xs font-bold text-rose-400">过度推演延迟验证</span>
              </div>
            </div>
          </div>

          {/* Radar Chart Display */}
          <div className="h-64 sm:h-72 w-full flex flex-col items-center justify-center p-2 rounded-2xl bg-[#080D18]/60 border border-white/5">
            <span className="text-[11px] font-mono text-gray-400 mb-1">
              8大商业能力雷达图 (Radar Profile)
            </span>
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#2A3855" />
                <PolarAngleAxis dataKey="subject" stroke="#9DA9C0" tick={{ fill: '#9DA9C0', fontSize: 10 }} />
                <PolarRadiusAxis stroke="#1A2540" angle={30} domain={[0, 100]} />
                <Radar name="能力指数" dataKey="score" stroke="#38D9D0" fill="#9375FF" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 4. Dual-Layer Palace Analysis (Layer A + Layer B) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Layer A Card */}
        <div className="p-6 rounded-2xl glass-panel space-y-4 border-l-4 border-l-[#9375FF]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Compass className="w-4 h-4 text-[#9375FF]" />
              <span>层级 A：东方文化原型与四化格局</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              文献溯源通过
            </span>
          </div>

          <div className="space-y-3">
            {Object.values(preset.palaces).map((pal, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#080D18]/60 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">{pal.palaceNameCn}</span>
                  <div className="flex gap-1">
                    {pal.majorStars.map((s) => (
                      <span key={s} className="px-1.5 py-0.2 rounded bg-[#9375FF]/20 text-[#9375FF] font-mono text-[10px]">
                        {FOURTEEN_STARS[s]?.nameCn || s}
                      </span>
                    ))}
                    {pal.mutagen && (
                      <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">
                        化{pal.mutagen === 'Lu' ? '禄' : pal.mutagen === 'Quan' ? '权' : pal.mutagen === 'Ke' ? '科' : '忌'}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {pal.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Layer B Card */}
        <div className="p-6 rounded-2xl glass-panel space-y-4 border-l-4 border-l-[#38D9D0]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Briefcase className="w-4 h-4 text-[#38D9D0]" />
              <span>层级 B：现代商业实战与技能资产</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              实战经验校验
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#080D18]/60 border border-white/5 space-y-1">
              <span className="text-gray-400 block text-[11px]">实战积累与深耕赛道</span>
              <p className="text-white font-medium">
                {profile.currentProfession || '资深专家'} · {profile.industry}（{profile.yearsOfExperience}年实战）
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#080D18]/60 border border-white/5 space-y-1">
              <span className="text-gray-400 block text-[11px]">三大核心技能底牌</span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {profile.topSkills.map((sk, idx) => (
                  <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-200 border border-white/10">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#080D18]/60 border border-white/5 space-y-1">
              <span className="text-gray-400 block text-[11px]">当前核心瓶颈破解切入点</span>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                {profile.careerChallenge || '从工时交付升级为知识资产复利'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Brand Positioning Formula Spotlight */}
      {brandDNA && (
        <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Target className="w-4 h-4 text-[#38D9D0]" />
              <span>核心个人品牌定位公式 (Brand Positioning Formula)</span>
            </div>
            <Link href="/report/brand" className="text-xs text-[#38D9D0] hover:underline flex items-center gap-1">
              <span>自定义微调</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-4 rounded-xl bg-[#080D18] border border-[#9375FF]/30 text-sm sm:text-base text-gray-100 font-medium leading-relaxed">
            &ldquo;{brandDNA.positioningStatement}&rdquo;
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {brandDNA.positioningAlternatives.map((alt, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 text-xs text-gray-300 leading-relaxed border border-white/5">
                <span className="text-[10px] font-mono text-[#9375FF] block mb-1">备选版本 {idx + 1}</span>
                {alt}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Quick Module Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/report/career"
          className="p-5 rounded-2xl glass-panel hover:border-[#9375FF]/50 transition group flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#38D9D0] transition">
              深度行业探索与职业角色 →
            </h3>
            <p className="text-xs text-gray-400">
              了解3个推荐行业方向的入场壁垒、试错成本与发展阶梯。
            </p>
          </div>
          <span className="text-[11px] text-[#9375FF] font-mono mt-4 block">查看 Career DNA 报告</span>
        </Link>

        <Link
          href="/report/business"
          className="p-5 rounded-2xl glass-panel hover:border-[#38D9D0]/50 transition group flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#38D9D0] transition">
              轻资产商业变现与定价 →
            </h3>
            <p className="text-xs text-gray-400">
              1对1咨询、私享训练营与数字资产的可行性打分与获客实验。
            </p>
          </div>
          <span className="text-[11px] text-[#38D9D0] font-mono mt-4 block">查看 Business DNA 报告</span>
        </Link>

        <Link
          href="/report/roadmap"
          className="p-5 rounded-2xl glass-panel hover:border-[#9375FF]/50 transition group flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#38D9D0] transition">
              90天战役与三年路线图 →
            </h3>
            <p className="text-xs text-gray-400">
              分阶段拆解第一步如何斩获首批付费客户与建立权威长文。
            </p>
          </div>
          <span className="text-[11px] text-[#9375FF] font-mono mt-4 block">查看实操蓝图</span>
        </Link>
      </div>
    </div>
  );
}
