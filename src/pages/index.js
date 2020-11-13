import React from "react"
import Footer from "../components/Footer"
import styles from "./index.module.scss"

export default function Home() {
  return (
    <div>
      <section className="scratched-in">
        <div className={styles.blackBg}></div>
        <canvas className="in"></canvas>
      </section>

      <section className="scratched-out">
        <div className={styles.content}>
          I'm Natalie – a designer, developer, and type-enthusiast based in
          California.
        </div>
        <canvas className="out"></canvas>
      </section>

      <div className={styles.cursor}></div>
      <div className={styles.cursorText}>click & drag</div>

      <Footer />
    </div>
  )
}
