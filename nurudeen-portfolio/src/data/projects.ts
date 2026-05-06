export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  tag: string;
  positioning: string;
  tagline: string;
  summary: string;
  coreIdea: string;
  features: { label: string; body?: string }[];
  demonstrates: string[];
  images: string[];
  cover: string;
  imageFit?: 'contain' | 'cover';
  links?: { label: string; href: string }[];
  extras?: {
    technicalOverview?: string[];
    metrics?: { feature: string; functionality: string }[];
    impact?: string[];
  };
};

const shots = (slug: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => `/projects/${slug}/shot-${String(i + 1).padStart(2, '0')}.png`);

export const projects: Project[] = [
  {
    slug: 'artemis-hiring',
    title: 'A modern hiring platform for high-velocity teams',
    company: 'Artemis Hiring',
    year: '2026',
    role: 'Software Engineer · Founder',
    tag: 'SaaS · Hiring Platform',
    positioning: 'SaaS / Hiring Platform',
    tagline:
      'A modern hiring platform that pairs employer branding with structured workflows so teams move from job opening to signed offer without the chaos.',
    summary:
      'Artemis Hiring is a recruitment-focused platform designed to help companies attract, assess, and hire talent efficiently. It pairs strong employer branding with structured hiring workflows so teams can move from a job opening to a signed offer without the chaos.',
    coreIdea:
      'A modern hiring solution that combines employer branding with structured hiring workflows.',
    features: [
      { label: 'Employer-branded landing pages', body: 'Public career pages with conversion-focused CTA funnels.' },
      { label: 'Job listings & hiring pipeline', body: 'Roles are first-class objects with stages, owners, and SLAs.' },
      { label: 'Candidate evaluation', body: 'Structured scorecards and stage-aware feedback collection.' },
      { label: 'Onboarding flow', body: 'Hand-off from offer to first day without spreadsheet juggling.' },
      { label: 'Figma-backed UI/UX', body: 'A consistent design system kept in sync with the build.' },
    ],
    demonstrates: ['Product thinking', 'SaaS architecture mindset', 'Frontend + backend integration'],
    images: shots('artemis-hiring', 17),
    cover: '/projects/artemis-hiring/shot-01.png',
    imageFit: 'contain',
    links: [{ label: 'Visit artemishiring.co.uk', href: 'https://www.artemishiring.co.uk/' }],
  },
  {
    slug: 'reeka',
    title: 'An operational backbone for property and shortlet operators',
    company: 'Reeka',
    year: '2026',
    role: 'Software Engineer',
    tag: 'PropTech · Enterprise System',
    positioning: 'PropTech / Enterprise System',
    tagline:
      'A property management platform that centralises operations, tenants, and shortlet bookings so a single team can run a portfolio without switching tools.',
    summary:
      'Reeka is a property management platform for real estate developers and shortlet operators. It centralises property operations, tenant management, and shortlet bookings into one system so a single team can run a portfolio without context-switching between tools.',
    coreIdea:
      'Centralizes property operations, tenant management, and shortlet bookings into one system.',
    features: [
      { label: 'Property management dashboard', body: 'A single pane for portfolio-wide health and occupancy.' },
      { label: 'Shortlet booking & calendar', body: 'Conflict-free scheduling across listings.' },
      { label: 'Tenant management workflows', body: 'Lifecycle from inquiry to renewal in one place.' },
      { label: 'Maintenance & facility tracking', body: 'Tickets, vendors, and SLAs tied to the unit.' },
      { label: 'Revenue tracking & reporting', body: 'Per-property P&L surfaced for operators.' },
      { label: 'Operational automation', body: 'Background jobs that take rote work off the team.' },
    ],
    demonstrates: ['Real-world system design', 'Multi-role platform architecture', 'Backend-heavy application logic'],
    images: shots('reeka', 4),
    cover: '/projects/reeka/shot-01.png',
    imageFit: 'contain',
    links: [{ label: 'Visit reeka.app', href: 'https://www.reeka.app/' }],
  },
  {
    slug: 'oruko-mi',
    title: 'An AI translator for Nigerian names and their meanings',
    company: 'Orukọ-mi',
    year: '2026',
    role: 'Builder',
    tag: 'AI · Consumer Product',
    positioning: 'AI Consumer Product',
    tagline:
      'An AI web app that translates Nigerian names and surfaces their meanings — type a name, get origin, meaning, and pronunciation in seconds.',
    summary:
      'Orukọ-mi is an AI-powered web app that translates Nigerian names and surfaces their meanings. It combines culture and AI to make local-language insights globally accessible — type a name, get its origin, meaning, and pronunciation in seconds.',
    coreIdea:
      'Combines culture and AI to make local language insights globally accessible.',
    features: [
      { label: 'Name input → instant meaning', body: 'A single field, an answer in under a second.' },
      { label: 'AI-driven translation', body: 'Generative, not a static lookup table.' },
      { label: 'Multiple Nigerian languages', body: 'Yoruba, Igbo, Hausa and beyond.' },
      { label: 'Clean, simple UI', body: 'Optimised for sharing and discovery.' },
      { label: 'Shareable cultural artefact', body: 'Designed to travel across social feeds.' },
    ],
    demonstrates: ['AI integration into products', 'Creative product thinking', 'Ability to build niche, viral tools'],
    images: shots('oruko-mi', 5),
    cover: '/projects/oruko-mi/shot-01.png',
    imageFit: 'contain',
    links: [{ label: 'Visit oruko-mi.com', href: 'https://www.oruko-mi.com/' }],
  },
  {
    slug: 'deception-detection',
    title: 'AI-driven deception detection & intake automation',
    company: 'Pathfinders for Hope',
    year: '2026',
    role: 'AI Workflow Architect',
    tag: 'AI · Automation · Data Intelligence',
    positioning: 'AI + Automation + Data Intelligence',
    tagline:
      'An AI automation built on TaskAce AI for a homeless-to-housing nonprofit — turning raw intake data into structured psychological insight and predictive analytics.',
    summary:
      'An AI-powered automation system built on TaskAce AI for Pathfinders for Hope, a nonprofit focused on transitioning individuals from homelessness to stable living. It streamlines applicant intake and evaluation by turning raw intake data into structured psychological insight and predictive analytics that drive better decisions.',
    coreIdea:
      'Transforms raw intake data into structured psychological insights and predictive analytics for better decision-making.',
    features: [
      { label: 'Automated data extraction', body: 'Captures 20+ variables from each intake submission, including long-form responses.' },
      { label: 'Psychological analysis & scoring', body: 'Evaluates sincerity, accountability, and readiness with custom scoring logic.' },
      { label: 'Deception detection', body: 'Flags inconsistencies via consistency rating and authenticity indicators.' },
      { label: 'Ecosystem integration', body: 'Pushes structured summaries into internal databases for stakeholder review.' },
    ],
    demonstrates: ['AI workflow design', 'Continuous monitoring & analysis engines', 'Predictive analytics for decision-making'],
    images: shots('deception-detection', 4),
    cover: '/projects/deception-detection/shot-01.png',
    imageFit: 'contain',
    links: [{ label: 'Visit pathfindersforhope.org', href: 'https://pathfindersforhope.org/' }],
    extras: {
      technicalOverview: [
        'Automated Data Extraction: captures 20+ variables from intake submissions, including personal data and long-form responses.',
        'Psychological Analysis & Scoring: evaluates sincerity, accountability, and readiness using custom scoring logic.',
        'Deception Detection: identifies inconsistencies through metrics like consistency rating and authenticity indicators.',
        'Ecosystem Integration: generates structured summaries and pushes data into internal databases for stakeholder review.',
      ],
      metrics: [
        { feature: 'Predictive Analytics', functionality: 'Generates success probability, resource optimization, and outcome forecasting.' },
        { feature: 'Real-Time Data Backup', functionality: 'Ensures instant backup of all intake data and scoring results.' },
        { feature: 'Risk Assessment', functionality: 'Calculates deception risk using behavioural and contextual indicators.' },
        { feature: 'Stakeholder Notification', functionality: 'Triggers alerts for high-priority or high-risk cases.' },
      ],
      impact: [
        'Identifies applicants with genuine commitment vs temporary intent.',
        'Optimises allocation of limited resources.',
        'Improves decision-making with structured, data-driven insights.',
        'Maintains a transparent and trackable applicant evaluation process.',
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
