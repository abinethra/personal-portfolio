import React, { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'wins-badges', label: 'Wins', href: '#wins-badges' },
  { id: 'learning-log', label: 'Log', href: '#learning-log' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const FloatingNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'story', 'about', 'skills', 'projects', 'wins-badges', 'learning-log', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            setActiveId(currentId === 'story' ? 'about' : currentId);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-40 flex justify-center px-3 pointer-events-none">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto flex items-center gap-0.5 sm:gap-1 px-2 py-1.5 rounded-full bg-[#EDE6D8]/90 backdrop-blur-md border border-[#3A3A3A]/15 shadow-[0_8px_24px_rgba(58,58,58,0.1)] max-w-full overflow-x-auto no-scrollbar"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveId(item.id)}
              className={`px-2.5 sm:px-3.5 py-1 rounded-full font-body text-[11px] sm:text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-[#F28DB9] text-[#3A3A3A] border border-[#3A3A3A]/50 shadow-[1px_2px_0px_#3A3A3A]'
                  : 'text-[#8A8580] hover:text-[#3A3A3A]'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
