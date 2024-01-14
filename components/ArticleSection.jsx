import React from 'react'
import style from "../styles/ArticleSection.module.css"

const Card=({image,title,desc})=>{
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
            <a href=""
                className={style.readMoreLink}
            >
                <span>Read more</span>
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_63_2689)">
                    <path d="M1.37501 5.30357L11.9822 5.30357L9.65179 7.63393C9.33037 7.95536 9.33037 8.4375 9.65179 8.75893C9.97322 9.08036 10.4554 9.08036 10.7768 8.75893L14.4732 5.0625C14.7947 4.74107 14.7947 4.25893 14.4732 3.9375L10.7768 0.241071C10.4554 -0.0803579 9.97322 -0.080358 9.65179 0.241071C9.33037 0.5625 9.33037 1.04464 9.65179 1.36607L11.9822 3.69643L1.37501 3.69643C0.973222 3.69643 0.571436 4.01786 0.571436 4.5C0.571436 4.98214 0.973222 5.30357 1.37501 5.30357Z" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_63_2689">
                    <rect width="14.1429" height="9" fill="white" transform="translate(14.7143 9) rotate(-180)"/>
                    </clipPath>
                    </defs>
                </svg> 
            </a>
        </div>
    )
}


function ArticleSection() {
    const cardList=[
        {
           image: "/article-image/image-1.png",
           desc:"In this case, the role of the health laboratory is very important to do a disease detection...",
           title:"Disease detection, check up in the laboratory"
        },
        {
            image: "/article-image/image-2.png",
            desc:"Herbal medicine is very widely used at this time because of its very good for your health...",
            title:"Herbal medicines that are safe for consumption"
        },
        {
            image: "/article-image/image-3.png",
            desc:"A healthy lifestyle should start from now and also for your skin health. There are some...",
            title:"Natural care for healthy facial skin"
        }
    ]
  return (
    <section
        className={style.container}
    >
        <h3
            className={style.heading}
        >Check out our latest articles</h3>
        <div
            className={style.listContainer}
        >
            {
                cardList.map((i,index)=>(
                    <Card
                        key={index}
                        image={i.image}
                        title={i.title}
                        desc={i.desc}
                    />
                ))
            }
        </div>
        <button
            className={style.btn}
        >
            <span>View All</span>
        </button>
    </section>
  )
}

export default ArticleSection