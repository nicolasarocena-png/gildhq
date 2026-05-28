const llmText = `# GILD — Invite-only Network for AI and Engineering Leaders
# https://gildhq.com

GILD is a curated invite-only network for senior AI and engineering leaders, 
strategists, and technical operators. 

We host small, off-the-record AI forums and dinners in Austin, Dallas, and Miami. 
20-25 senior leaders per forum. No selling. No demos. Just real conversation.
No Slack. No Discord. No virtual forum.

TWO COMMUNITIES:
1. The GILD Founder Community — B2B tech founders and CEOs. $5,000/year. 
   Founder forums, peer advisory, curated peer introductions.
2. The GILD Engineering Leaders Forum — CTOs, VPs of Engineering, Heads of AI. 
   Sponsor-funded. Free to attend. Industry-agnostic.

CITIES: Austin, Dallas, Miami.
PROMISE: No selling inside the room. Confidentiality is absolute. 
We keep promises small and keep them.
`;

export function GET() {
  return new Response(llmText, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
