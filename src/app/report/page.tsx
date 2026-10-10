'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { FOURTEEN_STARS, DEMO_PRESETS } from '@/data/archetypes';
import { getSimplifiedIndustryFit } from '@/data/industryFitData';
import { calculateBaziVisualGuidance } from '@/data/baziVisuals';
import {
  Sparkles,
  Calendar,
  ChevronDown,
  CheckCircle2,
  Bookmark,
  Shirt,
  Camera,
  Target,
  Clock,
  ArrowRight,
  Share2,
  Lock,
  Flame,
  Award,
  Zap,
  Check,
  X,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';

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

  // Interactive Color Swatch Selection State for Bazi Favorable Colors
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  // Polaroid Share Modal State
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Quick Celebration Trigger
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}
  };

  const handleShareClick = () => {
    setShowShareModal(true);
    triggerConfetti();
  };

  const handleCopyShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

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

        {/* Action: 打开高颜值拍立得分享卡片 */}
        <button
          onClick={handleShareClick}
          className="flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:text-blue-700 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200/80 shadow-2xs transition active:scale-95"
        >
          <Share2 className="w-3 h-3 text-[#2563EB]" />
          <span>生成分享海报</span>
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

      {/* 5. TAB CONTENT: 品牌定位 (BRAND & BAZI VISUALS - WITH INTERACTIVE COLOR PALETTE) */}
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

          {/* BAZI VISUAL STYLING ENGINE: 交互式换色穿搭灵感 */}
          <div className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <Shirt className="w-4 h-4 text-[#2563EB]" />
                <h3 className="text-xs font-bold text-slate-900">
                  八字喜用神交互穿搭 (点击色块试穿)
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#2563EB]">
                喜用 {baziVisuals.elementNameCn}
              </span>
            </div>

            {/* Interactive Color Chips Switcher */}
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block mb-1.5">
                  点击探索适合你的开运穿搭主色（提升公众信任）：
                </span>
                <div className="flex flex-wrap gap-2">
                  {baziVisuals.dressingGuidance.primaryColors.map((color, idx) => {
                    const isSelected = selectedColorIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColorIndex(idx)}
                        className={`text-[11px] font-bold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs scale-105'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-[#2563EB]'}`} />
                        <span>{color}</span>
                        {isSelected && <span className="text-[9px]">★</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Dress Feedback Box based on selected color */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="text-[11px] text-slate-700 font-medium">
                  <strong>当前选中：</strong>
                  <span className="text-[#2563EB] font-bold ml-1">
                    {baziVisuals.dressingGuidance.primaryColors[selectedColorIndex] || '主打色'}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  搭配建议：内搭或领口点缀 <strong>{baziVisuals.dressingGuidance.accentColors.join(' / ')}</strong>，材质选择 <strong>{baziVisuals.dressingGuidance.clothingStyle}</strong>，气场更加舒展自信。
                </p>
              </div>

              <div className="text-[11px] text-slate-600 pt-1">
                <strong className="text-slate-400">视频/直播布景：</strong> {baziVisuals.studioAesthetics.backdropStyle}
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

      {/* 8. 转化心机：好奇心缺口锁扣卡片 (CURIOSITY GAP CARD - 激发预约冲动) */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-5 text-white border border-slate-800 shadow-lg relative overflow-hidden space-y-3">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-black tracking-wide text-amber-300">
              你的深度命局进阶破局卡
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
            仅限导师一对一解读
          </span>
        </div>

        {/* 2 Blurred Teasers */}
        <div className="space-y-2">
          {/* Teaser 1 */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>命盘暗雷解密：为何你在商业推进中总有决策犹豫内耗？</span>
              </div>
              <div className="text-[10px] text-slate-400 blur-[2px] select-none">
                星盘财帛与官禄宫受化忌暗星干扰，易亲力亲为劳损，需用特定合伙机制化解。
              </div>
            </div>
            <span className="text-[10px] font-bold text-amber-400 shrink-0 ml-2">解锁 →</span>
          </div>

          {/* Teaser 2 */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#38D9D0] shrink-0" />
                <span>2026-2027 三年大限爆发点与命定贵人方位</span>
              </div>
              <div className="text-[10px] text-slate-400 blur-[2px] select-none">
                太阳化科入迁移大运，利于异地或新媒体出海发声，下半年有核心贵人助力。
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#38D9D0] shrink-0 ml-2">解锁 →</span>
          </div>
        </div>

        {/* Advisor Urgency Banner */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xs shadow-xs">
              导师
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>资深 IP 战略咨询操盘导师</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-black font-black">认证</span>
              </div>
              <div className="text-[10px] text-slate-400">已指导 320+ 位创始人及超级个体跑通闭环</div>
            </div>
          </div>

          <Link
            href="/consultation"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/30 text-center hover:opacity-95 transition flex items-center justify-center gap-1"
          >
            <span>预约导师闭门破局 (今日余2席)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 9. POLAROID SHARE CARD MODAL (高颜值拍立得海报分享弹窗) */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 text-center space-y-4">
            {/* Close Button */}
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Poster Inner Container (Polaroid look) */}
            <div className="rounded-2xl bg-gradient-to-b from-blue-50/80 to-white p-4 border border-blue-100 shadow-inner space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold text-[#2563EB]">
                <span>ZIWEI IP DNA™</span>
                <span>天赋海报</span>
              </div>

              {/* Central Graphic */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-blue-400/30">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] text-slate-400 block font-medium">我的核心事业原型</span>
                <h3 className="text-xl font-black text-slate-900">{star.nameCn}</h3>
                <p className="text-xs font-bold text-[#2563EB]">{star.archetypeTitle}</p>
              </div>

              {/* 3 Industry Tags */}
              <div className="space-y-1 pt-1 border-t border-slate-100 text-left">
                <span className="text-[9px] text-slate-400 block font-semibold">首要事业定位赛道：</span>
                <div className="flex flex-wrap gap-1">
                  {threeIndustryFits.map((fit, idx) => (
                    <span key={idx} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-blue-100/70 text-blue-800">
                      #{fit.industryCategory.split('与')[0]}
                    </span>
                  ))}
                </div>
              </div>

              {/* QR Code Demo Placeholder */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
                <span>扫码测你的 IP DNA</span>
                <div className="w-9 h-9 rounded-md bg-slate-900 text-white flex items-center justify-center font-mono text-[7px] font-bold">
                  [二维码]
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleCopyShare}
                className="w-full py-2.5 rounded-xl bg-[#2563EB] text-white font-bold text-xs shadow-sm hover:bg-blue-700 transition flex items-center justify-center gap-1.5"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>链接已复制！快去分享吧</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>复制报告链接分享朋友</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-slate-400">手机端可长按或截屏上方卡片保存至相册</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
