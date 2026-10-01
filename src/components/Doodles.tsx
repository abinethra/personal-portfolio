import React from 'react';

/**
 * Hand-drawn curved dotted arrow from top-left tour guide note toward the center hero
 */
export const TourGuideArrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 14C38 52 84 78 158 76"
      stroke="#3A3633"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeDasharray="5 6"
    />
    <path
      d="M145 64C153 70 160 74 166 76C159 80 150 85 143 91"
      stroke="#3A3633"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Hand-drawn loop arrow pointing down from the "This is" annotation to the giant name
 */
export const ThisIsArrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 80 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M18 8C38 10 54 25 46 42C40 54 24 46 30 34C36 22 58 36 56 64"
      stroke="#3A3633"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M46 55L56 66L65 54"
      stroke="#3A3633"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Hand-drawn doodle arrow for the sticky note ("open to hackathon teams! say hi ↓")
 */
export const StickyDoodleArrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 110 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M84 10C96 34 82 66 24 76"
      stroke="#3A3633"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M36 64L19 77L39 86"
      stroke="#3A3633"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Decorative hand-drawn pink squiggle underline / accent
 */
export const PinkSquiggle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
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
    />
  </svg>
);

/**
 * Hand-drawn curved dotted path across the background
 */
export const DottedCurvedPath: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 320 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 122C68 32 152 18 204 68C256 118 288 82 312 14"
      stroke="#8A8580"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 8"
      opacity="0.55"
    />
  </svg>
);

/**
 * Small hand-drawn scribble star / asterisk doodle
 */
export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F28DB9',
}) => (
  <svg
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
    />
  </svg>
);
