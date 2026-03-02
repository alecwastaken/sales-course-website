export type Tier = {
  slug: "gold" | "platinum" | "black";
  name: string;
  imageSrc: string;
  teaser: string;
  audience: string;
  notFor: string;
  bullets: string[];
  locked: boolean;
};

export const tiers: Tier[] = [
  {
    slug: "gold",
    name: "Gold",
    imageSrc: "/tiers/gold.png",
    teaser:
      "A strong entry point for salespeople who want a sharper process, better habits, and a serious peer environment.",
    audience:
      "This is for you if you want structure, accountability, and the core systems needed to improve your performance with consistency.",
    notFor:
      "This is not for you if you want shortcuts, low-effort participation, or a passive course you never plan to use.",
    bullets: [
      "Weekly sales training sessions with actionable takeaways.",
      "Foundational call review framework for improving performance.",
      "Core scripts and objection-handling templates.",
      "Private member discussion access.",
      "Goal tracking and accountability prompts.",
      "Sales habit and pipeline review worksheets.",
    ],
    locked: false,
  },
  {
    slug: "platinum",
    name: "Platinum",
    imageSrc: "/tiers/platinum.png",
    teaser:
      "For committed operators who want deeper coaching, stronger systems, and a more intensive membership experience.",
    audience:
      "This is for you if you are already executing and want tighter feedback loops, more advanced support, and a higher standard.",
    notFor:
      "This is not for you if you are still deciding whether you want to take sales seriously or you resist structured implementation.",
    bullets: [
      "Everything in Gold, plus higher-touch support.",
      "Advanced deal review and performance feedback.",
      "Private implementation sessions for members.",
      "Deeper training on pipeline and conversion systems.",
      "Priority access to selected resources and playbooks.",
      "Higher-accountability check-ins for execution.",
    ],
    locked: true,
  },
  {
    slug: "black",
    name: "Black",
    imageSrc: "/tiers/black.png",
    teaser:
      "The highest-access membership tier for top performers pursuing elite-level support, proximity, and strategic depth.",
    audience:
      "This is for you if you want the most exclusive version of the experience and you are ready to operate at a much higher level.",
    notFor:
      "This is not for you if you are looking for broad beginner access rather than a premium, selective environment.",
    bullets: [
      "Everything in Platinum, plus highest-tier access.",
      "Exclusive strategic sessions and high-level reviews.",
      "Direct access to premium resources and frameworks.",
      "Private opportunities reserved for top members.",
      "Elevated support cadence for serious operators.",
      "Selective community access built for top performers.",
    ],
    locked: true,
  },
];
