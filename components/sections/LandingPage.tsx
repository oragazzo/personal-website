import React from "react";

import styles from "@/styles/Home.module.scss";
import Divider from "@/components/ui/Divider";

export default function LandingPage() {
  return (
    <>
      <div className="lg:block hidden"></div>
      <div className={[styles.contentWrapper, "lg:pr-12 px-6"].join(" ")}>
        <span className={styles.title}>
          <div>
            <span>Not</span>
            <span className={styles.redColor}>a</span>
            <span className={styles.grayColor}>portfolio</span>
          </div>
        </span>
        <div className={styles.info}>
          Welcome to the <b>@oragazzo</b> showroom. This is the place where I keep my favourite <b>creations</b> and <b>artworks</b>. Enjoy it!
        </div>
        <Divider />
        <div className={styles.quote}>
          &#xFF02;Trust your instincts. Do the unexpected. Find the
          others…&#xFF02; <br />- Timothy Leary
        </div>
      </div>
    </>
  );
}
