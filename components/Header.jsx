import React from 'react';
import style from "../styles/Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <header className={style.header}>
        <main className={style.mainContainer}>
            <nav className={style.navbar}>
                <div 
                    className={style.logoContainer}
                >
                    <span
                        className={style.logo}
                    >T</span>
                    <h2>Traflagar</h2>
                </div>
                <ul
                    className={style.linksContainer}
                >
                    <li>Home</li>
                    <li>Find a Doctor</li>
                    <li>Apps</li>
                    <li>Testimonials</li>
                    <li>About us</li>
                </ul>
            </nav>
            <section
                className={style.heroContainer}
            >
                <div className={style.box1}>
                    <h1>Virtual Healthcare For You</h1>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <button>
                        Consult Today
                    </button>
                </div>
                <img src="/image-1.png" alt="" className={style.image1} draggable={false}/>
            </section>
        </main>
    </header>
  )
}

export default Header