'use client'
import React, { useState } from "react";
import { IImage } from "@/types/Category";
import Image from "next/image";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from "@mui/material";
import "./slider.scss"

interface SliderShowProps {
  images: IImage[];
}

const SliderShow: React.FC<SliderShowProps> = ({ images }) => {
  const [indexShow, setIndexShow] = useState(0);
  const handleClickLeft = () => {
    if (indexShow === 0) setIndexShow(images.length - 1);
    else setIndexShow(indexShow - 1);
  }
  const handleClickRight = () => {
    if (indexShow + 1 == images.length) setIndexShow(0);
    else setIndexShow(indexShow + 1);
  }

  return (
    <div className="slider-show-root">
      <div className="slide-show-root__left"><Button onClick={() => handleClickLeft()}><KeyboardArrowLeftIcon /></Button></div>
      {images.map((image, index) => (
        <div className="slide-show-root__image" key={index}>
          <Image hidden={index !== indexShow} src={image.url} alt="image_slide" width={image.width} height={image.height} />
        </div>
      ))}
      <div className="slide-show-root__right"><Button onClick={() => handleClickRight()}><ChevronRightIcon /></Button></div>
    </div>
  )
}

export default SliderShow;