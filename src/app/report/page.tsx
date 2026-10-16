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
  Star,
  Activity,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReportSummaryPage() {
  const { birthInfo, previewV01Result } = useAssessmentStore();

  // 始终根据当前实际输入的出生日期重新校验，防止读取旧缓存
  const isCacheValid =
    previewV01Result &&
    previewV01Result.user &&
    previewV01Result.user.birth_date === birthInfo.birthDate &&
    previewV01Result.user.birth_time === birthInfo.birthTime;

  const result: PreviewV01Result = isCacheValid
    ? previewV01Result
    : calculateZiweiIpDnaPreview({
        name: birthInfo.displayName || '学员',
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
      <div className="flex items-center justify-between text-xs text-slate-400 font-medium pb-0.5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="font-bold text-amber-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
            紫微 IP DNA
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-[11px] text-slate-400 font-mono">
            {user.name} · {user.birth_date}（{user.lunar_date_str}）
          </span>
        </div>

        {/* Action: 打开高颜值拍立得分享卡片 */}
        <button
          onClick={handleShareClick}
          className="flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-amber-200 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30 shadow-sm transition active:scale-95 cursor-pointer shrink-0"
        >
          <Share2 className="w-3 h-3 text-amber-300" />
          <span>生成分享海报</span>
        </button>
      </div>

      {/* 2. SECTION 01 & 02 & 03: HERO BANNER - 姓名 & 六大核心 IP 家族 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A121F] via-[#10121C] to-[#0A0C14] p-5 border border-amber-500/30 shadow-2xl shadow-rose-950/30 space-y-3">
        {/* Ambient Cosmic Glow */}
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-rose-600/30 blur-3xl pointer-events-none" />

        {/* Official Brand Logo Emblem Artwork */}
        <div className="absolute -top-1 -right-2 w-28 h-28 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full bg-rose-500/20 blur-lg" />
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-xl shadow-rose-950/60 border border-amber-400/40 bg-slate-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="ZIWEI IP DNA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute top-1 left-2 text-amber-300 text-xs font-bold animate-ping">✦</span>
          </div>
        </div>

        <div className="relative z-10 max-w-[74%] space-y-1.5">
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="font-bold text-amber-300">{user.name} 的紫微 IP DNA</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 font-mono text-amber-200 font-bold">
              {ziwei.ming_palace.palace_pillar}宫 · {ziwei.ming_palace.bureau_name}
            </span>
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] text-slate-400 font-semibold block">
              核心 IP 原型家族
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-gold-gradient flex items-center gap-2">
              <span>{familyInfo.name}</span>
            </h1>
          </div>

          <p className="text-xs text-slate-300 font-medium leading-relaxed pt-0.5">
            {familyInfo.tagline}
          </p>
        </div>

        {/* 家族核心影响力关键词条 */}
        <div className="pt-2 border-t border-amber-500/20">
          <div className="text-[11px] font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-amber-200/90 font-medium">你的核心影响力基因：</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {familyInfo.keywords.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-[#141624] border border-amber-400/30 text-amber-200 shadow-sm"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SECTION 04, 05, 06: 你的命宫 (核心特质与优势原型 / “我是谁”) */}
      <div className="rounded-2xl card-obsidian p-5 space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs border border-amber-400/30">
              命
            </div>
            <div>
              <h2 className="text-sm font-black text-white">你的命宫</h2>
              <span className="text-[10px] text-slate-400">
                {ziwei.ming_palace.palace_branch}位 · 决定你的 IP 内核（我是谁）
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {ziwei.ming_palace.borrowed_from_migration && (
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 border border-amber-400/40 px-2 py-0.5 rounded-md">
                借对宫
              </span>
            )}
            <span className="text-[11px] font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-2.5 py-0.5 rounded-md">
              核心特质
            </span>
          </div>
        </div>

        {/* 主星与原型展示 */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#171A29] via-[#121422] to-[#0D0F19] border border-amber-500/25 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs text-slate-400 font-semibold flex items-center gap-1.5 flex-wrap">
              <span>命宫主星：</span>
              <span className="text-white font-bold text-sm">
                {ziwei.ming_palace.stars.join(' · ')}
              </span>
              {ziwei.ming_palace.borrowed_from_migration && (
                <span className="text-[10px] text-amber-400/80 font-normal">
                  （本宫空宫，依南派法门借对宫论述）
                </span>
              )}
            </div>

            <div className="text-lg font-black text-amber-200 flex items-center gap-2">
              <span>{ziwei.ming_palace.archetype}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black">
                {ziwei.ming_palace.ip_family}
              </span>
            </div>

            {/* 四化入命加持标签 */}
            {ziwei.ming_palace.mutagens && ziwei.ming_palace.mutagens.length > 0 && (
              <div className="flex gap-1 pt-0.5">
                {ziwei.ming_palace.mutagens.map((mut, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-black px-2 py-0.5 rounded bg-rose-500/20 border border-rose-400/40 text-rose-300"
                  >
                    生年{mut}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 text-slate-950 font-black flex items-center justify-center shadow-md shadow-rose-950/40 shrink-0">
            <FamilyIcon className="w-5 h-5 text-slate-950" />
          </div>
        </div>

        {/* 核心优势 Point Form */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            你的核心优势：
          </span>
          <div className="space-y-1.5">
            {ziwei.ming_palace.core_advantages.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-xs text-slate-200 bg-[#0E101B] px-3 py-2 rounded-xl border border-slate-800"
              >
                <span className="text-amber-400 font-black shrink-0 mt-0.5">✦</span>
                <span className="font-medium leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SECTION 07, 08, 09: 你的迁移宫 (公众感知 / 外显人格 / “别人怎么看我”) */}
      <div className="rounded-2xl card-obsidian p-5 space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xs border border-rose-400/30">
              迁
            </div>
            <div>
              <h2 className="text-sm font-black text-white">你的迁移宫</h2>
              <span className="text-[10px] text-slate-400">
                {ziwei.migration_palace.palace_branch}位（对宫）· 决定你的 IP 外显与公众感知
              </span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-rose-300 bg-rose-500/15 border border-rose-400/30 px-2.5 py-0.5 rounded-md">
            公众感知
          </span>
        </div>

        {/* 迁移主星与外显原型 */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#1E121E] via-[#14121F] to-[#0D0F19] border border-rose-500/25 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs text-slate-400 font-semibold mb-0.5">
              迁移宫主星：
              <span className="text-white font-bold ml-1 text-sm">
                {ziwei.migration_palace.stars.join(' · ')}
              </span>
            </div>
            <div className="text-lg font-black text-rose-200">
              {ziwei.migration_palace.archetype}
            </div>

            {/* 四化入迁移加持标签 */}
            {ziwei.migration_palace.mutagens && ziwei.migration_palace.mutagens.length > 0 && (
              <div className="flex gap-1 pt-0.5">
                {ziwei.migration_palace.mutagens.map((mut, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-black px-2 py-0.5 rounded bg-rose-500/20 border border-rose-400/40 text-rose-300"
                  >
                    生年{mut}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 to-amber-600 text-white flex items-center justify-center shadow-md shadow-rose-950/40 shrink-0">
            <Eye className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* 市场如何看你 */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-rose-400" />
            市场比较容易先看到你的：
          </span>
          <div className="grid grid-cols-2 gap-1.5 pb-1">
            {ziwei.migration_palace.keywords.map((kw, i) => (
              <div
                key={i}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#14101A] border border-rose-500/25 text-rose-200 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span>{kw}</span>
              </div>
            ))}
          </div>

          {ziwei.migration_palace.external_perception && (
            <div className="space-y-1.5 pt-1">
              {ziwei.migration_palace.external_perception.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-300 bg-[#0E101B] px-3 py-2 rounded-xl border border-slate-800"
                >
                  <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                  <span className="font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 5. SECTION 10: 命宫 × 迁移宫一句话总结 (The Core IP DNA Collision) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C121D] via-[#121320] to-[#0A0C14] text-white p-5 shadow-2xl border border-amber-500/30 space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-[10px] font-bold text-amber-300">
            <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
            命迁一线 · 专属碰撞总结
          </span>
          <span className="text-[10px] font-mono text-amber-400/80">IP DNA COLLISION</span>
        </div>

        <h3 className="text-lg font-black text-gold-gradient leading-snug tracking-tight">
          {ziwei.collision_summary.split('。')[0]}。
        </h3>

        <div className="p-3.5 rounded-xl bg-[#0B0D17]/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-normal space-y-2.5">
          <p>{ziwei.collision_summary}</p>

          {/* 生年四化入命迁实战指引 */}
          <div className="p-2.5 rounded-lg bg-amber-500/15 border border-amber-400/25 text-amber-200 text-[11px] leading-relaxed">
            <span className="font-bold text-amber-300 block mb-0.5">⚡ 四化赋能密码（大耕老师：起于忌，终于禄）：</span>
            {ziwei.mutagen_insight}
          </div>

          <div className="pt-1 border-t border-slate-800 text-amber-300 font-bold text-xs flex items-center gap-1">
            <span>💡 战略一句话：</span>
            <span>{familyInfo.oneLiner}</span>
          </div>
        </div>
      </div>

      {/* 6. 隐形的第十三宫：身宫（深层价值追求 · 大耕老师入门班核心） */}
      <div className="rounded-2xl card-obsidian p-4 sm:p-5 space-y-2">
        <div className="flex items-center justify-between pb-1.5 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs border border-teal-400/30">
              身
            </div>
            <div>
              <h2 className="text-sm font-black text-white">
                隐形的第十三宫 · 身宫在【{ziwei.shen_palace.name}】
              </h2>
              <span className="text-[10px] text-slate-400">
                成年后真正追求的底层价值所在
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-teal-300 bg-teal-500/20 border border-teal-400/30 px-2 py-0.5 rounded">
            长期主义
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-medium pt-1">
          {ziwei.shen_palace.meaning}
        </p>
      </div>

      {/* 7. SECTION 11, 12, 13: 八字日柱与品牌能量放大器 (五行 IP Booster) */}
      <div className="rounded-2xl card-obsidian p-5 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs border border-amber-400/30">
              气
            </div>
            <div>
              <h2 className="text-sm font-black text-white">八字日柱与能量放大器</h2>
              <span className="text-[10px] text-slate-400">五行喜用神 IP Booster</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#0D0F1B] border border-slate-800 text-slate-200">
            <span>四柱：</span>
            <span className="text-slate-400">{bazi.year_pillar}年</span>
            <span className="text-amber-300 font-black">{bazi.day_pillar}日</span>
            <span className="text-slate-400">{bazi.hour_pillar}时</span>
          </div>
        </div>

        {/* 喜用神放大器 Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#1C1613] via-[#15121B] to-[#0E1019] border border-amber-500/25 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">喜用神：</span>
              <span className="text-xl font-black text-gold-gradient">
                {bazi.useful_element_name}（{bazi.ip_booster.boost}）
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300">
              品牌加速器
            </span>
          </div>

          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            {bazi.ip_booster.copy}
          </p>

          <div className="p-2.5 rounded-lg bg-[#0C0E17] border border-amber-500/20 text-xs font-bold text-amber-200">
            👉 {bazi.ip_booster.one_liner}
          </div>
        </div>

        {/* 视觉建议：穿搭色彩 & 布景风格 */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* 建议强化色彩 */}
          <div className="p-3 rounded-xl bg-[#0E101A] border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
              <Shirt className="w-3.5 h-3.5 text-amber-400" />
              <span>适合品牌色/穿搭</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {bazi.ip_booster.outfit_colors.map((c, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#161928] border border-slate-700 text-slate-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* 建议拍摄布景 */}
          <div className="p-3 rounded-xl bg-[#0E101A] border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300">
              <Camera className="w-3.5 h-3.5 text-rose-400" />
              <span>镜头布景风格</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-tight">
              {bazi.ip_booster.backdrop_style}
            </p>
          </div>
        </div>
      </div>

      {/* 8. SECTION 14 & 36: 结尾引流 CTA - 解锁完整版 / 预约导师 */}
      <div className="relative overflow-hidden rounded-3xl card-obsidian p-5 sm:p-6 border border-amber-500/30 shadow-2xl shadow-rose-950/40 space-y-4">
        {/* Soft Background Crimson Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-[10px] font-bold text-amber-300">
            <span>✨ 易玺老师 · 试听课进阶专享通道</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
            这只是你的第一层 IP DNA
          </h2>

          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            真正具有商业闭环的个人品牌，不仅是看见一颗主星。
            完整版《紫微 IP DNA 战略系统》将由<strong>易玺老师团队</strong>深度拆解：
          </p>
        </div>

        {/* 完整版进阶 8 大维度标签 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-200">
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 核心人格深层动机
          </div>
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 官禄宫 · 商业价值
          </div>
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 财帛宫 · 变现路径
          </div>
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 身宫 · 人生后半场
          </div>
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 三方四正 · 资源格局
          </div>
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 生年/命宫四化暗线
          </div>
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 客群画像与收费定价
          </div>
          <div className="p-2 rounded-lg bg-[#0F111C] border border-amber-500/20 text-center text-amber-200/90">
            🔒 2026-2027 爆发大限
          </div>
        </div>

        {/* 预约导师闭门沟通 CTA */}
        <div className="pt-2 flex flex-col gap-2.5 border-t border-slate-800">
          <Link
            href="/consultation"
            className="w-full py-3.5 rounded-xl btn-solar-gold font-bold text-xs sm:text-sm text-center shadow-lg shadow-rose-950/50 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>解锁我的完整 IP DNA · 预约易玺老师 1对1 破局</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-center text-[10px] text-slate-400">
            仅限本场试听课现场学员，开放少量一对一战略咨询席位
          </p>
        </div>
      </div>

      {/* 9. SECTION 15 & 42: 系统免责声明 */}
      <div className="rounded-xl bg-[#090B14] border border-slate-800/80 p-3.5 text-center">
        <p className="text-[10px] text-slate-500 leading-relaxed">
          {SYSTEM_DISCLAIMER}
        </p>
      </div>

      {/* 10. POLAROID SHARE CARD MODAL (黑金高颜值拍立得海报分享弹窗) */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xs bg-[#0F111D] rounded-3xl p-5 shadow-2xl border border-amber-400/40 text-center space-y-4">
            {/* Close Button */}
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-white bg-slate-800/80 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Poster Inner Container (Dark Luxury Gold Polaroid look) */}
            <div className="rounded-2xl bg-gradient-to-b from-[#18131E] to-[#0A0C14] p-4 border border-amber-500/30 shadow-inner space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold text-amber-300">
                <span>ZIWEI IP DNA™</span>
                <span className="text-rose-400 font-mono">易玺老师·战略系统</span>
              </div>

              {/* Central Official Logo Graphic */}
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-lg shadow-rose-950/60 border border-amber-400/50 bg-slate-950">
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
                <h3 className="text-xl font-serif font-black text-gold-gradient">
                  {familyInfo.name}
                </h3>
                <p className="text-xs font-bold text-amber-300">
                  {ziwei.ming_palace.archetype}
                </p>
              </div>

              {/* 核心碰撞一句话 */}
              <div className="p-2.5 rounded-lg bg-[#141624] border border-amber-500/20 text-left text-[10px] text-slate-300 leading-snug">
                <span className="font-bold text-amber-400">命迁碰撞：</span>
                <span>{ziwei.collision_summary.split('。')[0]}。</span>
              </div>

              {/* 五行放大器 */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800 font-mono">
                <span>日柱：{bazi.day_pillar}</span>
                <span className="font-bold text-gold-gradient">
                  喜用神：{bazi.useful_element_name}（{bazi.ip_booster.boost}）
                </span>
              </div>

              {/* QR Code Demo Placeholder */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
                <span>扫码测你的 IP DNA</span>
                <div className="w-9 h-9 rounded-md bg-amber-500 text-slate-950 flex items-center justify-center font-mono text-[7px] font-black">
                  [二维码]
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleCopyShare}
                className="w-full py-2.5 rounded-xl btn-solar-gold font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
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

