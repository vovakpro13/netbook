import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import ArrowRightIcon from "../../public/arrow-r.svg";

export interface IArticlePreviewBoxProps {
  image: StaticImageData;
  title: string;
}

const ArticlePreviewBox: FC<IArticlePreviewBoxProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col w-[340px] gap-[25px]">
      <div className="rounded-[20px] overflow-hidden max-h-[330px]">
        <Image src={image} alt="image" className="w-[340px]" />
      </div>

      <div className="flex gap-[14px] pl-[15px]">
        <div className="my-[20px]">
          <svg
            width="39"
            height="2"
            viewBox="0 0 39 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="39" y2="1" stroke="#FFAF2E" stroke-width="2" />
          </svg>
        </div>

        <div className="flex flex-col gap-[25px]">
          <h4 className="font-semibold text-[20px] leading-[32px] text-gray-title">
            {title}
          </h4>

          <button className="btn text-gray-400 hover:text-blue-300 transition text-[16px] leading-[16px] flex items-center gap-[8px] hover:translate-x-1">
            Continue Reading
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreviewBox;
