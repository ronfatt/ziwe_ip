'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { ShieldCheck, Calendar, Clock, MapPin, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { Gender, TimeConfidence } from '@/types';

export default function BirthInfoPage() {
  const router = useRouter();
  const { birthInfo, updateBirthInfo, setStep } = useAssessmentStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthInfo.privacyConsent) {
      alert('请先勾选隐私与数据处理知情同意书');
      return;
    }
    setStep(2);
    router.push('/discover/profile');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
          <span className="text-[#38D9D0]">STEP 01 / 04</span>
          <span>基础时空参数录入</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#9375FF] to-[#38D9D0] w-1/4 rounded-full" />
        </div>
      </div>

      <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10 space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
            第一步：输入基础时空参数
          </h1>
          <p className="text-xs text-gray-400 leading-relaxed">
            用于确定传统紫微斗数文化原型的天干地支坐标与排盘参考。本平台采用最小化收集原则，数据仅存储于本地。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Display Name */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#38D9D0]" />
              <span>称呼 / 个人化代号 (Display Name)</span>
            </label>
            <input
              type="text"
              required
              value={birthInfo.displayName}
              onChange={(e) => updateBirthInfo({ displayName: e.target.value })}
              placeholder="例如：林奕凡 或 Alex"
              className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
            />
          </div>

          {/* Birth Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#38D9D0]" />
                <span>阳历出生日期 (YYYY-MM-DD)</span>
              </label>
              <input
                type="date"
                required
                value={birthInfo.birthDate}
                onChange={(e) => updateBirthInfo({ birthDate: e.target.value })}
                className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#38D9D0]" />
                <span>出生具体时间 (HH:mm)</span>
              </label>
              <input
                type="time"
                value={birthInfo.birthTime}
                onChange={(e) => updateBirthInfo({ birthTime: e.target.value })}
                className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Time Confidence */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-2">
              出生时间准确度 (Time Confidence)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'exact', label: '准确 (出生证/钟表确切记录)' },
                { id: 'approximate', label: '大概 (如大约上午或黄昏)' },
                { id: 'unknown', label: '不清楚 (仅按年/月/日推演)' }
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => updateBirthInfo({ timeConfidence: opt.id as TimeConfidence })}
                  className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition ${
                    birthInfo.timeConfidence === opt.id
                      ? 'border-[#38D9D0] bg-[#1A2540] text-white shadow-sm'
                      : 'border-white/5 bg-[#080D18] text-gray-400 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#38D9D0]" />
              <span>出生城市 / 常住地区 (Birth Location)</span>
            </label>
            <input
              type="text"
              value={birthInfo.birthLocation}
              onChange={(e) => updateBirthInfo({ birthLocation: e.target.value })}
              placeholder="例如：中国上海 或 马来西亚吉隆坡"
              className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
            />
          </div>

          {/* Gender selection with academic clarification */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              性别（仅用于传统派系阴阳顺逆大限运势排布）
            </label>
            <div className="flex gap-4">
              {[
                { id: 'male', label: '乾造 (男)' },
                { id: 'female', label: '坤造 (女)' },
                { id: 'unspecified', label: '不提供 (按通用中性模型)' }
              ].map((g) => (
                <label key={g.id} className="flex items-center gap-2 cursor-pointer text-xs text-gray-300">
                  <input
                    type="radio"
                    name="gender"
                    checked={birthInfo.gender === g.id}
                    onChange={() => updateBirthInfo({ gender: g.id as Gender })}
                    className="accent-[#9375FF]"
                  />
                  <span>{g.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-3 border-t border-white/10">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={birthInfo.privacyConsent}
                onChange={(e) => updateBirthInfo({ privacyConsent: e.target.checked })}
                className="mt-0.5 rounded accent-[#38D9D0]"
              />
              <span className="text-[11px] text-gray-400 leading-relaxed">
                我知悉并同意：所填写的出生与个人信息仅在本地浏览器端处理，用于生成反思型职业模型。系统不做宿命论预言，符合个人数据保护合规标准。
              </span>
            </label>
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 flex items-center justify-between">
            <Link
              href="/discover"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>返回模式说明</span>
            </Link>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs hover:opacity-95 transition"
            >
              <span>下一步：职业背景</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
