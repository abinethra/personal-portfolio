import React, { useState } from 'react';
import {
  ArrowUp,
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import {
  AboutDoodleArrow,
  DoodleStar,
  DottedCurvedPath,
  PinkSquiggle,
  StickyDoodleArrow,
  TourGuideArrow,
} from './Doodles';

interface ClosingSectionProps {
  onOpenSayHi: () => void;
}

const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'sreeabinethra7@gmail.com',
    href: 'mailto:sreeabinethra7@gmail.com',
    icon: Mail,
    isExternal: false,
  },
  {
    id: 'linkedin',
    label: 'linkedin.com/in/sree-abi-nethra-i',
    href: 'https://www.linkedin.com/in/sree-abi-nethra-i',
    icon: Linkedin,
    isExternal: true,
  },
  {
    id: 'github',
    label: 'github.com/abinethra',
    href: 'https://github.com/abinethra',
    icon: Github,
    isExternal: true,
  },
];

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  onOpenSayHi,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('sreeabinethra7@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      aria-label="Closing and Contact"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex flex-col justify-between overflow-hidden px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
    >
      {/* Subtle Slide Frame Border */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      <DottedCurvedPath className="pointer-events-none absolute top-[18%] left-[14%] w-[480px] opacity-40 -rotate-6 hidden lg:block" />

      {/* =========================================================
          TOP-LEFT CORNER: Bold Grey Condensed "and that's a wrap."
         ========================================================= */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto pt-2">
        <span className="font-hand text-2xl sm:text-3xl text-[#262320] -rotate-2 inline-block mb-1">
          made it to the end! ↓
        </span>
        <h2 className="font-condensed text-4xl sm:text-6xl md:text-[72px] lg:text-[86px] text-[#8A8580] leading-[0.92] tracking-[-0.045em] lowercase">
          and that&apos;s a wrap.
        </h2>
        <PinkSquiggle className="w-40 sm:w-52 h-auto mt-2" />
      </div>

      {/* =========================================================
          MAIN CONTENT GRID:
          Left: Contact Icon Rows + Pink Sticker Resume Button + "psst... open to hackathons"
          Right: Pink Open Envelope with Lined Paper Handwritten Note that slides up on hover
         ========================================================= */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN (5 cols): Contact Rows + Sticker Resume Pill */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center space-y-8">
          <div>
            <p className="font-hand text-2xl sm:text-3xl text-[#8A8580] -rotate-2 mb-1">
              find me on the internet:
            </p>
            <p className="font-body text-xs sm:text-sm text-[#5A5550] max-w-sm">
              Reach out for hackathon teams, AI &amp; cybersecurity collabs, or
              builder community events.
            </p>
          </div>

          {/* Icon Rows (Email, LinkedIn, GitHub) with tiny text */}
          <div className="w-full max-w-md space-y-3.5">
            {CONTACT_LINKS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="group flex items-center justify-between gap-3 bg-[#FAF7F0]/85 hover:bg-[#FAF7F0] border border-[#262320]/20 rounded-xl px-4 py-3 shadow-[0_6px_18px_rgba(38,35,32,0.06)] transition-all hover:-translate-y-0.5"
                >
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3.5 min-w-0 flex-1"
                  >
                    <span className="w-9 h-9 rounded-lg bg-[#F28DB9] border border-[#262320] shadow-[2px_2px_0px_#262320] flex items-center justify-center shrink-0 group-hover:rotate-3 transition-transform">
                      <IconComponent className="w-4 h-4 text-[#262320]" />
                    </span>
                    <span className="font-body text-xs sm:text-[13px] font-medium text-[#262320] group-hover:text-[#d45b90] transition-colors truncate">
                      {item.label}
                    </span>
                  </a>

                  {item.id === 'email' ? (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#EDE6D8] hover:bg-[#F28DB9]/40 text-[10px] font-mono text-[#262320] border border-[#262320]/20 cursor-pointer shrink-0 transition-colors"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-700" />
                          <span>copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>copy</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8A8580] group-hover:text-[#262320] p-1 shrink-0"
                      aria-label={`Open ${item.label}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pink Pill Button Styled Like a Sticker: "download my resume ↓" + Handwritten Line */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="/resume.pdf"
              download="Abi_Nethra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F28DB9] hover:bg-[#ec76aa] text-[#262320] font-body font-bold text-xs sm:text-sm tracking-tight border-2 border-[#262320] ring-4 ring-[#FAF7F0] shadow-[4px_6px_0px_#262320] -rotate-2 hover:rotate-0 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#262320]" />
              <span>download my resume ↓</span>
            </a>

            {/* Small handwritten line next to it: "psst... open to hackathons" */}
            <div className="flex items-center gap-1.5">
              <AboutDoodleArrow className="w-10 h-6 -scale-x-100 hidden sm:block" />
              <button
                type="button"
                onClick={onOpenSayHi}
                className="font-hand text-2xl sm:text-[26px] text-[#262320] hover:text-[#d45b90] -rotate-3 transition-colors cursor-pointer text-left"
              >
                psst... open to hackathons
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN (7 cols): PINK OPEN ENVELOPE WITH LINED PAPER
            HANDWRITTEN NOTE THAT SLIDES UP ON HOVER
           ========================================================= */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center pt-16 sm:pt-20 lg:pt-14">
          {/* Handwritten prompt above envelope */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="font-hand text-2xl sm:text-3xl text-[#8A8580] rotate-2">
              hover the envelope to read my note ↓
            </span>
          </div>

          {/* Interactive Envelope Wrapper */}
          <div
            onClick={() => setIsEnvelopeOpen((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === 'Enter' && setIsEnvelopeOpen((prev) => !prev)
            }
            aria-label="Pink open envelope with handwritten note"
            className="group relative w-full max-w-[480px] sm:max-w-[540px] cursor-pointer select-none -rotate-[1.5deg] hover:rotate-0 transition-transform duration-300"
          >
            <DoodleStar
              className="pointer-events-none absolute -top-10 -left-6 w-7 h-7 -rotate-12 z-30"
              color="#F28DB9"
            />
            <DoodleStar
              className="pointer-events-none absolute -bottom-5 -right-6 w-6 h-6 rotate-12 z-30"
              color="#3A3633"
            />

            {/* 1. OPEN TOP TRIANGULAR FLAP OF THE PINK ENVELOPE (Back Layer) */}
            <div
              className="w-full h-24 sm:h-28 bg-[#DF6E9F] border-t-2 border-x-2 border-[#262320] rounded-t-xl relative z-0"
              style={{
                clipPath: 'polygon(0 100%, 50% 4%, 100% 100%)',
              }}
              aria-hidden="true"
            />

            {/* Envelope Main Body Container */}
            <div className="relative w-full bg-[#D96597] border-2 border-[#262320] rounded-b-2xl shadow-[0_22px_50px_rgba(38,35,32,0.18)] pt-4 pb-6 px-4 sm:px-7">
              {/* 2. LINED PAPER HANDWRITTEN NOTE (Slides up on hover!) */}
              <div
                className={`relative z-10 bg-[#FCF9F0] border-2 border-[#262320] rounded-xl p-5 sm:p-7 shadow-[0_10px_28px_rgba(38,35,32,0.15)] transition-transform duration-300 ease-out ${
                  isEnvelopeOpen
                    ? '-translate-y-16 sm:-translate-y-20'
                    : '-translate-y-6 sm:-translate-y-8 group-hover:-translate-y-16 sm:group-hover:-translate-y-20'
                }`}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(transparent, transparent 31px, rgba(138, 133, 128, 0.18) 32px)',
                }}
              >
                {/* Masking tape strip on the note */}
                <div className="scrapbook-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 -rotate-2 pointer-events-none" />

                {/* Left Pink Margin Line on Lined Paper */}
                <div
                  className="pointer-events-none absolute top-0 bottom-0 left-7 sm:left-9 w-[1.5px] bg-[#F28DB9]/65"
                  aria-hidden="true"
                />

                <div className="pl-5 sm:pl-6">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8580] mb-2">
                    <span>FROM DESK OF ABI NETHRA</span>
                    <span>CHENNAI, IN</span>
                  </div>

                  {/* Handwritten Note Text */}
                  <p className="font-hand text-[23px] sm:text-[27px] md:text-[29px] leading-[1.22] text-[#262320] font-semibold">
                    &ldquo;thanks for stopping by! i&apos;m always up for
                    hackathon teams, new ideas and good conversations about AI
                    and security. if you&apos;re building something, let&apos;s
                    team up!&rdquo;
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-hand text-2xl text-[#d45b90] -rotate-2">
                      — Abi Nethra ★
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenSayHi();
                      }}
                      className="px-3 py-1 rounded-full bg-[#F28DB9] hover:bg-[#ec74a9] text-[#262320] border border-[#262320] font-body text-[11px] font-bold shadow-[2px_2px_0px_#262320] cursor-pointer"
                    >
                      say hi now →
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. FRONT POCKET FLAPS OF THE PINK ENVELOPE (Overlapping bottom of the note) */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-32 z-20 rounded-b-2xl overflow-hidden"
                aria-hidden="true"
              >
                {/* Left & Right Diagonal Pocket Fold Visual */}
                <svg
                  viewBox="0 0 500 140"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  {/* Left fold */}
                  <polygon
                    points="0,0 250,82 0,140"
                    fill="#F49BC2"
                    stroke="#262320"
                    strokeWidth="2.5"
                  />
                  {/* Right fold */}
                  <polygon
                    points="500,0 250,82 500,140"
                    fill="#EE85B3"
                    stroke="#262320"
                    strokeWidth="2.5"
                  />
                  {/* Bottom triangle flap */}
                  <polygon
                    points="0,140 250,58 500,140"
                    fill="#F28DB9"
                    stroke="#262320"
                    strokeWidth="2.5"
                  />
                </svg>

                {/* Wax Seal / Sticker Badge on the Center of the Envelope Pocket */}
                <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-[#FAF7F0] border-2 border-[#262320] shadow-[2px_3px_0px_#262320] -rotate-3">
                  <span className="font-condensed text-[10px] tracking-wider text-[#262320] uppercase">
                    ABI · 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FOOTER BAR
         ========================================================= */}
      <footer className="relative z-10 w-full max-w-[1380px] mx-auto pt-4 border-t border-[#262320]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6E6A64]">
        <div className="flex items-center gap-2 font-body">
          <span className="font-semibold text-[#262320]">Abi Nethra</span>
          <span aria-hidden="true">·</span>
          <span>B.Tech AI &amp; Data Science</span>
          <span aria-hidden="true">·</span>
          <span>AI Builder &amp; Cybersecurity Explorer</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 font-hand text-xl text-[#262320] hover:text-[#d45b90] transition-colors cursor-pointer"
        >
          <span>back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </footer>
    </section>
  );
};
