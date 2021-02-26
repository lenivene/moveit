import Head from "next/head";

// Components
import { Container, PainelContainer } from "@/styles/pages/home/styles";
import { ExperienceBar } from "@/components/pages/home/ExperienceBar";
import { Profile } from "@/components/pages/home/Profile";
import { CompletedChallenges } from "@/components/pages/home/CompletedChallenges";
import { Countdown } from "@/components/pages/home/Countdown";
import { ChallengeBox } from "@/components/pages/home/ChallengeBox";

// Contexts
import { CountdownProvider } from "@/contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengeProvider } from "@/contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({level, currentExperience, challengesCompleted}: HomeProps) {
  return (
    <ChallengeProvider
    level={level}
    currentExperience={currentExperience}
    challengesCompleted={challengesCompleted}
    >
      <Container>
        <Head>
          <title>Início | Move.it</title>
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
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}