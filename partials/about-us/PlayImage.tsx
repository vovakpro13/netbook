import React from "react";
import Image from "next/image";
import TeamWork from "../../public/team-work.png";
import PlayBtnIcon from "../../public/play-btn.png";

const PlayImage = () => {
  return (
    <div className="h-[368px] w-[270px] relative cursor-pointer flex-none">
      <Image
        src={TeamWork}
        alt="teamwork"
        className="rounded-[14px]"
        style={{ width: 270, height: 369 }}
      />

      <div className="absolute w-full h-full top-0 left-0 rounded-[14px] flex items-center justify-center hover:bg-[#00000071] transition">
        <div className="p-10 hover:scale-125 transition ">
          <Image
            src={PlayBtnIcon}
            alt="play"
            className="animate-pulse"
            style={{ width: 44, height: 44 }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayImage;
