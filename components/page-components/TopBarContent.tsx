import React from "react";
import styles from "../../styles/TopBar.module.scss";

type Props = {
  navigation: string;
  setNavigation: (val: string) => void;
};

const TopBarContent: React.FC<Props> = ({ navigation, setNavigation }) => {
  return (
    <>
      <div className={styles.topBarContent}>
        <p className={styles.item}>
          <button onClick={(e) => setNavigation("about")}>About</button>
        </p>
        <p className={styles.home}>
          <button onClick={(e) => setNavigation("home")}>Home</button>
        </p>
        <p className={styles.item}>
          <button onClick={(e) => setNavigation("content")}>Art</button>
        </p>
      </div>
    </>
  );
};

export default TopBarContent;
