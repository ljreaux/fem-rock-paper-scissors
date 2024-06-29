import Header from "@/components/Header";
import { RPSContainer } from "@/components/RPSButton";
import RulesButton from "@/components/RulesButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header score={12} />
      <RPSContainer />
      <RulesButton />
    </main>
  );
}
