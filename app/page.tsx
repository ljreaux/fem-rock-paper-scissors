"use client";
import Header from "@/components/Header";
import { RPSContainer } from "@/components/RPSButton";
import RulesButton from "@/components/RulesButton";
import GameContextProvider from "@/context/GameContextProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GameContextProvider>
        <Header />
        <RPSContainer />
        <RulesButton />
      </GameContextProvider>
    </main>
  );
}
