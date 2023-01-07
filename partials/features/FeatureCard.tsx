import React, { FC, ReactNode } from "react";

export enum IconVariants {
  Red = "red",
  Blue = "blue",
  Yellow = "yellow",
}

export interface IFeatureCardProps {
  icon: ReactNode;
  title: string;
  children: string;
  iconVariant: IconVariants;
}

const FeatureCard: FC<IFeatureCardProps> = ({
  icon,
  iconVariant,
  title,
  children,
}) => {
  return (
    <div
      className="rounded-[14px] bg-white lg:max-h-[200px] xl:max-h-[182px] pt-[40px] pr-[65px]
                pb-[44px] pl-[40px] shadow-featureCard flex gap-[36px] cursor-pointer hover:scale-[1.04] transition"
    >
      <div
        className={`rounded-[24px] w-[66px] h-[66px] min-w-[66px] min-h-[66px]  px-[16px] flex items-center justify-center ${iconVariant}-feature-icon`}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-[14px]">
        <p className="text-gray-title font-semibold text-[24px] leading-[26px]">
          {title}
        </p>

        <p className="text-[16px] leading-[26px] text-gray-400">{children}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
