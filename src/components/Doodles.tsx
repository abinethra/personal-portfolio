import React, { useEffect, useId, useRef, useState } from 'react';

function useSvgDrawOnView() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const node = svgRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDrawn(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { svgRef, isDrawn };
}

/**
 * Hand-drawn curved dotted arrow from top-left tour guide note toward the center hero
 */
export const TourGuideArrow: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();
  const maskId = useId();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <path
            d="M12 14C38 52 84 78 168 76"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            pathLength={1}
            className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
          />
        </mask>
      </defs>
      <path
        d="M12 14C38 52 84 78 158 76"
        stroke="#3A3A3A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="5 6"
        mask={`url(#${maskId})`}
      />
      <path
        d="M145 64C153 70 160 74 166 76C159 80 150 85 143 91"
        stroke="#3A3A3A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
        style={{ transitionDelay: '420ms' }}
      />
    </svg>
  );
};

/**
 * Hand-drawn loop arrow pointing down from the "This is" annotation to the giant name
 */
export const ThisIsArrow: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 80 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 8C38 10 54 25 46 42C40 54 24 46 30 34C36 22 58 36 56 64"
        stroke="#3A3A3A"
        strokeWidth="2.2"
        strokeLinecap="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
      />
      <path
        d="M46 55L56 66L65 54"
        stroke="#3A3A3A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
        style={{ transitionDelay: '350ms' }}
      />
    </svg>
  );
};

/**
 * Hand-drawn doodle arrow for the sticky note ("open to hackathon teams! say hi ↓")
 */
export const StickyDoodleArrow: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 110 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M84 10C96 34 82 66 24 76"
        stroke="#3A3A3A"
        strokeWidth="2.3"
        strokeLinecap="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
      />
      <path
        d="M36 64L19 77L39 86"
        stroke="#3A3A3A"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
        style={{ transitionDelay: '380ms' }}
      />
    </svg>
  );
};

/**
 * Decorative hand-drawn pink squiggle underline / accent
 */
export const PinkSquiggle: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 160 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 15C22 5 36 21 54 12C72 3 88 20 106 11C124 2 138 19 156 9"
        stroke="#F28DB9"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
      />
    </svg>
  );
};

/**
 * Hand-drawn curved dotted path across the background
 */
export const DottedCurvedPath: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();
  const maskId = useId();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <path
            d="M8 122C68 32 152 18 204 68C256 118 288 82 312 14"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            pathLength={1}
            className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
          />
        </mask>
      </defs>
      <path
        d="M8 122C68 32 152 18 204 68C256 118 288 82 312 14"
        stroke="#8A8580"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 8"
        opacity="0.55"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
};

/**
 * Small hand-drawn scribble star / asterisk doodle
 */
export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F28DB9',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 3V33M4 18H32M7 7L29 29M29 7L7 29"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
      />
    </svg>
  );
};

/**
 * Dotted hand-drawn squiggle path with loop and arrow connecting "day 1 coder" and "now" passport frames
 */
export const PassportSquiggleArrow: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();
  const maskId = useId();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 260 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <path
            d="M10 42C52 10 108 18 118 58C126 88 86 98 92 66C98 34 166 28 202 68C222 90 236 94 252 92"
            stroke="white"
            strokeWidth="14"
            strokeLinecap="round"
            pathLength={1}
            className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
          />
        </mask>
      </defs>
      <path
        d="M10 42C52 10 108 18 118 58C126 88 86 98 92 66C98 34 166 28 202 68C222 90 236 94 246 92"
        stroke="#3A3A3A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="5 7"
        mask={`url(#${maskId})`}
      />
      <path
        d="M232 78C239 84 246 89 251 92C244 96 236 102 229 108"
        stroke="#F28DB9"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
        style={{ transitionDelay: '450ms' }}
      />
      <path
        d="M230 80L248 92L231 105"
        stroke="#3A3A3A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
        style={{ transitionDelay: '520ms' }}
      />
    </svg>
  );
};

/**
 * Hand-drawn curved arrow for the About Me slide annotations
 */
export const AboutDoodleArrow: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { svgRef, isDrawn } = useSvgDrawOnView();
  const maskId = useId();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <path
            d="M104 12C76 6 38 20 16 58"
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            pathLength={1}
            className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
          />
        </mask>
      </defs>
      <path
        d="M104 12C76 6 38 20 18 54"
        stroke="#F28DB9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
        mask={`url(#${maskId})`}
      />
      <path
        d="M14 39L16 57L33 50"
        stroke="#F28DB9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={`draw-stroke ${isDrawn ? 'is-drawn' : ''}`}
        style={{ transitionDelay: '350ms' }}
      />
    </svg>
  );
};
