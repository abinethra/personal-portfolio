import React, { useState } from 'react';
import { X } from 'lucide-react';
import { LEARNING_LOG_DATA, LearningLogEntry } from '../data/portfolioData';
import {
  AboutDoodleArrow,
  DoodleStar,
  DottedCurvedPath,
  PinkSquiggle,
} from './Doodles';
import { RevealOnScroll } from './RevealOnScroll';

/**
 * ============================================================================
 * EDITABLE LEARNING LOG (BLOG / JOURNEY) DATA ARRAY
 * (Synced with src/data/portfolioData.ts)
 * ============================================================================
 */
export const LEARNING_LOG_POSTS: LearningLogEntry[] = LEARNING_LOG_DATA;

export const LearningLogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<LearningLogEntry | null>(null);

  return (
    <section
      id="learning-log"
      aria-label="Learning Log and Journey"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex items-center justify-center overflow-hidden px-5 py-14 sm:px-10 sm:py-18 md:px-14 md:py-22"
    >
      {/* Subtle Slide Frame Border */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      <DottedCurvedPath className="pointer-events-none absolute bottom-[14%] left-[10%] w-[500px] opacity-35 rotate-6 hidden lg:block" />

      <RevealOnScroll className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col gap-10">
        {/* =========================================================
            SECTION HEADER: Huge Pink Bubble Title "learning log"
           ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-hand text-2xl sm:text-3xl text-[#3A3A3A] -rotate-2">
                torn from my notebook ↓
              </span>
              <AboutDoodleArrow className="w-10 h-6" />
            </div>

            <h2
              className="font-bubble text-[#F28DB9] bubble-title-shadow lowercase select-none leading-[0.86] tracking-[-0.02em] text-[12vw] sm:text-[10vw] md:text-[84px] lg:text-[100px]"
              style={{
                WebkitTextStroke: '2px rgba(214, 102, 152, 0.28)',
              }}
            >
              learning log
            </h2>
            <PinkSquiggle className="w-36 sm:w-48 h-auto mt-1" />
          </div>

          <div className="max-w-md">
            <p className="font-condensed text-lg sm:text-xl text-[#8A8580] tracking-[-0.04em] lowercase leading-snug">
              field notes on ai engineering, breaking things &amp; figuring it
              out in public.
            </p>
            <p className="font-body text-xs text-[#6E6A64] mt-1">
              Editable via{' '}
              <code className="font-mono bg-[#FAF7F0] px-1.5 py-0.5 rounded border border-[#3A3A3A]/15">
                src/data/portfolioData.ts
              </code>
              .
            </p>
          </div>
        </div>

        {/* =========================================================
            GRID OF 4 TORN NOTEBOOK PAGE PREVIEWS
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2">
          {LEARNING_LOG_POSTS.map((post, idx) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActivePost(post)}
              className={`group relative cursor-pointer transition-all duration-200 ease-out ${post.rotationClass} hover:rotate-0 hover:-translate-y-2 hover:scale-[1.01]`}
            >
              {/* Masking tape strip holding the torn notebook page */}
              <div
                className={`scrapbook-tape absolute -top-3 ${
                  idx % 2 === 0 ? 'left-10 -rotate-3' : 'right-10 rotate-3'
                } w-24 h-5 z-20 pointer-events-none`}
              />

              {/* Torn Notebook Page Container */}
              <div
                className="relative bg-[#FCF9F0] rounded-t-md rounded-b-xl border border-[#262320]/20 shadow-[0_16px_34px_rgba(38,35,32,0.11)] group-hover:shadow-[0_22px_44px_rgba(38,35,32,0.18)] overflow-hidden"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(transparent, transparent 29px, rgba(138, 133, 128, 0.16) 30px)',
                }}
              >
                {/* Spiral Notebook Top Perforation Holes */}
                <div
                  className="flex items-center justify-between px-4 py-2 bg-[#F5EFE0] border-b border-dashed border-[#262320]/20"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-3">
                    {Array.from({ length: 9 }).map((_, holeIdx) => (
                      <span
                        key={holeIdx}
                        className="w-2.5 h-2.5 rounded-full bg-[#EDE6D8] border border-[#262320]/30 inline-block"
                      />
                    ))}
                  </div>
                  <span className="font-hand text-base text-[#8A8580]">
                    {post.handwrittenMarginNote}
                  </span>
                </div>

                {/* Vertical Pink Notebook Margin Line */}
                <div
                  className="pointer-events-none absolute top-9 bottom-0 left-9 sm:left-11 w-[1.5px] bg-[#F28DB9]/65"
                  aria-hidden="true"
                />

                {/* Page Content */}
                <div className="pl-13 sm:pl-15 pr-5 sm:pr-6 py-5 flex flex-col justify-between min-h-[210px]">
                  <div>
                    {/* Date & Metadata (clean unboxed text with separators) */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#8A8580] font-body mb-2">
                      <span className="font-mono text-[11px] text-[#262320]">
                        {post.date}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span
                        className="font-bold text-[#F28DB9] lowercase"
                        style={{ textShadow: '0 1px 0 rgba(38,35,32,0.2)' }}
                      >
                        {post.topicTag}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Notebook Entry Title */}
                    <h3 className="font-condensed text-lg sm:text-xl text-[#262320] leading-snug tracking-[-0.02em] group-hover:text-[#d45b90] transition-colors">
                      {post.title}
                    </h3>

                    {/* 2-Line Summary */}
                    <p className="font-body text-xs sm:text-sm text-[#4A4640] leading-[1.65] mt-2 line-clamp-2">
                      {post.summary}
                    </p>
                  </div>

                  {/* "read more" Handwritten Link */}
                  <div className="mt-4 pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-hand text-2xl sm:text-[26px] font-bold text-[#262320] group-hover:text-[#d45b90] transition-colors">
                      <span className="underline decoration-[#F28DB9] decoration-2 underline-offset-4">
                        read more
                      </span>
                      <span aria-hidden="true">→</span>
                    </span>

                    <DoodleStar
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      color="#F28DB9"
                    />
                  </div>
                </div>

                {/* Torn bottom edge visual accent */}
                <div
                  className="h-2 w-full bg-[radial-gradient(circle_at_6px_8px,#EDE6D8_5px,transparent_6px)] bg-[length:12px_10px]"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </RevealOnScroll>

      {/* =========================================================
          TORN NOTEBOOK FULL ENTRY READER MODAL
         ========================================================= */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262320]/45 backdrop-blur-[2px]"
          onClick={() => setActivePost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="notebook-modal-title"
        >
          <div
            className="relative w-full max-w-xl bg-[#FCF9F0] border-2 border-[#262320] rounded-2xl shadow-[8px_10px_0px_#262320] overflow-hidden -rotate-[0.5deg]"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 29px, rgba(138, 133, 128, 0.16) 30px)',
            }}
          >
            {/* Top spiral holes */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#F5EFE0] border-b border-dashed border-[#262320]/25">
              <div className="flex items-center gap-3" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full bg-[#EDE6D8] border border-[#262320]/35 inline-block"
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="w-8 h-8 rounded-full bg-[#EDE6D8] border border-[#262320]/30 flex items-center justify-center text-[#262320] hover:bg-[#F28DB9] transition-colors cursor-pointer"
                aria-label="Close notebook entry"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Vertical margin line */}
            <div
              className="pointer-events-none absolute top-14 bottom-0 left-10 sm:left-12 w-[1.5px] bg-[#F28DB9]/70"
              aria-hidden="true"
            />

            <div className="pl-14 sm:pl-16 pr-6 sm:pr-8 py-6 max-h-[78vh] overflow-y-auto">
              <div className="flex items-center gap-2 text-xs text-[#8A8580] font-body mb-2">
                <span className="font-mono text-[#262320]">
                  {activePost.date}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-[#F28DB9] lowercase">
                  {activePost.topicTag}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activePost.readTime}</span>
              </div>

              <h3
                id="notebook-modal-title"
                className="font-condensed text-2xl sm:text-3xl text-[#262320] leading-tight tracking-[-0.03em] mb-4"
              >
                {activePost.title}
              </h3>

              <div className="space-y-4 font-body text-sm sm:text-[15px] text-[#322E2A] leading-[1.75]">
                {activePost.fullContent.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#262320]/15 flex items-center justify-between">
                <span className="font-hand text-2xl text-[#262320] -rotate-2">
                  — Abi Nethra&apos;s builder log
                </span>
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="px-4 py-1.5 rounded-full bg-[#F28DB9] text-[#262320] border border-[#262320] font-body font-bold text-xs shadow-[2px_2px_0px_#262320] cursor-pointer"
                >
                  close page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
