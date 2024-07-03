import { useGameContext } from "@/context/GameContextProvider";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { score } = useGameContext();
  return (
    <div className="w-full md:w-4/5 border-white/[.3] border-[3px] rounded-lg md:rounded-2xl flex items-center justify-between p-4 md:mb-24">
      <div className="w-1/4 h-24 fill-white relative">
        <Image
          fill
          objectFit="contain"
          src={"/images/logo.svg"}
          alt="logo"
        ></Image>
      </div>
      <div className="bg-white py-2 px-4 md:py-4 md:px-12 rounded-xl flex flex-col justify-center items-center">
        <h2 className="text-dark-text tracking-[0.15rem]">SCORE</h2>
        <p className="text-score-text/[.75] md:text-6xl text-3xl">
          {score || 0}
        </p>
      </div>
    </div>
  );
};

export default Header;
