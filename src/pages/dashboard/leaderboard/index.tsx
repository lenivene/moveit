import Head from "next/head";

// Components
import { MainContainer } from "@/styles/pages/dashboard/styles";
import { Container } from "@/styles/pages/dashboard/home/styles";
import { Header } from "@/components/pages/dashboard/header";

function Home() {
  return (
    <MainContainer>
      <Header />
      <Container className="wrap">
        <Head>
          <title>Leaderboard - Dashboard | Move.it</title>
        </Head>
        Leaderboard
      </Container>
    </MainContainer>
  );
}

export default Home;