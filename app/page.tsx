import React from "react";

import Header from "../blocks/header";
import AboutUs from "../blocks/about-us";
import OurAchievement from "../blocks/our-achievement";
import Features from "../blocks/features";
import OurTeam from "../blocks/our-team";
import CTA from "../blocks/cta";
import News from "../blocks/news";
import Footer from "../blocks/footer";

const Page = () => {
  return (
    <div className="w-[100%]">
      <Header />
      <AboutUs />
      <OurAchievement />
      <Features />
      <OurTeam />
      <CTA />
      <News />
      <Footer />
    </div>
  );
};

export default Page;
