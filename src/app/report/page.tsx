'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { calculateZiweiIpDnaPreview, PreviewV01Result } from '@/lib/previewEngine';
import { IP_FAMILIES, ELEMENT_BOOSTERS, SYSTEM_DISCLAIMER } from '@/data/previewV01Data';
import {
  Sparkles,
  Share2,
  Calendar,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Check,
  X,
  Lock,
  Layers,
  Crown,
  Brain,
  Megaphone,
  Flame,
  HeartHandshake,
  Target,
  Zap,
  Shirt,
  Camera,
  Eye,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReportSummaryPage() {
  const { birthInfo, previewV01Result } = useAssessmentStore();

  // If store already has previewV01Result, use it; otherwise compute deterministically from birthInfo
  const result: PreviewV01Result =
    previewV01Result ||
    calculateZiweiIpDnaPreview({
      name: birthInfo.displayName || 'Calven',
      gender: birthInfo.gender || 'male',
      birthDate: birthInfo.birthDate || '1995-08-18',
      birthTime: birthInfo.birthTime || '12:00'
    });

  const { user, ziwei, bazi } = result;
  const familyInfo = IP_FAMILIES[ziwei.ming_palace.ip_family_id] || IP_FAMILIES.leader_authority;
  const boosterInfo = ELEMENT_BOOSTERS[bazi.useful_element] || ELEMENT_BOOSTERS.fire;

  // Family Icon Dynamic Resolver
  const getFamilyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return Crown;
      case 'Brain':
        return Brain;
      case 'Megaphone':
        return Megaphone;
      case 'Flame':
        return Flame;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Target':
      default:
        return Target;
    }
  };

  const FamilyIcon = getFamilyIcon(familyInfo.iconName);

  // Polaroid Share Modal State
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Quick Celebration Trigger on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, []);

  const handleShareClick = () => {
    setShowShareModal(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (e) {}
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
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium pb-0.5">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[#2563EB] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 fill-[#2563EB]" />
            ZIWEI IP DNA
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 font-medium">
            {user.name} · Preview V0.1
          </span>
        </div>

        {/* Action: 打开高颜值拍立得分享卡片 */}
        <button
          onClick={handleShareClick}
          className="flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:text-blue-700 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200/80 shadow-2xs transition active:scale-95 cursor-pointer"
        >
          <Share2 className="w-3 h-3 text-[#2563EB]" />
          <span>生成分享海报</span>
        </button>
      </div>

      {/* 2. SECTION 01 & 02 & 03: HERO BANNER - 姓名 & 六大核心 IP 家族 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-white p-5 border border-blue-100/90 shadow-sm space-y-3">
        {/* Official Brand Logo Emblem Artwork */}
        <div className="absolute -top-1 -right-2 w-32 h-32 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full bg-blue-500/15 blur-lg" />
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20 border border-blue-300/40 bg-slate-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="ZIWEI IP DNA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute top-1 left-2 text-blue-500 text-xs font-bold">✦</span>
          </div>
        </div>

        <div className="relative z-10 max-w-[72%] space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#2563EB] tracking-wide">
            <span>{user.name} 的紫微 IP DNA</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] text-slate-500 font-semibold block">
              你的核心类型
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center gap-2">
              <span>{familyInfo.name}</span>
            </h1>
          </div>

          <p className="text-xs text-slate-600 font-medium leading-relaxed pt-0.5">
            {familyInfo.tagline}
          </p>
        </div>

        {/* 家族核心影响力关键词条 */}
        <div className="pt-2 border-t border-blue-100/70">
          <div className="text-[11px] font-semibold text-slate-500 mb-1.5 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>你的核心影响力来自：</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {familyInfo.keywords.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-white border border-blue-200/70 text-slate-800 shadow-2xs"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SECTION 04, 05, 06: 你的命宫 (核心特质与优势原型 / “我是谁”) */}
      <div className="rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-xs">
              命
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900">你的命宫</h2>
              <span className="text-[10px] text-slate-400">决定你的 IP 内核 · 我是谁</span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-md">
            核心特质
          </span>
        </div>

        {/* 主星与原型展示 */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white border border-blue-100/80 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-0.5">
              命宫主星：
              <span className="text-slate-900 font-bold ml-1">
                {ziwei.ming_palace.stars.join(' · ')}
              </span>
            </div>
            <div className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span>{ziwei.ming_palace.archetype}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-600 text-white font-bold">
                {ziwei.ming_palace.ip_family}
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <FamilyIcon className="w-5 h-5" />
          </div>
        </div>

        {/* 核心优势 Point Form */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            你的核心优势：
          </span>
          <div className="space-y-1.5">
            {ziwei.ming_palace.core_advantages.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-100"
              >
                <span className="text-[#2563EB] font-black shrink-0 mt-0.5">✦</span>
                <span className="font-medium leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SECTION 07, 08, 09: 你的迁移宫 (公众感知 / 外显人格 / “别人怎么看我”) */}
      <div className="rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
              迁
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900">你的迁移宫</h2>
              <span className="text-[10px] text-slate-400">决定你的 IP 外显 · 别人怎么看我</span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">
            公众感知
          </span>
        </div>

        {/* 迁移主星与外显原型 */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-50/70 via-purple-50/40 to-white border border-indigo-100/80 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-0.5">
              迁移宫主星：
              <span className="text-slate-900 font-bold ml-1">
                {ziwei.migration_palace.stars.join(' · ')}
              </span>
            </div>
            <div className="text-lg font-black text-slate-900">
              {ziwei.migration_palace.archetype}
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <Eye className="w-5 h-5" />
          </div>
        </div>

        {/* 市场如何看你 */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-indigo-600" />
            市场比较容易先看到你的：
          </span>
          <div className="grid grid-cols-2 gap-1.5 pb-1">
            {ziwei.migration_palace.keywords.map((kw, i) => (
              <div
                key={i}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-indigo-50/60 border border-indigo-100/80 text-indigo-950 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{kw}</span>
              </div>
            ))}
          </div>

          {ziwei.migration_palace.external_perception && (
            <div className="space-y-1.5 pt-1">
              {ziwei.migration_palace.external_perception.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-100"
                >
                  <span className="text-indigo-500 font-bold shrink-0 mt-0.5">•</span>
                  <span className="font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 5. SECTION 10: 命宫 × 迁移宫一句话总结 (The Core IP DNA Collision) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-5 shadow-lg border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-blue-300">
            <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
            命宫 × 迁移宫 · 专属碰撞总结
          </span>
          <span className="text-[10px] font-mono text-slate-400">IP DNA SYNTHESIS</span>
        </div>

        <h3 className="text-lg font-black text-white leading-snug tracking-tight">
          {ziwei.collision_summary.split('。')[0]}。
        </h3>

        <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200 leading-relaxed font-normal space-y-2">
          <p>{ziwei.collision_summary}</p>
          <div className="pt-2 border-t border-white/10 text-amber-300 font-bold text-xs flex items-center gap-1">
            <span>💡 专家指引：</span>
            <span>{familyInfo.oneLiner}</span>
          </div>
        </div>
      </div>

      {/* 6. SECTION 11, 12, 13: 八字日柱与品牌能量放大器 (五行 IP Booster) */}
      <div className="rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
              气
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900">八字日柱与能量放大器</h2>
              <span className="text-[10px] text-slate-400">五行喜用神 IP Booster</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
            <span>日柱：</span>
            <span className="text-[#2563EB]">{bazi.day_pillar}</span>
          </div>
        </div>

        {/* 喜用神放大器 Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50/80 via-orange-50/50 to-white border border-amber-200/70 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">喜用神：</span>
              <span className="text-xl font-black text-amber-600">
                {bazi.useful_element_name}（{bazi.ip_booster.boost}）
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              品牌加速器
            </span>
          </div>

          <p className="text-xs text-slate-700 font-medium leading-relaxed">
            {bazi.ip_booster.copy}
          </p>

          <div className="p-2.5 rounded-lg bg-white/90 border border-amber-100 text-xs font-bold text-slate-800">
            👉 {bazi.ip_booster.one_liner}
          </div>
        </div>

        {/* 视觉建议：穿搭色彩 & 布景风格 */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* 建议强化色彩 */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Shirt className="w-3.5 h-3.5 text-amber-600" />
              <span>适合品牌色/穿搭</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {bazi.ip_booster.outfit_colors.map((c, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* 建议拍摄布景 */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Camera className="w-3.5 h-3.5 text-indigo-600" />
              <span>镜头布景风格</span>
            </div>
            <p className="text-[10px] text-slate-600 leading-tight">
              {bazi.ip_booster.backdrop_style}
            </p>
          </div>
        </div>
      </div>

      {/* 7. SECTION 14 & 36: 结尾引流 CTA - 解锁完整版 / 预约导师 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
        {/* Soft Background Radial */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-300/30 text-[10px] font-bold text-amber-300">
            <span>✨ 试听课进阶专享通道</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
            这只是你的第一层 IP DNA
          </h2>

          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            真正完整的个人 IP，并不是只看一颗主星。
            完整版《紫微 IP DNA 战略系统》还会继续深度拆解：
          </p>
        </div>

        {/* 完整版进阶 8 大维度标签 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-200">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 核心人格深层动机
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 官禄宫 · 商业价值
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 财帛宫 · 变现路径
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 身宫 · 人生后半场
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 三方四正 · 资源格局
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 生年/命宫四化暗线
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 客群画像与收费定价
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
            🔒 2026-2027 爆发大限
          </div>
        </div>

        {/* 预约导师闭门沟通 CTA */}
        <div className="pt-2 flex flex-col gap-2.5 border-t border-white/10">
          <Link
            href="/consultation"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 hover:opacity-95 active:scale-[0.99] text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-blue-500/30 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>解锁我的完整 IP DNA · 预约导师 1对1 破局</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-center text-[10px] text-slate-400">
            针对试听课学员开放限量一对一定制咨询席位
          </p>
        </div>
      </div>

      {/* 8. SECTION 15 & 42: 系统免责声明 */}
      <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 text-center">
        <p className="text-[10px] text-slate-400 leading-relaxed">
          {SYSTEM_DISCLAIMER}
        </p>
      </div>

      {/* 9. POLAROID SHARE CARD MODAL (高颜值拍立得海报分享弹窗) */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-xs bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 text-center space-y-4">
            {/* Close Button */}
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 bg-slate-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Poster Inner Container (Polaroid look) */}
            <div className="rounded-2xl bg-gradient-to-b from-blue-50/80 to-white p-4 border border-blue-100 shadow-inner space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold text-[#2563EB]">
                <span>ZIWEI IP DNA™</span>
                <span>天赋海报</span>
              </div>

              {/* Central Official Logo Graphic */}
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-md shadow-blue-400/30 border border-blue-200 bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="ZIWEI IP DNA Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] text-slate-400 block font-medium">
                  {user.name} 的核心 IP 原型
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {familyInfo.name}
                </h3>
                <p className="text-xs font-bold text-[#2563EB]">
                  {ziwei.ming_palace.archetype}
                </p>
              </div>

              {/* 核心碰撞一句话 */}
              <div className="p-2 rounded-lg bg-blue-50/60 border border-blue-100 text-left text-[10px] text-slate-700 leading-snug">
                <span className="font-bold text-[#2563EB]">命宫 × 迁移宫：</span>
                <span>{ziwei.collision_summary.split('。')[0]}。</span>
              </div>

              {/* 五行放大器 */}
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                <span>日柱：{bazi.day_pillar}</span>
                <span className="font-bold text-amber-600">
                  喜用神：{bazi.useful_element_name}（{bazi.ip_booster.boost}）
                </span>
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
                className="w-full py-2.5 rounded-xl bg-[#2563EB] text-white font-bold text-xs shadow-sm hover:bg-blue-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
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
              <p className="text-[10px] text-slate-400">手机端可截屏上方卡片保存至相册发朋友圈</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
