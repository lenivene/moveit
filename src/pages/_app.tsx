import Globals from "@/styles/Globals";
import { ChallengeProvider } from "@/contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Globals />
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
