import React from 'react'
import style from "../styles/Testimonials.module.css"

const Card=({image,name,testimonial})=>{
    return (
        <>
        </>
    )
}

function Testimonials() {

  return (
    <section
        className={style.container}
    >
        <div
            className={style.sliderView}
        >
            <img src="/dots-1.png" alt=""
                className={style.rightTop}
                draggable={false}
            />
            
        </div>
        <div
            className={style.btnContainer}
        >
            <button>
                {/* left */}
            </button>
            <div>
                {/* dots */}
            </div>
            <button>
                {/* right */}
            </button>
        </div>
        <img src="/dots.svg" alt=""
            className={style.leftBottom}
            draggable={false}
        />
    </section>
  )
}

export default Testimonials