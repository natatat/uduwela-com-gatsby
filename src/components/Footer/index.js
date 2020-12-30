import React, { useState } from "react"
import Navigation from "../Navigation"
import styles from "./footer.module.scss"

const Footer = () => {
  const [expandMobileNav, setExpandMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setExpandMobileNav(!expandMobileNav)
  }

  return (
    <div className={styles.footer}>
      <Navigation />

      <div
        role="button"
        aria-label="Expand menu"
        onClick={toggleMobileNav}
        onKeyDown={toggleMobileNav}
        className={`${styles.chevron} ${
          expandMobileNav ? styles.down : styles.up
        }`}
      ></div>
      {expandMobileNav && <Navigation mobile={true} />}
    </div>
  )
}

export default Footer
