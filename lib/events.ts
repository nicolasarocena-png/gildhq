export type AgendaItem = {
  time: string;
  label: string;
};

export type ForumEvent = {
  slug: string;
  date: string;         // "Jun 16"
  dateISO: string;      // "2026-06-16" — for metadata / SEO
  meta: string;         // "6:00 PM – 8:30 PM CT"
  title: string;
  city: "Austin" | "Dallas" | "Miami";
  location: string;     // "Dallas, TX"
  locationFull: string; // "Dallas, Texas"
  status: "Open" | "Sold Out" | "Waitlist";
  url: string;          // Luma registration URL
  coverUrl: string;     // Full-resolution Luma cover
  cardColor: string;
  borderColor: string;
  description: string;  // 1–2 sentence teaser
  fullDescription: string;
  topics: string[];
  agenda: AgendaItem[];
  isNextUp?: boolean;
};

const AGENDA_DEFAULT: AgendaItem[] = [
  { time: "6:00 – 6:30 PM", label: "Arrival, food & drinks" },
  { time: "6:30 – 6:45 PM", label: "Welcome & sponsor introduction" },
  { time: "6:45 – 7:00 PM", label: "Conversation starter" },
  { time: "7:00 – 8:00 PM", label: "Breakout discussion rounds" },
  { time: "8:00 – 8:30 PM", label: "Open mingling" },
];

export const forumEvents: ForumEvent[] = [
  {
    slug: "dallas-ai-forum-jun-16",
    date: "Jun 16",
    dateISO: "2026-06-16",
    meta: "6:00 PM – 8:30 PM CT",
    title: "Dallas GILD AI Forum x Tecla: AI and Engineering Leaders Dinner",
    city: "Dallas",
    location: "Dallas, TX",
    locationFull: "Dallas, Texas",
    status: "Open",
    url: "https://luma.com/Gild21",
    coverUrl:
      "https://images.lumacdn.com/uploads/2t/61a03d61-e487-4769-94b8-b2c303502d73.png",
    cardColor: "#070D1B",
    borderColor: "#263B68",
    isNextUp: true,
    description:
      "This GILD AI Forum brings together CTOs, VPs of Engineering, Heads of AI, and senior technical leaders for candid off-the-record conversation.",
    fullDescription:
      "An invitation-only gathering for CTOs, VPs of Engineering, Heads of AI, and senior technical leaders building, scaling, and implementing AI. No panels. No pitches. Just candid peer-to-peer conversation among the operators actually doing the work.\n\nEvery room is capped at 20–25 leaders and operates under Chatham House Rules — what's said in the room stays in the room. The goal is the kind of conversation you can't have on stage.",
    topics: [
      "Building and scaling AI in production",
      "Moving beyond pilots to repeatable systems",
      "AI governance and risk management",
      "Cost structures and ROI of AI tooling",
      "Hiring and org design for AI teams",
    ],
    agenda: AGENDA_DEFAULT,
  },
  {
    slug: "austin-ai-forum-jul-14",
    date: "Jul 14",
    dateISO: "2026-07-14",
    meta: "6:00 PM – 8:30 PM CT",
    title: "Austin GILD AI Forum x Tecla: AI and Engineering Leaders Dinner",
    city: "Austin",
    location: "Austin, TX",
    locationFull: "Austin, Texas",
    status: "Open",
    url: "https://luma.com/GILD23",
    coverUrl:
      "https://images.lumacdn.com/uploads/dp/6aec0330-430d-4922-a153-54eac40f5321.png",
    cardColor: "#0E0504",
    borderColor: "#3B1C18",
    description:
      "The Austin GILD AI Forum brings together senior AI and engineering leaders for candid conversations about what's actually working.",
    fullDescription:
      "A curated dinner for senior AI and engineering leaders in Austin. Candid peer-to-peer discussions about implementing AI in production — moving beyond pilots, integrating into legacy systems, managing costs, and building governance frameworks that hold.\n\nRooms are capped at 20–25 leaders under Chatham House Rules. No demos, no deck, no selling. Just the operators who are actually building.",
    topics: [
      "Moving AI from pilot to production",
      "Legacy system integration",
      "AI governance and compliance",
      "Developer velocity and tooling ROI",
      "AI-driven hiring and team structure",
    ],
    agenda: AGENDA_DEFAULT,
  },
  {
    slug: "miami-ai-forum-jul-21",
    date: "Jul 21",
    dateISO: "2026-07-21",
    meta: "6:00 PM – 8:30 PM ET",
    title: "Miami GILD AI Forum x Tecla: AI and Engineering Leaders Dinner",
    city: "Miami",
    location: "Miami, FL",
    locationFull: "Miami, Florida",
    status: "Open",
    url: "https://luma.com/Gild25",
    coverUrl:
      "https://images.lumacdn.com/uploads/ye/49f6b5ba-fde9-4cb0-9cdb-8303d7224ae2.png",
    cardColor: "#080E1C",
    borderColor: "#203052",
    description:
      "This GILD AI Forum brings together CTOs, VPs of Engineering, Heads of AI, and senior technical leaders for candid off-the-record conversation.",
    fullDescription:
      "An invitation-only gathering in Miami for CTOs, VPs of Engineering, and AI leaders navigating the next wave of production AI. The conversation stays off-the-record and peer-driven — no sponsors on stage, no product pitches.\n\nExpect candid discussion on AI production deployment, agent orchestration, tooling cost management, and governance frameworks for AI-generated code. 20–25 attendees. Chatham House Rules.",
    topics: [
      "AI production deployment at scale",
      "Agent orchestration and automation",
      "AI tooling costs and vendor decisions",
      "Governance for AI-generated code",
      "Legacy system modernization with AI",
    ],
    agenda: AGENDA_DEFAULT,
  },
  {
    slug: "austin-ai-forum-aug-11",
    date: "Aug 11",
    dateISO: "2026-08-11",
    meta: "6:00 PM – 8:30 PM CT",
    title: "Austin GILD AI Forum x Tecla: AI and Engineering Leaders Dinner",
    city: "Austin",
    location: "Austin, TX",
    locationFull: "Austin, Texas",
    status: "Open",
    url: "https://luma.com/GILD24",
    coverUrl:
      "https://images.lumacdn.com/uploads/dp/6aec0330-430d-4922-a153-54eac40f5321.png",
    cardColor: "#0E0504",
    borderColor: "#3B1C18",
    description:
      "The Austin GILD AI Forum brings together senior AI and engineering leaders for candid conversations about what's actually working.",
    fullDescription:
      "A curated dinner for senior AI and engineering leaders in Austin. Candid peer-to-peer discussions about implementing AI in production — moving beyond pilots, integrating into legacy systems, managing costs, and building governance frameworks that hold.\n\nRooms are capped at 20–25 leaders under Chatham House Rules. No demos, no deck, no selling. Just the operators who are actually building.",
    topics: [
      "Moving AI from pilot to production",
      "Legacy system integration",
      "AI governance and compliance",
      "Developer velocity and tooling ROI",
      "AI-driven hiring and team structure",
    ],
    agenda: AGENDA_DEFAULT,
  },
];
