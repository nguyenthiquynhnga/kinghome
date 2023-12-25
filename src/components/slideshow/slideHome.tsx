
//carousels/Bootstrap.js
'use client'
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { IImage } from "@/types/Category";
import Image from "next/image";
import style from "./slideHome.module.css"
const listImage: IImage[] = [
    {
        url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/slider_1.jpg?1702633915470',
        width: 1920,
        height: 600
    },
    {
        url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/slider_4.jpg?1702633915470',
        width: 1920,
        height: 600
    },
    {
        url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/slider_3.jpg?1702633915470',
        width: 1920,
        height: 600
    },
    {
        url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/slider_2.jpg?1702633915470',
        width: 1920,
        height: 600
    }
]
const SlideHome = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    // useEffect(()=>{
    //     //getApi  danh sách các ảnh banner
    // },[]);

    return (
        <div className={style.slideshow_content}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    listImage.map((image, index) => (
                        <Carousel.Item key={index} interval={2000}  onClick={() => console.log(image.url)}>
                            <div className={style.slideshow_image}>

                            <Image src={image.url} fill alt="Image" />
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default SlideHome;