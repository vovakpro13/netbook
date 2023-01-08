export type LinkType = {
  name: string;
  href: string;
  links?: LinkType[];
};

export const Links: LinkType[] = [
  { name: "Home", href: "/" },
  {
    name: "Community",
    href: "/#",
    links: [
      {
        name: "Team",
        href: "/#",
      },
      {
        name: "Explore",
        href: "/#",
      },
    ],
  },
  { name: "Blog", href: "/#" },
  { name: "Events", href: "/#" },
];
