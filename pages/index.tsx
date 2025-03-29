import type { NextPage } from "next";

import React, { useState } from "react";
import Head from "next/head";

import TopBarContent from "@/components/layout/TopBarContent";
// import Footer from "@/components/Footer";

import LandingPage from "@/components/sections/LandingPage";
import AboutPage from "@/components/sections/AboutPage";
import ContentPage from "@/components/sections/ContentPage";
import Circle from "@/components/ui/Circle";

import styles from "@/styles/Home.module.scss";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

const Home: NextPage = () => {
  const [navigation, setNavigation] = useState("home");

  let navigationComponent;
  let svgPosition;

  switch (navigation) {
    case "home":
      navigationComponent = <LandingPage />;
      svgPosition = "absolute left-[5%] top-1/2 -translate-y-1/2 lg:block hidden";
      break;
    case "about":
      navigationComponent = <AboutPage />;
      svgPosition = "absolute right-[5%] top-1/2 -translate-y-1/2 lg:block hidden";
      break;
    case "content":
      navigationComponent = <ContentPage />;
      svgPosition = "hidden";
      break;
    default:
      navigationComponent = <LandingPage />;
      svgPosition = "absolute left-[5%] top-1/2 -translate-y-1/2 lg:block hidden";
      break;
  }

  return (
    <div className="h-dvh relative font-sans text-font">
      <SpeedInsights />
      <Analytics />
      <Head>
        <title>Not a portfolio.</title>
        <meta
          name="description"
          content="Otavio Ragazzo's personal portfolio."
        />
        <link rel="icon" href="/eye.ico" />
      </Head>

      <div className="inline-block w-full z-10 sm:block">
        <TopBarContent navigation={navigation} setNavigation={setNavigation} />
      </div>

      <main className={[styles.main, "min-h-screen p-0 flex flex-col md:justify-center items-center flex-1"].join(" ")}>
        <div className={svgPosition}>
          <Circle />
        </div>

        <div className="relative z-10 w-full">
          <div
            className={`grid grid-cols-1 md:grid-cols-1 ${
              navigation === "content"
                ? "lg:grid-cols-1"
                : "lg:grid-cols-2"
            } w-full`}>
            {navigationComponent}
          </div>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Home;
