import React from "react";

import Header from "../blocks/header";
import AboutUs from "../blocks/about-us";
import OurAchievement from "../blocks/our-achievement";
import Features from "../blocks/features";
import OurTeam from "../blocks/our-team";
import CTA from "../blocks/cta";

const Page = () => {
  return (
    <div className="w-[100%]">
      <Header />
      <AboutUs />
      <OurAchievement />
      <Features />
      <OurTeam />
      <CTA />
    </div>
  );
};

export default Page;
