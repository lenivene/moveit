import styled from "@emotion/styled";

export const Container = styled.div`
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display:flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;
  padding: 1.5rem 2rem;
  border-radius: 5px;
`;

export const ChallengeActive = styled.section`
  display: flex;
  flex-direction:column;

  height: 100%;

  header{
    color: var(--blue);

    font-weight: 600;
    font-size: 1.25rem;

    padding:0 2rem 1.5rem;

    border-bottom:1px solid var(--gray-line);
  }

  main{
    display: flex;
  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    strong{
      font-size: 2rem;
      font-weight: 600;

      color: var(--title);

      margin: 1.5rem 0 1rem;
    }

    p{
      line-height: 1.5;
    }
  }

  footer{
    display: grid;

    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const ButtonContainer = styled.button`
  display:flex;

  align-items: center;
  justify-content: center;

  height: 3rem;

  border: 0;
  border-radius: 5px;

  color: var(--white);

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9)
  }

  &.failed{
    background: var(--red);
  }

  &.succeeded{
    background: var(--green);
  }
`;

export const ChallengeNotActive = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  strong{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p{
    display: flex;

    flex-direction: column;
    align-items:center;

    max-width: 70%;

    line-height:1.4;
    margin-top:3rem;

    img{
      margin-bottom: 1rem;
    }
  }
`;