"use client";
import Header from "@/components/Header";
import { RPSContainer } from "@/components/RPSButton";
import RulesButton from "@/components/RulesButton";
import GameContextProvider from "@/context/GameContextProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-24 p-12">
      <GameContextProvider>
        <Header />
        <RPSContainer />
        <RulesButton />
      </GameContextProvider>
    </main>
  );
}
