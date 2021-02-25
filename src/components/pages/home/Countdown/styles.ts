import styled from "@emotion/styled";

export const Container = styled.div`
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  font-family: Rajdhani;
  font-weight: 600;

  color: var(--title);

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex: 1;

  align-items:center;
  justify-content: space-evenly;

  background:var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  font-size: 8.5rem;
  text-align: center;

  span{
    flex:1;

    &:first-child{
      border-right: 1px solid #f0f1f3;
    }

    &:last-child{
      border-left: 1px solid #f0f1f3;
    }
  }
`;

export const ButtonContainer = styled.button`
  background: var(--blue);
  color: var(--white);

  display: flex;
  transition: background-color 0.2s;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  &:not(:disabled):hover{
    background: var(--blue-dark);
  }

  &:disabled{
    background: var(--white);
    color: var(--title);
    cursor: not-allowed;

    border-bottom:3px solid var(--green);
  }

  &.active{
    background: var(--white);
    color: var(--title);

    &:not(:disabled):hover{
      background: var(--red);
      color: var(--white);
    }
  }

  .success{
    position: relative;
    background: var(--green);

    border-radius: 50%;
    width: 1em;
    height: 1em; 

    margin-left: .5em;
    
    &:after{
      content: "";
    position: absolute;
    left: .2em;
    top: .45em;
    background: var(--green);
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 var(--white),4px 0 0 var(--white),4px -2px 0 var(--white),4px -4px 0 var(--white),4px -6px 0 var(--white),4px -8px 0 var(--white);
    transform: rotate(45deg);
    }
  }
`;