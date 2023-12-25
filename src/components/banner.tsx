'use client'
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import CancelIcon from '@mui/icons-material/Cancel';
import Image from 'next/image'
import "./style.scss"
import Link from 'next/link'
function Banner() {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div className="modalbanner" hidden={!modal}>
      <div>
        <Link
          href={`/asdf`}
        >
          <Image
            className="modalbanner__image"
            src="https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/bannertop.jpg?1702715842996"
            alt='banner'
            width={window.innerWidth}
            height={35}
          />
        </Link>
        
      </div>
      <button
          className="modalbanner__button-close"
          onClick={toggle}
        ><CancelIcon /></button>
    </div>
  );
}

export default Banner;