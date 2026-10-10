'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessmentStore';
import { QUIZ_QUESTIONS } from '@/data/questions';
import { BrainCircuit, Check, ArrowRight, ArrowLeft, HelpCircle } from 'lucide-react';

export default function InteractiveQuizPage() {
  const router = useRouter();
  const { quizAnswers, setQuizAnswer, setStep, language } = useAssessmentStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const question = QUIZ_QUESTIONS[currentQuestionIndex];
  const langKey = language || 'zh-CN';

  const answeredCount = Object.keys(quizAnswers).length;
  const progressPercent = Math.round((answeredCount / QUIZ_QUESTIONS.length) * 100);

  const handleSelectOption = (optionId: string) => {
    setQuizAnswer(question.id, optionId);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleFinish = () => {
    setStep(4);
    router.push('/discover/analyze');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
          <span className="text-[#38D9D0]">STEP 03 / 04 · 情境探索</span>
          <span>
            题号 {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length} ({progressPercent}% 完成)
          </span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#9375FF] to-[#38D9D0] transition-all duration-300 rounded-full"
            style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#9375FF]/20 text-[#9375FF] border border-[#9375FF]/30 uppercase">
            维度：{question.dimension.replace('_', ' ')}
          </span>
          <span className="text-xs text-gray-400 font-mono">
            单选 · 无绝对好坏
          </span>
        </div>

        <h2 className="text-base sm:text-lg font-semibold text-white leading-relaxed">
          {question.scenario[langKey] || question.scenario['zh-CN']}
        </h2>

        {/* Options */}
        <div className="space-y-3 pt-2">
          {question.options.map((opt) => {
            const isSelected = quizAnswers[question.id] === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`p-4 rounded-xl cursor-pointer border transition-all text-left flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'border-[#38D9D0] bg-[#1A2540] shadow-md shadow-[#38D9D0]/20'
                    : 'border-white/5 bg-[#121B2D]/70 hover:border-white/20 hover:bg-[#121B2D]'
                }`}
              >
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                    {opt.text[langKey] || opt.text['zh-CN']}
                  </p>
                  <span className="inline-block text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                    风格特征：{opt.styleTag}
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition ${
                    isSelected
                      ? 'border-[#38D9D0] bg-[#38D9D0] text-black'
                      : 'border-white/20'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Question Selector Dots for quick jump & review */}
        <div className="pt-4 border-t border-white/10">
          <div className="text-[11px] font-mono text-gray-400 mb-2">题目直达与修改：</div>
          <div className="flex flex-wrap gap-1.5">
            {QUIZ_QUESTIONS.map((q, idx) => {
              const isCurrent = idx === currentQuestionIndex;
              const isAnswered = !!quizAnswers[q.id];
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono transition ${
                    isCurrent
                      ? 'bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-bold'
                      : isAnswered
                      ? 'bg-[#1A2540] text-[#38D9D0] border border-[#38D9D0]/30'
                      : 'bg-white/5 text-gray-500 hover:text-white'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="pt-4 flex items-center justify-between">
          <button
            type="button"
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>上一题</span>
          </button>

          {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition"
            >
              <span>跳到下一题</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9375FF] to-[#38D9D0] text-black font-semibold text-xs hover:opacity-95 transition"
            >
              <span>完成答题，启动双层智能合成</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
