export type YouTubeEpisode = {
  title: string;
  videoId: string;
  published: string;
  url: string;
  spotifyUrl: string;
  guest: string;
  guestTitle: string;
  description: string;
  duration: string;
  tags: string[];
};

export const youtubeEpisodes: YouTubeEpisode[] = [
  {
    title: "Building a Billion-Dollar Company With 10 Employees",
    videoId: "-1CdZN-N6ak",
    published: "May 20, 2026",
    url: "https://www.youtube.com/watch?v=-1CdZN-N6ak",
    spotifyUrl: "https://open.spotify.com/show/0TSnQszN4VY8tyOgIYPsQy",
    guest: "Kirsten Karchmer",
    guestTitle: "CEO, Conceivable",
    description:
      "Kirsten built a consumer health company to massive scale with a tiny team. She shares the operating model, the AI stack, and the decisions that made lean growth possible.",
    duration: "48m",
    tags: ["Leadership", "Startups", "Growth"]
  },
  {
    title: "Why In-Person Networking is About to Explode (Again)",
    videoId: "XWjV9m4ZKwA",
    published: "May 6, 2026",
    url: "https://www.youtube.com/watch?v=XWjV9m4ZKwA",
    spotifyUrl: "https://open.spotify.com/show/0TSnQszN4VY8tyOgIYPsQy",
    guest: "Thom Singer",
    guestTitle: "CEO, Austin Technology Council",
    description:
      "As AI saturates digital channels, Thom argues the pendulum is swinging back to in-person connection. A conversation about community, trust, and what networking actually produces.",
    duration: "42m",
    tags: ["Networking", "Community", "AI"]
  },
  {
    title: "AI Is Stealing Your Traffic (And You Can't Track It)",
    videoId: "QBr7ZQzo0RM",
    published: "Apr 22, 2026",
    url: "https://www.youtube.com/watch?v=QBr7ZQzo0RM",
    spotifyUrl: "https://open.spotify.com/show/0TSnQszN4VY8tyOgIYPsQy",
    guest: "Ross Hudgens",
    guestTitle: "CEO, Siege Media",
    description:
      "AI-generated answers are absorbing traffic that used to reach your site. Ross breaks down what&apos;s happening to search, how to measure invisible losses, and where content still wins.",
    duration: "51m",
    tags: ["AI", "Marketing", "SEO"]
  },
  {
    title: "AI Is Breaking Cybersecurity, And Most Companies Aren't Ready",
    videoId: "sCswyg_iSRM",
    published: "Apr 8, 2026",
    url: "https://www.youtube.com/watch?v=sCswyg_iSRM",
    spotifyUrl: "https://open.spotify.com/show/0TSnQszN4VY8tyOgIYPsQy",
    guest: "Yasmin Abdi",
    guestTitle: "CEO, NoHack",
    description:
      "Yasmin explains why AI has fundamentally shifted the threat landscape and what security teams need to rethink now — from tooling to culture to board-level communication.",
    duration: "45m",
    tags: ["AI", "Cybersecurity", "Risk"]
  },
  {
    title: "How AI Is Changing Hiring",
    videoId: "JUaagFr0aAA",
    published: "Mar 9, 2026",
    url: "https://www.youtube.com/watch?v=JUaagFr0aAA",
    spotifyUrl: "https://open.spotify.com/show/0TSnQszN4VY8tyOgIYPsQy",
    guest: "Prakhar Agrawal",
    guestTitle: "CEO, Senseloaf",
    description:
      "Prakhar walks through how AI is restructuring the recruiting funnel — from sourcing to screening to offer — and what it means for teams that still rely on old-school hiring.",
    duration: "39m",
    tags: ["AI", "Hiring", "HR Tech"]
  },
  {
    title: "How AI Is Creating One-Person Teams",
    videoId: "xYB0ZO6W764",
    published: "Mar 6, 2026",
    url: "https://www.youtube.com/watch?v=xYB0ZO6W764",
    spotifyUrl: "https://open.spotify.com/show/0TSnQszN4VY8tyOgIYPsQy",
    guest: "Sagar Babber",
    guestTitle: "CEO, GleanTap",
    description:
      "Sagar shares how solo operators and small teams are now doing the work of full departments using AI — and what that shift means for how companies are built and staffed.",
    duration: "44m",
    tags: ["AI", "Future of Work", "Productivity"]
  }
];

export const spotifyShow = {
  title: "GILD Podcast",
  url: "https://open.spotify.com/show/0TSnQszN4VY8tyOgIYPsQy",
  embedUrl:
    "https://open.spotify.com/embed/show/0TSnQszN4VY8tyOgIYPsQy?utm_source=generator&theme=0",
  description:
    "The GILD Podcast is a focused extension of GILD's private roundtables. Each episode features a senior operator in a candid conversation about how AI is reshaping real companies."
};
