'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Database, Sliders, Users, FileText, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { FOURTEEN_STARS, DEMO_PRESETS } from '@/data/archetypes';
import { QUIZ_QUESTIONS } from '@/data/questions';

export default function AdminOverviewPage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              DEMO PROTOTYPE ONLY
            </span>
            <span className="text-xs font-mono text-gray-400">
              PRODUCTION ACCESS RESTRICTED
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            平台管理与知识库中心 (Admin Console)
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            管理十四主星学术原型、解读规则模板、12道情境题库与学员预约咨询线索。
          </p>
        </div>

        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 max-w-xs">
          <strong>安全提示：</strong>生产部署必须接入 Supabase Auth / 企业级鉴权中间件，当前页面仅作为原型与知识管理展示。
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3 text-xs font-medium">
        <Link
          href="/admin"
          className="px-4 py-2 rounded-lg bg-[#1A2540] text-[#38D9D0] border border-[#38D9D0]/30"
        >
          全景概况 (Overview)
        </Link>
        <Link
          href="/admin/archetypes"
          className="px-4 py-2 rounded-lg bg-[#121B2D] text-gray-300 hover:text-white border border-white/5 transition"
        >
          十四主星智库 (Archetypes)
        </Link>
        <Link
          href="/admin/rules"
          className="px-4 py-2 rounded-lg bg-[#121B2D] text-gray-300 hover:text-white border border-white/5 transition"
        >
          推演规则引擎 (Rules)
        </Link>
        <Link
          href="/admin/leads"
          className="px-4 py-2 rounded-lg bg-[#121B2D] text-gray-300 hover:text-white border border-white/5 transition"
        >
          咨询意向线索 (Leads)
        </Link>
      </div>

      {/* Metric Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl glass-panel space-y-1">
          <span className="text-[11px] font-mono text-gray-400">知识库主星收录</span>
          <div className="text-2xl font-bold text-white font-mono">14 / 14</div>
          <span className="text-[10px] text-emerald-400">100% 专家文献校对完成</span>
        </div>

        <div className="p-5 rounded-2xl glass-panel space-y-1">
          <span className="text-[11px] font-mono text-gray-400">情境评测题目库</span>
          <div className="text-2xl font-bold text-[#38D9D0] font-mono">12 题</div>
          <span className="text-[10px] text-gray-400">涵盖10大商业战略维度</span>
        </div>

        <div className="p-5 rounded-2xl glass-panel space-y-1">
          <span className="text-[11px] font-mono text-gray-400">教学验证星盘预设</span>
          <div className="text-2xl font-bold text-[#9375FF] font-mono">3 套经典盘</div>
          <span className="text-[10px] text-gray-400">智囊/领袖/先锋原型</span>
        </div>

        <div className="p-5 rounded-2xl glass-panel space-y-1">
          <span className="text-[11px] font-mono text-gray-400">认证实战导师库</span>
          <div className="text-2xl font-bold text-amber-400 font-mono">4 位</div>
          <span className="text-[10px] text-emerald-400">可接单 1对1 闭门推演</span>
        </div>
      </div>

      {/* Admin Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/admin/archetypes"
          className="p-6 rounded-2xl glass-panel-elevated hover:border-[#9375FF]/50 transition group space-y-3"
        >
          <div className="w-10 h-10 rounded-xl bg-[#9375FF]/20 text-[#9375FF] flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-[#38D9D0] transition">
            十四主星原型智库管理 →
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            查看并维护每颗主星的传统释义、领导风格、职业契合点、沟通盲区与学术源流。
          </p>
        </Link>

        <Link
          href="/admin/rules"
          className="p-6 rounded-2xl glass-panel-elevated hover:border-[#38D9D0]/50 transition group space-y-3"
        >
          <div className="w-10 h-10 rounded-xl bg-[#38D9D0]/20 text-[#38D9D0] flex items-center justify-center">
            <Sliders className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-[#38D9D0] transition">
            推演规则与题目配置 →
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            配置12题情境题目的分值权重、行业推荐打分算法及四化飞星映射规则。
          </p>
        </Link>

        <Link
          href="/admin/leads"
          className="p-6 rounded-2xl glass-panel-elevated hover:border-amber-400/50 transition group space-y-3"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition">
            咨询意向与线索管理 →
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            处理学员提交的 1对1 咨询预约、确认沟通排期与跟踪交付状态。
          </p>
        </Link>
      </div>
    </div>
  );
}
