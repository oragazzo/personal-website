import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/TopBar.module.scss";

import TopBarMarker from "./TopBarMarker";

type Props = {
  navigation: string;
  setNavigation: (val: string) => void;
};

const TopBarContent: React.FC<Props> = ({ navigation, setNavigation }) => {
  const aboutRef = useRef<HTMLButtonElement>(null);
  const homeRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLButtonElement>(null);
  const [xPos, setXPos] = useState(0);

  useEffect(() => {
    switch (navigation) {
      case "about":
        setXPos(
          (aboutRef.current?.offsetLeft || 0) +
            (aboutRef.current?.offsetWidth / 2 || 0)
        );
        break;
      case "home":
        setXPos(
          (homeRef.current?.offsetLeft || 0) +
            (homeRef.current?.offsetWidth / 2 || 0)
        );
        break;
      case "content":
        setXPos(
          (contentRef.current?.offsetLeft || 0) +
            (contentRef.current?.offsetWidth / 2 || 0)
        );
        break;
      default:
        break;
    }
  }, [navigation]);

  return (
    <>
      <div className={styles.topBarContent}>
        <p className={navigation === "about" ? styles.selected : styles.item}>
          <button ref={aboutRef} onClick={(e) => setNavigation("about")}>
            About
          </button>
        </p>
        <p className={navigation === "home" ? styles.selected : styles.item}>
          <button ref={homeRef} onClick={(e) => setNavigation("home")}>
            Home
          </button>
        </p>
        <p className={navigation === "content" ? styles.selected : styles.item}>
          <button ref={contentRef} onClick={(e) => setNavigation("content")}>
            Art
          </button>
        </p>

        <TopBarMarker xPos={xPos} />
      </div>
    </>
  );
};

export default TopBarContent;
