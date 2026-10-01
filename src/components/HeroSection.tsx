import React, { useRef, useState } from 'react';
import { Camera, RotateCcw, Sparkles } from 'lucide-react';
import {
  DoodleStar,
  DottedCurvedPath,
  PinkSquiggle,
  StickyDoodleArrow,
  ThisIsArrow,
  TourGuideArrow,
} from './Doodles';

interface HeroSectionProps {
  onOpenSayHi: () => void;
}

const DEFAULT_CUTOUT_IMAGE =
  '/src/assets/images/abi_halftone_cutout_portrait_1790859964282.jpg';

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSayHi }) => {
  const [cutoutSrc, setCutoutSrc] = useState<string>(DEFAULT_CUTOUT_IMAGE);
  const [imgError, setImgError] = useState<boolean>(false);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setCutoutSrc(objectUrl);
    setImgError(false);
    setIsCustomPhoto(true);
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCutoutSrc(DEFAULT_CUTOUT_IMAGE);
    setImgError(false);
    setIsCustomPhoto(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section
      aria-label="Abi Nethra Hero"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex flex-col justify-between overflow-hidden select-none px-5 py-6 sm:px-10 sm:py-9 md:px-14 md:py-11"
    >
      {/* Subtle Paper Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-[0.26] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.55'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Subtle Slide Frame Border / Scrapbook Edge Vignette */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      {/* Background Hand-Drawn Dotted Curved Path */}
      <DottedCurvedPath className="pointer-events-none absolute top-[18%] left-[22%] w-[340px] md:w-[520px] opacity-55 -rotate-6 hidden sm:block" />

      {/* =========================================================
          TOP ROW: Handwritten Tour Guide Note (Top-Left)
         ========================================================= */}
      <div className="relative z-20 flex items-start justify-between w-full max-w-[1400px] mx-auto">
        {/* Top-Left Handwritten Tour Guide Annotation */}
        <div className="relative pt-1 pl-1 sm:pt-2 sm:pl-2">
          <div className="font-hand text-[26px] sm:text-[32px] md:text-[36px] leading-[1.04] text-[#262320] -rotate-[2.5deg] origin-top-left tracking-normal">
            <p>Hi. Since you&apos;re new here,</p>
            <p className="pl-1">let me be ya tour guide</p>
          </div>

          {/* Hand-drawn dotted arrow curving toward center */}
          <TourGuideArrow className="w-28 sm:w-36 md:w-44 h-auto mt-1 ml-8 sm:ml-14 text-[#262320] opacity-85" />
        </div>

        {/* Subtle Top-Right Secondary Condensed Grotesque Kicker (Engineer context) */}
        <div className="hidden md:flex flex-col items-end text-right pt-2 pr-2">
          <p className="font-condensed text-sm lg:text-base text-[#8A8580] tracking-[-0.04em] leading-tight">
            it&apos;s not just coding, it&apos;s shipping intelligence.
          </p>
          <span className="font-hand text-xl text-[#8A8580] rotate-2 mt-0.5">
            2nd-year B.Tech AI &amp; Data Science
          </span>
        </div>
      </div>

      {/* =========================================================
          CENTER STAGE: "This is" + Cutout Girl Illustration +
          Overlapping Giant Pink Bubble Text "ABI NETHRA" + Sticky Note
         ========================================================= */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full max-w-[1380px] mx-auto py-2 sm:py-4">
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Hidden file input so Abi can swap the placeholder cutout photo anytime */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            aria-label="Upload custom cutout portrait"
          />

          {/* Black-and-white halftone cutout illustration of a girl (Centered) */}
          <div className="relative z-10 group flex flex-col items-center">
            {/* Top piece of scrapbook tape on cutout */}
            <div className="scrapbook-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 -rotate-2 z-20 pointer-events-none" />

            {/* Doodle stars around the cutout */}
            <DoodleStar
              className="pointer-events-none absolute -left-10 top-12 w-6 h-6 -rotate-12 opacity-85 hidden sm:block"
              color="#F28DB9"
            />
            <DoodleStar
              className="pointer-events-none absolute -right-10 top-24 w-5 h-5 rotate-12 opacity-75 hidden sm:block"
              color="#3A3633"
            />

            {/* Cutout Portrait Frame */}
            <div
              onClick={() => fileInputRef.current?.click()}
              title="Click to replace placeholder cutout illustration with your own image"
              className="relative w-[230px] sm:w-[285px] md:w-[335px] lg:w-[375px] aspect-[3/4] flex items-center justify-center cursor-pointer transition-transform duration-200 group-hover:scale-[1.01]"
            >
              {!imgError ? (
                <img
                  src={cutoutSrc}
                  alt="Black-and-white halftone cutout illustration of Abi Nethra"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className={`w-full h-full object-contain object-bottom select-none ${
                    isCustomPhoto
                      ? 'drop-shadow-[0_10px_20px_rgba(38,35,32,0.18)]'
                      : 'cutout-halftone-img contrast-125 brightness-105'
                  }`}
                />
              ) : (
                /* Resilient SVG Halftone Cutout Illustration Fallback */
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5DEC9] rounded-3xl border-4 border-white shadow-md p-6 text-center">
                  <Sparkles className="w-10 h-10 text-[#262320] mb-2" />
                  <span className="font-condensed text-sm text-[#262320]">
                    ABI NETHRA CUTOUT
                  </span>
                  <span className="font-hand text-lg text-[#6E6A64]">
                    Click to upload cutout PNG
                  </span>
                </div>
              )}

              {/* Subtle hover control to replace placeholder cutout */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-[#262320]/85 text-[#EDE6D8] px-2.5 py-1 rounded-md text-[11px] font-body shadow-sm">
                <Camera className="w-3 h-3 text-[#F28DB9]" />
                <span>Replace cutout</span>
                {isCustomPhoto && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="ml-1 pl-1.5 border-l border-[#EDE6D8]/30 hover:text-[#F28DB9] inline-flex items-center gap-0.5 cursor-pointer"
                    title="Reset to default halftone illustration"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* GIANT PINK BUBBLE TEXT "ABI NETHRA" OVERLAPPING THE CUTOUT ILLUSTRATION */}
          <div className="relative z-20 -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 w-full max-w-[1240px] flex flex-col items-center justify-center">
            {/* Handwritten "This is" directly above "ABI" (left side) */}
            <div className="self-start md:absolute md:-top-14 lg:-top-16 md:left-[5%] lg:left-[7%] flex items-end gap-1 sm:gap-2 mb-1 md:mb-0 ml-3 sm:ml-8 md:ml-0 pointer-events-auto">
              <span className="font-hand text-[34px] sm:text-[46px] md:text-[56px] text-[#262320] -rotate-[7deg] leading-none">
                This is
              </span>
              <ThisIsArrow className="w-9 sm:w-12 md:w-14 h-auto -mb-2 text-[#262320]" />
            </div>

            {/* Small Handwritten Sticky Note near the name ("open to hackathon teams! say hi ↓") */}
            <div className="hidden md:flex flex-col items-center md:absolute md:-top-28 lg:-top-32 md:right-[3%] lg:right-[5%] z-30 pointer-events-auto">
              <button
                type="button"
                onClick={onOpenSayHi}
                className="group relative bg-[#FFF6BD] hover:bg-[#FFF29E] text-[#262320] px-4 py-3 lg:px-5 lg:py-3.5 rounded-md border border-[#262320]/25 shadow-[4px_6px_14px_rgba(38,35,32,0.14)] rotate-[4.5deg] hover:rotate-[1.5deg] hover:scale-[1.03] transition-all duration-150 cursor-pointer text-left max-w-[215px] lg:max-w-[235px]"
                aria-label="Open hackathon team-up and contact note"
              >
                {/* Masking tape strip holding the sticky note */}
                <div className="scrapbook-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 -rotate-3 pointer-events-none" />

                {/* Folded bottom-right corner accent */}
                <div
                  className="pointer-events-none absolute bottom-0 right-0 w-3.5 h-3.5 bg-gradient-to-tl from-[#d8cfa0] via-[#eee5b2] to-transparent rounded-tl-xs"
                  aria-hidden="true"
                />

                <p className="font-hand text-[23px] lg:text-[26px] leading-[1.05] text-[#262320] font-semibold">
                  open to hackathon teams! say hi ↓
                </p>
              </button>

              {/* Hand-drawn doodle arrow from sticky note pointing down to the name */}
              <StickyDoodleArrow className="w-16 lg:w-20 h-auto -mt-1 mr-5 text-[#262320] pointer-events-none" />
            </div>

            {/* Giant Bubblegum Pink Name */}
            <h1
              className="pointer-events-none font-bubble text-[#F28DB9] bubble-title-shadow uppercase select-none leading-[0.84] tracking-[-0.02em] text-[15.5vw] sm:text-[14vw] md:text-[13.2vw] lg:text-[156px] xl:text-[184px] whitespace-nowrap text-center"
              style={{
                WebkitTextStroke: '2px rgba(214, 102, 152, 0.28)',
              }}
            >
              ABI NETHRA
            </h1>

            {/* Subtle hand-drawn squiggle accent under NETHRA */}
            <div className="pointer-events-none w-full max-w-[1040px] flex justify-end pr-[8%] sm:pr-[14%] -mt-1 sm:-mt-2">
              <PinkSquiggle className="w-28 sm:w-40 md:w-48 h-auto opacity-90" />
            </div>

            {/* Mobile Sticky Note right below the name so nothing collides on narrow screens */}
            <div className="md:hidden mt-4 flex flex-col items-center pointer-events-auto">
              <button
                type="button"
                onClick={onOpenSayHi}
                className="relative bg-[#FFF6BD] active:bg-[#FFF29E] text-[#262320] px-4 py-2.5 rounded-md border border-[#262320]/25 shadow-[3px_5px_12px_rgba(38,35,32,0.14)] rotate-[3deg] text-left max-w-[210px]"
              >
                <div className="scrapbook-tape absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 -rotate-2 pointer-events-none" />
                <p className="font-hand text-[21px] leading-[1.05] text-[#262320] font-semibold">
                  open to hackathon teams! say hi ↓
                </p>
              </button>
            </div>
          </div>

          {/* Mobile-only secondary condensed grotesque line */}
          <p className="md:hidden font-condensed text-xs sm:text-sm text-[#8A8580] tracking-[-0.04em] mt-3 text-center">
            it&apos;s not just coding, it&apos;s shipping intelligence.
          </p>
        </div>
      </div>

      {/* =========================================================
          BOTTOM ROW: Bottom-Left Role Caption & Bottom-Right Credit
         ========================================================= */}
      <footer className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 w-full max-w-[1400px] mx-auto pt-4">
        {/* Bottom-Left Caption */}
        <div className="flex flex-col gap-0.5">
          <p className="font-body text-xs sm:text-sm md:text-[15px] font-medium text-[#262320] tracking-[-0.01em]">
            AI Builder <span className="text-[#8A8580] px-1">/</span> Cybersecurity Explorer{' '}
            <span className="text-[#8A8580] px-1">/</span> Hackathon Teammate
          </p>
        </div>

        {/* Bottom-Right Signature */}
        <div className="self-end sm:self-auto">
          <p className="font-body text-xs sm:text-sm md:text-[15px] font-medium text-[#262320] tracking-[-0.01em]">
            By Abi Nethra
          </p>
        </div>
      </footer>
    </section>
  );
};
