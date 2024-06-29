import Image from "next/image";
import React from "react";

const Header = ({ score }: { score: number }) => {
  return (
    <div className="w-4/5 border-white/[.3] border-[3px] rounded-2xl flex items-center justify-between p-4">
      <div className="w-1/4 h-24 fill-white relative">
        <Image
          fill
          objectFit="contain"
          src={"/images/logo.svg"}
          alt="logo"
        ></Image>
      </div>
      <div className="bg-white py-4 px-12 rounded-xl flex flex-col justify-center items-center">
        <h2 className="text-dark-text tracking-[0.15rem]">SCORE</h2>
        <p className="text-score-text/[.75] text-6xl">{score}</p>
      </div>
    </div>
  );
};

export default Header;
