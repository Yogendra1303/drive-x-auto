'use client';

import React, { useState } from 'react';
import { FAQS_LIST, getWhatsAppUrl } from '@/lib/constants';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS_LIST[0]?.id || null);
  const generalWhatsAppUrl = getWhatsAppUrl();

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-16 md:py-24 border-b border-white/[0.08] bg-[#07080B] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Common Questions & Answers
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Everything you need to know about booking, estimates, and vehicle servicing at Drive X Auto.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {FAQS_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0F1118] border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 min-h-[52px]"
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 text-yellow-400 ${
                      isOpen ? 'rotate-180 bg-yellow-400/10 border-yellow-400/30' : ''
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt to WhatsApp for Unlisted Questions */}
        <div className="mt-10 p-5 rounded-xl bg-[#111420] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-sm font-bold text-white mb-0.5">Still have questions?</h3>
            <p className="text-xs text-slate-400">
              Our team is available on WhatsApp to guide you through your vehicle requirements.
            </p>
          </div>
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg uppercase tracking-wider transition-all shadow-sm shadow-yellow-400/20 whitespace-nowrap min-h-[44px]"
          >
            <span>Ask on WhatsApp</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
