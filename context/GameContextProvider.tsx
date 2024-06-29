"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Choice = "rock" | "paper" | "scissors";

export interface ContextType {
  playerChoice: Choice | null;
  setPlayerChoice: React.Dispatch<React.SetStateAction<Choice | null>>;
  computerChoice: Choice | null;
  setComputerChoice: React.Dispatch<React.SetStateAction<Choice | null>>;
  winState: "win" | "lose" | "tie" | null;
  playing: boolean;
  timesUp: boolean;
  reveal: boolean;
  reset: () => void;
  score: number | null;
}

const GameContext = createContext<any>(null);

export const useGameContext = (): ContextType => useContext(GameContext);

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [winState, setWinState] = useState<"win" | "lose" | "tie" | null>(null);
  const [playing, setPlaying] = useState(false);
  const [timesUp, setTimesUp] = useState(false);

  const beats = {
    rock: ["scissors"],
    paper: ["rock"],
    scissors: ["paper"],
  };

  const [score, setScore] = useState<number | null>(null);
  useEffect(() => {
    const savedValue = window.localStorage.getItem("score");
    setScore(savedValue ? Number(savedValue) : 0);
  }, []);
  useEffect(() => {
    if (typeof score === "number") {
      window.localStorage.setItem("score", score.toString());
    }
  }, [score]);

  useEffect(() => {
    if (playerChoice) {
      setPlaying(true);
      const choiceArr: Choice[] = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choiceArr.length);
      const randomChoice = choiceArr[randomIndex];
      setComputerChoice(randomChoice);

      setTimeout(() => {
        setTimesUp(true);

        if (beats[playerChoice].includes(randomChoice)) {
          setWinState("win");
          if (typeof score === "number") setScore(score + 1);
        } else if (randomChoice === playerChoice) setWinState("tie");
        else {
          setWinState("lose");
          if (typeof score === "number") setScore(score - 1);
        }
      }, 3000);
    }
  }, [playerChoice]);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (timesUp) {
      setTimeout(() => {
        setReveal(true);
      }, 3000);
    }
  }, [timesUp]);

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinState(null);
    setPlaying(false);
    setTimesUp(false);
    setReveal(false);
  };

  return (
    <GameContext.Provider
      value={{
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
        winState,
        playing,
        setPlaying,
        reset,
        score,
        timesUp,
        reveal,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
