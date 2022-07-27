import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Circle from '../assets/main_circle.svg'
import SideCircle from '../assets/side_circle.svg'
import BottomCircle from '../assets/bottom_circle.svg'

// reactstrap components
import { Row, Col } from 'reactstrap'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome To A Little Piece Of My World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <p className={styles.item}>
            <a href="/api/hello">Item 1</a>
          </p>
          <p className={styles.item}>
            <a href="/api/hello">Item 1</a>
          </p>
          <p className={styles.home}>
            <a href="/">Home</a>
          </p>
          <p className={styles.item}>
            <a href="/api/hello">Item 1</a>
          </p>
          <p className={styles.item}>
            <a href="/api/hello">Item 1</a>
          </p>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          <Row>
            <Col xl="7" className="d-none d-lg-block">
              <div className={styles.svgContainer}>
                <SideCircle className={styles.sideLeftSvgContent} />
                <Circle className={styles.mainSvgContent} />
              </div>
            </Col>
            <Col xl="4" md="12" className="p-5">
              <h1 className={styles.title}>Work Anywhere</h1>
              <p className={styles.info}>
                Lörem ipsum tremöligen åligt astrorat multira, eller autobel i
                biode, då fön mav rekor att pobel. Hexasor dinat, fabelt tehina
                essa reakrora, geoledes och fak inte bemögon monoren bemar. Don
                sanat, dor okilig sesk, dokygt epihaliga såväl som preren.
                Kodånde soplasat i bisat och semil.
              </p>
              <p className={styles.info}>
                Bes bebel då ån i ana okav ekassade, anterad förutom vira
                anaråns mimönde egongar krovis. Mist assa i tralig aligt nyvis
                konade inte paskap i suheten onas om sal.
              </p>
            </Col>
          </Row>
        </div>
      </main>
      <div className={styles.bottomContainer}>
        <div className="d-none d-lg-block">
          <BottomCircle className={styles.sideBottomSvgContent} />
        </div>
      </div>
    </div>
  )
}

export default Home
