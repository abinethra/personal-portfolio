import React, { useState } from 'react';
import { Award, CheckCircle2, Sparkles, Ticket, X } from 'lucide-react';
import {
  AboutDoodleArrow,
  DoodleStar,
  DottedCurvedPath,
  PinkSquiggle,
  StickyDoodleArrow,
  ThisIsArrow,
} from './Doodles';

/**
 * ============================================================================
 * EDITABLE WINS & BADGES DATA ARRAY
 * Replace the bracketed placeholders below with your actual hackathons,
 * results, certifications, and issuers.
 * ============================================================================
 */
export interface WinOrBadgeItem {
  id: string;
  artifactType: 'event-ticket' | 'lanyard-badge' | 'certificate-card' | 'stamp-card';
  categoryLabel: string;
  title: string; // e.g. "[Hackathon Name]" or "[Certification Name]"
  subtitle: string; // e.g. "[Result/Position]" or "[Issuer]"
  year: string; // e.g. "[Year]"
  handwrittenNote: string;
  details: string;
  rotationClass: string;
  serialCode: string;
}

export const WINS_AND_BADGES: WinOrBadgeItem[] = [
  {
    id: 'win-1',
    artifactType: 'event-ticket',
    categoryLabel: 'hackathon win',
    title: '[Hackathon Name], [Result/Position], [Year]',
    subtitle: 'AI & Cybersecurity Track · 36-Hour Sprint',
    year: '[Year]',
    handwrittenNote: 'zero sleep, shipped with 5 mins left!',
    details:
      'Built and demoed an end-to-end working prototype under tight hackathon constraints. Edit this placeholder in WINS_AND_BADGES at the top of WinsBadgesSection.tsx.',
    rotationClass: '-rotate-[3deg]',
    serialCode: 'TKT-01',
  },
  {
    id: 'win-2',
    artifactType: 'lanyard-badge',
    categoryLabel: 'builder pass',
    title: '[Hackathon Name], [Result/Position], [Year]',
    subtitle: 'Finalist / Special Track Winner',
    year: '[Year]',
    handwrittenNote: 'best team energy ever ↓',
    details:
      'Collaborated on multi-agent AI architecture and live security validation during the finals round. Edit this placeholder in WINS_AND_BADGES.',
    rotationClass: 'rotate-[2.5deg]',
    serialCode: 'VIP-02',
  },
  {
    id: 'cert-1',
    artifactType: 'certificate-card',
    categoryLabel: 'verified cert',
    title: '[Certification Name], [Issuer]',
    subtitle: 'Cybersecurity & Network Defense Foundations',
    year: '[Year]',
    handwrittenNote: 'down the security rabbit hole →',
    details:
      'Hands-on certification covering threat modeling, packet inspection, web app vulnerabilities, and secure systems engineering. Edit in WINS_AND_BADGES.',
    rotationClass: '-rotate-[2deg]',
    serialCode: 'CRT-03',
  },
  {
    id: 'cert-2',
    artifactType: 'stamp-card',
    categoryLabel: 'ai / data stamp',
    title: '[Certification Name], [Issuer]',
    subtitle: 'Machine Learning & Applied Data Science',
    year: '[Year]',
    handwrittenNote: 'officially certified ★',
    details:
      'Credential in supervised/unsupervised learning, deep neural networks, and production model evaluation. Edit in WINS_AND_BADGES.',
    rotationClass: 'rotate-[3.5deg]',
    serialCode: 'STP-04',
  },
  {
    id: 'win-3',
    artifactType: 'event-ticket',
    categoryLabel: 'campus / national',
    title: '[Hackathon Name], [Result/Position], [Year]',
    subtitle: 'Open Innovation & Full-Stack Build',
    year: '[Year]',
    handwrittenNote: 'judges loved the live demo!',
    details:
      'Designed and deployed a full-stack application focused on real-world usability and data privacy. Edit in WINS_AND_BADGES.',
    rotationClass: 'rotate-[2deg]',
    serialCode: 'TKT-05',
  },
  {
    id: 'cert-3',
    artifactType: 'certificate-card',
    categoryLabel: 'cloud & sec',
    title: '[Certification Name], [Issuer]',
    subtitle: 'Ethical Hacking / Cloud & AI Security',
    year: '[Year]',
    handwrittenNote: 'always learning new tools',
    details:
      'Practical labs in offensive security testing, Burp Suite workflows, and securing modern web APIs. Edit in WINS_AND_BADGES.',
    rotationClass: '-rotate-[2.5deg]',
    serialCode: 'CRT-06',
  },
];

