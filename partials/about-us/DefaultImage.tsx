import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
  src: StaticImageData;
}

const DefaultImage: FC<IProps> = ({ src }) => {
  return (
    <div className="bg-black rounded-[14px]">
      <Image
        src={src}
        alt="d"
        style={{ width: 265, height: 238 }}
        className="rounded-[14px] cursor-pointer hover:opacity-80 transition"
      />
    </div>
  );
};

export default DefaultImage;
