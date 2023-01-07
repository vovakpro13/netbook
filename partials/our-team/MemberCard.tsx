import React, { FC } from "react";
import Abstrack from "../../public/abstrack.svg";
import Image, { StaticImageData } from "next/image";

export interface IMemberCardProps {
  name: string;
  nickname: string;
  avatar: StaticImageData;
}

const MemberCard: FC<IMemberCardProps> = ({ name, nickname, avatar }) => {
  return (
    <div
      className="text-center rounded-[14px] border-[2px] py-[30px] px-[50px] w-full md:w-fit
                border-gray-border hover:shadow-memberCard transition cursor-pointer gap-[30px]
                flex flex-col sm:flex-row md:flex-col items-center"
    >
      <div className="text-center relative h-[171px] w-[170px] m-auto">
        <div className="absolute top-0 left-0">
          <Abstrack />
        </div>

        <div className="p-4 m-auto">
          <Image
            src={avatar}
            alt={name}
            className="rounded-full bg-[#E2EEFF] "
          />
        </div>
      </div>

      <div>
        <h3 className=" font-semibold text-[24px] leading-[26px] text-title">
          {name}
        </h3>

        <p className="mt-[14px] text-[16px] leading-[16px] text-gray-400">
          @{nickname}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
