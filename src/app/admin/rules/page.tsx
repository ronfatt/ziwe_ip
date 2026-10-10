'use client';

import React from 'react';
import Link from 'next/link';
import { Sliders, CheckCircle2, ArrowLeft, BrainCircuit } from 'lucide-react';
import { QUIZ_QUESTIONS } from '@/data/questions';

export default function AdminRulesPage() {
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
            推演规则与情境题库 (Interpretation Rules & Questions)
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            当前系统录入 12 道情境场景题目，覆盖 10 大战略维度及权重打分逻辑。
          </p>
        </div>
      </div>

      {/* Rules Logic Summary */}
      <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-[#9375FF] space-y-3">
        <h2 className="text-sm font-semibold text-white flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-[#9375FF]" />
          <span>双层交叉合成算法规则 (Deterministic Cross-Synthesis Engine)</span>
        </h2>
        <div className="text-xs text-gray-300 leading-relaxed space-y-1">
          <p>1. <strong>星盘文化层 (Layer A)：</strong>由命宫主星决定底层心智模型与角色原型（如天机主智囊、紫微主领袖、七杀主攻坚）。</p>
          <p>2. <strong>商业履历层 (Layer B)：</strong>结合用户自述实战年限、核心硬技能与行业沉淀，锚定产业赛道推荐的可行性。</p>
          <p>3. <strong>情境维度层：</strong>12题问卷得出 10 个维度的相对打分（50-98区间规范化），为雷达图提供可解释的数据源，拒绝伪随机。</p>
        </div>
      </div>

      {/* Question Bank Table */}
      <div className="rounded-2xl glass-panel-elevated p-6 border border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white">当前在线情境题库清单 (Active Question Bank)</h3>
        <div className="space-y-4">
          {QUIZ_QUESTIONS.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[#38D9D0] font-bold">第 {idx + 1} 题</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono text-[10px]">
                    维度: {q.dimension}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">4个选项 · 权重1-5</span>
              </div>
              <p className="text-gray-200 font-medium">{q.scenario['zh-CN']}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-400">
                {q.options.map((opt) => (
                  <div key={opt.id} className="p-2 rounded-lg bg-white/5">
                    <span className="text-[#9375FF] font-mono">[{opt.styleTag}]</span> {opt.text['zh-CN']}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
