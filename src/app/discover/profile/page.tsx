'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { Briefcase, Layers, Target, Shield, ArrowRight, ArrowLeft, Plus, X } from 'lucide-react';

export default function ProfessionalProfilePage() {
  const router = useRouter();
  const { profile, updateProfile, setStep } = useAssessmentStore();

  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');

  const addSkill = () => {
    if (skillInput.trim() && profile.topSkills.length < 5) {
      updateProfile({ topSkills: [...profile.topSkills, skillInput.trim()] });
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    updateProfile({ topSkills: profile.topSkills.filter((_, i) => i !== index) });
  };

  const addInterest = () => {
    if (interestInput.trim() && profile.topInterests.length < 5) {
      updateProfile({ topInterests: [...profile.topInterests, interestInput.trim()] });
      setInterestInput('');
    }
  };

  const removeInterest = (index: number) => {
    updateProfile({ topInterests: profile.topInterests.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    router.push('/discover/quiz');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
          <span className="text-[#38D9D0]">STEP 02 / 04</span>
          <span>现代商业与真实职业履历</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#9375FF] to-[#38D9D0] w-2/4 rounded-full" />
        </div>
      </div>

      <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10 space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
            第二步：梳理真实职业背景
          </h1>
          <p className="text-xs text-gray-400 leading-relaxed">
            任何个人品牌的护城河都离不开扎实的专业底色。所填信息将作为 Layer B（现实商业层）与星盘原型交叉检验。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Profession & Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                当前职业 / 身份角色
              </label>
              <input
                type="text"
                required
                value={profile.currentProfession}
                onChange={(e) => updateProfile({ currentProfession: e.target.value })}
                placeholder="例如：高级产品架构师 / 资深咨询师"
                className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                主深耕行业赛道
              </label>
              <input
                type="text"
                required
                value={profile.industry}
                onChange={(e) => updateProfile({ industry: e.target.value })}
                placeholder="例如：产业互联网 / 大健康 / 文化传媒"
                className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Experience & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                从业实战年限 (Years of Experience)
              </label>
              <input
                type="number"
                min="0"
                max="50"
                value={profile.yearsOfExperience}
                onChange={(e) => updateProfile({ yearsOfExperience: Number(e.target.value) })}
                className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                教育背景 / 专业认证资质
              </label>
              <input
                type="text"
                value={profile.education}
                onChange={(e) => updateProfile({ education: e.target.value })}
                placeholder="例如：计算机科学与管理双学士 / PMP / CFA"
                className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Top Skills Tags */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              三大最核心技能 (Top 3 Proven Skills)
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                placeholder="输入技能按回车或点击添加，如：商业战略推演"
                className="flex-1 rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2 text-xs text-white focus:border-[#9375FF] focus:outline-none"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-3 py-2 rounded-xl bg-white/10 text-white text-xs hover:bg-white/20 transition flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> 添加
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.topSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-[#9375FF]/15 text-[#9375FF] border border-[#9375FF]/30"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Top Interests Tags */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              三大长期兴趣与热情领域 (Top Interests)
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={interestInput}
                onChange={(e) => setInterestInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addInterest();
                  }
                }}
                placeholder="输入感兴趣领域按回车，如：东方哲学与心智"
                className="flex-1 rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2 text-xs text-white focus:border-[#38D9D0] focus:outline-none"
              />
              <button
                type="button"
                onClick={addInterest}
                className="px-3 py-2 rounded-xl bg-white/10 text-white text-xs hover:bg-white/20 transition flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> 添加
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.topInterests.map((interest, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-[#38D9D0]/15 text-[#38D9D0] border border-[#38D9D0]/30"
                >
                  {interest}
                  <button
                    type="button"
                    onClick={() => removeInterest(index)}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Career Challenge & Goal */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              当前最核心的职业瓶颈或挑战 (Current Challenge)
            </label>
            <input
              type="text"
              value={profile.careerChallenge}
              onChange={(e) => updateProfile({ careerChallenge: e.target.value })}
              placeholder="例如：感到天花板明显，渴望从打工人转型为独立咨询IP，缺乏明确产品线"
              className="w-full rounded-xl bg-[#080D18] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-[#9375FF] focus:outline-none transition"
            />
          </div>

          {/* Public Brand Willingness */}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-2">
              作为个人IP抛头露面的意愿度 (Public Brand Stance)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'high', label: '积极拥抱出镜', desc: '直播/短视频/公众演讲' },
                { id: 'moderate', label: '以深度内容为主', desc: '图文/专栏/播客' },
                { id: 'behind_scenes', label: '偏好幕后军师', desc: '闭门顾问/SOP输出' },
                { id: 'private', label: '低调私域交流', desc: '小圈子1对1咨询' }
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => updateProfile({ publicBrandWillingness: opt.id as any })}
                  className={`p-2.5 rounded-xl text-left border transition ${
                    profile.publicBrandWillingness === opt.id
                      ? 'border-[#38D9D0] bg-[#1A2540] text-white shadow-sm'
                      : 'border-white/5 bg-[#080D18] text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-medium">{opt.label}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 flex items-center justify-between">
            <Link
              href="/discover/birth"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>上一步：时空参数</span>
            </Link>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs hover:opacity-95 transition"
            >
              <span>下一步：12道情境评测</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
