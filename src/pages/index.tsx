import { type NextPage } from "next";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { CommonHead } from "../components/ui/Seo";

const Home: NextPage = () => {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          signIn("google", { callbackUrl: "/dashboard" });
        }}
      >
        Log in
      </button>
      <button>Register</button>
    </>
  );
};

export default Home;
