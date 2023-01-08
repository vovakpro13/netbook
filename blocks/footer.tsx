import React from "react";
import Menu from "../partials/footer/Menu";

import Logo from "../public/logo.svg";
import Twitter from "../public/twitter.svg";
import Instagram from "../public/instagram.svg";
import Facebook from "../public/facebook.svg";
import LinkedIn from "../public/linked-in.svg";

const Menues = [
  { title: "Home", items: ["Home", "Community", "Events", "Contact"] },
  { title: "Resources", items: ["Blog", "News", "Guides", "Help Center"] },
  { title: "Community", items: ["NewsFeed", "Profile", "Friends", "Forums"] },
  {
    title: "Main links",
    items: ["Members", "Activity", "Groups", "Private Group"],
  },
];

const Footer = () => {
  return (
    <div className="mt-[20px] sm:mt-[96px]">
      <div className="pt-[75px] pb-[85px] bg-gray-500">
        <div className="container flex justify-between sm:gap-10 lg:gap-4 flex-col lg:flex-row">
          <div className="hidden sm:flex sm:gap-[40px] md:gap-[80px] lg:gap-[40px] xl:gap-[80px]">
            {Menues.map((menu) => (
              <Menu key={menu.title} {...menu} />
            ))}
          </div>

          <div className="flex flex-col gap-[18px] max-w-[340px]">
            <h6 className="text-white font-medium text-[20px] leading-[32px]">
              Subscribe Circle Newsletter
            </h6>

            <p className="cursor-pointer text-[#E7E7E7] text-[16px] leading-[28px]">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>

            <div className="mt-[14px] border-[#FFFFFF] border-[1px] rounded-[12px] flex h-[48px]">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full bg-transparent focus:outline-0 h-full px-[24px] text-[14px] text-[#717179]"
              />

              <button className="py-[16px] px-[24px] bg-[#FFFFFF] rounded-[12px] flex items-center justify-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#20202D]">
        <div className="container flex flex-col sm:flex-row justify-between items-center py-[30px] gap-[20px]">
          <p className="text-[#F6F6F6]">Besnik Creative Agency.</p>

          <Logo />

          <div className="flex gap-[8px]">
            <Twitter />
            <Instagram />
            <Facebook />
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
