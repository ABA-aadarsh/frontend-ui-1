import React from 'react'
import style from "../styles/AppDetail.module.css"

function AppDetail() {
  return (
    <section
      className={style.container}
    >
      <div
        className={style.box1}
      >
        <h3>Download our mobile apps</h3>
        <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously &#40;no tedeous form, long calls, or administrative hassle&#41; and securely</p>
        <button
          className={style.btn}
        >
            <span>Download</span>
            <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z" fill="currentColor"/>
            </svg> 
        </button>
      </div>
    </section>
  )
}

export default AppDetail