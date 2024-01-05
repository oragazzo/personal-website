import React from "react";

import { Col } from "reactstrap";
import Circle from "../../assets/circles/main_circle.svg";

import styles from "../../styles/Home.module.scss";

export default function LandingPage() {
  return (
    <>
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
          Everyone carries a piece of the puzzle, and nobody comes into your
          life by mere coincidence.
        </p>
        <p className={styles.info}>
          Trust your instincts. Do the unexpected. Find the others.
        </p>
      </Col>
    </>
  );
}
