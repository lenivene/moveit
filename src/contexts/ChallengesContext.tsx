import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "@/challenges.json";

interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

interface ChallengeProviderProps {
  children: ReactNode;
}

export function ChallengeProvider({ children }: ChallengeProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  // Challenge
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  const levelUp = () => {
    setLevel(level + 1);
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === "granted"){
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null);
  }

  const completeChallenge = () => {
    if(!activeChallenge) return;

    const { amount  } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted+1);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
} 