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
        ></div>
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
    </section>
  )
}

export default Testimonials