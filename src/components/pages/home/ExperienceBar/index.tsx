import { useContext } from "react";
import { ChallengeContext } from "@/contexts/ChallengesContext";

import {
  Container,
  ProgressContainer,
  Progress,
  Experience
} from "./styles";

export function ExperienceBar(){
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);
  const percentToNextLevel = Math.round( currentExperience * 100 ) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <ProgressContainer>
        <Progress percent={percentToNextLevel} />
        <Experience progress={percentToNextLevel}>{currentExperience} xp</Experience>
      </ProgressContainer>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}