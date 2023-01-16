import React from 'react'

import styles from '../styles/SpotifyBadge.module.scss'

export default function SpotifyBadge() {
  return (
    <div className={styles.SpotifyBadgeWrapper}>
      <div className={styles.spotifyContainer}></div>
    </div>
  )
}
