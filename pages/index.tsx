import type { NextPage } from "next";

import React, { useState } from "react";
import Head from "next/head";

import Hamburguer from "@/components/page-components/Hamburger";
import TopBarContent from "@/components/page-components/TopBarContent";
// import Footer from "@/components/Footer";

import LandingPage from "@/components/views/LandingPage";
import AboutPage from "@/components/views/AboutPage";
import ContentPage from "@/components/views/ContentPage";
import Circle from "@/components/page-components/Circle";

import styles from "@/styles/Home.module.scss";

import { SpeedInsights } from "@vercel/speed-insights/next";

const Home: NextPage = () => {
  const [navigation, setNavigation] = useState("home");

  let navigationComponent;
  let svgPosition;

  switch (navigation) {
    case "home":
      navigationComponent = <LandingPage />;
      svgPosition =
        "absolute left-[5%] top-1/2 -translate-y-1/2 lg:block sm:hidden xs:hidden";
      break;
    case "about":
      navigationComponent = <AboutPage />;
      svgPosition =
        "absolute right-[5%] top-1/2 -translate-y-1/2 lg:block sm:hidden xs:hidden";
      break;
    case "content":
      navigationComponent = <ContentPage />;
      svgPosition = "hidden";
      break;
    default:
      navigationComponent = <LandingPage />;
      svgPosition =
        "absolute left-[5%] top-1/2 -translate-y-1/2 lg:block sm:hidden xs:hidden";
      break;
  }

  return (
    <div className="h-dvh relative">
      <SpeedInsights />
      <Head>
        <title>Not a portfolio.</title>
        <meta
          name="description"
          content="Otavio Ragazzo's personal portfolio."
        />
        <link rel="icon" href="/eye.ico" />
      </Head>

      <div className={[styles.topBar, "d-none d-lg-block"].join(" ")}>
        <TopBarContent navigation={navigation} setNavigation={setNavigation} />
      </div>

      <div className={[styles.topBar, "d-block d-lg-none p-5"].join(" ")}>
        <div className={styles.topBarResponsive}>
          <Hamburguer navigation={navigation} setNavigation={setNavigation} />
        </div>
      </div>

      <main className={styles.main}>
        <div className={svgPosition}>
          <Circle />
        </div>

        <div className={[styles.container, "relative z-10 w-full"].join(" ")}>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full">
            {navigationComponent}
          </div>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Home;
