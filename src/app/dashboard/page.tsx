'use client';

import React from 'react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessmentStore';
import { User, Trash2, RefreshCw, FileText, Calendar, Compass, ShieldAlert, ArrowRight } from 'lucide-react';
import { FOURTEEN_STARS, DEMO_PRESETS } from '@/data/archetypes';

export default function UserDashboardPage() {
  const { birthInfo, profile, activePresetId, computedScores, resetAll, loadDemoSeed, language } = useAssessmentStore();
  const isEn = language === 'en';
  const preset = DEMO_PRESETS.find((p) => p.id === activePresetId) || DEMO_PRESETS[0];
  const star = FOURTEEN_STARS[preset.archetypeKey] || FOURTEEN_STARS['tian_ji'];

  const handleDeleteData = () => {
    if (confirm(isEn ? 'Are you sure you want to delete all locally stored data? This cannot be undone.' : '确定要删除本地浏览器保存的所有评测与个人数据吗？此操作不可逆。')) {
      resetAll();
      alert(isEn ? 'All locally stored data deleted successfully.' : '已彻底删除本地存储的所有数据。');
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono text-amber-400">USER CONTROL CENTER</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isEn ? 'Profile & Data Center (Dashboard)' : '个人档案与数据中心 (Dashboard)'}
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {isEn
              ? 'Manage your local assessment session, inspect past deductions, and control data privacy.'
              : '管理您的本地评估会话、查看历史推演与执行隐私删除操作。'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDeleteData}
            className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{isEn ? 'Delete My Data' : '彻底删除我的数据'}</span>
          </button>
        </div>
      </div>

      {/* Main Profile Summary */}
      <div className="rounded-2xl card-obsidian p-6 border border-amber-500/20 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/15">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-[#080D18] flex items-center justify-center font-bold text-white text-base">
                {birthInfo.displayName ? birthInfo.displayName.slice(0, 2) : 'IP'}
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>{birthInfo.displayName || (isEn ? 'Anonymous Learner' : '未命名学员')}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  {star.nameCn}
                </span>
              </h2>
              <p className="text-xs text-gray-400">
                {profile.currentProfession || (isEn ? 'Independent Professional' : '独立从业者')} · {profile.industry || (isEn ? 'Professional Services' : '专业服务')}
              </p>
            </div>
          </div>

          <Link
            href="/report"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl btn-solar-gold font-bold text-xs"
          >
            <span>{isEn ? 'View My IP DNA Report' : '进入我的专属报告'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 block">
              {isEn ? 'Birth Coordinates' : '出生时空坐标'}
            </span>
            <p className="text-white font-medium">{birthInfo.birthDate || (isEn ? 'Not entered' : '未录入')} {birthInfo.birthTime}</p>
            <span className="text-[10px] text-gray-500">{isEn ? 'Confidence:' : '置信度：'}{birthInfo.timeConfidence}</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 block">
              {isEn ? 'Core Archetype' : '核心定位原型'}
            </span>
            <p className="text-amber-300 font-bold">{star.archetypeTitle}</p>
            <span className="text-[10px] text-gray-500">{star.traditionalSymbol}</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080D18]/70 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 block">
              {isEn ? 'Primary Business Challenge' : '首要商业挑战'}
            </span>
            <p className="text-gray-300 line-clamp-2">{profile.careerChallenge || (isEn ? 'Not specified' : '尚未录入')}</p>
          </div>
        </div>
      </div>

      {/* Privacy & Compliance Section */}
      <div className="p-6 rounded-2xl card-obsidian border border-slate-800 space-y-4">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>{isEn ? 'Privacy & PDPA Compliance' : '隐私保护与合规原则 (Privacy & PDPA Compliance)'}</span>
        </h3>
        <p className="text-xs text-gray-300 leading-relaxed">
          {isEn ? (
            <>
              - <strong>Zero Third-Party Trackers:</strong> No ads or external audience behavioral tracking scripts are loaded.<br />
              - <strong>Client-Side Sandbox:</strong> Assessment data is processed locally via browser LocalStorage; no plaintext PII exposed.<br />
              - <strong>Right to be Forgotten:</strong> Click "Delete My Data" above anytime to clear your local session cache.
            </>
          ) : (
            <>
              - <strong>无第三方追踪：</strong>本应用不加载任何未经同意的广告或外部受众行为追踪代码。<br />
              - <strong>客户端沙盒：</strong>测试数据在您的浏览器通过 LocalStorage 进行存储与运算，未在URL中暴露明文个人隐私。<br />
              - <strong>自主遗忘权：</strong>您可以随时点击上方的「彻底删除我的数据」清空本地缓存，恢复出厂状态。
            </>
          )}
        </p>
      </div>

      {/* Seed Demo Action */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-400">
        <span>{isEn ? 'Need to reload educational preset demo data?' : '需要重新加载包含完整数据的教学示例？'}</span>
        <button
          onClick={() => {
            loadDemoSeed();
            alert(isEn ? 'Educational demo data reloaded!' : '已重新重置并加载教学演示数据！');
          }}
          className="text-xs text-amber-300 hover:underline flex items-center gap-1 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{isEn ? 'Reload Demo Dataset' : '重新加载教学范例数据'}</span>
        </button>
      </div>
    </div>
  );
}
