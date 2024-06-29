import Image from "next/image";
import React from "react";

export const RPSButton = ({
  imageType,
}: {
  imageType: "rock" | "paper" | "scissors";
}) => {
  return (
    <div
      className={`bg-${imageType}-gradient rounded-full shadow-outside-shadow`}
    >
      <button className={`bg-white p-8 rounded-full m-4 shadow-circle-shadow`}>
        <Image
          src={`images/icon-${imageType}.svg`}
          alt={`${imageType}`}
          width={50}
          height={50}
        />
      </button>
    </div>
  );
};

export const RPSContainer = () => {
  return (
    <div className="w-full flex relative">
      {/* <Image
        src={"/images/bg-triangle.svg"}
        alt="bg-triangle"
        width={500}
        height={500}
      /> */}
      <RPSButton imageType="rock" />
      <RPSButton imageType="paper" />
      <RPSButton imageType="scissors" />
    </div>
  );
};
