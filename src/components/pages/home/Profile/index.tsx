import {
  Container,
  PictureProfile,
  DetailsContainer,
  NameText,
  LevelValue
} from "./styles";

export function Profile(){
  return (
    <Container>
      <PictureProfile src="https://github.com/lenivene.png" alt="Lenivene Bezerra" />
      <DetailsContainer>
        <NameText>Lenivene Bezerra</NameText>
        <LevelValue>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </LevelValue>
      </DetailsContainer>
    </Container>
  )
}