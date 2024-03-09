import React from "react";

import { Col } from "reactstrap";

import styles from "@/styles/Home.module.scss";
import Divider from "@/components/page-components/Divider";

export default function AboutPage() {
  return (
    <>
      <Col md="12" xl="6">
        <div className={styles.contentWrapper}>
          <span className={styles.title}>
            <div>
              <span>Who</span>
              <span className={styles.redColor}>am</span>
              <span className={styles.grayColor}>I?</span>
            </div>
          </span>
          <div className={styles.info}>
            Professionally, I'm a Tech Leader, Software Engineer, Game Dev, and
            an always learner, who goes berserk (in a good way!) to solve any
            kind of challenges.
          </div>

          <div className={styles.info}>
            Personally, I'm a full time creative nerd who enjoys music, live
            shows, landscapes, traveling, writing, working out, bad jokes and
            beer. Oh, and video games too.
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
      </Col>
      <Col xl="6"></Col>
    </>
  );
}
