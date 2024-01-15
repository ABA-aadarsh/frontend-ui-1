import React from 'react'
import style from "../styles/FindDoctorSection.module.css"

function Card({image,title,desc}){
    return (
        <div
            className={style.card}
        >
            <img src={image} alt="logo" 
                className={style.cardImage}
            />
            <h3
                className={style.cardTitle}
            >{title}</h3>
            <p
                className={style.cardDesc}
            >{desc}</p>
        </div>
    )
}

function FindDoctorSection() {
    const cardList=[
        {
            title: "Search Doctor",
            desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
            image: "/icon/icon (1).png"
        },
        {
            title: "Online Pharmacy",
            desc: "Buy  your medicines with our mobile application with a simple delivery system",
            image: "/icon/icon (2).png"
        },
        {
            title: "Consultation",
            desc: "Free consultation with our trusted doctors and get the best recomendations",
            image: "/icon/icon (3).png"
        },
        {
            title: "Details Info",
            desc: "Free consultation with our trusted doctors and get the best recomendations",
            image: "/icon/icon (4).png"
        },
        {
            title: "Emergency Care",
            desc: "You can get 24/7 urgent care for yourself or your children and your lovely family",
            image: "/icon/icon (5).png"
        },
        {
            title: "Tracking",
            desc: "Track and save your medical history and health data ",
            image: "/icon/icon (6).png"
        }
    ]
  return (
    <section
        className={style.sectionContainer}
    >
        <div className={style.container1}>
            <div
                className={style.headingCenter}
            >
                <h2>Our Services</h2>
                <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div
                className={style.cardList}
            >
                {
                    cardList.map((c,index)=>(
                        <Card
                            title={c.title}
                            desc={c.desc}
                            image={c.image}
                            key={index}
                        />                    
                    ))
                }
            </div>
            <button
                className={style.learnMoreBtn}
            >
                Learn More
            </button>
        </div>
        <div
            className={style.box1}
        >
            <img src="/image-2.png" alt="" className={style.boxImage} draggable={false}/>
            <div
                className={style.right}
            >
                <h3>Leading Healthcare Providers</h3>
                <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>

    </section>
  )
}

export default FindDoctorSection