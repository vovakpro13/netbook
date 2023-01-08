import React from "react";
import Image from "next/image";

import Trophy from "../../public/trophy.png";
import GitHub from "../../public/github-icon.png";
import ArrowRightIcon from "../../public/arrow-r.svg";

const AwwardsCard = () => {
  return (
    <div className="bg-white rounded-[14px] pt-[42px] pr-[18px] pb-[40px] pl-[44px] border-[1px] border-[#5E5E5E28] hover:shadow-card transition  min-h-[340px]">
      <div className="flex items-center">
        <Image
          src={Trophy}
          alt="star"
          width={28}
          height={28}
          className="animate-wiggle"
        />

        <p className=" text-[20px] font-medium leading-[20px] text-gray-600 pl-[10px]">
          Awwwards
        </p>
      </div>

      <div className="mt-[22px] ml-[-24px] flex items-center cursor-pointer">
        <Image
          src={GitHub}
          alt="github"
          className="mb-[-10px]"
          style={{ width: 74, height: 74 }}
        />

        <p className="font-semibold tex-[16px] leading-[18px] text-gray-700">
          Best of <span className="text-blue-300">2021</span> on Github
        </p>
      </div>

      <p className="max-w-[274px] text-gray-800 tex-[16px] leading-[26px] mt-[12px]">
        More than 2 billion we people over countries use socibooks we to stay in
        touch with friends.
      </p>

      <button className="btn font-medium text-gray-900 hover:text-blue-300 gap-[8px] transition text-[16px] leading-[16px]  mt-[40px] flex items-center hover:translate-x-1">
        Go To Awards
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default AwwardsCard;
