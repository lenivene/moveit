import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(180deg, #FFFFFF 0%, transparent 100%);
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));

  width: 112px;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100px;
  padding: 2rem;
`;

export const Menu = styled.nav`
  display: flex;
  flex: 1;

  align-items: center;

  ul {
    width: 100%;

    li {      
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;

      width: 100%;
      padding:.5rem 0;

      margin-bottom: .5rem;

      color: var(--text);

      g{
        opacity: 1;
      }

      a:hover{
        color: var(--blue-dark);
      }

      &.active {
        a,
        a:hover{
          color: var(--blue);
        }
        
        &::before{
          background: var(--blue);
          position: absolute;
          
          content: '';
          
          width: 4px;
          height:100%;
          
          top:0;
          left:0;
          
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }
`;