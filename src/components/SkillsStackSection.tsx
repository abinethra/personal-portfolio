import React, { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import {
  DoodleStar,
  DottedCurvedPath,
  PinkSquiggle,
  TourGuideArrow,
} from './Doodles';

interface SkillBar {
  name: string;
  level: number;
  category: 'ai/ml' | 'web' | 'security' | 'tools';
  note: string;
}

const SKILL_BARS: SkillBar[] = [
  {
    name: 'Python',
    level: 94,
    category: 'ai/ml',
    note: 'Primary language for AI agents, ML pipelines, automation & security scripts',
  },
  {
    name: 'Machine Learning',
    level: 88,
    category: 'ai/ml',
    note: 'Model training, fine-tuning, RAG architectures & evaluation workflows',
  },
  {
    name: 'Web Development',
    level: 86,
    category: 'web',
    note: 'Full-stack React, TypeScript & Node.js interfaces built for fast hackathon demos',
  },
  {
    name: 'Cybersecurity',
    level: 82,
    category: 'security',
    note: 'Network traffic inspection, web app pentesting, threat modeling & secure AI',
  },
  {
    name: 'Data Analysis',
    level: 90,
    category: 'ai/ml',
    note: 'Exploratory analysis, feature engineering & messy dataset wrangling',
  },
  {
    name: 'Databases (SQL)',
    level: 85,
    category: 'web',
    note: 'Relational schema design, query optimization & document stores',
  },
];

interface TechSticker {
  name: string;
  category: 'ai/ml' | 'web' | 'security' | 'tools';
  style: 'sticker-dark' | 'sticker-pink' | 'tape-label' | 'tag-paper';
  rotate: string;
}

const TECH_GROUPS: {
  id: 'ai/ml' | 'web' | 'security' | 'tools';
  handLabel: string;
  annotationAngle: string;
  items: TechSticker[];
}[] = [
  {
    id: 'ai/ml',
    handLabel: 'ai/ml',
    annotationAngle: '-rotate-6',
    items: [
      {
        name: 'Python',
        category: 'ai/ml',
        style: 'sticker-dark',
        rotate: '-rotate-3',
      },
      {
        name: 'TensorFlow/PyTorch',
        category: 'ai/ml',
        style: 'sticker-pink',
        rotate: 'rotate-2',
      },
    ],
  },
  {
    id: 'web',
    handLabel: 'web',
    annotationAngle: 'rotate-3',
    items: [
      {
        name: 'React',
        category: 'web',
        style: 'sticker-pink',
        rotate: '-rotate-2',
      },
      {
        name: 'Node.js',
        category: 'web',
        style: 'tag-paper',
        rotate: 'rotate-3',
      },
      {
        name: 'SQL',
        category: 'web',
        style: 'tape-label',
        rotate: '-rotate-4',
      },
      {
        name: 'MongoDB',
        category: 'web',
        style: 'sticker-dark',
        rotate: 'rotate-2',
      },
    ],
  },
  {
    id: 'security',
    handLabel: 'security',
    annotationAngle: '-rotate-4',
    items: [
      {
        name: 'Linux',
        category: 'security',
        style: 'sticker-dark',
        rotate: 'rotate-3',
      },
      {
        name: 'Burp Suite/Wireshark',
        category: 'security',
        style: 'sticker-pink',
        rotate: '-rotate-2',
      },
    ],
  },
  {
    id: 'tools',
    handLabel: 'tools',
    annotationAngle: 'rotate-6',
    items: [
      {
        name: 'Git',
        category: 'tools',
        style: 'tape-label',
        rotate: '-rotate-3',
      },
      {
        name: 'Vercel',
        category: 'tools',
        style: 'tag-paper',
        rotate: 'rotate-4',
      },
    ],
  },
];

export const SkillsStackSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animateBars, setAnimateBars] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'ai/ml' | 'web' | 'security' | 'tools'
  >('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillBar>(SKILL_BARS[0]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateBars(true);
          }
        });
      },
      { threshold: 0.22 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleReplayBars = () => {
    setAnimateBars(false);
    setTimeout(() => setAnimateBars(true), 80);
  };

  const getStickerClasses = (
    style: TechSticker['style'],
    isHighlighted: boolean
  ) => {
    const ring = isHighlighted
      ? 'ring-2 ring-[#F28DB9] scale-[1.05]'
      : 'opacity-95 hover:scale-[1.05]';

    switch (style) {
      case 'sticker-dark':
        return `${ring} bg-[#262320] text-[#EDE6D8] border-2 border-[#FAF7F0] shadow-[3px_5px_12px_rgba(38,35,32,0.18)] rounded-xl px-3.5 py-2`;
      case 'sticker-pink':
        return `${ring} bg-[#F28DB9] text-[#262320] border-2 border-[#262320] shadow-[3px_4px_0px_#262320] rounded-xl px-3.5 py-2`;
      case 'tape-label':
        return `${ring} scrapbook-tape bg-[#FFF8D6]/90 text-[#262320] border border-[#262320]/30 shadow-[2px_4px_10px_rgba(38,35,32,0.1)] rounded-sm px-4 py-1.5`;
      case 'tag-paper':
      default:
        return `${ring} bg-[#FAF7F0] text-[#262320] border-2 border-[#262320]/75 shadow-[3px_4px_0px_rgba(138,133,128,0.45)] rounded-lg px-3.5 py-2`;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-label="Skills and Tech Stack"
      className="relative min-h-screen w-full bg-[#EDE6D8] text-[#262320] flex items-center justify-center overflow-hidden px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
    >
      {/* Subtle Slide Frame Border */}
      <div
        className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[28px] border border-[#262320]/[0.08] shadow-[inset_0_0_80px_rgba(138,133,128,0.12)]"
        aria-hidden="true"
      />

      {/* Background Dotted Curved Path */}
      <DottedCurvedPath className="pointer-events-none absolute bottom-[12%] left-[38%] w-[360px] opacity-40 rotate-12 hidden lg:block" />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col justify-between gap-10">
        {/* =========================================================
            TOP HEADER AREA: Big Grey Condensed Heading (Second Half Larger)
            + Short Paragraph of Rhetorical Questions in Small Grey Text
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block font-hand text-2xl sm:text-3xl text-[#262320] -rotate-2 mb-1">
              under the hood ↓
            </span>

            {/* Big grey condensed heading: second half significantly larger like reference */}
            <h2 className="font-condensed text-[#8A8580] tracking-[-0.04em] lowercase">
              <span className="block text-2xl sm:text-4xl md:text-[42px] leading-[1.02]">
                it&apos;s not just coding,
              </span>
              <span className="block text-4xl sm:text-6xl md:text-[68px] lg:text-[80px] leading-[0.93] text-[#78736E] mt-0.5">
                it&apos;s building things that matter.
              </span>
            </h2>
            <PinkSquiggle className="w-40 sm:w-52 h-auto mt-2" />
          </div>

          {/* Short paragraph of rhetorical questions in small grey text */}
          <div className="lg:col-span-4 lg:pb-2">
            <p className="font-body text-xs sm:text-sm text-[#8A8580] leading-[1.65] max-w-sm">
              how do you make AI trustworthy? how do you protect data people
              never meant to share? how do you ship it before the demo?
            </p>
          </div>
        </div>

        {/* =========================================================
            MAIN ASYMMETRIC COLLAGE:
            Left: Pink Animated Bar Chart + Giant Outlined Pink "5+"
            Right: Scrapbook-Style "Tech Stack" Collage grouped by
                   "ai/ml", "web", "security", "tools"
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT SIDE (7 cols): Pink Animated Skill Bar Chart + Giant Outlined "5+" */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 items-stretch">
            {/* Pink Animated Bar Chart Card */}
            <div className="relative flex-1 bg-[#FAF7F0]/90 border-2 border-[#262320]/18 rounded-2xl p-5 sm:p-6 shadow-[0_14px_34px_rgba(38,35,32,0.08)] -rotate-[0.8deg]">
              {/* Masking tape strip */}
              <div className="scrapbook-tape absolute -top-3 left-12 w-24 h-5 -rotate-2 pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-5">
                <div>
                  <span className="font-hand text-2xl text-[#8A8580] -rotate-2 block leading-none">
                    skill radar / proficiency
                  </span>
                  <h3 className="font-condensed text-lg sm:text-xl text-[#262320] tracking-[-0.03em]">
                    what i bring to the table
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleReplayBars}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EDE6D8] hover:bg-[#F28DB9]/40 text-[#262320] text-xs font-body font-medium border border-[#262320]/20 transition-colors cursor-pointer whitespace-nowrap"
                  title="Replay bar chart animation"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>replay</span>
                </button>
              </div>

              {/* Animated Horizontal Pink Bars (compositor-only scaleX transform) */}
              <div className="space-y-3.5">
                {SKILL_BARS.map((skill, idx) => {
                  const isSelected = selectedSkill.name === skill.name;
                  const isDimmed =
                    activeCategory !== 'all' &&
                    skill.category !== activeCategory;

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      className={`w-full text-left group cursor-pointer transition-opacity duration-150 ${
                        isDimmed ? 'opacity-45' : 'opacity-100'
                      }`}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="font-body text-xs sm:text-sm font-bold text-[#262320] group-hover:text-[#d45b90] transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-[#8A8580] tabular-nums">
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        className={`w-full h-5 sm:h-6 rounded-full bg-[#EDE6D8] border p-0.5 overflow-hidden transition-colors ${
                          isSelected
                            ? 'border-[#262320]'
                            : 'border-[#262320]/20'
                        }`}
                      >
                        <div
                          className="h-full rounded-full bg-[#F28DB9] border border-[#262320]/40 origin-left transition-transform duration-700 ease-out relative"
                          style={{
                            width: `${skill.level}%`,
                            transform: animateBars ? 'scaleX(1)' : 'scaleX(0)',
                            transitionDelay: `${idx * 90}ms`,
                          }}
                        >
                          {/* Subtle glossy highlight line on each pink bar */}
                          <div className="absolute inset-x-2 top-0.5 h-1 rounded-full bg-white/45" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Interactive footnote showing selected skill context */}
              <div className="mt-5 pt-3 border-t border-[#262320]/12 flex items-center justify-between gap-2 text-xs text-[#6E6A64]">
                <p className="font-body leading-snug">
                  <strong className="text-[#262320]">
                    {selectedSkill.name}:
                  </strong>{' '}
                  {selectedSkill.note}
                </p>
              </div>
            </div>

            {/* GIANT OUTLINED PINK DECORATIVE NUMBER "5+" with tiny label "projects shipped" */}
            <div className="sm:w-[190px] md:w-[215px] flex flex-col items-center justify-center bg-[#FAF7F0]/65 border border-dashed border-[#262320]/25 rounded-2xl p-5 relative rotate-[1.5deg] shrink-0">
              <DoodleStar
                className="pointer-events-none absolute top-3 right-3 w-5 h-5 rotate-12"
                color="#F28DB9"
              />

              <span className="font-hand text-xl text-[#8A8580] -rotate-6 mb-1">
                and counting!
              </span>

              {/* Giant Outlined Pink Decorative Number "5+" */}
              <div
                className="font-bubble text-[104px] sm:text-[116px] md:text-[132px] leading-[0.82] select-none tracking-tight my-1"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '3.5px #F28DB9',
                  filter: 'drop-shadow(3px 5px 0px rgba(38, 35, 32, 0.14))',
                }}
                aria-label="5 plus projects shipped"
              >
                5+
              </div>

              {/* Tiny label "projects shipped" */}
              <span className="font-body text-xs font-bold tracking-wide text-[#262320] lowercase mt-1">
                projects shipped
              </span>

              <span className="font-hand text-lg text-[#8A8580] mt-2 text-center leading-tight">
                across ai, data &amp; security
              </span>
            </div>
          </div>

          {/* RIGHT SIDE (5 cols): Scrapbook-Style "Tech Stack" Collage */}
          <div className="lg:col-span-5 relative bg-[#EDE6D8] border-2 border-[#262320]/15 rounded-2xl p-5 sm:p-6 shadow-[inset_0_0_40px_rgba(138,133,128,0.1)] flex flex-col justify-between">
            {/* Top-right masking tape */}
            <div className="scrapbook-tape absolute -top-3 right-10 w-24 h-5 rotate-3 pointer-events-none" />

            {/* Collage Header + Category Filter Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="font-hand text-2xl text-[#8A8580] -rotate-2 block leading-none">
                  stickers, tags &amp; tape
                </span>
                <h3 className="font-condensed text-lg sm:text-xl text-[#262320] tracking-[-0.03em]">
                  tech stack collage
                </h3>
              </div>

              {/* Interactive filter buttons for categories */}
              <div className="flex items-center gap-1 p-1 bg-[#FAF7F0] rounded-lg border border-[#262320]/15">
                {(['all', 'ai/ml', 'web', 'security', 'tools'] as const).map(
                  (cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`px-2 py-1 text-[11px] font-body font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        activeCategory === cat
                          ? 'bg-[#F28DB9] text-[#262320] font-bold'
                          : 'text-[#6E6A64] hover:text-[#262320]'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* 4 Grouped Clusters with Tiny Handwritten Labels: "ai/ml", "web", "security", "tools" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
              {TECH_GROUPS.map((group) => {
                const isGroupActive =
                  activeCategory === 'all' || activeCategory === group.id;

                return (
                  <div
                    key={group.id}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === group.id ? 'all' : group.id
                      )
                    }
                    className={`relative p-3.5 rounded-xl border border-dashed border-[#262320]/25 bg-[#FAF7F0]/55 transition-all cursor-pointer ${
                      isGroupActive
                        ? 'opacity-100 shadow-xs'
                        : 'opacity-40 hover:opacity-75'
                    }`}
                  >
                    {/* Tiny Handwritten Category Label */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`inline-block font-hand text-2xl font-bold text-[#262320] bg-[#F28DB9]/35 px-2 py-0.2 rounded-sm ${group.annotationAngle}`}
                      >
                        {group.handLabel}
                      </span>
                      <span className="font-mono text-[10px] text-[#8A8580]">
                        /{group.items.length}
                      </span>
                    </div>

                    {/* Stickers, Tags & Tape Labels */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className={`inline-flex items-center gap-2 font-body text-xs sm:text-[13px] font-bold transition-transform duration-150 select-none ${
                            item.rotate
                          } ${getStickerClasses(
                            item.style,
                            activeCategory === group.id
                          )}`}
                        >
                          {item.style === 'tag-paper' && (
                            <span
                              className="w-2 h-2 rounded-full bg-[#EDE6D8] border border-[#262320]/60 shrink-0"
                              aria-hidden="true"
                            />
                          )}
                          <span className="whitespace-nowrap">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom handwritten scrapbook caption */}
            <div className="mt-4 pt-2.5 border-t border-[#262320]/10 flex items-center justify-between text-xs text-[#6E6A64]">
              <span className="font-hand text-xl text-[#262320] -rotate-1">
                click any group to filter the chart ←
              </span>
              <TourGuideArrow className="w-14 h-7 rotate-180 opacity-60 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
