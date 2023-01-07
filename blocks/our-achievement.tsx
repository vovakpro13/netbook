import React from "react";
import Image from "next/image";

import PrimaryButton from "../components/PrimaryButton";
import ArrowRightIcon from "../public/arrow-right.png";
import RatingCard from "../partials/our-achievement/RatingCard";
import AwwardsCard from "../partials/our-achievement/AwwardsCard";

const OurAchievement = () => {
  return (
    <div className="container mt-[22px] py-[75px] flex justify-center xl:justify-between flex-col-reverse md:flex-row items-center">
      <div className="flex gap-[24px] flex-col sm:flex-row md:flex-col xl:flex-row md:mr-[100px] mt-[40px] md:mt-0">
        <RatingCard />
        <AwwardsCard />
      </div>

      <div className="md:basis-[381px] text-left">
        <p className="subtitle">Our Achievement</p>

        <p className="big-title mt-[10px]">
          We are Connecting You The Digital Life.
        </p>

        <p className="description-text mt-[18px]">
          The scope the Social Media becomes crucial Is helps the business to
          directly engage with their needs and wants.
        </p>

        <PrimaryButton className="mt-[38px] py-[22px] flex items-center">
          Discover me
          <Image
            src={ArrowRightIcon}
            alt="arrow-right"
            className="ml-[20px]"
            style={{ width: 16 }}
          />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default OurAchievement;
