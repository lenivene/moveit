import { useContext } from "react";
import { ChallengeContext } from "@/contexts/ChallengesContext";

import { Container } from "./styles";

export function CompletedChallenges(){
  const { challengesCompleted } = useContext(ChallengeContext)
  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}