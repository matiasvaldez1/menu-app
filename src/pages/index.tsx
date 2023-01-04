import { type NextPage } from "next";
import Head from "next/head";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TusMenus App</title>
        <meta name="description" content="Tu menu online en 30 segundos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={(e) => {
        e.preventDefault()
        signIn("google", {callbackUrl: '/dashboard'})
      }}>
        Log in
      </button>
      <button>
        Register
      </button>
    </>
  );
};

export default Home;

