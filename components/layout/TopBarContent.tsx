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
        if (aboutRef.current) {
          setXPos(
            aboutRef.current.offsetLeft + aboutRef.current.offsetWidth / 2
          );
        }
        break;
      case "home":
        if (homeRef.current) {
          setXPos(homeRef.current.offsetLeft + homeRef.current.offsetWidth / 2);
        }
        break;
      case "content":
        if (contentRef.current) {
          setXPos(
            contentRef.current.offsetLeft + contentRef.current.offsetWidth / 2
          );
        }
        break;
      default:
        break;
    }
  }, [navigation]);

  return (
    <>
      <div className={styles.topBarContent}>
        <div className="flex">
          <p className="text-2xl/8 ml-5">
            <button ref={homeRef} onClick={(e) => setNavigation("home")}>
              Home
            </button>
          </p>
          <p className="text-xl/9 mx-5">
            <button ref={aboutRef} onClick={(e) => setNavigation("about")}>
              About
            </button>
          </p>
        </div>
        <div className="flex">
          <p className="text-xl/9 mx-5">
            <button ref={contentRef} onClick={(e) => setNavigation("content")}>
              Art
            </button>
          </p>
        </div>

        <TopBarMarker xPos={xPos} />
      </div>
    </>
  );
};

export default TopBarContent;
