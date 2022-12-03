import React from 'react'
import Link from 'next/link'
import styles from '../styles/TopBar.module.scss'

export default function TopBar() {
  return (
    <>
      <div className={styles.topBarContent}>
        <p className={styles.item}>
          <Link href="/api/hello">Skills</Link>
        </p>
        <p className={styles.item}>
          <Link href="/api/hello">About</Link>
        </p>
        <p className={styles.home}>
          <Link href="/">Home</Link>
        </p>
        <p className={styles.item}>
          <Link href="/api/hello">Content</Link>
        </p>
        <p className={styles.item}>
          <Link href="/api/hello">Listening</Link>
        </p>
      </div>
    </>
  )
}
