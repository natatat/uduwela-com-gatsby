import React from "react"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <section class="scratched-in">
        <div class="black-bg"></div>
        <canvas class="in"></canvas>
      </section>

      <section class="scratched-out">
        <div class="content">
          <div class="about">
            I'm Natalie – a designer, developer, and type-enthusiast based in
            California.
          </div>
        </div>
        <canvas class="out"></canvas>
      </section>

      <div class="cursor"></div>
      <div class="cursor-text">click & drag</div>

      <Footer />
    </div>
  )
}
