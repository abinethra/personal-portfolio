/**
 * ============================================================================
 * CENTRAL EDITABLE PORTFOLIO DATA FOR ABI NETHRA
 * Update your projects, hackathon wins, certifications, learning log posts,
 * skills, and contact links here.
 * ============================================================================
 */

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  tinyPinkLabel: string;
  handwrittenCaption: string;
  cardStyle:
    | 'polaroid'
    | 'film-strip'
    | 'phone-mockup'
    | 'ticket-stub'
    | 'sticky-note';
  rotationClass: string;
  imageSrc: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
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
    rotationClass: '-rotate-[2.5deg] sm:-rotate-[3.5deg]',
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
    rotationClass: 'rotate-[2deg] sm:rotate-[3deg]',
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
    rotationClass: '-rotate-[2.5deg] sm:-rotate-[4deg]',
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
    rotationClass: 'rotate-[2deg] sm:rotate-[2.5deg]',
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
    rotationClass: '-rotate-[2deg] sm:-rotate-[3deg]',
    imageSrc: '/src/assets/images/tiffinbox_stories_preview_1790862208818.jpg',
  },
];

export interface WinOrBadgeItem {
  id: string;
  artifactType:
    | 'event-ticket'
    | 'lanyard-badge'
    | 'certificate-card'
    | 'stamp-card';
  categoryLabel: string;
  title: string; // e.g. "[Hackathon Name], [Result/Position], [Year]"
  subtitle: string;
  year: string;
  handwrittenNote: string;
  details: string;
  rotationClass: string;
  serialCode: string;
}

export const WINS_AND_BADGES_DATA: WinOrBadgeItem[] = [
  {
    id: 'win-1',
    artifactType: 'event-ticket',
    categoryLabel: 'hackathon win',
    title: '[Hackathon Name], [Result/Position], [Year]',
    subtitle: 'AI & Cybersecurity Track · 36-Hour Sprint',
    year: '[Year]',
    handwrittenNote: 'zero sleep, shipped with 5 mins left!',
    details:
      'Built and demoed an end-to-end working prototype under tight hackathon constraints. Edit this placeholder in WINS_AND_BADGES_DATA.',
    rotationClass: '-rotate-[2deg] sm:-rotate-[3deg]',
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
      'Collaborated on multi-agent AI architecture and live security validation during the finals round. Edit this placeholder in WINS_AND_BADGES_DATA.',
    rotationClass: 'rotate-[2deg] sm:rotate-[2.5deg]',
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
      'Hands-on certification covering threat modeling, packet inspection, web app vulnerabilities, and secure systems engineering.',
    rotationClass: '-rotate-[1.5deg] sm:-rotate-[2deg]',
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
      'Credential in supervised/unsupervised learning, deep neural networks, and production model evaluation.',
    rotationClass: 'rotate-[2deg] sm:rotate-[3.5deg]',
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
      'Designed and deployed a full-stack application focused on real-world usability and data privacy.',
    rotationClass: 'rotate-[1.5deg] sm:rotate-[2deg]',
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
      'Practical labs in offensive security testing, Burp Suite workflows, and securing modern web APIs.',
    rotationClass: '-rotate-[1.8deg] sm:-rotate-[2.5deg]',
    serialCode: 'CRT-06',
  },
];

export interface LearningLogEntry {
  id: string;
  date: string;
  readTime: string;
  topicTag: string;
  title: string;
  summary: string;
  fullContent: string[];
  rotationClass: string;
  handwrittenMarginNote: string;
}

export const LEARNING_LOG_DATA: LearningLogEntry[] = [
  {
    id: 'first-hackathon',
    date: '[Month Year]',
    readTime: '3 min read',
    topicTag: 'hackathons',
    title: 'what I learned from my first hackathon',
    summary:
      'Why scoping down to one killer workflow beats building ten half-working features at 3 a.m.—and how to pitch when your demo environment is on fire.',
    fullContent: [
      'Walking into my first hackathon, I thought winning meant writing the most complex architecture possible in 36 hours. By hour 18, half our API routes were breaking and we still did not have a working frontend flow.',
      'The biggest lesson? Scope down ruthlessly to the single core problem you are solving. Judges and users do not care about five boilerplate microservices—they care whether the core AI workflow actually works live on stage.',
      'Now, every hackathon I join starts with a 2-hour architecture lock-in: one clear problem, a clean data pipeline, secure defaults, and a demo flow we start rehearsing 4 hours before submission.',
    ],
    rotationClass: '-rotate-[1.5deg] sm:-rotate-[2deg]',
    handwrittenMarginNote: 'note #01',
  },
  {
    id: 'attack-my-own-app',
    date: '[Month Year]',
    readTime: '4 min read',
    topicTag: 'cybersecurity',
    title: "how I'd attack my own app (and then fix it)",
    summary:
      'Putting on a red-team hat to test my own AI & web prototypes—from prompt injection and leaked tokens to broken object-level authorization.',
    fullContent: [
      'When you build AI apps fast, it is dangerously easy to trust user inputs. Once I started exploring cybersecurity with tools like Burp Suite and Wireshark, I went back and audited my own earlier projects.',
      'The first things I looked for: indirect prompt injection inside RAG context windows, overly permissive CORS headers, unvalidated API payloads, and client-side secrets.',
      'Thinking like an attacker made me a 10x better builder. Now, threat modeling is not an afterthought—it happens right alongside designing the database schema and agent prompts.',
    ],
    rotationClass: 'rotate-[1.5deg] sm:rotate-[1.8deg]',
    handwrittenMarginNote: 'red-team notes',
  },
  {
    id: 'mongodb-to-sql',
    date: '[Month Year]',
    readTime: '3 min read',
    topicTag: 'databases',
    title: 'from MongoDB to SQL: why I switched',
    summary:
      'Document stores feel effortless on day one, until your data becomes deeply relational. Here is what clicked when I embraced strict schemas and SQL joins.',
    fullContent: [
      'Like almost every student builder, I started with MongoDB because dumping JSON documents without a migration felt like pure speed during weekend builds.',
      'Then I started building platforms like USDX and FinIntel, where consent records, athlete telemetry, and multi-agent audit logs needed strict referential integrity and complex analytical queries.',
      'Switching to relational SQL taught me that schema design is actually system design. When your tables and constraints are well-modeled, half your application bugs disappear before you even write a route.',
    ],
    rotationClass: '-rotate-[1.2deg] sm:-rotate-[1.5deg]',
    handwrittenMarginNote: 'schema thoughts',
  },
  {
    id: 'multi-agent-guardrails',
    date: '[Month Year]',
    readTime: '4 min read',
    topicTag: 'ai engineering',
    title: 'making multi-agent systems reliable enough to ship',
    summary:
      'What happens when three LLM agents disagree in a loop? Notes on deterministic tool schemas, structured outputs, and human-in-the-loop checkpoints.',
    fullContent: [
      'Multi-agent demos look magical when they work once, and chaotic when Agent A passes malformed context to Agent B in production.',
      'While building FinIntel, I learned that reliable agent orchestration comes down to strict typed schemas between steps, deterministic fallback paths, and bounding how many turns an agent loop can take.',
      'The best AI software combines expressive reasoning with rock-solid software engineering guardrails.',
    ],
    rotationClass: 'rotate-[1.5deg] sm:rotate-[2.2deg]',
    handwrittenMarginNote: 'ai + safety',
  },
];
