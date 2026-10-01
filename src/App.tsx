/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutMeSection } from './components/AboutMeSection';
import { ClosingSection } from './components/ClosingSection';
import { FloatingNav } from './components/FloatingNav';
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
    <main className="min-h-screen w-full bg-[#EDE6D8] text-[#3A3A3A] relative overflow-x-hidden">
      <FloatingNav />
      <HeroSection onOpenSayHi={() => setIsSayHiOpen(true)} />
      <OriginStorySection />
      <AboutMeSection onOpenSayHi={() => setIsSayHiOpen(true)} />
      <SkillsStackSection />
      <ProjectsSection />
      <WinsBadgesSection />
      <LearningLogSection />
      <ClosingSection onOpenSayHi={() => setIsSayHiOpen(true)} />
      <SayHiModal isOpen={isSayHiOpen} onClose={() => setIsSayHiOpen(false)} />
    </main>
  );
}
