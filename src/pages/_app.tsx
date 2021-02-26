import Globals from "@/styles/Globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globals />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
