import React, { FC } from "react";

interface IProps {
  title: string;
  items: string[];
}

const Menu: FC<IProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-[22px] ">
      <h6 className="text-white font-medium text-[20px] leading-[20px]">
        {title}
      </h6>

      <div className="flex flex-col">
        {items.map((link) => (
          <p
            key={link}
            className="cursor-pointer text-[#E7E7E7] text-[16px] leading-[46px]"
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Menu;
