import React from 'react'

import styles from '../styles/Footer.module.scss'

import BottomCircle from '../assets/circles/bottom_circle.svg'

import BehanceIcon from '../assets/social/icon_behance.svg'
import InstagramIcon from '../assets/social/icon_instagram.svg'
import RedditIcon from '../assets/social/icon_reddit.svg'
import TwitterIcon from '../assets/social/icon_twitter.svg'

export default function Footer() {
  return (
    <div className={[styles.footerWrapper, 'd-none d-lg-block'].join(' ')}>
      <div className={[styles.socialContainer].join(' ')}>
        <div className={styles.socialGroup}>
          <a
            className={styles.socialMedia}
            href="https://www.instagram.com/oragazzo"
            target="_blank"
          >
            <InstagramIcon className={styles.socialBadge} />
            <p className={styles.socialText}>@oragazzo</p>
          </a>
          <a
            className={styles.socialMedia}
            href="https://twitter.com/sRagazz0"
            target="_blank"
          >
            <TwitterIcon className={styles.socialBadge} />
            <p className={styles.socialText}>@sRagazz0</p>
          </a>
        </div>

        <div className={styles.socialGroup}>
          <a
            className={styles.socialMedia}
            href="https://www.reddit.com/user/xRagazz0"
            target="_blank"
          >
            <RedditIcon className={styles.socialBadge} />
            <p className={styles.socialText}>@xRagazz0</p>
          </a>
          <a
            className={styles.socialMedia}
            href="https://www.behance.net/oragazzo"
            target="_blank"
          >
            <BehanceIcon className={styles.socialBadge} />
            <p className={styles.socialText}>/oragazzo</p>
          </a>
        </div>
      </div>

      <BottomCircle className={[styles.bgCircleSvg].join(' ')} />
    </div>
  )
}
