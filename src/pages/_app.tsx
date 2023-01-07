import { Itim } from "@next/font/google";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";
import "../styles/globals.css";

const itim = Itim({ subsets: ["latin"], weight: "400", style: "normal" });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --itim-font: ${itim.style.fontFamily};
          }
        `}
      </style>
      <SessionProvider session={session}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed left-0 bottom-0 z-50 m-8 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 p-3 font-mono text-xs text-white sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-red-500 3xl:bg-violet-500">
          <div className="z-50  block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
            al
          </div>
          <div className="z-50 hidden  sm:block md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
            sm
          </div>
          <div className="z-50 hidden sm:hidden  md:block lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
            md
          </div>
          <div className="z-50 hidden sm:hidden md:hidden  lg:block xl:hidden 2xl:hidden 3xl:hidden">
            lg
          </div>
          <div className="z-50 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden 3xl:hidden">
            xl
          </div>
          <div className="z-50 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 3xl:hidden">
            2xl
          </div>
          <div className="z-50 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:block">
            3xl
          </div>
        </div>
      )}
    </>
  );
};

export default MyApp;
