import styled from "@emotion/styled";

export const OverlayContainer = styled.div`
  background: rgba( 242, 243, 245, 0.8);

  display: flex;
  position: fixed;

  justify-content: center;
  align-items: center;

  top:0;
  right:0;
  bottom:0;
  left:0;

`;

export const ModalContainer = styled.div`
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  position: relative;

  width: 100%;
  max-width: 400px;

  padding: 2rem 3rem;
  border-radius: 5px;

  text-align: center;

  strong{
    font-size:2.25rem;
    color: var(--title);
  }

  p{
    font-size:1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }
`;

export const ModalHeader = styled.div`
  background: url('/icons/levelup.svg') center no-repeat;
  background-size: contain;

  font-size: 8.75rem;
  font-weight: 600;

  color: var(--blue);
`;

export const CloseButton = styled.button`
  background: none;

  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  border: 0;
  font-size: 0;
`;