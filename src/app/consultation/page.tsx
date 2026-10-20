'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Award,
  Crown,
  ChevronLeft
} from 'lucide-react';

export default function ConsultationPage() {
  const { birthInfo, profile, previewV01Result, language } = useAssessmentStore();
  const isEn = language === 'en';

  const [selectedTier, setSelectedTier] = useState<'preview' | 'extended' | 'master'>('extended');
  const [clientName, setClientName] = useState(birthInfo.displayName || previewV01Result?.user?.name || '');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest = {
      id: 'req_' + Date.now(),
      createdAt: new Date().toISOString(),
      clientName,
      email,
      phone,
      primaryGoal,
      preferredDate,
      reportTier: selectedTier,
      status: 'pending'
    };

    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('ziwei_consultation_leads') || '[]');
      existing.unshift(newRequest);
      localStorage.setItem('ziwei_consultation_leads', JSON.stringify(existing));
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] max-w-lg md:max-w-xl mx-auto px-4 py-4 md:py-6 space-y-4">
      {/* Top back navigation */}
      <div className="flex items-center justify-between pb-1">
        <Link
          href="/report"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{isEn ? 'Back to Assessment Report' : '返回查看测试结果'}</span>
        </Link>
        <span className="text-[11px] font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-2 py-0.5 rounded-md">
          {isEn ? 'Workshop Exclusive' : '试听课专享'}
        </span>
      </div>

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-[#1A121F] via-[#10121C] to-[#0A0C14] p-5 border border-amber-500/30 shadow-2xl shadow-rose-950/30 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-[10px] font-bold text-amber-300">
          <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
          <span>{isEn ? '1-on-1 Strategic Advisory Session' : '1对1 战略破局咨询'}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
          {isEn
            ? 'Book Advisor · Unlock Full IP DNA Commercial Blueprint'
            : '预约导师 · 解锁完整 IP DNA 商业地图'}
        </h1>
        <p className="text-xs text-slate-300 leading-relaxed font-normal">
          {isEn
            ? 'Preview reveals your core talent and public persona. Master Yixi and our advisory team will take you deep into your Body Palace, Career Palace, Wealth Palace, Hidden Mutagens, and high-ticket monetization strategy.'
            : 'Preview 版带你看见了内核与公众形象。导师将带你深入解读身宫、官禄宫、财帛宫、四化暗线与商业落地变现路径。'}
        </p>
      </div>

      {/* Tier Options Selection */}
      <div className="space-y-2.5">
        <span className="text-xs font-bold text-slate-200 block">
          {isEn ? 'Select Strategic Tier:' : '选择服务方案：'}
        </span>
        <div className="grid grid-cols-1 gap-2.5">
          {/* Tier 1: 完整版 IP DNA 战略蓝图 */}
          <div
            onClick={() => setSelectedTier('extended')}
            className={`p-4 rounded-2xl cursor-pointer border transition-all text-left flex items-start justify-between relative ${
              selectedTier === 'extended'
                ? 'border-amber-400 bg-[#161324] shadow-md ring-1 ring-amber-400/30'
                : 'border-slate-800 bg-[#0E101B] hover:border-slate-700'
            }`}
          >
            <div className="space-y-1.5 max-w-[80%]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">
                  {isEn ? 'Full IP DNA Strategic Blueprint Report' : '完整版 IP DNA 战略蓝图报告'}
                </span>
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-500 text-slate-950">
                  {isEn ? 'RECOMMENDED' : '推荐'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isEn
                  ? 'Includes comprehensive 12-palace deconstruction, four mutagen catalysts, 3 positioning variants, and 90-day launch roadmap.'
                  : '包含十二宫全盘解析、四化吉凶暗线、3套差异化定位变体与90天落地战役。'}
              </p>
              <div className="text-sm font-black text-amber-300 pt-0.5">
                RM 299 <span className="text-[10px] font-normal text-slate-400">{isEn ? '/ Lifetime Access' : '/ 终身查阅'}</span>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center mt-1">
              {selectedTier === 'extended' && (
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              )}
            </div>
          </div>

          {/* Tier 2: 导师 1对1 闭门推演 */}
          <div
            onClick={() => setSelectedTier('master')}
            className={`p-4 rounded-2xl cursor-pointer border transition-all text-left flex items-start justify-between relative ${
              selectedTier === 'master'
                ? 'border-rose-400 bg-[#1B1220] shadow-md ring-1 ring-rose-400/30'
                : 'border-slate-800 bg-[#0E101B] hover:border-slate-700'
            }`}
          >
            <div className="space-y-1.5 max-w-[80%]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">
                  {isEn
                    ? 'Certified Advisor 1-on-1 Closed-Door Strategy (60 Mins)'
                    : '认证导师 1对1 闭门战略推演 (60分钟)'}
                </span>
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-rose-500 text-white">
                  {isEn ? 'VIP' : '高定'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {isEn
                  ? 'Face-to-face deep dive deconstructing your destiny chart and business bottlenecks, locking in high-ticket client acquisition.'
                  : '导师面对面闭门深度拆解，结合命盘与个人业务卡点，手把手锁定首期高客单客户线索。'}
              </p>
              <div className="text-sm font-black text-rose-300 pt-0.5">
                RM 1,280 <span className="text-[10px] font-normal text-slate-400">{isEn ? '/ 60 Mins + Recording & Brief' : '/ 60分钟 + 录音与纪要'}</span>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center mt-1">
              {selectedTier === 'master' && (
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form or Success State */}
      <div className="rounded-2xl card-obsidian p-5 border border-slate-800 shadow-sm">
        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">
              {isEn ? 'Booking Request Submitted Successfully!' : '预约申请已提交成功！'}
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              {isEn
                ? 'Your dedicated personal advisor will reach out via WhatsApp / WeChat within 24 hours to confirm schedule and preparation materials.'
                : '专属咨询顾问将在 24 小时内通过微信或 WhatsApp 与您取得联系，确认具体沟通时间及预习资料。'}
            </p>
            <div className="pt-2">
              <Link
                href="/report"
                className="inline-block px-5 py-2.5 rounded-xl btn-solar-gold font-bold text-xs shadow-sm transition"
              >
                {isEn ? 'Back to View My IP DNA Report' : '返回查看我的 IP DNA 报告'}
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="pb-2 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white">
                {isEn ? 'Contact Details for Advisory Booking' : '填写预约联系资料'}
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {isEn
                  ? 'Our advisory team will reserve your confidential consulting slot.'
                  : '提交后导师团队将安排专属排期与课后沟通'}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {isEn ? 'Full Name / English Name' : '真实姓名 / 称呼'}
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={isEn ? 'e.g. Calven / Evan' : '例如：Calven'}
                className="w-full rounded-xl bg-[#0F111D] border border-slate-700/80 px-3 py-2.5 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {isEn ? 'WhatsApp / WeChat / Phone' : '微信号 / WhatsApp / 手机号'}
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+60 12... / WeChat ID"
                  className="w-full rounded-xl bg-[#0F111D] border border-slate-700/80 px-3 py-2.5 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {isEn ? 'Email (To Receive Report)' : '电子邮箱 (接收报告)'}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl bg-[#0F111D] border border-slate-700/80 px-3 py-2.5 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {isEn
                  ? 'Key Challenge or Bottleneck to Solve in this Session'
                  : '本次咨询最迫切希望解决的业务或定位问题'}
              </label>
              <textarea
                rows={2}
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                placeholder={
                  isEn
                    ? 'e.g. Years of professional expertise, but uncertain how to package destiny strengths into a high-ticket consulting offering...'
                    : '例如：有多年专业经验，但不知道如何将命盘优势转化为高客单收费咨询产品...'
                }
                className="w-full rounded-xl bg-[#0F111D] border border-slate-700/80 px-3 py-2.5 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none transition"
              />
            </div>

            <div className="p-2.5 rounded-lg bg-[#0C0E17] border border-slate-800 text-[10px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {isEn
                  ? 'Strict confidentiality guaranteed under NDA. Preview phase requires no upfront payment.'
                  : '所有信息严格受保密协议保护，Demo阶段不扣除任何真实款项。'}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl btn-solar-gold font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
            >
              {isEn
                ? 'Submit Booking & Reserve Advisor Slot →'
                : '提交预约申请并锁定导师排期 →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