export const WinsBadgesSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<WinOrBadgeItem | null>(null);

  const renderArtifact = (item: WinOrBadgeItem) => {
    /* 1. EVENT TICKET */
    if (item.artifactType === 'event-ticket') {
      return (
        <div
          onClick={() => setSelectedItem(item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
          className={`group relative cursor-pointer transition-all duration-200 ease-out ${item.rotationClass} hover:rotate-0 hover:-translate-y-2 hover:scale-[1.02]`}
        >
          {/* Top push-pin / tape */}
          <div className="scrapbook-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 -rotate-2 z-20 pointer-events-none" />

          <div className="relative bg-[#FAF5E8] border-2 border-[#262320] rounded-2xl p-5 shadow-[5px_7px_0px_#262320] group-hover:shadow-[7px_10px_0px_#F28DB9] overflow-hidden">
            {/* Side Ticket Notches */}
            <div
              className="pointer-events-none absolute top-1/2 -left-3.5 -translate-y-1/2 w-6 h-6 rounded-full bg-[#EDE6D8] border-2 border-[#262320]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-1/2 -right-3.5 -translate-y-1/2 w-6 h-6 rounded-full bg-[#EDE6D8] border-2 border-[#262320]"
              aria-hidden="true"
            />

            {/* Perforated Top Header */}
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b-2 border-dashed border-[#262320]/25 text-[11px] font-mono text-[#6E6A64]">
              <span>EVENT ADMISSION · {item.serialCode}</span>
              <span className="text-[#262320] font-bold">{item.year}</span>
            </div>

            <span
              className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-1"
              style={{ textShadow: '0 1px 0 rgba(38,35,32,0.22)' }}
            >
              {item.categoryLabel}
            </span>

            <h3 className="font-condensed text-base sm:text-lg text-[#262320] leading-snug tracking-[-0.02em]">
              {item.title}
            </h3>

            <p className="font-body text-xs text-[#5A5550] mt-1.5 leading-relaxed">
              {item.subtitle}
            </p>

            {/* Bottom Barcode Strip */}
            <div className="mt-4 pt-2.5 border-t border-[#262320]/15 flex items-center justify-between">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[2, 1, 3, 1, 2, 1, 4, 1, 2, 2, 1, 3].map((w, idx) => (
                  <span
                    key={idx}
                    className="h-3.5 bg-[#262320]/80 inline-block"
                    style={{ width: `${w * 2}px` }}
                  />
                ))}
              </div>
              <span className="font-hand text-lg text-[#262320] group-hover:text-[#d45b90]">
                view note →
              </span>
            </div>
          </div>
        </div>
      );
    }

    /* 2. LANYARD BADGE */
    if (item.artifactType === 'lanyard-badge') {
      return (
        <div
          onClick={() => setSelectedItem(item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
          className={`group relative cursor-pointer transition-all duration-200 ease-out ${item.rotationClass} hover:rotate-0 hover:-translate-y-2 hover:scale-[1.02]`}
        >
          {/* Decorative Lanyard Ribbon & Metal Clip at Top */}
          <div
            className="flex flex-col items-center -mb-2 relative z-20 pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-7 h-6 bg-[#F28DB9] border-x-2 border-t-2 border-[#262320] rounded-t-sm" />
            <div className="w-4 h-3 bg-[#8A8580] border-2 border-[#262320] rounded-xs" />
          </div>

          <div className="bg-[#262320] text-[#EDE6D8] rounded-2xl p-5 pt-4 border-2 border-[#262320] shadow-[0_16px_34px_rgba(38,35,32,0.2)]">
            {/* Lanyard Slot Hole */}
            <div
              className="w-12 h-2.5 mx-auto mb-3.5 rounded-full bg-[#EDE6D8] border border-[#262320]"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between text-[10px] font-mono text-[#F28DB9] pb-2 mb-2.5 border-b border-[#EDE6D8]/15">
              <span>BUILDER PASS · {item.serialCode}</span>
              <span>{item.year}</span>
            </div>

            <span className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-1">
              {item.categoryLabel}
            </span>

            <h3 className="font-condensed text-base sm:text-lg text-[#EDE6D8] leading-snug tracking-[-0.02em]">
              {item.title}
            </h3>

            <p className="font-body text-xs text-[#EDE6D8]/75 mt-1.5 leading-relaxed">
              {item.subtitle}
            </p>

            <div className="mt-4 pt-2.5 border-t border-[#EDE6D8]/15 flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-[#EDE6D8]/60">
                ALL-ACCESS HACKER
              </span>
              <span className="font-hand text-lg text-[#F28DB9]">
                inspect pass →
              </span>
            </div>
          </div>
        </div>
      );
    }

    /* 3. CERTIFICATE PAPER CARD */
    if (item.artifactType === 'certificate-card') {
      return (
        <div
          onClick={() => setSelectedItem(item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
          className={`group relative cursor-pointer transition-all duration-200 ease-out ${item.rotationClass} hover:rotate-0 hover:-translate-y-2 hover:scale-[1.02]`}
        >
          {/* Corner tape strips */}
          <div className="scrapbook-tape absolute -top-2.5 left-6 w-16 h-5 -rotate-6 z-20 pointer-events-none" />
          <div className="scrapbook-tape absolute -top-2.5 right-6 w-16 h-5 rotate-6 z-20 pointer-events-none" />

          <div className="bg-[#FCF9F2] p-3 rounded-xl border border-[#262320]/25 shadow-[0_14px_32px_rgba(38,35,32,0.12)]">
            {/* Inner Certificate Double Border */}
            <div className="border-2 border-double border-[#262320]/35 rounded-lg p-4 relative">
              {/* Pink Wax Seal Stamp */}
              <div
                className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-[#F28DB9] border-2 border-[#262320] shadow-xs flex items-center justify-center rotate-12"
                aria-hidden="true"
              >
                <Award className="w-5 h-5 text-[#262320]" />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8580] mb-1.5">
                <span>CERTIFICATE OF COMPLETION</span>
                <span>{item.year}</span>
              </div>

              <span
                className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-1"
                style={{ textShadow: '0 1px 0 rgba(38,35,32,0.22)' }}
              >
                {item.categoryLabel}
              </span>

              <h3 className="font-condensed text-base sm:text-lg text-[#262320] leading-snug tracking-[-0.02em]">
                {item.title}
              </h3>

              <p className="font-body text-xs text-[#5A5550] mt-1.5 pr-8 leading-relaxed">
                {item.subtitle}
              </p>

              <div className="mt-3 pt-2 border-t border-[#262320]/10 flex items-center justify-between">
                <span className="font-hand text-lg text-[#8A8580]">
                  Issued to Abi Nethra
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    /* 4. STAMP CARD */
    return (
      <div
        onClick={() => setSelectedItem(item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
        className={`group relative cursor-pointer transition-all duration-200 ease-out ${item.rotationClass} hover:rotate-0 hover:-translate-y-2 hover:scale-[1.02]`}
      >
        {/* Top Push Pin */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#F28DB9] border-2 border-[#262320] shadow-xs z-20 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </div>

        <div className="bg-[#FFF6C2] p-4 rounded-xl border-2 border-dashed border-[#262320]/50 shadow-[0_14px_30px_rgba(38,35,32,0.12)]">
          <div className="bg-[#FAF7F0] rounded-lg p-4 border border-[#262320]/20 relative overflow-hidden">
            {/* Rubber Ink Stamp Watermark Badge */}
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[#262320] text-[10px] font-mono font-bold text-[#262320] uppercase -rotate-2 mb-2 bg-[#F28DB9]/35">
              <span>VERIFIED · {item.serialCode}</span>
            </div>

            <span
              className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-1"
              style={{ textShadow: '0 1px 0 rgba(38,35,32,0.22)' }}
            >
              {item.categoryLabel}
            </span>

            <h3 className="font-condensed text-base sm:text-lg text-[#262320] leading-snug tracking-[-0.02em]">
              {item.title}
            </h3>

            <p className="font-body text-xs text-[#5A5550] mt-1.5 leading-relaxed">
              {item.subtitle}
            </p>

            <div className="mt-3 pt-2 border-t border-[#262320]/10 flex items-center justify-between text-xs text-[#6E6A64]">
              <span className="font-mono text-[10px]">{item.year}</span>
              <span className="font-hand text-lg text-[#262320]">
                view stamp →
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="wins-badges"
      aria-label="Wins and Badges"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex items-center justify-center overflow-hidden px-5 py-14 sm:px-10 sm:py-18 md:px-14 md:py-22"
    >
      {/* Subtle Slide Frame Border */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      <DottedCurvedPath className="pointer-events-none absolute top-[20%] right-[12%] w-[480px] opacity-40 -rotate-12 hidden lg:block" />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col gap-10">
        {/* =========================================================
            SECTION HEADER: Huge Pink Bubble Title "wins & badges"
           ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-hand text-2xl sm:text-3xl text-[#262320] -rotate-3">
                pinned on my wall ↓
              </span>
              <ThisIsArrow className="w-9 h-9 text-[#262320]" />
            </div>

            <h2
              className="font-bubble text-[#F28DB9] bubble-title-shadow lowercase select-none leading-[0.86] tracking-[-0.02em] text-[13vw] sm:text-[10vw] md:text-[84px] lg:text-[100px]"
              style={{
                WebkitTextStroke: '2px rgba(214, 102, 152, 0.28)',
              }}
            >
              wins &amp; badges
            </h2>
            <PinkSquiggle className="w-40 sm:w-52 h-auto mt-1" />
          </div>

          <div className="max-w-md">
            <p className="font-condensed text-lg sm:text-xl text-[#8A8580] tracking-[-0.04em] lowercase leading-snug">
              hackathon podiums, builder passes &amp; security credentials.
            </p>
            <p className="font-body text-xs text-[#6E6A64] mt-1">
              Edit placeholders anytime in the{' '}
              <code className="font-mono bg-[#FAF7F0] px-1.5 py-0.5 rounded border border-[#262320]/15">
                WINS_AND_BADGES
              </code>{' '}
              array at the top of{' '}
              <code className="font-mono">WinsBadgesSection.tsx</code>.
            </p>
          </div>
        </div>

        {/* =========================================================
            PINNED SCRAPBOOK BOARD GRID
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-2">
          {WINS_AND_BADGES.map((item, index) => (
            <div key={item.id} className="flex flex-col justify-between">
              {/* Handwritten annotation above/beside each pinned artifact */}
              <div
                className={`flex items-center gap-1.5 mb-2.5 ${
                  index % 2 === 0 ? 'justify-start pl-2' : 'justify-end pr-3'
                }`}
              >
                {index % 2 === 1 && <AboutDoodleArrow className="w-9 h-5" />}
                <span
                  className={`font-hand text-2xl text-[#262320] ${
                    index % 2 === 0 ? '-rotate-3' : 'rotate-2'
                  }`}
                >
                  {item.handwrittenNote}
                </span>
              </div>

              {renderArtifact(item)}
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          MODAL TO INSPECT ANY PINNED TICKET / BADGE / CERTIFICATE
         ========================================================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262320]/45 backdrop-blur-[2px]"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="win-badge-modal-title"
        >
          <div
            className="relative w-full max-w-md bg-[#FAF7F0] border-2 border-[#262320] rounded-2xl p-6 shadow-[8px_10px_0px_#262320] -rotate-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="scrapbook-tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-2 pointer-events-none" />

            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#EDE6D8] border border-[#262320]/30 flex items-center justify-center text-[#262320] hover:bg-[#F28DB9] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="font-hand text-2xl text-[#F28DB9] block mb-0.5">
              {selectedItem.handwrittenNote}
            </span>

            <h3
              id="win-badge-modal-title"
              className="font-condensed text-xl text-[#262320] tracking-[-0.02em] pr-6"
            >
              {selectedItem.title}
            </h3>

            <p className="font-body text-xs font-semibold text-[#8A8580] mt-1">
              {selectedItem.subtitle} · {selectedItem.year}
            </p>

            <p className="font-body text-sm text-[#3E3A35] leading-relaxed mt-4 bg-[#EDE6D8]/65 p-3.5 rounded-xl border border-[#262320]/15">
              {selectedItem.details}
            </p>

            <div className="mt-4 flex items-center justify-between text-xs text-[#6E6A64]">
              <span className="font-mono text-[11px]">
                SERIAL · {selectedItem.serialCode}
              </span>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-3.5 py-1.5 rounded-lg bg-[#262320] text-[#EDE6D8] font-body font-medium text-xs hover:bg-[#3A3633] cursor-pointer"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
