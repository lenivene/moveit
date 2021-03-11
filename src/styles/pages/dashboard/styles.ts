import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  width:100%;

  flex-direction: row;
  
  .wrap{
    flex: 1;
  }
`;

export const Container = styled.section`
  height:100vh;
  max-width: 992px;

  margin:0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  h1.title{
    color: var(--title);
    font-size: 2.25rem;
  }
`;

export const HeaderContainer = styled.header`
  margin-bottom: 2.5rem;
`;