import styled, { createGlobalStyle } from "styled-components";
import { darken, rgba } from 'polished';
import { GlobalColors } from "@/config/colors";

export const HomeGlobal = createGlobalStyle`
  body{
    background: var(--blue) url('/assets/bgHome.png') left center no-repeat !important;
    color: var(--white) !important;
    min-height: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 992px;
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  padding: 15px;
`;

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-end;

  width: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 422px;
  width: 100%;
  height: 422px;

  header{
    width:100%;

    img{
      width: 360px;
      height: 76px;

      user-select: none;
    }
  }
`;

export const Details = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  flex: 1;

  .description{
    display: flex;
    flex-direction: column;

    h2 {
      font-weight: 600;
      font-size: 2.25rem;

      margin-bottom: 1.5rem;
    }

    .info {
      display: flex;
      align-items: center;

      font-size: 1.25rem;

      img{
        height: 40px;
        width: 40px;

        margin-right: 1.5rem;
      }
    }
  }
`;

export const Form = styled.form`
  background: linear-gradient(
    90deg,
    ${darken(0.03, GlobalColors.blue)} 0%,
    ${rgba(GlobalColors.blue, .8)} 100%
  );
  border: 1px solid transparent;
  border-radius: 5px 0px 0px 5px;

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 80px;

  :focus-within input,
  :hover input {
    border: 1px solid var(--blue-dark);
  }

  input{
    background: none;
    border: 1px solid transparent;
    outline: none;

    padding: 1.4375rem 1.875rem;

    color: var(--white);

    &::placeholder{
      color: var(--text-highlight);
    }
  }

  button{
    background: var(--blue-dark);
    color: var(--white);

    border: 0;
    border-radius: 0px 5px 5px 0px;

    width: 80px;
    height: 80px;

    &:hover{
      background: var(--green);
    }
  }
`;