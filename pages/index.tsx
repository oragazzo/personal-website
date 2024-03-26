import type { NextPage } from "next";

import React, { useState, useEffect } from "react";
import Head from "next/head";

import Hamburguer from "@/components/page-components/Hamburger";
import TopBarContent from "@/components/page-components/TopBarContent";
// import Footer from "@/components/Footer";

import LandingPage from "@/components/views/LandingPage";
import AboutPage from "@/components/views/AboutPage";
import ContentPage from "@/components/views/ContentPage";
import Circle from "@/components/page-components/Circle";

import styles from "@/styles/Home.module.scss";

const Home: NextPage = () => {
  const [navigation, setNavigation] = useState("home");

  let navigationComponent;
  let svgPosition;

  switch (navigation) {
    case "home":
      navigationComponent = <LandingPage />;
      svgPosition =
        "absolute inset-y-0 left-0 flex items-center justify-center";
      break;
    case "about":
      navigationComponent = <AboutPage />;
      svgPosition =
        "absolute inset-y-0 right-0 flex items-center justify-center";
      break;
    case "content":
      navigationComponent = <ContentPage />;
      svgPosition = "hidden";
      break;
    default:
      navigationComponent = <LandingPage />;
      svgPosition =
        "absolute inset-y-0 left-0 flex items-center justify-center";
      break;
  }

  return (
    <div className="h-dvh">
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
        <div className={[svgPosition].join(" ")}>
          <Circle />
        </div>

        <div className={styles.container}>
          <div className="grid lg:grid-cols-2 sm:grid-cols-12">
            {navigationComponent}
          </div>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Home;
