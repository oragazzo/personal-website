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
          Professionally, I'm an DevOps Tech Lead, Software Engineer, Game
          Developer, and an always learner, who loves facing any sort of
          challenges.
        </div>

        <div className={styles.info}>
          Personally, I'm a full time creative nerd who enjoys writing fantasy
          stories, creating voxel art, listening to music, watching landscapes,
          working out, bad jokes, beer and of course, a lot of coffee!
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
