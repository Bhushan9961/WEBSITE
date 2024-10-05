import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {


    const logos = [
        { img: "/React-icon.svg", title: "React" },
        { img: "/redux.png", title: "Redux" },
        { img: "/Nextjs.jpg", title: "Next.js" },
        { img: "/Vue.js_Logo_2.svg", title: "Vue.js" },
        { img: "/icon.webp", title: "Nuxt.js" },
        { img: "/Angular.png", title: "Angular" },
        { img: "/nodejs.svg", title: "Nodejs" },
        { img: "/express-js.png", title: "Express.js" },
        { img: "/javascript.svg", title: "Javascript.js" },
        { img: "/Bootstrap_logo.svg", title: "Bootstrap" },
        { img: "/vuetify.svg", title: "Vuetify" },
        { img: "/tailwindcss.svg", title: "Tailwind css" },
        { img: "/materialui.svg", title: "Material Ui" },
        { img: "/css3.svg", title: "Css3" },
        { img: "/html5.svg", title: "Html5" }

    ];
    return (

        <section id="about">
            <BentoGrid>
                {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                        img={img}
                        logos={id === 5 ? logos : undefined}

                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid 