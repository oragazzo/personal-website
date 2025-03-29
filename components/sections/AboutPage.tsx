import React from "react";

import styles from "@/styles/Home.module.scss";
import Divider from "@/components/ui/Divider";

export default function AboutPage() {
  return (
    <>
      <div className={[styles.contentWrapper, "lg:pl-12 px-6"].join(" ")}>
        <span className={styles.title}>
          <div>
            <span>Who</span>
            <span className={styles.redColor}>am</span>
            <span className={styles.grayColor}>I?</span>
          </div>
        </span>
        <div className={styles.info}>
        I&apos;m a <b>software engineer</b> and <b>game developer</b> who loves solving challenges and building cool things. I work with automation, containerization, microservices, and backend development using Go and Django.
        </div>
        <div className={styles.info}>
        Outside of tech, I&apos;m a full-time creative nerd who enjoys writing fantasy stories, motorcycles, music, and epic landscapes. I live for workouts, bad jokes, good beer, and an endless supply of coffee!
        </div>
        <Divider />
        <div className={styles.quote}>
          &#xFF02;Because we have no greater purpose, we are free to set our
          own.
          <br />
          To create self-defined goals for which to strive.&#xFF02; <br />-
          Ultrakill
        </div>
      </div>
      <div className="lg:block hidden"></div>
    </>
  );
}
