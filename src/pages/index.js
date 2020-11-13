import React from "react"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <section className="scratched-in">
        <div className="black-bg"></div>
        <canvas className="in"></canvas>
      </section>

      <section className="scratched-out">
        <div className="content">
          <div className="about">
            I'm Natalie – a designer, developer, and type-enthusiast based in
            California.
          </div>
        </div>
        <canvas className="out"></canvas>
      </section>

      <div className="cursor"></div>
      <div className="cursor-text">click & drag</div>

      <Footer />
    </div>
  )
}
