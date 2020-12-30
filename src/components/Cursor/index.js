import React, { useRef, useState, useEffect } from "react"
import styles from "./cursor.module.scss"

const Cursor = () => {
  const [isDown, setIsDown] = useState(false)
  const [position, setPosition] = useState({})

  const handleMouseMove = event => {
    setPosition({ x: event.pageX, y: event.pageY })
  }

  const handleMouseDown = event => {
    setIsDown(true)
  }

  const handleMouseUp = event => {
    setIsDown(false)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <>
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className={`${styles.cursor} ${isDown ? styles.isDown : ""}`}
      ></div>
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className={styles.cursorText}
      >
        click & drag
      </div>
    </>
  )
}

export default Cursor
