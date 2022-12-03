import styles from '../styles/Hamburguer.module.scss'
import React, { useState } from 'react'

import HamburguerIcon from '../assets/icons/HamburguerIcon.svg'
import TopBarContent from './TopBarContent'

import BehanceIcon from '../assets/social/icon_behance.svg'
import InstagramIcon from '../assets/social/icon_instagram.svg'
import RedditIcon from '../assets/social/icon_reddit.svg'
import TwitterIcon from '../assets/social/icon_twitter.svg'

export default function Hamburguer() {
  const [open, setOpen] = useState(false)

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
            <TopBarContent />
          </nav>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/oragazzo"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={styles.socialBadge} />
            </a>

            <a
              href="https://twitter.com/sRagazz0"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className={styles.socialBadge} />
            </a>

            <a
              href="https://www.reddit.com/user/xRagazz0"
              target="_blank"
              rel="noreferrer"
            >
              <RedditIcon className={styles.socialBadge} />
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.behance.net/oragazzo"
              target="_blank"
              rel="noreferrer"
            >
              <BehanceIcon className={styles.socialBadge} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
