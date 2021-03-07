import Head from "next/head";

// Components
import { Header } from "@/components/pages/dashboard/header";
import { MainContainer, HeaderContainer } from "@/styles/pages/dashboard/styles";
import { ListGrid, Container } from "./styles";

function Home() {
  const leaders = Array(5).fill("");

  return (
    <MainContainer>
      <Header />
      <Container className="wrap">
        <Head>
          <title>Leaderboard - Dashboard | Move.it</title>
        </Head>
        <HeaderContainer>
          <h1 className="title">Leaderboard</h1>
        </HeaderContainer>
        <ListGrid>
          <div className="header-list position">Posição</div>
          <div className="header-list user">Usuário</div>
          <div className="header-list challenges">Desafios</div>
          <div className="header-list xp">Experiência</div>
        </ListGrid>
        {leaders.map((item, index) => (
          <ListGrid key={`leaders-${index}`}>
            <div className="item position">{index + 1}</div>
            <div className="item user">
              <div>
                <img src="https://github.com/lenivene.png" alt="Foto Perfil" />
                <div className="data">
                  <div className="name">Lenivene Bezerra</div>
                  <div className="level">
                    <img src="/icons/level.svg" alt="Level" />
                    Level 20
                  </div>
                </div>
              </div>
            </div>
            <div className="item challenges"><span>{ 127 - index }</span> completados</div>
            <div className="item xp"><span>{ 154000 - index }</span> xp</div>
          </ListGrid>
        ))}
      </Container>
    </MainContainer>
  );
}

export default Home;