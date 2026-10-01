/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutMeSection } from './components/AboutMeSection';
import { HeroSection } from './components/HeroSection';
import { LearningLogSection } from './components/LearningLogSection';
import { OriginStorySection } from './components/OriginStorySection';
import { ProjectsSection } from './components/ProjectsSection';
import { SayHiModal } from './components/SayHiModal';
import { SkillsStackSection } from './components/SkillsStackSection';
import { WinsBadgesSection } from './components/WinsBadgesSection';

export default function App() {
  const [isSayHiOpen, setIsSayHiOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-[#EDE6D8] text-[#262320] relative overflow-x-hidden">
      <HeroSection onOpenSayHi={() => setIsSayHiOpen(true)} />
      <OriginStorySection />
      <AboutMeSection onOpenSayHi={() => setIsSayHiOpen(true)} />
      <SkillsStackSection />
      <ProjectsSection />
      <WinsBadgesSection />
      <LearningLogSection />
      <SayHiModal isOpen={isSayHiOpen} onClose={() => setIsSayHiOpen(false)} />
    </main>
  );
}
