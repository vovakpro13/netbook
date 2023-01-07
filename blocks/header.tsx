import React, { FC } from "react";
import Image from "next/image";

import NavBar from "../partials/header/NavBar";
import Team from "../public/team.png";
import PrimaryButton from "../components/PrimaryButton";

const Header: FC = () => {
  return (
    <div className="header-block">
      <NavBar />

      <div className="container  flex items-center px-50 pt-[45px] ">
        <div className="pr-0 sm:pr-[70px]">
          <p className="mb-[20px] py-[12px] px-[30px] text-blue-300 bg-blue-100 rounded-[8px] w-fit cursor-pointer hover:scale-90 transition">
            Netbook community
          </p>

          <p className="main-head-title">Your Solutions For Community!</p>

          <p className="pt-[18px] text-gray-400 text-[18px] leading-[28px]">
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </p>

          <div className="flex pt-[42px] flex-col sm:flex-row gap-[18px]">
            <PrimaryButton className="py-[24px] text-[14px] font-normal">
              About More
            </PrimaryButton>

            <PrimaryButton
              variant="outlined"
              className="py-[24px] text-[14px] font-normal"
            >
              Invite Friend
            </PrimaryButton>
          </div>
        </div>

        <Image
          src={Team}
          alt="team"
          className="hidden lg:block w-[350px] xl:w-[585px] h-fit xl:h-[500px] hover:animate-wiggle cursor-default"
        />
      </div>
    </div>
  );
};

export default Header;
