import React, { useRef, useState } from 'react';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import {
  AboutDoodleArrow,
  DoodleStar,
  DottedCurvedPath,
  PinkSquiggle,
  StickyDoodleArrow,
  ThisIsArrow,
  TourGuideArrow,
} from './Doodles';

interface ProjectItem {
  id: string;
  name: string;
  shortTitle?: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  tinyPinkLabel: string;
  handwrittenCaption: string;
  cardStyle: 'polaroid' | 'film-strip' | 'phone-mockup' | 'ticket-stub' | 'sticky-note';
  rotationClass: string;
  imageSrc: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'usdx',
    name: 'USDX (Unified Sports Data Exchange)',
    description:
      'consent-driven data interoperability platform for Indian youth sports data, with a cybersecurity layer.',
    tags: ['React', 'Cybersecurity', 'Data Privacy'],
    liveUrl: 'https://usdxproject.vercel.app',
    tinyPinkLabel: 'cybersec + sports data',
    handwrittenCaption: 'consent-first architecture ↓',
    cardStyle: 'polaroid',
    rotationClass: '-rotate-[3.5deg]',
    imageSrc: '/src/assets/images/usdx_sports_cyber_preview_1790862159546.jpg',
  },
  {
    id: 'neuropractice',
    name: 'NeuroPractice-VR',
    description:
      'VR social-skills training tool for autistic teens and adults.',
    tags: ['WebXR / VR', 'AI Coaching', 'Accessibility'],
    liveUrl: 'https://neuro-practice-vr.vercel.app',
    githubUrl: 'https://github.com/abinethra/NeuroPractice-VR',
    tinyPinkLabel: 'vr + assistive ai',
    handwrittenCaption: 'immersive social practice!',
    cardStyle: 'film-strip',
    rotationClass: 'rotate-[3deg]',
    imageSrc: '/src/assets/images/neuropractice_vr_preview_1790862173016.jpg',
  },
  {
    id: 'finintel',
    name: 'FinIntel',
    description:
      'multi-agent financial intelligence system for retail investors.',
    tags: ['Multi-Agent AI', 'Python', 'FinTech'],
    liveUrl: 'https://fin-intel-olive.vercel.app',
    tinyPinkLabel: 'multi-agent system',
    handwrittenCaption: 'agents collaborating in real time ←',
    cardStyle: 'phone-mockup',
    rotationClass: '-rotate-[4deg]',
    imageSrc: '/src/assets/images/finintel_multiagent_preview_1790862186556.jpg',
  },
  {
    id: 'ecoblocks',
    name: 'EcoBlocks',
    description: 'eco intervention project.',
    tags: ['Sustainability', 'Full-Stack Web', 'Impact'],
    liveUrl: 'https://eco-blocks.vercel.app',
    tinyPinkLabel: 'eco intervention',
    handwrittenCaption: 'building greener cities ↗',
    cardStyle: 'ticket-stub',
    rotationClass: 'rotate-[2.5deg]',
    imageSrc:
      '/src/assets/images/ecoblocks_sustainability_preview_1790862197932.jpg',
  },
  {
    id: 'tiffinbox',
    name: 'Tiffinbox Stories',
    description: 'website for my cloud kitchen in ECR, Chennai.',
    tags: ['React', 'Frontend Craft', 'Vercel'],
    liveUrl: 'https://cloudkwebsite.vercel.app',
    tinyPinkLabel: 'real-world local biz',
    handwrittenCaption: 'from my cloud kitchen in ECR, Chennai!',
    cardStyle: 'sticky-note',
    rotationClass: '-rotate-[3deg]',
    imageSrc: '/src/assets/images/tiffinbox_stories_preview_1790862208818.jpg',
  },
];

