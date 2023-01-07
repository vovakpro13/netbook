import React from "react";
import Image from "next/image";

import Star from "../../public/star.png";
import ArrowRightBlue from "../../public/arrow-right-blue.png";
import FirstHuman from "../../public/human-1.png";
import SecondHuman from "../../public/human-2.png";
import ThirdHuman from "../../public/human-3.png";

const Avatars = [FirstHuman, SecondHuman, ThirdHuman];

const RatingCard = () => {
  return (
    <div className="bg-white rounded-[14px] pt-[42px] pr-[18px] pb-[40px] pl-[44px] border-[1px] border-[#5E5E5E28] hover:shadow-card min-h-[340px]">
      <div className="flex items-center">
        <Image
          src={Star}
          alt="star"
          width={28}
          height={28}
          className="animate-wiggle"
        />

        <p className=" text-[20px] font-medium leading-[20px] text-gray-600 pl-[10px]">
          4.8 Rating
        </p>
      </div>

      <div className="mt-[22px] ml-[-24px] flex items-center cursor-pointer">
        <div className="flex -space-x-12 hover:-space-x-11 overflow-hidden mb-[-10px] transition avatars">
          {Avatars.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt="star"
              className="avatars"
              style={{ width: 74, height: 74 }}
            />
          ))}
        </div>

        <p className="font-semibold tex-[16px] leading-[18px] text-gray-700">
          <span className="text-blue-300">+836k </span>
          Members
        </p>
      </div>

      <p className="max-w-[274px] text-gray-800 tex-[16px] leading-[26px] mt-[12px]">
        More than 2 billion we people over countries use socibooks we to stay in
        touch with friends.
      </p>

      <button className="btn font-medium transition text-[16px] leading-[16px] text-blue-300 mt-[40px] flex items-center hover:translate-x-1">
        Join Our Community
        <Image
          src={ArrowRightBlue}
          alt="arr right blue"
          className="w-[10px] h-[10px] ml-[8px]"
        />
      </button>
    </div>
  );
};

export default RatingCard;
