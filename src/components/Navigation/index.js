import React from "react"
import styles from "./navigation.module.scss"

const Navigation = ({ mobile }) => {
  return (
    <ul className={mobile ? styles.mobileNav : styles.nav}>
      <li className={mobile ? "" : styles.navLeft}>
        <a
          href="https://www.notion.so/uduwela/17f2affc87ea43a58efe52113d34f94c?v=9d5f2efbf1dc4b4a92ade63d3541f75b"
          target="_blank"
          rel="noreferrer"
        >
          portfolio
        </a>
      </li>
      <li className={mobile ? "" : styles.navLeft}>
        <a
          href="http://nat.uduwela.com/natalie-uduwela-resume-2020.pdf"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
      </li>
      <li className={mobile ? "" : styles.navRight}>
        <a
          href="https://www.linkedin.com/in/natalieuduwela/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </li>
      <li className={mobile ? "" : styles.navRight}>
        <a href="http://instagram.com/abc.nat" target="_blank" rel="noreferrer">
          instagram
        </a>
      </li>
      <li className={mobile ? "" : styles.navRight}>
        <a href="mailto:nat@uduwela.com" target="_blank" rel="noreferrer">
          email
        </a>
      </li>
    </ul>
  )
}

export default Navigation
