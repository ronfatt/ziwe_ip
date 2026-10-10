'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Compass, 
  BrainCircuit, 
  CheckCircle2, 
  ChevronRight,
  Database
} from 'lucide-react';
import { DEMO_PRESETS } from '@/data/archetypes';

export default function DiscoverIntroPage() {
  const { activePresetId, setActivePreset, isDemoChartMode, setDemoChartMode, loadDemoSeed } = useAssessmentStore();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9375FF]/10 text-[#9375FF] border border-[#9375FF]/20 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#38D9D0]" />
          <span>ASSESSMENT ONBOARDING</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          开启你的 ZIWEI IP DNA™ 战略评测
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          通过东方传统文化原型（Layer A）与现代商业实战评估（Layer B）的双层校验，帮助你发现优势、确立定位并设计清晰的行动路径。
        </p>
      </div>

      {/* Mode Switch Card */}
      <div className="rounded-2xl glass-panel-elevated p-6 mb-8 border border-[#9375FF]/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
          <div>
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <Database className="w-4 h-4 text-[#38D9D0]" />
              <span>星盘推演架构模式选择</span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              为确保学术严谨，系统内置经过专家核定的教学演示星盘（Demo Chart Mode）。
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#080D18] p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setDemoChartMode(true)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                isDemoChartMode ? 'bg-[#9375FF] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              教学演示盘 (推荐)
            </button>
            <button
              onClick={() => setDemoChartMode(false)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                !isDemoChartMode ? 'bg-[#38D9D0] text-black font-semibold' : 'text-gray-400 hover:text-white'
              }`}
            >
              自定义输入盘
            </button>
          </div>
        </div>

        {/* Preset Selector */}
        <div>
          <label className="block text-xs font-mono text-gray-300 mb-2">
            选择探索的星盘原型基底 (Base Archetype Preset)：
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {DEMO_PRESETS.map((preset) => (
              <div
                key={preset.id}
                onClick={() => setActivePreset(preset.id)}
                className={`p-3.5 rounded-xl cursor-pointer border transition-all text-left ${
                  activePresetId === preset.id
                    ? 'border-[#38D9D0] bg-[#1A2540] shadow-md shadow-[#38D9D0]/20'
                    : 'border-white/5 bg-[#121B2D]/70 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-semibold text-white mb-1">{preset.name.split('·')[1] || preset.name}</div>
                <div className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                  {preset.summary}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic disclaimer */}
        <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-gray-400 leading-relaxed flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#38D9D0] shrink-0 mt-0.5" />
          <span>
            <strong>科学与合规提示：</strong>本平台不计算神秘主义运数，亦不保证特定财务收益。十四主星仅作为反思性格倾向与心理投射的启发式镜像。真实的商业成功源于对市场需求的持续满足。
          </span>
        </div>
      </div>

      {/* Step Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-xl glass-panel space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#9375FF]">STEP 01</span>
            <Clock className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <h3 className="text-sm font-semibold text-white">时空参数录入</h3>
          <p className="text-xs text-gray-400">
            录入出生日期与时间置信度，建立文化模型的基础坐标。
          </p>
        </div>

        <div className="p-4 rounded-xl glass-panel space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#38D9D0]">STEP 02</span>
            <Compass className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <h3 className="text-sm font-semibold text-white">真实职业背景</h3>
          <p className="text-xs text-gray-400">
            梳理核心专业技能、行业沉淀与当前发展瓶颈。
          </p>
        </div>

        <div className="p-4 rounded-xl glass-panel space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#9375FF]">STEP 03</span>
            <BrainCircuit className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <h3 className="text-sm font-semibold text-white">12道情境评测</h3>
          <p className="text-xs text-gray-400">
            基于实战情境测算在战略、高客单、执行等维度的真实风格。
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#121B2D]/80 border border-white/5">
        <button
          onClick={() => {
            loadDemoSeed();
            window.location.href = '/report';
          }}
          className="text-xs text-gray-400 hover:text-white underline underline-offset-4"
        >
          直接使用典型专家预设（快速体验完整报告）
        </button>

        <Link
          href="/discover/birth"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs transition-all hover:opacity-95 shadow-lg shadow-[#9375FF]/20"
        >
          <span>进入第一步：填写基础参数</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
