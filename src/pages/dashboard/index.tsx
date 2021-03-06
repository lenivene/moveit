import Head from "next/head";

// Components
import { Container, PainelContainer } from "@/styles/pages/dashboard/home/styles";
import { ExperienceBar } from "@/components/pages/home/ExperienceBar";
import { Profile } from "@/components/pages/home/Profile";
import { CompletedChallenges } from "@/components/pages/home/CompletedChallenges";
import { Countdown } from "@/components/pages/home/Countdown";
import { ChallengeBox } from "@/components/pages/home/ChallengeBox";

// Contexts
import { CountdownProvider } from "@/contexts/CountdownContext";

function Home() {
  return (
    <Container>
      <Head>
        <title>Início - Dashboard | Move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <PainelContainer>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </PainelContainer>
      </CountdownProvider>
    </Container>
  );
}

export default Home;