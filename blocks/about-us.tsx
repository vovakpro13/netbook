import React from "react";

import GroupItem from "../partials/about-us/GroupItem";
import PlayImage from "../partials/about-us/PlayImage";
import DefaultImage from "../partials/about-us/DefaultImage";

import LaptopImage from "../public/laptop.png";
import CabelsImage from "../public/cabels.png";

const GroupItems = ["Groups", "Messages", "Share"];

const AboutUs = () => {
  return (
    <div className="container flex items-center flex-col lg:flex-row bg-white sm:mt-[100px] mt-[30px] py-[34px] justify-between">
      <div className="mb-6 lg:mb-0 lg:basis-[410px] lg:mr-1.5">
        <p className="subtitle">Whats Netboks?</p>

        <p className="big-title mt-[10px]">
          Why Join to Netbook Social Network?
        </p>

        <p className="description-text mt-[16px]">
          Recent surveys have indicated that small businesses recognise the need
          they have to connect with consumer.
        </p>

        <div className="mt-[36px] flex flex-col gap-[16px]">
          {GroupItems.map((name) => (
            <GroupItem key={name}>{name}</GroupItem>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-[29px] flex-col sm:flex-row">
        <PlayImage />

        <div className="flex-none gap-[32px] flex-col flex">
          <DefaultImage src={LaptopImage} />
          <DefaultImage src={CabelsImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
