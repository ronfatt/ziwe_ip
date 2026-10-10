'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FOURTEEN_STARS } from '@/data/archetypes';
import { Database, CheckCircle2, Search, Edit3, ArrowLeft } from 'lucide-react';
import { ZiWeiStar } from '@/types';

export default function AdminArchetypesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStar, setSelectedStar] = useState<ZiWeiStar>(FOURTEEN_STARS['zi_wei']);

  const filteredStars = Object.values(FOURTEEN_STARS).filter(
    (s) =>
      s.nameCn.includes(searchTerm) ||
      s.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.archetypeTitle.includes(searchTerm)
  );

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
            十四主星原型智库管理 (Archetypes Catalog)
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            维护十四主星的学术定位、领导力倾向、个人品牌建议与文献考证出处。
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="搜索星宿名称或标签..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#080D18] border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#9375FF]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left List */}
        <div className="space-y-2 lg:max-h-[750px] overflow-y-auto pr-1">
          {filteredStars.map((star) => (
            <div
              key={star.id}
              onClick={() => setSelectedStar(star)}
              className={`p-3.5 rounded-xl cursor-pointer border transition text-left ${
                selectedStar.id === star.id
                  ? 'border-[#38D9D0] bg-[#1A2540] shadow-md shadow-[#38D9D0]/10'
                  : 'border-white/5 bg-[#121B2D]/70 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white">{star.nameCn}</span>
                <span className="text-[10px] font-mono text-[#9375FF]">{star.pinyin}</span>
              </div>
              <div className="text-xs text-[#38D9D0] font-medium truncate mb-1">
                {star.archetypeTitle}
              </div>
              <div className="text-[11px] text-gray-400 font-mono truncate">
                {star.traditionalSymbol}
              </div>
            </div>
          ))}
        </div>

        {/* Right Detail & Edit View */}
        <div className="lg:col-span-2 rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">{selectedStar.nameCn}</h2>
                <span className="text-xs font-mono text-gray-400">({selectedStar.nameEn})</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{selectedStar.traditionalSymbol}</p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 专家核定通过
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-gray-400 font-mono mb-1">核心角色定位 (Archetype Title)</label>
              <input
                type="text"
                readOnly
                value={selectedStar.archetypeTitle}
                className="w-full rounded-xl bg-[#080D18] border border-white/10 p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-400 font-mono mb-1">领导风格与决策习惯</label>
              <textarea
                rows={2}
                readOnly
                value={selectedStar.leadershipStyle}
                className="w-full rounded-xl bg-[#080D18] border border-white/10 p-2.5 text-gray-200"
              />
            </div>

            <div>
              <label className="block text-gray-400 font-mono mb-1">工作与团队偏好 (Work Preferences)</label>
              <textarea
                rows={2}
                readOnly
                value={selectedStar.workPreferences}
                className="w-full rounded-xl bg-[#080D18] border border-white/10 p-2.5 text-gray-200"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 font-mono mb-1">天然优势底牌 (Strengths)</label>
                <div className="p-2.5 rounded-xl bg-[#080D18] border border-white/10 space-y-1">
                  {selectedStar.strengths.map((s, idx) => (
                    <div key={idx} className="text-gray-300">✓ {s}</div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 font-mono mb-1">潜在盲区与风险 (Blindspots)</label>
                <div className="p-2.5 rounded-xl bg-[#080D18] border border-white/10 space-y-1">
                  {selectedStar.blindSpots.map((b, idx) => (
                    <div key={idx} className="text-rose-300">! {b}</div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-400 font-mono mb-1">文献出处与考据源流 (Academic Source)</label>
              <input
                type="text"
                readOnly
                value={selectedStar.interpretationSource}
                className="w-full rounded-xl bg-[#080D18] border border-white/10 p-2.5 text-gray-400 font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
