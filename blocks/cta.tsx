import React from "react";

import Image from "next/image";
import Mobile from "../public/mobile.png";
import Playstore from "../public/playstore.png";
import Appstore from "../public/appstore.png";

const CTA = () => {
  return (
    <div className="mt-[20px] sm:mt-[45px] bg-blue-500 overflow-hidden">
      <div className="container flex justify-between items-center relative py-[50px] sm:py-[122px] h-full">
        <div className="max-w-[351px]">
          <p className="subtitle">Get Our Aplication</p>

          <p className="big-title mt-[10px]">You Can Easily Find This App…!</p>

          <p className="description-text mt-[18px]">
            I say chap that’s suing lavatory chip shop gosh off his smashing
            boot are you taking the piss posh loo brilliant.
          </p>

          <div className="flex gap-[20px] items-center translate-y-1">
            <Image
              src={Playstore}
              alt=""
              className="translate-x-[-20px]"
              height={95}
            />
            <Image
              src={Appstore}
              alt=""
              className="translate-x-[-40px]"
              style={{ height: 52, width: 143 }}
            />
          </div>
        </div>

        <Image
          src={Mobile}
          alt="mobile"
          className="hidden md:block absolute bottom-0 right-1 md:translate-x-[250px] lg:translate-x-[50px] xl:translate-x-0"
          height={520}
        />
      </div>
    </div>
  );
};

export default CTA;
