"use client";
import React, { FC } from "react";
import { Tab } from "@headlessui/react";

interface IProps {
  list: string[];
}

const Tabs: FC<IProps> = ({ list }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex p-[8px] rounded-[14px] bg-blue-400 gap-[10px]">
        {list.map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                "py-[20px] px-[20px] sm:px-[50px] font-medium text-[15px] leading-[16px] rounded-[14px] outline-none transition",
                selected
                  ? "bg-blue-300 text-white shadow-tab"
                  : "text-gray-title hover:bg-white"
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default Tabs;
