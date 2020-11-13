import React from "react"
import { Link } from "gatsby"

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

      <div class="footer">
        <ul class="nav">
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
            <Link to="/fun/">fun</Link>
          </li>
          <li class="right">
            <a href="mailto:nat@uduwela.com" target="_blank" rel="noreferrer">
              email
            </a>
          </li>
          <li class="right">
            <a
              href="http://instagram.com/abc.nat"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
          <li class="right">
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
        <ul class="nav mobile hide">
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
    </div>
  )
}
