import React from "react"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.nav}>
        <li className={styles.navLeft}>
          <a
            href="https://www.notion.so/uduwela/17f2affc87ea43a58efe52113d34f94c?v=9d5f2efbf1dc4b4a92ade63d3541f75b"
            target="_blank"
            rel="noreferrer"
          >
            portfolio
          </a>
        </li>
        <li className={styles.navLeft}>
          <a
            href="http://nat.uduwela.com/natalie-uduwela-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
        </li>
        <li className={styles.navRight}>
          <a href="mailto:nat@uduwela.com" target="_blank" rel="noreferrer">
            email
          </a>
        </li>
        <li className={styles.navRight}>
          <a
            href="http://instagram.com/abc.nat"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </li>
        <li className={styles.navRight}>
          <a
            href="https://www.linkedin.com/in/natalieuduwela/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </li>
      </ul>

      <div class="chevron up"></div>
      <ul className={`${styles.mobileNav} hide`}>
        <li class="chevron down"></li>
        <li class="left">
          <a
            href="https://www.notion.so/uduwela/17f2affc87ea43a58efe52113d34f94c?v=9d5f2efbf1dc4b4a92ade63d3541f75b"
            target="_blank"
            rel="noreferrer"
          >
            portfolio
          </a>
        </li>
        <li class="left">
          <a
            href="http://nat.uduwela.com/natalie-uduwela-resume-2020.pdf"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
        </li>
        <li class="left">
          <a
            href="https://www.linkedin.com/in/natalieuduwela/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </li>
        <li class="left">
          <a
            href="http://instagram.com/abc.nat"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </li>
        <li class="left">
          <a href="mailto:nat@uduwela.com" target="_blank" rel="noreferrer">
            email
          </a>
        </li>
      </ul>
    </div>
  )
}
