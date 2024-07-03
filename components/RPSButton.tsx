import { ContextType, useGameContext } from "@/context/GameContextProvider";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const RPSButton = ({
  imageType,
  containerStyles,
  disabled,
}: {
  imageType: "rock" | "paper" | "scissors";
  containerStyles?: string;
  disabled?: boolean;
}) => {
  const { setPlayerChoice } = useGameContext();

  return (
    <div
      className={`bg-${imageType}-gradient rounded-full shadow-outside-shadow ${containerStyles}`}
    >
      <button
        className={`bg-white md:p-8 p-4 rounded-full m-4 shadow-circle-shadow`}
        onClick={() => setPlayerChoice(imageType)}
        disabled={disabled}
      >
        <div className="md:w-[60px] md:h-[60px] w-[50px] h-[50px] relative">
          <Image
            src={`images/icon-${imageType}.svg`}
            alt={`${imageType}`}
            fill
          />
        </div>
      </button>
    </div>
  );
};

export const RPSContainer = () => {
  const {
    playing,
    playerChoice,
    computerChoice,
    timesUp,
    reveal,
    winState,
    reset,
  } = useGameContext();

  if (!reveal) {
    return (
      <div
        className={`w-full flex md:h-[500px] h-[350px] justify-center ${
          playerChoice && "items-center"
        }`}
      >
        <>
          {playing ? (
            <>
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-white pb-8">YOU PICKED</p>
                <RPSButton imageType={playerChoice || "rock"} disabled />
              </div>

              <div className="flex flex-col items-center justify-center w-full ">
                <p className="text-white pb-8">THE HOUSE PICKED</p>
                {timesUp ? (
                  <RPSButton imageType={computerChoice || "rock"} disabled />
                ) : (
                  <div className="bg-black/[0.1] rounded-full  w-[152px] h-[152px]"></div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="md:w-[500px] w-[350px] relative mb-24">
                <Image
                  src={"/images/bg-triangle.svg"}
                  alt="bg-triangle"
                  fill
                  className="absolute "
                />
                <RPSButton
                  imageType="rock"
                  containerStyles="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                />
                <RPSButton
                  imageType="paper"
                  containerStyles="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                />
                <RPSButton
                  imageType="scissors"
                  containerStyles="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                />{" "}
              </div>
            </>
          )}
        </>
      </div>
    );
  }
  return (
    <div
      className={`w-full flex relative h-[350px] mb-12 items-center md:justify-center justify-between md:flex-nowrap flex-wrap`}
    >
      <div className="flex flex-col items-center justify-center md:w-full">
        <p className="text-white pb-8">YOU PICKED</p>
        <RPSButton imageType={playerChoice || "rock"} disabled />
      </div>

      <div className="flex flex-col items-center justify-center md:w-full h-full">
        <p className="text-white pb-8">THE HOUSE PICKED</p>

        <RPSButton imageType={computerChoice || "rock"} disabled />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center text-center px-8 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mx-auto -mt-16 md:mt-auto">
        <p className="text-white text-5xl">YOU {winState?.toUpperCase()}</p>
        <button
          onClick={reset}
          className={`bg-white px-12 py-2 rounded-lg ${
            winState === "lose" && "text-[hsl(349,71%,52%)]"
          }`}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};
