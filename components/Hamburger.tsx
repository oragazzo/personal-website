import styles from "../styles/Hamburguer.module.scss";
import React, { useState } from "react";

import HamburguerIcon from "../assets/icons/HamburguerIcon.svg";
import TopBarContent from "./TopBarContent";

import BehanceIcon from "../assets/social/icon_behance.svg";
import InstagramIcon from "../assets/social/icon_instagram.svg";
import RedditIcon from "../assets/social/icon_reddit.svg";
import TwitterIcon from "../assets/social/icon_twitter.svg";

import Link from "next/link";

type Props = {
  navigation: string;
  setNavigation: (val: string) => void;
};

const Hamburguer: React.FC<Props> = ({ navigation, setNavigation }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburguerIcon
        onClick={() => setOpen(!open)}
        className={styles.btnOpenMenu}
      />

      {open && (
        <div className={styles.HeaderContent}>
          <a className={styles.btnCloseMenu} onClick={() => setOpen(!open)}>
            X
          </a>
          <nav>
            <TopBarContent
              navigation={navigation}
              setNavigation={setNavigation}
            />
          </nav>
          <div className={styles.social}>
            <Link
              href="https://www.instagram.com/oragazzo"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={styles.socialBadge} />
            </Link>

            <Link
              href="https://twitter.com/sRagazz0"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className={styles.socialBadge} />
            </Link>

            <Link
              href="https://www.reddit.com/user/xRagazz0"
              target="_blank"
              rel="noreferrer"
            >
              <RedditIcon className={styles.socialBadge} />
              <i className="fab fa-github"></i>
            </Link>

            <Link
              href="https://www.behance.net/oragazzo"
              target="_blank"
              rel="noreferrer"
            >
              <BehanceIcon className={styles.socialBadge} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburguer;
