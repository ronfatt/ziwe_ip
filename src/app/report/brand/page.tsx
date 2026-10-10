'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Target, Sparkles, BookOpen, MessageSquare, Compass, ArrowRight, Share2, Check, Edit3 } from 'lucide-react';

export default function BrandDNAPage() {
  const { brandDNA, profile, runAnalysis } = useAssessmentStore();
  const [editingTargetAudience, setEditingTargetAudience] = useState(false);
  const [customAudience, setCustomAudience] = useState(brandDNA?.targetAudience || '');
  const [copied, setCopied] = useState(false);

  if (!brandDNA) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400">正在生成报告...</p>
        <Link href="/discover" className="mt-4 inline-block text-xs text-[#38D9D0] underline">
          前往开启评测
        </Link>
      </div>
    );
  }

  const handleCopyFormula = () => {
    navigator.clipboard.writeText(brandDNA.positioningStatement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono text-[#38D9D0] uppercase">DIMENSION 02</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            个人品牌 DNA (Personal IP DNA Engine)
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            确立不可替代的品牌心智定位、受众公式、三大内容支柱与公信力背书体系。
          </p>
        </div>
        <Link
          href="/report"
          className="text-xs text-gray-400 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 border border-white/10"
        >
          返回报告全景概览
        </Link>
      </div>

      {/* 1. Core Positioning Formula Card (Interactive & Editable) */}
      <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-[#9375FF]/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#38D9D0]" />
              <span>品牌定位黄金公式 (Brand Positioning Formula)</span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5 font-mono">
              &quot;I help [TARGET AUDIENCE] achieve [OUTCOME] through [METHOD], based on [PROOF].&quot;
            </p>
          </div>

          <button
            onClick={handleCopyFormula}
            className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-300 border border-white/10 flex items-center gap-1.5 transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">已复制到剪贴板</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>复制定位金句</span>
              </>
            )}
          </button>
        </div>

        {/* Highlight Quote */}
        <div className="p-5 rounded-xl bg-[#080D18] border border-[#9375FF]/40 text-base sm:text-lg text-white font-medium leading-relaxed">
          &ldquo;{brandDNA.positioningStatement}&rdquo;
        </div>

        {/* 3 Editable Alternatives */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-gray-400">备选定位变体 (3 Positioning Variations)：</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {brandDNA.positioningAlternatives.map((alt, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#121B2D]/70 border border-white/5 space-y-1 text-xs">
                <span className="text-[10px] font-mono text-[#9375FF] font-semibold">变体 0{idx + 1}</span>
                <p className="text-gray-300 leading-relaxed">{alt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Archetype & Audience */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-gray-400 block mb-1 font-mono text-[10px]">个人IP品牌原型</span>
            <span className="text-white font-bold">{brandDNA.brandArchetype}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-gray-400 block mb-1 font-mono text-[10px]">目标精准受众 (Target Audience)</span>
            <span className="text-[#38D9D0] font-bold">{brandDNA.targetAudience}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-gray-400 block mb-1 font-mono text-[10px]">人格调性气质</span>
            <span className="text-gray-200">{brandDNA.brandPersonality.join(' · ')}</span>
          </div>
        </div>
      </div>

      {/* 2. Content Pillars & Sample Topics */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#9375FF]" />
          <span>三大核心内容支柱与选题库 (Content Pillars & Editorial Hooks)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandDNA.contentPillars.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38D9D0]">PILLAR 0{idx + 1}</span>
                  <span className="text-[10px] font-mono text-gray-500">权重 33%</span>
                </div>
                <h3 className="text-base font-bold text-white">{pillar.pillar}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{pillar.description}</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-[#9375FF]">示范高点击深度选题：</span>
                <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                  {pillar.sampleTopics.map((top, tidx) => (
                    <li key={tidx} className="leading-relaxed">{top}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Credibility & Channels Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Credibility Building Plan */}
        <div className="p-6 rounded-2xl glass-panel space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Target className="w-4 h-4 text-[#38D9D0]" />
            <span>专业公信力建设动作 (Credibility Milestones)</span>
          </h3>
          <p className="text-xs text-gray-400">
            高客单成交的基石是不可动摇的信任证据。建议重点布局以下资产：
          </p>
          <ul className="space-y-2 text-xs text-gray-200">
            {brandDNA.credibilityPlan.map((plan, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 flex items-start gap-2">
                <span className="text-[#38D9D0] font-mono font-bold">0{idx + 1}.</span>
                <span className="leading-relaxed">{plan}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Channels */}
        <div className="p-6 rounded-2xl glass-panel space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#9375FF]" />
            <span>核心发声矩阵布局 (Recommended Distribution Channels)</span>
          </h3>
          <p className="text-xs text-gray-400">
            根据精力杠杆，避免全网撒网内耗，聚焦核心主阵地：
          </p>
          <div className="space-y-2 text-xs">
            {brandDNA.recommendedChannels.map((ch, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#080D18]/70 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">{ch.channel}</span>
                  <span className="text-[11px] text-gray-400">{ch.purpose}</span>
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase ${
                    ch.priority === 'primary'
                      ? 'bg-[#38D9D0]/20 text-[#38D9D0] border border-[#38D9D0]/30'
                      : ch.priority === 'secondary'
                      ? 'bg-[#9375FF]/20 text-[#9375FF] border border-[#9375FF]/30'
                      : 'bg-white/5 text-gray-400'
                  }`}
                >
                  {ch.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Brand Story Card */}
      <div className="p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-white/10 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#38D9D0]" />
          <span>建议品牌故事叙事脚本 (Origin Narrative Script)</span>
        </h3>
        <p className="text-xs text-gray-300 leading-relaxed italic bg-[#080D18] p-4 rounded-xl border border-white/5">
          &ldquo;{brandDNA.suggestedBrandStory}&rdquo;
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center pt-4">
        <Link href="/report/career" className="text-xs text-gray-400 hover:text-white">
          ← 上一维度：职业发展 DNA
        </Link>
        <Link
          href="/report/business"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs hover:opacity-95"
        >
          <span>探索下一维度：商业变现模型</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
