import {
  IconVariants,
  IFeatureCardProps,
} from "../partials/features/FeatureCard";

import Members from "../public/members.svg";
import Group from "../public/group.svg";
import Chat from "../public/chat.svg";
import Quizz from "../public/quizz.svg";
import ListBuilder from "../public/list-builder.svg";
import ListScroll from "../public/list-scroll.svg";

export const FeaturesArray: (Omit<IFeatureCardProps, "children"> & {
  description: string;
})[] = [
  {
    title: "Members, Friends",
    description:
      "Members, Friends Connection ( like followers ), Private Message",
    iconVariant: IconVariants.Blue,
    icon: <Members />,
  },
  {
    title: "Groups",
    description:
      "Your users can create groups to let other users to join and talk",
    iconVariant: IconVariants.Red,
    icon: <Group />,
  },
  {
    title: "Forum",
    description:
      "Forum is ready by BBPress. Your users can make topics and talk.",
    iconVariant: IconVariants.Yellow,
    icon: <Chat />,
  },
  {
    title: "Custom Module",
    description:
      "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
    iconVariant: IconVariants.Blue,
    icon: <Quizz />,
  },
  {
    title: "List Builder",
    description:
      "Members, Groups list can be modified by drag & drop live builder.",
    iconVariant: IconVariants.Red,
    icon: <ListBuilder />,
  },
  {
    title: "List Scroll Effects",
    description:
      "8 different scroll effects are ready.\n" +
      "You can always change by your tastes.",
    iconVariant: IconVariants.Yellow,
    icon: <ListScroll />,
  },
];
