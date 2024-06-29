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
        className={`bg-white p-8 rounded-full m-4 shadow-circle-shadow`}
        onClick={() => setPlayerChoice(imageType)}
        disabled={disabled}
      >
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
        className={`w-full flex relative h-[700px] ${
          playerChoice && "items-center justify-center"
        }`}
      >
        <>
          {playing ? (
            <>
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-white pb-8">YOU PICKED</p>
                <RPSButton imageType={playerChoice || "rock"} disabled />
              </div>

              <div className="flex flex-col items-center justify-center w-full h-full">
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
              <Image
                src={"/images/bg-triangle.svg"}
                alt="bg-triangle"
                width={500}
                height={500}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <RPSButton
                imageType="rock"
                containerStyles="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <RPSButton
                imageType="paper"
                containerStyles="absolute top-0 translate-y-1/2 left-1/2 -translate-x-[calc(250px+50%)] "
              />
              <RPSButton
                imageType="scissors"
                containerStyles="absolute top-0 translate-y-1/2 left-1/2 translate-x-[calc(250px-50%)]"
              />
            </>
          )}
        </>
      </div>
    );
  }
  return (
    <div
      className={`w-full flex relative h-[700px] items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-white pb-8">YOU PICKED</p>
        <RPSButton imageType={playerChoice || "rock"} disabled />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center text-center px-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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

      <div className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-white pb-8">THE HOUSE PICKED</p>

        <RPSButton imageType={computerChoice || "rock"} disabled />
      </div>
    </div>
  );
};
