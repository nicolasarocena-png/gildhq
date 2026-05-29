import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming GILD Events — AI and Engineering Leaders Forums",
  description:
    "Invite-only AI Forums for senior engineering and AI leaders in Austin, Dallas, and Miami. Small rooms, off-the-record conversations. Request your invite.",
  openGraph: {
    title: "Upcoming GILD Events — AI and Engineering Leaders Forums",
    description:
      "Invite-only AI Forums for senior engineering and AI leaders in Austin, Dallas, and Miami. Small rooms, off-the-record conversations.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming GILD Events",
    description:
      "Invite-only AI Forums for senior engineering and AI leaders. Austin · Dallas · Miami.",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
