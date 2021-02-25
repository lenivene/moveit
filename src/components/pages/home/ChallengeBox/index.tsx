import { useContext } from "react";

// Contexts
import { ChallengeContext } from "@/contexts/ChallengesContext";
import { CountdownContext } from "@/contexts/CountdownContext";

import {
  ChallengeNotActive,
  Container,
  ChallengeActive,
  ButtonContainer
} from "./styles";

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext);

  const hasActiveChallenge = !!activeChallenge;

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  }

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <ButtonContainer
              className="failed"
              onClick={handleChallengeFailed}
            >
              Falhei
            </ButtonContainer>
            <ButtonContainer
              className="succeeded"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ButtonContainer>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Complete-os e ganhe experiência e avance de leve. 
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}