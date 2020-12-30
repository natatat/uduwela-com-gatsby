import React, { useRef } from "react"
import Footer from "../components/Footer"
import Cursor from "../components/Cursor"
import styles from "./index.module.scss"

const Home = () => {
  const canvasInRef = useRef()
  const canvasOutRef = useRef()
  return (
    <>
      <section className={styles.scratchedIn}>
        <div className={styles.blackBg}></div>
        <canvas ref={canvasInRef} className={`${styles.canvas} in`}></canvas>
      </section>

      <section className={styles.scratchedOut}>
        <div className={styles.content}>
          I'm Natalie – a designer, developer, and type-enthusiast based in
          California.
        </div>
        <canvas ref={canvasOutRef} className={styles.canvas}></canvas>
      </section>

      <Cursor />
      <Footer />
    </>
  )
}

export default Home
