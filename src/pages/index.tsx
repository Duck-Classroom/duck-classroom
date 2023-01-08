import { type NextPage } from "next";
import Head from "next/head";
import ThemeSwitch from "../common/components/elements/ThemeSwitch";
import BasicAuthComponent from "../modules/auth/components/BasicAuthComponent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Duck Classroom</title>
        <meta
          name="description"
          content="duck-classroom E-Learning web application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-base-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-gradient-to-r from-primary to-secondary  text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Duck Classroom
          </h1>
          <ThemeSwitch />
          <BasicAuthComponent />
        </div>
      </main>
    </>
  );
};

export default Home;
