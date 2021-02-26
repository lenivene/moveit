import { useContext } from "react";
import { ChallengeContext } from "@/contexts/ChallengesContext";
import {
  Container,
  PictureProfile,
  DetailsContainer,
  NameText,
  LevelValue
} from "./styles";

export function Profile(){
  const { level } = useContext(ChallengeContext);

  return (
    <Container>
      <PictureProfile src="https://github.com/lenivene.png" alt="Lenivene Bezerra" />
      <DetailsContainer>
        <NameText>Lenivene Bezerra</NameText>
        <LevelValue>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </LevelValue>
      </DetailsContainer>
    </Container>
  )
}