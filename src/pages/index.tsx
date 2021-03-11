import { FormEvent } from 'react';
import { useRouter } from 'next/router';

import Head from "next/head";
import Link from "next/link";

// Components
import { HomeGlobal, Main, Container, LoginContainer, Details, Form } from "@/styles/pages/home/styles";

// Assets
import ArrowRight from "./_assets/home/arrow-right.svg";

function Home() {
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    router.push('/dashboard')
  }

  return (
    <Main>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <HomeGlobal />
      <Container>
        <LoginContainer>
          <header>
            <Link href="/">
              <a>
                <img src="/assets/logo.svg" />
              </a>
            </Link>
          </header>
          <Details>
            <div className="description">
              <h2>Bem-vindo</h2>
              <div className="info">
                <img src="/icons/github.svg" />
                <p>Faça login com seu Github para começar</p>
              </div>
            </div>
          </Details>
          <Form onSubmit={handleLogin}>
            <input name="username" placeholder="Digite seu username" />
            <button type="submit">
              <ArrowRight />
            </button>
          </Form>
        </LoginContainer>
      </Container>
    </Main>
  );
}

export default Home;