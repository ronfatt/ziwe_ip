'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, Mail, Phone, Calendar, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { ConsultationRequest } from '@/types';

const INITIAL_DEMO_LEADS: ConsultationRequest[] = [
  {
    id: 'req_101',
    createdAt: '2026-10-09 14:20',
    clientName: '林奕凡 Evan',
    email: 'evan.lin@example.com',
    phone: '+86 138-1234-5678',
    preferredDate: '2026-10-15',
    primaryGoal: '希望从高管转型独立战略顾问，理顺高客单闭门咨询交付流程与定价机制。',
    reportTier: 'expert',
    status: 'pending'
  },
  {
    id: 'req_102',
    createdAt: '2026-10-08 19:10',
    clientName: 'Sarah Wong',
    email: 'sarah.wong@example.my',
    phone: '+60 12-888-9999',
    preferredDate: '2026-10-18',
    primaryGoal: '想要把多年身心疗愈经验封装为小班私享会和订阅社群。',
    reportTier: 'extended',
    status: 'confirmed'
  }
];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<ConsultationRequest[]>(INITIAL_DEMO_LEADS);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ziwei_consultation_leads');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setLeads([...parsed, ...INITIAL_DEMO_LEADS]);
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const toggleStatus = (id: string) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === id) {
          const nextStatus = lead.status === 'pending' ? 'confirmed' : 'completed';
          return { ...lead, status: nextStatus as any };
        }
        return lead;
      })
    );
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin" className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> 返回后台首页
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            咨询预约与潜在意向管理 (Leads Management)
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            查看前台提交的导师咨询预约需求，跟踪排期与转化进展。
          </p>
        </div>
        <span className="text-xs font-mono text-gray-400">
          共 {leads.length} 条有效申请记录
        </span>
      </div>

      {/* Leads Table */}
      <div className="rounded-2xl glass-panel-elevated overflow-hidden border border-white/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#080D18]/90 text-gray-400 font-mono uppercase text-[11px] border-b border-white/10">
              <tr>
                <th className="p-4">学员姓名</th>
                <th className="p-4">服务级别</th>
                <th className="p-4">联系方式</th>
                <th className="p-4">期望日期</th>
                <th className="p-4">核心咨询诉求</th>
                <th className="p-4">当前状态</th>
                <th className="p-4">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/5 transition">
                  <td className="p-4 font-semibold text-white whitespace-nowrap">
                    {lead.clientName}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                        lead.reportTier === 'expert'
                          ? 'bg-[#9375FF]/20 text-[#9375FF] border border-[#9375FF]/30'
                          : lead.reportTier === 'extended'
                          ? 'bg-[#38D9D0]/20 text-[#38D9D0] border border-[#38D9D0]/30'
                          : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      {lead.reportTier}
                    </span>
                  </td>
                  <td className="p-4 space-y-0.5 whitespace-nowrap">
                    <div className="text-gray-200">{lead.phone}</div>
                    <div className="text-gray-500 text-[11px]">{lead.email}</div>
                  </td>
                  <td className="p-4 text-gray-400 whitespace-nowrap">
                    {lead.preferredDate || '未指定'}
                  </td>
                  <td className="p-4 max-w-xs text-gray-300 line-clamp-2">
                    {lead.primaryGoal}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono ${
                        lead.status === 'confirmed'
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : lead.status === 'completed'
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-amber-400 bg-amber-500/10'
                      }`}
                    >
                      {lead.status === 'confirmed' ? '已确认排期' : lead.status === 'completed' ? '已完成交付' : '待联系确认'}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleStatus(lead.id)}
                      className="text-xs text-[#38D9D0] hover:underline"
                    >
                      切换状态
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
