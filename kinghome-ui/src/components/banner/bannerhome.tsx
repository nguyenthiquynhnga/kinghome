'use client'
import React, { useEffect, useState } from "react";
import style from "./banner.module.css"
import Image from "next/image";
import { IImage } from "@/types/Category";

const imageFake: IImage = {
    url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/banner-home-khuyen-mai.png?1702597486853'
}
const BannerHome = () => {
    const [image, setImage] = useState<IImage>({
        url: ''
    });
    useEffect(() => {
        //getApi banner home
    }, []);

    return (
        <div className={style.banner_home}>
            {
                image.url === '' ?
                    <div className={style.banner_home__image}>
                        <Image src={imageFake?.url} alt="banner_home" fill/>
                    </div>
                    : ''
            }
        </div>
    )
}

export default BannerHome;
