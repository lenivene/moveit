import { useContext } from "react";
import { CountdownContext } from "@/contexts/CountdownContext";

import {
  Container,
  CountdownContainer,
  NumbersContainer,
  ButtonContainer
} from "./styles";

export function Countdown(){
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const filterTime = (timer: number) => String(timer).padStart(2, '0').split('')

  const [minuteLeft, minuteRight] = filterTime(minutes);
  const [secondLeft, secondRight] = filterTime(seconds);

  return (
    <Container>
      <CountdownContainer>
        <NumbersContainer>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </NumbersContainer>
        <span>:</span>
        <NumbersContainer>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </NumbersContainer>
      </CountdownContainer>
      {hasFinished ? (
        <ButtonContainer disabled>
        Ciclo encerrado
        <span className="success"></span>
        </ButtonContainer>
      ) : (
        <>
          {isActive ? (
            <ButtonContainer
            className="active"
            onClick={resetCountdown}
            >
            Abandonar ciclo
            </ButtonContainer>
          ) : (
            <ButtonContainer onClick={startCountdown}>
            Iniciar um ciclo
          </ButtonContainer>
          )}
        </>
      )}
    </Container>
  )
}