import React from "react";

import Tabs from "../components/Tabs";
import { Members } from "../constants/members";
import MemberCard from "../partials/our-team/MemberCard";

const OurTeam = () => {
  return (
    <div className="mt-[46px] py-[84px] ">
      <div className="container flex items-center flex-col ">
        <div className="max-w-[454px] text-center">
          <p className="subtitle">Valuable Team</p>

          <p className="big-title mt-[9px]">Our Active Members</p>

          <p className="description-text mt-[19px]">
            when an unknown printer took a galley of type and meeting fari
            scrambled it.
          </p>
        </div>

        <div className="mt-[38px]">
          <Tabs list={["Newest", "Popular", "Active"]} />
        </div>

        <div className="mt-[44px] flex gap-[30px] flex-wrap justify-center">
          {Members.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
