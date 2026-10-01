import React, { useRef, useState } from 'react';
import { Camera, RotateCcw, Sparkles } from 'lucide-react';
import { DoodleStar, PassportSquiggleArrow, PinkSquiggle } from './Doodles';

const DEFAULT_DAY1_IMG =
  '/src/assets/images/day1_coder_passport_1790861326522.jpg';
const DEFAULT_NOW_IMG =
  '/src/assets/images/now_builder_passport_1790861343248.jpg';

export const OriginStorySection: React.FC = () => {
  const [day1Src, setDay1Src] = useState<string>(DEFAULT_DAY1_IMG);
  const [nowSrc, setNowSrc] = useState<string>(DEFAULT_NOW_IMG);
  const [day1Error, setDay1Error] = useState<boolean>(false);
  const [nowError, setNowError] = useState<boolean>(false);
  const [isCustomDay1, setIsCustomDay1] = useState<boolean>(false);
  const [isCustomNow, setIsCustomNow] = useState<boolean>(false);

  const day1InputRef = useRef<HTMLInputElement>(null);
  const nowInputRef = useRef<HTMLInputElement>(null);

  const handleDay1Upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setDay1Src(URL.createObjectURL(file));
    setDay1Error(false);
    setIsCustomDay1(true);
  };

  const handleNowUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setNowSrc(URL.createObjectURL(file));
    setNowError(false);
    setIsCustomNow(true);
  };

  return (
    <section
      id="story"
      aria-label="Origin Story"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex flex-col justify-between overflow-hidden px-5 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16"
    >
      {/* Subtle Slide Frame Border */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto my-auto flex flex-col justify-between gap-10 md:gap-6 min-h-[82vh]">
        {/* =========================================================
            TOP-LEFT: Intro Paragraph + Secondary Condensed Heading
           ========================================================= */}
        <div className="max-w-xl pt-2 pl-1 sm:pl-4">
          <span className="inline-block font-hand text-2xl sm:text-3xl text-[#8A8580] -rotate-2 mb-1">
            how we got here...
          </span>

          <h2 className="font-condensed text-2xl sm:text-3xl md:text-[34px] text-[#8A8580] leading-[1.06] tracking-[-0.04em] mb-4">
            tiny, curious, low-key destined for late-night debugging.
          </h2>

          <p className="font-body text-sm sm:text-base md:text-[16.5px] text-[#262320] leading-[1.7] lowercase">
            i&apos;ve always been wired to poke around and figure out how things
            work under the hood. as a 2nd-year b.tech ai &amp; data science
            student, that curiosity started with building ai apps—training
            models, wiring up llm agents, and turning wild ideas into working
            code just to see what i could make a machine do next.
          </p>
        </div>

        {/* =========================================================
            CENTER: Two Small Passport-Style Photo Frames
            ("day 1 coder" -> dotted squiggle path with arrow -> "now")
           ========================================================= */}
        <div className="relative my-2 sm:my-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 md:gap-4 py-2">
          {/* Hidden File Inputs for 1-click Replacement */}
          <input
            ref={day1InputRef}
            type="file"
            accept="image/*"
            onChange={handleDay1Upload}
            className="hidden"
            aria-label="Replace day 1 coder passport photo"
          />
          <input
            ref={nowInputRef}
            type="file"
            accept="image/*"
            onChange={handleNowUpload}
            className="hidden"
            aria-label="Replace now passport photo"
          />

          {/* PASSPORT FRAME 1: "day 1 coder" */}
          <div className="relative flex flex-col items-center -rotate-[5deg] hover:-rotate-[2deg] transition-transform duration-200 sm:-mt-10">
            {/* Masking tape */}
            <div className="scrapbook-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-5 rotate-3 z-20 pointer-events-none" />

            <DoodleStar
              className="pointer-events-none absolute -left-7 -top-4 w-5 h-5 -rotate-12"
              color="#F28DB9"
            />

            <div
              onClick={() => day1InputRef.current?.click()}
              title="Click to replace 'day 1 coder' photo"
              className="group relative bg-[#FAF7F0] p-2 sm:p-2.5 pb-3 rounded-[10px] border border-[#262320]/20 shadow-[0_12px_26px_rgba(38,35,32,0.13)] w-[148px] sm:w-[168px] md:w-[184px] cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] rounded-[6px] overflow-hidden bg-[#E5DEC9]">
                {!day1Error ? (
                  <img
                    src={day1Src}
                    alt="Day 1 coder passport snapshot"
                    referrerPolicy="no-referrer"
                    onError={() => setDay1Error(true)}
                    className="w-full h-full object-cover contrast-[1.04]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center">
                    <Sparkles className="w-6 h-6 text-[#8A8580] mb-1" />
                    <span className="font-hand text-base text-[#6E6A64]">
                      day 1 coder photo
                    </span>
                  </div>
                )}

                {/* Hover replace indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute top-2 right-2 bg-[#262320]/85 text-[#EDE6D8] px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                  <Camera className="w-2.5 h-2.5 text-[#F28DB9]" />
                  <span>swap</span>
                  {isCustomDay1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDay1Src(DEFAULT_DAY1_IMG);
                        setIsCustomDay1(false);
                      }}
                      className="ml-0.5 hover:text-[#F28DB9]"
                      title="Reset photo"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Tiny pink text label inside/under passport frame */}
              <div className="mt-2 flex items-center justify-between px-0.5">
                <span
                  className="font-body text-[11px] sm:text-xs font-bold tracking-wide text-[#F28DB9] lowercase"
                  style={{ textShadow: '0 1px 0 rgba(38,35,32,0.22)' }}
                >
                  day 1 coder
                </span>
                <span className="font-mono text-[9px] text-[#8A8580]">#01</span>
              </div>
            </div>
          </div>

          {/* DOTTED HAND-DRAWN SQUIGGLE PATH WITH ARROW */}
          <div className="relative flex flex-col items-center justify-center mx-1 sm:mx-2 md:mx-4 my-1 sm:my-0">
            <span className="font-hand text-lg sm:text-xl text-[#8A8580] -rotate-6 -mb-2 sm:-mb-3">
              fast forward
            </span>
            <PassportSquiggleArrow className="w-36 sm:w-48 md:w-64 h-auto rotate-90 sm:rotate-0 my-4 sm:my-0" />
          </div>

          {/* PASSPORT FRAME 2: "now" */}
          <div className="relative flex flex-col items-center rotate-[4.5deg] hover:rotate-[1.5deg] transition-transform duration-200 sm:mt-12">
            {/* Masking tape */}
            <div className="scrapbook-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-5 -rotate-3 z-20 pointer-events-none" />

            <DoodleStar
              className="pointer-events-none absolute -right-7 -bottom-3 w-5 h-5 rotate-12"
              color="#3A3633"
            />

            <div
              onClick={() => nowInputRef.current?.click()}
              title="Click to replace 'now' photo"
              className="group relative bg-[#FAF7F0] p-2 sm:p-2.5 pb-3 rounded-[10px] border border-[#262320]/20 shadow-[0_12px_26px_rgba(38,35,32,0.13)] w-[148px] sm:w-[168px] md:w-[184px] cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] rounded-[6px] overflow-hidden bg-[#E5DEC9]">
                {!nowError ? (
                  <img
                    src={nowSrc}
                    alt="Now AI and cybersecurity builder passport snapshot"
                    referrerPolicy="no-referrer"
                    onError={() => setNowError(true)}
                    className="w-full h-full object-cover contrast-[1.04]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center">
                    <Sparkles className="w-6 h-6 text-[#8A8580] mb-1" />
                    <span className="font-hand text-base text-[#6E6A64]">
                      now photo
                    </span>
                  </div>
                )}

                {/* Hover replace indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute top-2 right-2 bg-[#262320]/85 text-[#EDE6D8] px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                  <Camera className="w-2.5 h-2.5 text-[#F28DB9]" />
                  <span>swap</span>
                  {isCustomNow && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setNowSrc(DEFAULT_NOW_IMG);
                        setIsCustomNow(false);
                      }}
                      className="ml-0.5 hover:text-[#F28DB9]"
                      title="Reset photo"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Tiny pink text label inside/under passport frame */}
              <div className="mt-2 flex items-center justify-between px-0.5">
                <span
                  className="font-body text-[11px] sm:text-xs font-bold tracking-wide text-[#F28DB9] lowercase"
                  style={{ textShadow: '0 1px 0 rgba(38,35,32,0.22)' }}
                >
                  now
                </span>
                <span className="font-mono text-[9px] text-[#8A8580]">#02</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM-RIGHT: Continuation Paragraph + Bold Punchline
           ========================================================= */}
        <div className="self-end max-w-xl pr-1 sm:pr-4 pb-2 text-left sm:text-right flex flex-col items-start sm:items-end">
          <p className="font-body text-sm sm:text-base md:text-[16.5px] text-[#262320] leading-[1.7] lowercase">
            then i got pulled into cybersecurity after realising every smart
            system also needs to be a safe one. i love hackathons because there&apos;s
            no overthinking—you team up, lock in, and ship something real in
            24–48 hours.{' '}
            <strong className="font-bold text-[#262320] bg-[#F28DB9]/25 px-1.5 py-0.5 rounded-xs">
              that&apos;s when it clicked: build smart, build safe, build fast.
            </strong>
          </p>

          <PinkSquiggle className="w-36 sm:w-44 h-auto mt-2 opacity-90" />
        </div>
      </div>
    </section>
  );
};
