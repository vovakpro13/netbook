"use client";

import React, { FC } from "react";
import Image from "next/image";

import logo from "../../public/logo.png";
import PrimaryButton from "../../components/PrimaryButton";
import LinksRow from "./LinksRow";

const NavBar: FC = () => {
  return (
    <div className="py-[18px] border-b-[1px] border-blue-100">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="netbook" style={{ height: 34, width: 143 }} />

          <div className="pl-[70px] hidden sm:block">
            <LinksRow />
          </div>
        </div>

        <PrimaryButton className="py-[18px] font-semibold text-[12px]">
          Log in
        </PrimaryButton>
      </div>
    </div>
  );
};

export default NavBar;
