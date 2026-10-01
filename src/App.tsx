/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { SayHiModal } from './components/SayHiModal';

export default function App() {
  const [isSayHiOpen, setIsSayHiOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-[#EDE6D8] text-[#262320] relative overflow-x-hidden">
      <HeroSection onOpenSayHi={() => setIsSayHiOpen(true)} />
      <SayHiModal isOpen={isSayHiOpen} onClose={() => setIsSayHiOpen(false)} />
    </main>
  );
}
