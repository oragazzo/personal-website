import type { NextPage } from "next";
import Head from "next/head";

import Hamburguer from "../components/Hamburger";
import TopBarContent from "../components/TopBarContent";
// import Footer from "../components/Footer";

import styles from "../styles/Home.module.scss";

import Circle from "../assets/circles/main_circle.svg";

// reactstrap components
import { Row, Col } from "reactstrap";

const Home: NextPage = () => {
  return (
    <div className="h-dvh">
      <Head>
        <title>Don&apos;t Overreact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/eye.ico" />
      </Head>

      <div className={[styles.topBar, "d-none d-lg-block"].join(" ")}>
        <TopBarContent />
      </div>

      <div className={[styles.topBar, "d-block d-lg-none p-5"].join(" ")}>
        <div className={styles.topBarResponsive}>
          <Hamburguer />
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          <Row>
            <Col xl="7">
              <div className={styles.svgContainer}>
                <Circle className={styles.mainSvgContent} />
              </div>
            </Col>
            <Col md="12" xl="4" className="p-5">
              <span className={styles.title}>
                <span>
                  <span>Find</span>
                  <span className={styles.redColor}>the</span>
                  <span className={styles.grayColor}>others</span>
                </span>
              </span>
              <p className={styles.info}>
                Everyone carries a piece of the puzzle, and nobody comes into
                your life by mere coincidence.
              </p>
              <p className={styles.info}>
                Trust your instincts. Do the unexpected. Find the others.
              </p>
            </Col>
          </Row>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Home;
