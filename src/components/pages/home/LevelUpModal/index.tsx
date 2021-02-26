import { useContext } from "react";
import { ChallengeContext } from "@/contexts/ChallengesContext";

import {
  OverlayContainer,
  ModalContainer,
  ModalHeader,
  CloseButton
} from "./styles";

export function LevelUpModal(){
  const { level, closeLevelUpModal } = useContext(ChallengeContext)
  return (
    <OverlayContainer>
      <ModalContainer>
        <ModalHeader>{level}</ModalHeader>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <CloseButton
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar" title="Fechar" />
        </CloseButton>
      </ModalContainer>
    </OverlayContainer>
  )
}