const ProjectCardArtifact: React.FC<{ project: ProjectItem }> = ({
  project,
}) => {
  const primaryLinkRef = useRef<HTMLAnchorElement>(null);
  const [imgError, setImgError] = useState(false);

  const handleCardClick = () => {
    primaryLinkRef.current?.click();
  };

  const renderLinksAndTags = (isDarkSurface = false) => (
    <div className="mt-3 pt-2.5 border-t border-current/10 flex flex-col gap-2.5">
      {/* 2-3 Tech Tags */}
      <div className="flex flex-wrap items-center gap-1.5">
        {project.tags.map((tag, idx) => (
          <React.Fragment key={tag}>
            <span
              className={`font-mono text-[10.5px] font-medium ${
                isDarkSurface ? 'text-[#EDE6D8]/80' : 'text-[#5A5550]'
              }`}
            >
              {tag}
            </span>
            {idx < project.tags.length - 1 && (
              <span
                className={isDarkSurface ? 'text-[#F28DB9]' : 'text-[#8A8580]'}
                aria-hidden="true"
              >
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Small "live demo" / "github" pill links */}
      <div className="flex flex-wrap items-center gap-2">
        <a
          ref={primaryLinkRef}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F28DB9] hover:bg-[#ec74a9] text-[#262320] border border-[#262320] font-body text-[11px] font-bold tracking-tight transition-colors whitespace-nowrap shadow-[2px_2px_0px_#262320]"
        >
          <span>live demo</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-body text-[11px] font-bold tracking-tight transition-colors whitespace-nowrap border ${
              isDarkSurface
                ? 'bg-[#EDE6D8] hover:bg-white text-[#262320] border-[#EDE6D8]'
                : 'bg-[#262320] hover:bg-[#3A3633] text-[#EDE6D8] border-[#262320]'
            }`}
          >
            <Code2 className="w-3 h-3 text-[#F28DB9]" />
            <span>github</span>
          </a>
        )}
      </div>
    </div>
  );

  /* 1. POLAROID FRAME (USDX) */
  if (project.cardStyle === 'polaroid') {
    return (
      <div
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
        className={`group relative cursor-pointer transition-all duration-200 ease-out ${project.rotationClass} hover:rotate-0 hover:-translate-y-2.5 hover:scale-[1.02] hover:z-30`}
      >
        {/* Masking tape strip */}
        <div className="scrapbook-tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 -rotate-2 z-20 pointer-events-none" />

        <div className="bg-[#FAF7F0] p-3.5 pb-5 rounded-xl border border-[#262320]/20 shadow-[0_16px_36px_rgba(38,35,32,0.14)] group-hover:shadow-[0_24px_48px_rgba(38,35,32,0.22)]">
          {/* Polaroid photo window */}
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#262320] mb-3 border border-[#262320]/15">
            {!imgError ? (
              <img
                src={project.imageSrc}
                alt={project.name}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#322E2A] text-[#F28DB9] font-condensed text-sm p-4 text-center">
                {project.name}
              </div>
            )}
            <div className="absolute top-2 left-2 bg-[#262320]/85 text-[#F28DB9] px-2 py-0.5 rounded text-[10px] font-mono">
              POLAROID · 01
            </div>
          </div>

          {/* Tiny pink label */}
          <span
            className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-0.5"
            style={{ textShadow: '0 1px 0 rgba(38,35,32,0.25)' }}
          >
            {project.tinyPinkLabel}
          </span>

          <h3 className="font-condensed text-base sm:text-lg text-[#262320] leading-snug tracking-[-0.02em]">
            {project.name}
          </h3>
          <p className="font-body text-xs text-[#4A4640] leading-relaxed mt-1">
            {project.description}
          </p>

          {renderLinksAndTags(false)}
        </div>
      </div>
    );
  }

  /* 2. FILM-STRIP FRAME (NeuroPractice-VR) */
  if (project.cardStyle === 'film-strip') {
    return (
      <div
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
        className={`group relative cursor-pointer transition-all duration-200 ease-out ${project.rotationClass} hover:rotate-0 hover:-translate-y-2.5 hover:scale-[1.02] hover:z-30`}
      >
        {/* Masking tape strip */}
        <div className="scrapbook-tape absolute -top-3 right-10 w-20 h-5 rotate-3 z-20 pointer-events-none" />

        <div className="bg-[#23201E] text-[#EDE6D8] p-3.5 rounded-xl border-2 border-[#262320] shadow-[0_18px_38px_rgba(38,35,32,0.22)] group-hover:shadow-[0_26px_50px_rgba(38,35,32,0.3)]">
          {/* Top film sprocket holes */}
          <div
            className="flex items-center justify-between gap-1.5 pb-2 mb-2 border-b border-[#EDE6D8]/15"
            aria-hidden="true"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="w-3.5 h-2 rounded-[2px] bg-[#EDE6D8]/80 inline-block"
              />
            ))}
          </div>

          <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-[#151312] mb-3 border border-[#EDE6D8]/20">
            {!imgError ? (
              <img
                src={project.imageSrc}
                alt={project.name}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#F28DB9] font-condensed text-sm p-4 text-center">
                {project.name}
              </div>
            )}
            <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#F28DB9] bg-black/70 px-1.5 py-0.5 rounded">
              35MM · KODAK 400
            </span>
          </div>

          {/* Tiny pink label */}
          <span className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-0.5">
            {project.tinyPinkLabel}
          </span>

          <h3 className="font-condensed text-base sm:text-lg text-[#EDE6D8] leading-snug tracking-[-0.02em]">
            {project.name}
          </h3>
          <p className="font-body text-xs text-[#EDE6D8]/80 leading-relaxed mt-1">
            {project.description}
          </p>

          {renderLinksAndTags(true)}

          {/* Bottom film sprocket holes */}
          <div
            className="flex items-center justify-between gap-1.5 pt-2.5 mt-3 border-t border-[#EDE6D8]/15"
            aria-hidden="true"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="w-3.5 h-2 rounded-[2px] bg-[#EDE6D8]/80 inline-block"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* 3. PHONE MOCKUP (FinIntel) */
  if (project.cardStyle === 'phone-mockup') {
    return (
      <div
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
        className={`group relative cursor-pointer transition-all duration-200 ease-out ${project.rotationClass} hover:rotate-0 hover:-translate-y-2.5 hover:scale-[1.02] hover:z-30`}
      >
        <div className="bg-[#262320] p-2.5 rounded-[30px] border-2 border-[#3E3A35] shadow-[0_18px_40px_rgba(38,35,32,0.2)] group-hover:shadow-[0_26px_52px_rgba(38,35,32,0.28)]">
          {/* Phone Top Dynamic Island / Speaker */}
          <div className="flex justify-center pt-1 pb-2" aria-hidden="true">
            <div className="w-16 h-3.5 rounded-full bg-[#141210] flex items-center justify-end pr-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F28DB9]/70" />
            </div>
          </div>

          {/* Phone Screen */}
          <div className="bg-[#FAF7F0] rounded-[22px] overflow-hidden p-3">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#262320] mb-2.5 border border-[#262320]/15">
              {!imgError ? (
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#F28DB9] font-condensed text-sm">
                  {project.name}
                </div>
              )}
            </div>

            {/* Tiny pink label */}
            <span
              className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-0.5"
              style={{ textShadow: '0 1px 0 rgba(38,35,32,0.22)' }}
            >
              {project.tinyPinkLabel}
            </span>

            <h3 className="font-condensed text-base sm:text-lg text-[#262320] leading-snug tracking-[-0.02em]">
              {project.name}
            </h3>
            <p className="font-body text-xs text-[#4A4640] leading-relaxed mt-1">
              {project.description}
            </p>

            {renderLinksAndTags(false)}
          </div>

          {/* Phone Home Bar */}
          <div className="flex justify-center pt-2 pb-0.5" aria-hidden="true">
            <div className="w-20 h-1 rounded-full bg-[#EDE6D8]/40" />
          </div>
        </div>
      </div>
    );
  }

  /* 4. TICKET STUB (EcoBlocks) */
  if (project.cardStyle === 'ticket-stub') {
    return (
      <div
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
        className={`group relative cursor-pointer transition-all duration-200 ease-out ${project.rotationClass} hover:rotate-0 hover:-translate-y-2.5 hover:scale-[1.02] hover:z-30`}
      >
        <div className="relative bg-[#F7EFE0] border-2 border-[#262320] rounded-2xl p-4 shadow-[5px_7px_0px_#262320] group-hover:shadow-[8px_11px_0px_#F28DB9] overflow-hidden">
          {/* Ticket side punch cutouts */}
          <div
            className="pointer-events-none absolute top-1/2 -left-3.5 -translate-y-1/2 w-6 h-6 rounded-full bg-[#EDE6D8] border-2 border-[#262320]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/2 -right-3.5 -translate-y-1/2 w-6 h-6 rounded-full bg-[#EDE6D8] border-2 border-[#262320]"
            aria-hidden="true"
          />

          {/* Top Ticket Serial Header */}
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b-2 border-dashed border-[#262320]/30 text-[10px] font-mono text-[#6E6A64]">
            <span>ADMIT ONE · ECO-INTERVENTION</span>
            <span className="font-bold text-[#262320]">NO. 004</span>
          </div>

          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-5 aspect-square rounded-lg overflow-hidden bg-[#262320] border border-[#262320]/25">
              {!imgError ? (
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#F28DB9] font-condensed text-xs p-2 text-center">
                  {project.name}
                </div>
              )}
            </div>

            <div className="col-span-7">
              <span
                className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-0.5"
                style={{ textShadow: '0 1px 0 rgba(38,35,32,0.22)' }}
              >
                {project.tinyPinkLabel}
              </span>
              <h3 className="font-condensed text-base sm:text-lg text-[#262320] leading-snug tracking-[-0.02em]">
                {project.name}
              </h3>
              <p className="font-body text-xs text-[#4A4640] leading-relaxed mt-0.5">
                {project.description}
              </p>
            </div>
          </div>

          {renderLinksAndTags(false)}
        </div>
      </div>
    );
  }

  /* 5. STICKY NOTE (Tiffinbox Stories) */
  return (
    <div
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      className={`group relative cursor-pointer transition-all duration-200 ease-out ${project.rotationClass} hover:rotate-0 hover:-translate-y-2.5 hover:scale-[1.02] hover:z-30`}
    >
      {/* Masking tape strip */}
      <div className="scrapbook-tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-2 z-20 pointer-events-none" />

      <div className="relative bg-[#FFF5B8] p-4 rounded-lg border border-[#262320]/30 shadow-[0_16px_32px_rgba(38,35,32,0.14)] group-hover:shadow-[0_24px_44px_rgba(38,35,32,0.22)]">
        {/* Sticky note bottom-right corner fold */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tl from-[#d8cfa0] via-[#eee5b2] to-transparent rounded-tl-sm"
          aria-hidden="true"
        />

        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-[#262320] mb-3 border border-[#262320]/20">
          {!imgError ? (
            <img
              src={project.imageSrc}
              alt={project.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#F28DB9] font-condensed text-sm">
              {project.name}
            </div>
          )}
        </div>

        {/* Tiny pink label */}
        <span
          className="block font-body text-[11px] font-bold text-[#F28DB9] lowercase tracking-wide mb-0.5"
          style={{ textShadow: '0 1px 0 rgba(38,35,32,0.28)' }}
        >
          {project.tinyPinkLabel}
        </span>

        <h3 className="font-condensed text-base sm:text-lg text-[#262320] leading-snug tracking-[-0.02em]">
          {project.name}
        </h3>
        <p className="font-body text-xs text-[#3E3A35] leading-relaxed mt-1">
          {project.description}
        </p>

        {renderLinksAndTags(false)}
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Projects and Works"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex items-center justify-center overflow-hidden px-5 py-14 sm:px-10 sm:py-18 md:px-14 md:py-24"
    >
      {/* Subtle Slide Frame Border */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      {/* Decorative Dotted Curved Path across the background */}
      <DottedCurvedPath className="pointer-events-none absolute top-[24%] left-[18%] w-[640px] opacity-45 -rotate-6 hidden lg:block" />
      <DottedCurvedPath className="pointer-events-none absolute bottom-[20%] right-[16%] w-[520px] opacity-40 rotate-12 hidden lg:block" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* =========================================================
            DESKTOP / TABLET SCATTERED COLLAGE AROUND CENTRAL PINK BUBBLE HEADING
           ========================================================= */}
        <div className="flex flex-col gap-10">
          {/* TOP SCATTERED ROW: Project 1 (Polaroid - USDX) & Project 2 (Film-Strip - NeuroPractice-VR) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
            {/* Top-Left Card: USDX Polaroid */}
            <div className="md:col-span-5 lg:col-span-4 relative">
              <div className="flex items-center gap-2 mb-2 ml-2">
                <span className="font-hand text-2xl text-[#262320] -rotate-3">
                  {PROJECTS[0].handwrittenCaption}
                </span>
              </div>
              <ProjectCardArtifact project={PROJECTS[0]} />
            </div>

            {/* Top-Center Handwritten Tour Note & Doodle */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-center justify-center text-center px-4">
              <span className="font-hand text-2xl sm:text-3xl text-[#8A8580] -rotate-3">
                hover to inspect · click to launch live ↗
              </span>
              <TourGuideArrow className="w-32 h-auto mt-2 opacity-75 rotate-12" />
            </div>

            {/* Top-Right Card: NeuroPractice-VR Film Strip */}
            <div className="md:col-span-7 lg:col-span-4 relative">
              <div className="flex items-center justify-end gap-2 mb-2 mr-3">
                <span className="font-hand text-2xl text-[#262320] rotate-2">
                  {PROJECTS[1].handwrittenCaption}
                </span>
                <ThisIsArrow className="w-9 h-9 text-[#262320]" />
              </div>
              <ProjectCardArtifact project={PROJECTS[1]} />
            </div>
          </div>

          {/* =========================================================
              CENTER ROW: HUGE PINK BUBBLE HEADING "projects & works"
              + Project 3 (Phone Mockup - FinIntel) on Right
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-2 lg:my-4">
            {/* Huge Pink Bubble Heading in the Centre */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center text-center relative py-4">
              <DoodleStar
                className="pointer-events-none absolute -top-2 left-[12%] w-7 h-7 -rotate-12"
                color="#F28DB9"
              />
              <DoodleStar
                className="pointer-events-none absolute bottom-2 right-[10%] w-6 h-6 rotate-12"
                color="#3A3633"
              />

              <span className="font-condensed text-sm sm:text-base text-[#8A8580] tracking-[-0.04em] lowercase mb-1">
                shipped prototypes, hackathons &amp; real-world builds
              </span>

              <h2
                className="font-bubble text-[#F28DB9] bubble-title-shadow lowercase select-none leading-[0.86] tracking-[-0.02em] text-[13vw] sm:text-[11vw] md:text-[92px] lg:text-[108px] xl:text-[124px]"
                style={{
                  WebkitTextStroke: '2px rgba(214, 102, 152, 0.28)',
                }}
              >
                projects &amp; works
              </h2>

              <PinkSquiggle className="w-44 sm:w-56 h-auto mt-2" />

              <p className="font-hand text-2xl sm:text-3xl text-[#262320] -rotate-2 mt-2">
                built fast, built safe, shipped to production ★
              </p>
            </div>

            {/* Right-Center Card: FinIntel Phone Mockup */}
            <div className="lg:col-span-4 relative max-w-sm mx-auto lg:max-w-none w-full">
              <div className="flex items-center gap-1.5 mb-2 ml-3">
                <AboutDoodleArrow className="w-10 h-6" />
                <span className="font-hand text-2xl text-[#262320] -rotate-2">
                  {PROJECTS[2].handwrittenCaption}
                </span>
              </div>
              <ProjectCardArtifact project={PROJECTS[2]} />
            </div>
          </div>

          {/* =========================================================
              BOTTOM SCATTERED ROW: Project 4 (Ticket Stub - EcoBlocks)
              & Project 5 (Sticky Note - Tiffinbox Stories)
             ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Bottom-Left / Center-Left Card: EcoBlocks Ticket Stub */}
            <div className="md:col-span-6 lg:col-span-5 lg:col-start-2 relative">
              <ProjectCardArtifact project={PROJECTS[3]} />
              <div className="flex items-center gap-2 mt-2 ml-4">
                <StickyDoodleArrow className="w-12 h-9 rotate-180 -mt-3 text-[#262320]" />
                <span className="font-hand text-2xl text-[#262320] -rotate-2">
                  {PROJECTS[3].handwrittenCaption}
                </span>
              </div>
            </div>

            {/* Bottom-Right Card: Tiffinbox Stories Sticky Note */}
            <div className="md:col-span-6 lg:col-span-4 lg:col-start-8 relative">
              <div className="flex items-center justify-end gap-2 mb-2 mr-2">
                <span className="font-hand text-2xl text-[#262320] rotate-2">
                  {PROJECTS[4].handwrittenCaption}
                </span>
              </div>
              <ProjectCardArtifact project={PROJECTS[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
