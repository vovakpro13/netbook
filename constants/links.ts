export type LinkType = {
  name: string;
  href: string;
  links?: LinkType[];
};

export const Links: LinkType[] = [
  { name: "Home", href: "/" },
  {
    name: "Community",
    href: "/community",
    links: [
      {
        name: "Team",
        href: "/community/team",
      },
      {
        name: "Explore",
        href: "/community/explore",
      },
    ],
  },
  { name: "Blog", href: "blog" },
  { name: "Events", href: "events" },
];
