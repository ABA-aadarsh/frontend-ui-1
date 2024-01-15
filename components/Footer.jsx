import React from 'react'
import style from "../styles/Footer.module.css"
function Footer() {
  return (
    <footer
      className={style.footerContainer}
    >
      <div
        className={style.container}
      >
        <div
          className={style.center}
        >
          <div className={style.box1}>
            <div
              className={style.logoContainer}
            >
              <span
                className={style.logo}
              >T</span>
              <h3
                className={style.logoTitle}
              >Traflagar</h3>
            </div>
            <p
              className={style.desc}
            >
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <p
              className={style.copyright}
            >©Trafalgar PTY LTD 2020. All rights reserved</p>
          </div>
          <div className={style.box2}>
            <h3>Company</h3>
            <ul
              className={style.list}
            >
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a Doctor</li>
              <li>Apps</li>
            </ul>
          </div>
          <div className={style.box3}>
            <h3>Region</h3>
            <ul
              className={style.list}
            >
              <li>Indonesia</li>
              <li>Singapore</li>
              <li>Hongkong</li>
              <li>Canada</li>
            </ul>
          </div>
          <div className={style.box4}>
            <h3>Help</h3>
            <ul
              className={style.list}
            >
              <li>Help Center</li>
              <li>Contact Support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer