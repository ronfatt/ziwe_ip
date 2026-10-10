'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { FOURTEEN_STARS, DEMO_PRESETS } from '@/data/archetypes';
import { getSimplifiedIndustryFit } from '@/data/industryFitData';
import { calculateBaziVisualGuidance } from '@/data/baziVisuals';
import {
  Sparkles,
  Printer,
  Calendar,
  ChevronDown,
  Check,
  CheckCircle2,
  Bookmark,
  Shirt,
  Camera,
  Target,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function ReportSummaryPage() {
  const {
    birthInfo,
    activePresetId,
    brandDNA
  } = useAssessmentStore();

  const preset = DEMO_PRESETS.find((p) => p.id === activePresetId) || DEMO_PRESETS[0];
  const star = FOURTEEN_STARS[preset.archetypeKey] || FOURTEEN_STARS['tian_ji'];

  // 3 Clear Industry Fits
  const threeIndustryFits = getSimplifiedIndustryFit(preset.archetypeKey);

  // Bazi Favorable Element Guidance
  const baziVisuals = calculateBaziVisualGuidance(birthInfo.birthDate);

  // Active Tab: 总览 | 行业方向 | 品牌定位 | 行动计划
  const [activeTab, setActiveTab] = useState<'overview' | 'industries' | 'brand' | 'roadmap'>('industries');

  // Accordion open states for the 3 industry cards
  const [openCardIndex, setOpenCardIndex] = useState<number>(0);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] max-w-lg md:max-w-xl mx-auto px-4 py-4 md:py-6 space-y-4">
      {/* 1. TOP STATUS META BAR */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[#2563EB]">IP DNA 探索报告</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-400 font-mono">
            {birthInfo.displayName || '学员'} · {birthInfo.birthDate || '1995.08.18'}
          </span>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded-md bg-white border border-slate-200 shadow-2xs"
        >
          <Bookmark className="w-3 h-3 text-slate-400" />
          <span>保存报告</span>
        </button>
      </div>

      {/* 2. CORE ARCHETYPE HERO CARD: 你的核心原型 (天机星 · 首席智囊 / 商业军师) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-white p-5 border border-blue-100 shadow-xs">
        {/* Abstract 3D Crystal / Polyhedron Graphic matching user image */}
        <div className="absolute top-3 right-3 w-28 h-28 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Soft glow */}
            <div className="absolute w-20 h-20 rounded-full bg-blue-300/30 blur-md" />
            {/* 3D Polyhedron Prism */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="w-12 h-14 bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-300 clip-prism opacity-90 shadow-lg shadow-blue-400/30 flex items-center justify-center">
                <div className="w-6 h-8 bg-white/40 blur-[1px]" />
              </div>
              {/* Floating tiny sphere accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-emerald-400 shadow-xs" />
              <div className="absolute bottom-2 -right-1 w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span className="absolute top-1 right-2 text-blue-500 text-[10px]">✦</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[70%] space-y-2">
          <span className="text-[11px] font-bold text-[#2563EB]">你的核心原型</span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
            {star.nameCn}
          </h1>
          <div className="text-xs font-bold text-slate-700">
            {star.archetypeTitle}
          </div>

          {/* Trait Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-100/80 text-blue-700">
              策略思维
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-100/80 text-blue-700">
              系统构建
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
              知识表达
            </span>
          </div>
        </div>

        {/* 预约导师 CTA Button pinned bottom-right */}
        <div className="pt-3 flex justify-end">
          <Link
            href="/consultation"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold shadow-xs hover:bg-blue-700 transition"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>预约导师</span>
          </Link>
        </div>
      </div>

      {/* 3. SEGMENTED TABS: 总览 | 行业方向 | 品牌定位 | 行动计划 */}
      <div className="flex items-center justify-between border-b border-slate-200 text-xs font-semibold text-slate-500 px-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-2.5 relative transition-colors ${activeTab === 'overview' ? 'text-[#2563EB] font-bold' : 'hover:text-slate-800'}`}
        >
          总览
          {activeTab === 'overview' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />}
        </button>

        <button
          onClick={() => setActiveTab('industries')}
          className={`pb-2.5 relative transition-colors ${activeTab === 'industries' ? 'text-[#2563EB] font-bold' : 'hover:text-slate-800'}`}
        >
          行业方向
          {activeTab === 'industries' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />}
        </button>

        <button
          onClick={() => setActiveTab('brand')}
          className={`pb-2.5 relative transition-colors ${activeTab === 'brand' ? 'text-[#2563EB] font-bold' : 'hover:text-slate-800'}`}
        >
          品牌定位
          {activeTab === 'brand' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />}
        </button>

        <button
          onClick={() => setActiveTab('roadmap')}
          className={`pb-2.5 relative transition-colors ${activeTab === 'roadmap' ? 'text-[#2563EB] font-bold' : 'hover:text-slate-800'}`}
        >
          行动计划
          {activeTab === 'roadmap' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />}
        </button>
      </div>

      {/* 4. TAB CONTENT: 行业方向 (MATCHING EXACT USER MOCKUP SCREENSHOT) */}
      {activeTab === 'industries' && (
        <div className="space-y-3.5">
          <div>
            <h2 className="text-sm font-black text-slate-900">
              值得探索的 3 个事业方向
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              结合你的经验与兴趣进一步验证
            </p>
          </div>

          {/* 3 Industry Accordion Cards */}
          <div className="space-y-3">
            {threeIndustryFits.map((item, idx) => {
              const isOpen = openCardIndex === idx;
              return (
                <div
                  key={item.rank}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
                >
                  {/* Card Header */}
                  <div
                    onClick={() => setOpenCardIndex(isOpen ? -1 : idx)}
                    className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50/80 transition"
                  >
                    <div className="flex items-center gap-3">
                      {/* Number badge: 01, 02, 03 */}
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        idx === 0 ? 'bg-emerald-50 text-emerald-600' : idx === 1 ? 'bg-blue-50 text-[#2563EB]' : 'bg-amber-50 text-amber-600'
                      }`}>
                        0{item.rank}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-snug">
                          {item.industryCategory}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {item.roleTitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {idx === 0 && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                          最匹配
                        </span>
                      )}
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Body Details */}
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 pt-1 space-y-2.5 border-t border-slate-100 text-xs">
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        {item.coreTrait}
                      </p>

                      {/* 可开展的业务方向 */}
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 block font-medium">可开展的业务方向：</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.suitableDoing.map((action, aidx) => (
                            <span
                              key={aidx}
                              className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 text-slate-700"
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 变现路径 */}
                      <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 flex items-center gap-2 text-[11px] text-emerald-900">
                        <span className="font-bold text-emerald-700">变现路径</span>
                        <span className="text-emerald-400">|</span>
                        <span>{item.monetizationPath}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Footnote Tip */}
          <div className="text-[10px] text-slate-400 flex items-center gap-1 pt-1">
            <span>ⓘ 探索建议仅供参考，职业选择需结合实际能力与市场验证。</span>
          </div>
        </div>
      )}

      {/* 5. TAB CONTENT: 品牌定位 (BRAND & BAZI VISUALS) */}
      {activeTab === 'brand' && (
        <div className="space-y-3.5 animate-fadeIn">
          <div>
            <h2 className="text-sm font-black text-slate-900">个人品牌与定位策略</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">确立你的核心差异化价值</p>
          </div>

          {/* Positioning Formula Card */}
          {brandDNA && (
            <div className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-2xs space-y-2">
              <span className="text-[10px] font-bold text-[#2563EB] uppercase">一句话品牌定位公式</span>
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-800 font-medium leading-relaxed">
                &ldquo;{brandDNA.positioningStatement}&rdquo;
              </div>
            </div>
          )}

          {/* BAZI VISUAL STYLING ENGINE (八字喜用神穿搭与布景) */}
          <div className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <Shirt className="w-4 h-4 text-[#2563EB]" />
                <h3 className="text-xs font-bold text-slate-900">
                  八字喜用神视觉赋能 (出镜穿搭与背景)
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#2563EB]">
                喜用 {baziVisuals.elementNameCn}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block mb-1">推荐出镜服装主色：</span>
                <div className="flex flex-wrap gap-1.5">
                  {baziVisuals.dressingGuidance.primaryColors.map((color, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                      ● {color}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-slate-600">
                <strong className="text-slate-400">布景风格：</strong> {baziVisuals.studioAesthetics.backdropStyle}
              </div>

              <div className="text-[11px] text-slate-600">
                <strong className="text-slate-400">视觉气场：</strong> {baziVisuals.studioAesthetics.visualAtmosphere}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. TAB CONTENT: 总览 (OVERVIEW) */}
      {activeTab === 'overview' && (
        <div className="space-y-3 animate-fadeIn text-xs">
          <div className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-2xs space-y-2">
            <h3 className="text-xs font-bold text-slate-900">天赋优势底牌</h3>
            <div className="flex flex-wrap gap-1.5">
              {star.strengths.map((str, idx) => (
                <span key={idx} className="px-2 py-1 rounded-md bg-blue-50 text-[#2563EB] text-[11px] font-medium">
                  ✓ {str}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-2xs space-y-2">
            <h3 className="text-xs font-bold text-slate-900">潜意识盲区防范</h3>
            <div className="flex flex-wrap gap-1.5">
              {star.blindSpots.map((b, idx) => (
                <span key={idx} className="px-2 py-1 rounded-md bg-rose-50 text-rose-600 text-[11px] font-medium">
                  ! {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. TAB CONTENT: 行动计划 (ROADMAP) */}
      {activeTab === 'roadmap' && (
        <div className="space-y-3 animate-fadeIn text-xs">
          <div className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-2xs space-y-2.5">
            <h3 className="text-xs font-bold text-slate-900">90 天阶段冲刺建议</h3>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] font-bold text-[#2563EB] block">第 1 - 30 天：定位打磨</span>
                <p className="text-[11px] text-slate-600 mt-0.5">明确单点业务方案，完成前2位种子客户的交付与口碑收集。</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] font-bold text-emerald-600 block">第 31 - 60 天：内容与信任</span>
                <p className="text-[11px] text-slate-600 mt-0.5">围绕核心特质发表3篇标杆深度干货，建立公信力。</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] font-bold text-amber-600 block">第 61 - 90 天：商业化变现</span>
                <p className="text-[11px] text-slate-600 mt-0.5">正式推出高客单闭门咨询/小班营，跑通正向现金流。</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. BOTTOM ADVISOR CARD */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between shadow-md shadow-blue-500/20">
        <div className="space-y-0.5">
          <div className="text-xs font-bold">需要导师协助落地？</div>
          <p className="text-[10px] text-blue-100">1对1 闭门推演，定制专属落地计划</p>
        </div>
        <Link
          href="/consultation"
          className="px-3 py-1.5 rounded-xl bg-white text-[#2563EB] text-xs font-bold shadow-xs hover:bg-blue-50 transition"
        >
          预约咨询
        </Link>
      </div>
    </div>
  );
}
