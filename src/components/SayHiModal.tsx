import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, Sparkles, Terminal, X } from 'lucide-react';
import { PinkSquiggle } from './Doodles';

interface SayHiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SayHiModal: React.FC<SayHiModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<'hackathon' | 'cybersec' | 'ai' | 'chat'>('hackathon');
  const [senderName, setSenderName] = useState('');
  const [noteText, setNoteText] = useState('');
  const [sentState, setSentState] = useState(false);

  if (!isOpen) return null;

  const email = 'sreeabinethra7@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendNote = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectMap = {
      hackathon: 'Hackathon Team-Up Invite!',
      cybersec: 'Cybersecurity Collab / CTF',
      ai: 'Building AI Software Together',
      chat: 'Hey Abi! Quick Networking Hello',
    };
    const subject = encodeURIComponent(subjectMap[selectedInterest]);
    const body = encodeURIComponent(
      `Hi Abi,\n\n${noteText || "Loved your portfolio! Would love to team up for an upcoming hackathon or connect on AI & Cybersecurity projects."}\n\n— ${senderName || 'A fellow builder'}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSentState(true);
    setTimeout(() => setSentState(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#262320]/45 backdrop-blur-[2px] animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="say-hi-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#F7F2E7] border-2 border-[#262320] rounded-2xl p-6 md:p-8 shadow-[8px_10px_0px_#262320] -rotate-1 transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Masking tape at top center */}
        <div className="scrapbook-tape absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 rotate-2 pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#EDE6D8] border border-[#262320]/30 flex items-center justify-center text-[#262320] hover:bg-[#F28DB9] hover:border-[#262320] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Handwritten kicker */}
        <p className="font-hand text-2xl text-[#8A8580] -rotate-2 mb-1">
          let&apos;s build something cool together!
        </p>

        {/* Main modal heading */}
        <h2
          id="say-hi-title"
          className="font-condensed text-2xl md:text-3xl text-[#262320] uppercase tracking-tight leading-none"
        >
          Hackathon Team-Up &amp; Connect
        </h2>
        <PinkSquiggle className="w-36 h-5 mt-1 mb-4" />

        <p className="font-body text-sm text-[#3E3A35] leading-relaxed mb-5">
          I&apos;m <strong>Abi Nethra</strong> — a 2nd-year B.Tech AI &amp; Data Science student building AI software and exploring cybersecurity. Always down for 24h/48h hackathons, CTFs, and ambitious builder teams!
        </p>

        {/* Interactive topic selector (functional segmented buttons) */}
        <div className="mb-4">
          <span className="block font-hand text-lg text-[#5A5550] mb-1.5">
            What are we teaming up on?
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#EDE6D8] rounded-xl border border-[#262320]/15">
            {(
              [
                { id: 'hackathon', label: 'Hackathon' },
                { id: 'ai', label: 'AI Build' },
                { id: 'cybersec', label: 'Cybersec' },
                { id: 'chat', label: 'Say Hi' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedInterest(tab.id)}
                className={`py-1.5 px-2.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedInterest === tab.id
                    ? 'bg-[#F28DB9] text-[#262320] font-semibold shadow-xs border border-[#262320]/40'
                    : 'text-[#5A5550] hover:text-[#262320]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick note form */}
        <form onSubmit={handleSendNote} className="space-y-3 mb-5">
          <div>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your name / team / hackathon name"
              className="w-full px-3.5 py-2 text-sm bg-[#EDE6D8]/70 border border-[#262320]/25 rounded-xl text-[#262320] placeholder:text-[#8A8580] focus:outline-none focus:border-[#262320]"
            />
          </div>
          <div>
            <textarea
              rows={2}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Drop a quick note (e.g., 'Need an AI + Cybersec builder for ETHGlobal / SIH!')"
              className="w-full px-3.5 py-2 text-sm bg-[#EDE6D8]/70 border border-[#262320]/25 rounded-xl text-[#262320] placeholder:text-[#8A8580] focus:outline-none focus:border-[#262320] resize-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F28DB9] hover:bg-[#ec76aa] text-[#262320] font-semibold text-xs uppercase tracking-wider rounded-xl border-2 border-[#262320] shadow-[3px_3px_0px_#262320] active:translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{sentState ? 'Opening Mail App...' : 'Send Note to Abi'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-[#EDE6D8] hover:bg-[#e2d9c8] text-[#262320] font-medium text-xs rounded-xl border border-[#262320]/40 transition-colors whitespace-nowrap cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Bottom metadata line (clean unboxed text with separators) */}
        <div className="pt-3 border-t border-[#262320]/15 flex flex-wrap items-center justify-between gap-2 text-xs text-[#6E6A64]">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#262320]" />
            <span>B.Tech AI &amp; DS (2nd Year)</span>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/sree-abi-nethra-i"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#262320] underline decoration-[#F28DB9]"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://github.com/abinethra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#262320] underline decoration-[#F28DB9]"
            >
              GitHub
            </a>
          </div>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1 text-[#262320] font-medium underline decoration-[#F28DB9] decoration-2 underline-offset-2 hover:text-[#d45d91]"
          >
            <span>Direct Mail</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
