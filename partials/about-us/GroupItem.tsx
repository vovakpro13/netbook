import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const GroupItem: FC<IProps> = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="rounded-full border-[5px] border-blue-100 animate-pulse">
        <div className="w-[8px] h-[8px] bg-blue-300 rounded-full"></div>
      </div>

      <p className="text-gray-300 font-medium text-[18px] leading-[18px] pl-[17px]">
        {children}
      </p>
    </div>
  );
};

export default GroupItem;
