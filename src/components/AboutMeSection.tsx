import React, { useRef, useState } from 'react';
import { ArrowUpRight, Camera, RotateCcw, Sparkles } from 'lucide-react';
import { AboutDoodleArrow, DoodleStar, PinkSquiggle } from './Doodles';

interface AboutMeSectionProps {
  onOpenSayHi: () => void;
}

const DEFAULT_ABOUT_IMG =
  '/src/assets/images/about_me_tall_portrait_1790861363004.jpg';

const I_DO_ITEMS = [
  {
    title: 'AI/ML apps',
    detail: 'end-to-end llm tools, rag pipelines & applied ml products',
  },
  {
    title: 'multi-agent systems',
    detail: 'autonomous tool-using workflows & collaborative agent graphs',
  },
  {
    title: 'secure-by-design thinking',
    detail: 'appsec, prompt-injection defense & threat modeling from day zero',
  },
  {
    title: 'full-stack web',
    detail: 'react, typescript, node & fast apis built for clean ux',
  },
  {
    title: 'hackathon prototyping',
    detail: '0-to-1 mvp execution in 24–48 hours with high-energy teams',
  },
];

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  onOpenSayHi,
}) => {
  const [aboutSrc, setAboutSrc] = useState<string>(DEFAULT_ABOUT_IMG);
  const [imgError, setImgError] = useState<boolean>(false);
  const [isCustomImg, setIsCustomImg] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAboutSrc(URL.createObjectURL(file));
    setImgError(false);
    setIsCustomImg(true);
  };

  return (
    <section
      id="about"
      aria-label="About Abi Nethra"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex items-center justify-center overflow-hidden px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
    >
      {/* Subtle Slide Frame Border */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* =========================================================
            LEFT COLUMN: Tall Photo-Style Panel with Cropped Vertical Pink Bubble Text
           ========================================================= */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
            aria-label="Replace About Me portrait photo"
          />

          <div className="relative w-full max-w-[390px] sm:max-w-[430px]">
            {/* Top-left & bottom-right scrapbook masking tape strips */}
            <div className="scrapbook-tape absolute -top-3.5 left-10 w-24 h-6 -rotate-6 z-30 pointer-events-none" />
            <div className="scrapbook-tape absolute -bottom-3 right-10 w-20 h-6 rotate-4 z-30 pointer-events-none" />

            {/* Doodle star near top-right of tall photo panel */}
            <DoodleStar
              className="pointer-events-none absolute -right-6 -top-5 w-7 h-7 rotate-12 z-20"
              color="#F28DB9"
            />

            {/* Tall Photo-Style Panel */}
            <div
              onClick={() => fileInputRef.current?.click()}
              title="Click to replace tall portrait photo"
              className="group relative w-full aspect-[3/4.15] rounded-[26px] overflow-hidden bg-[#262320] border-2 border-[#262320]/20 shadow-[0_18px_40px_rgba(38,35,32,0.16)] -rotate-[1.5deg] hover:rotate-0 transition-transform duration-200 cursor-pointer"
            >
              {!imgError ? (
                <img
                  src={aboutSrc}
                  alt="Abi Nethra tall editorial portrait"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center opacity-92 group-hover:scale-[1.02] transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#322E2A] text-[#EDE6D8]">
                  <Sparkles className="w-10 h-10 text-[#F28DB9] mb-2" />
                  <span className="font-condensed text-base">
                    TALL PHOTO PANEL
                  </span>
                  <span className="font-hand text-xl text-[#EDE6D8]/75">
                    Click to upload your photo
                  </span>
                </div>
              )}

              {/* Subtle gradient scrim for contrast with cropped vertical bubble text */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#262320]/45 via-transparent to-[#262320]/20"
                aria-hidden="true"
              />

              {/* CROPPED VERTICAL PINK BUBBLE TEXT ALONG THE LEFT EDGE */}
              <div
                className="pointer-events-none absolute inset-y-0 -left-6 sm:-left-8 flex items-center select-none"
                aria-hidden="true"
              >
                <span
                  className="font-bubble text-[#F28DB9] uppercase leading-[0.82] tracking-[-0.02em] text-[84px] sm:text-[102px] md:text-[114px] whitespace-nowrap [writing-mode:vertical-rl] rotate-180 bubble-title-shadow"
                  style={{
                    WebkitTextStroke: '2px rgba(214, 102, 152, 0.35)',
                  }}
                >
                  ABOUT ME
                </span>
              </div>

              {/* Small handwritten sticker caption on bottom-right of photo */}
              <div className="pointer-events-none absolute bottom-4 right-4 bg-[#EDE6D8]/95 text-[#262320] px-3 py-1 rounded-md border border-[#262320]/20 shadow-xs -rotate-2">
                <span className="font-hand text-lg leading-none font-semibold">
                  builder mode: on ⚡
                </span>
              </div>

              {/* Hover button to swap photo */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute top-3.5 right-3.5 z-30 flex items-center gap-1.5 bg-[#262320]/85 text-[#EDE6D8] px-2.5 py-1 rounded-md text-[11px] font-body">
                <Camera className="w-3 h-3 text-[#F28DB9]" />
                <span>Replace photo</span>
                {isCustomImg && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAboutSrc(DEFAULT_ABOUT_IMG);
                      setIsCustomImg(false);
                    }}
                    className="ml-1 pl-1 border-l border-[#EDE6D8]/30 hover:text-[#F28DB9]"
                    title="Reset photo"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: Outlined Pill Badge + Bio + "I do:" Bullet List
           ========================================================= */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center lg:pl-4">
          {/* Top Badge + Handwritten annotation */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {/* Explicitly requested pill-shaped outlined badge "2nd yr B.Tech AI & DS" */}
            <div className="inline-flex items-center px-5 py-1.5 rounded-full border-2 border-[#262320] bg-[#FAF7F0]/70 text-[#262320] font-body font-semibold text-xs sm:text-sm tracking-tight shadow-[3px_3px_0px_#F28DB9]">
              2nd yr B.Tech AI &amp; DS
            </div>

            <div className="flex items-center gap-1">
              <AboutDoodleArrow className="w-12 h-7 -mt-1 hidden sm:block" />
              <span className="font-hand text-2xl text-[#8A8580] -rotate-3">
                building smart &amp; safe software
              </span>
            </div>
          </div>

          {/* Secondary condensed grotesque heading */}
          <h2 className="font-condensed text-2xl sm:text-3xl md:text-[38px] text-[#8A8580] leading-[1.05] tracking-[-0.04em] mb-4 max-w-2xl">
            it&apos;s not just training models, it&apos;s engineering systems
            that hold up in the wild.
          </h2>

          {/* Short Bio */}
          <p className="font-body text-sm sm:text-base md:text-[16.5px] text-[#262320] leading-[1.7] mb-7 max-w-2xl">
            Hey, I&apos;m <strong>Abi Nethra</strong> — a 2nd-year AI &amp; Data
            Science undergrad who loves sitting at the intersection of{' '}
            <span className="underline decoration-[#F28DB9] decoration-2 underline-offset-3">
              AI software engineering
            </span>{' '}
            and{' '}
            <span className="underline decoration-[#F28DB9] decoration-2 underline-offset-3">
              cybersecurity
            </span>
            . I build intelligent applications and multi-agent tools while
            exploring how to keep modern systems resilient against real-world
            threats. Whether you&apos;re putting together a hackathon squad,
            organizing a builder event, or jamming on an open-source idea,
            I&apos;m always down to collaborate.
          </p>

          {/* "I do:" Bullet List Card / Collage Block */}
          <div className="relative w-full max-w-2xl bg-[#FAF7F0]/85 border border-[#262320]/20 rounded-2xl p-5 sm:p-6 shadow-[0_10px_28px_rgba(38,35,32,0.07)]">
            {/* Masking tape strip */}
            <div className="scrapbook-tape absolute -top-2.5 right-8 w-20 h-5 rotate-3 pointer-events-none" />

            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2.5">
                <h3 className="font-condensed text-xl sm:text-2xl text-[#262320] tracking-[-0.03em]">
                  I do:
                </h3>
                <PinkSquiggle className="w-20 h-4" />
              </div>
              <span className="font-hand text-xl text-[#8A8580] rotate-2">
                core toolkit ★
              </span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {I_DO_ITEMS.map((item, idx) => (
                <li
                  key={item.title}
                  className={`flex items-start gap-2.5 ${
                    idx === I_DO_ITEMS.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span
                    className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#F28DB9] border border-[#262320] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-body font-bold text-sm sm:text-[15px] text-[#262320]">
                      {item.title}
                    </span>
                    <span className="font-body text-xs sm:text-[13px] text-[#6E6A64] block leading-snug">
                      {item.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom interactive hackathon team-up prompt */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenSayHi}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#262320] hover:bg-[#3A3633] text-[#EDE6D8] font-body font-medium text-xs sm:text-sm transition-all cursor-pointer shadow-[3px_3px_0px_#F28DB9]"
            >
              <span>Need a teammate for your next hackathon?</span>
              <ArrowUpRight className="w-4 h-4 text-[#F28DB9]" />
            </button>

            <span className="font-hand text-xl text-[#6E6A64] -rotate-2">
              let&apos;s ship something in 48h!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
