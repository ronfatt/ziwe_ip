'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Calendar, User, Mail, Phone, Clock, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Award } from 'lucide-react';

export default function ConsultationPage() {
  const { birthInfo, profile, activePresetId } = useAssessmentStore();

  const [selectedTier, setSelectedTier] = useState<'free' | 'extended' | 'expert'>('extended');
  const [clientName, setClientName] = useState(birthInfo.displayName || '');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState(profile.careerChallenge || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to local consultation storage
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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9375FF]/10 text-[#9375FF] border border-[#9375FF]/20 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#38D9D0]" />
          <span>EXPERT ADVISOR MATCHING</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          预约专业导师 · 1对1 战略推演闭门会
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          由经平台认证的紫微斗数实战派讲师与资深商业战略架构师联合主理，拒绝假大空套话，直面真实商业难题。
        </p>
      </div>

      {/* Tier Options Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tier 1: Free Report */}
        <div
          onClick={() => setSelectedTier('free')}
          className={`p-6 rounded-2xl cursor-pointer border transition-all text-left flex flex-col justify-between ${
            selectedTier === 'free'
              ? 'border-[#38D9D0] bg-[#1A2540] shadow-md shadow-[#38D9D0]/20'
              : 'border-white/5 bg-[#121B2D]/70 hover:border-white/20'
          }`}
        >
          <div className="space-y-3">
            <span className="text-xs font-mono text-gray-400">免费体验版 (Free)</span>
            <div className="text-xl font-bold text-white">¥ 0</div>
            <p className="text-xs text-gray-300 leading-relaxed">
              基础主星原型解析、三大行业探索方向与单版本定位公式。
            </p>
            <ul className="text-[11px] text-gray-400 space-y-1 font-mono pt-2">
              <li>✓ 命宫主星文化原型</li>
              <li>✓ 8维度能力雷达图</li>
              <li>✓ 基础定位金句</li>
            </ul>
          </div>
          <div className="pt-4 mt-4 border-t border-white/5 text-xs font-medium text-gray-300">
            {selectedTier === 'free' ? '● 当前选中' : '点击选择'}
          </div>
        </div>

        {/* Tier 2: Extended Report (Featured) */}
        <div
          onClick={() => setSelectedTier('extended')}
          className={`p-6 rounded-2xl cursor-pointer border transition-all text-left flex flex-col justify-between relative ${
            selectedTier === 'extended'
              ? 'border-[#9375FF] bg-[#1A2540] shadow-xl shadow-[#9375FF]/30'
              : 'border-white/5 bg-[#121B2D]/70 hover:border-white/20'
          }`}
        >
          <div className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black text-[10px] font-bold font-mono">
            MOST POPULAR
          </div>
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#9375FF]">完整专业版 (Extended)</span>
            <div className="text-xl font-bold text-white">¥ 299 <span className="text-xs text-gray-400 font-normal">/ 终身查阅</span></div>
            <p className="text-xs text-gray-300 leading-relaxed">
              解锁完整双层分析白皮书、3套差异化定位变体、轻资产变现模型与90天战役方案。
            </p>
            <ul className="text-[11px] text-gray-300 space-y-1 font-mono pt-2">
              <li>✓ 完整 Career + Brand + Business DNA</li>
              <li>✓ 3套可编辑定位替代方案</li>
              <li>✓ 90天冲刺里程碑与三年路线</li>
              <li>✓ PDF 高清排版导出权限</li>
            </ul>
          </div>
          <div className="pt-4 mt-4 border-t border-white/5 text-xs font-semibold text-[#38D9D0]">
            {selectedTier === 'extended' ? '● 当前选中（推荐）' : '点击选择'}
          </div>
        </div>

        {/* Tier 3: Expert 1-on-1 */}
        <div
          onClick={() => setSelectedTier('expert')}
          className={`p-6 rounded-2xl cursor-pointer border transition-all text-left flex flex-col justify-between ${
            selectedTier === 'expert'
              ? 'border-[#38D9D0] bg-[#1A2540] shadow-md shadow-[#38D9D0]/20'
              : 'border-white/5 bg-[#121B2D]/70 hover:border-white/20'
          }`}
        >
          <div className="space-y-3">
            <span className="text-xs font-mono text-cyan-400">专家导师闭门推演 (1-on-1)</span>
            <div className="text-xl font-bold text-white">¥ 1,280 <span className="text-xs text-gray-400 font-normal">/ 60分钟</span></div>
            <p className="text-xs text-gray-300 leading-relaxed">
              认证导师 60 分钟闭门深度拆解，结合命盘与个人业务痛点，手把手锁定首期高客单客户线索。
            </p>
            <ul className="text-[11px] text-gray-300 space-y-1 font-mono pt-2">
              <li>✓ 包含完整专业版所有权益</li>
              <li>✓ 60分钟腾讯会议/Zoom 1对1闭门推演</li>
              <li>✓ 专属咨询录音与定制执行纪要</li>
              <li>✓ 7天专属微信群答疑陪伴</li>
            </ul>
          </div>
          <div className="pt-4 mt-4 border-t border-white/5 text-xs font-medium text-gray-300">
            {selectedTier === 'expert' ? '● 当前选中' : '点击选择'}
          </div>
        </div>
      </div>

      {/* Booking Form or Success State */}
      <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10">
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">预约意向申请已提交成功！</h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              专属咨询顾问将在 24 小时内通过微信或电话与您取得联系，确认具体沟通时间及预习资料。
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <Link
                href="/report"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs"
              >
                返回查看报告
              </Link>
              <Link
                href="/admin/leads"
                className="px-4 py-2.5 rounded-xl bg-white/5 text-gray-300 text-xs border border-white/10"
              >
                管理员后台查看该线索 (Demo)
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="pb-3 border-b border-white/10">
              <h3 className="text-base font-semibold text-white">
                填写咨询预约与联系资料
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                当前所选服务级别：<strong className="text-[#38D9D0] uppercase">{selectedTier}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#38D9D0]" />
                  <span>真实姓名 / 称呼</span>
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="例如：林奕凡"
                  className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#38D9D0]" />
                  <span>电子邮箱 (用于接收完整报告与日程)</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#38D9D0]" />
                  <span>微信号 / 手机号 (WhatsApp)</span>
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+86 138... / +60 12..."
                  className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#38D9D0]" />
                  <span>期望沟通日期 (Preferred Date)</span>
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                本次咨询最迫切希望达成的目标或解决的卡点
              </label>
              <textarea
                rows={3}
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                placeholder="例如：手头有高价值专业能力，但不知道如何定价和筛选第一批高客单企业客户..."
                className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
              />
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-gray-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38D9D0] shrink-0" />
              <span>所有信息严格受保密协议保护，未经许可绝不公开。Demo 阶段不进行任何真实扣款。</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9375FF] via-[#38D9D0] to-[#9375FF] text-black font-bold text-sm shadow-xl shadow-[#9375FF]/20 hover:opacity-95 transition"
              >
                {selectedTier === 'free' ? '免费获取基础报告' : selectedTier === 'extended' ? '解锁完整 IP DNA 蓝图' : '提交预约申请并锁定导师排期'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
