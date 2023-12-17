import React from "react";
import "./Header.scss"
import Banner from "@/components/banner";
import Image from "next/image"
import SearchBar from "./SearchBar";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CategoryList from "@/components/category/categoryList";
import UserSetting from "@/components/user-setting/userSetting";
const Header = () => {
  return (
    <header>
      <Banner />
      <div className="root-container">
        <div className="main-header">
          <div className="main-header-layout">
            <div className="main-header-layout__top">
              <div className="main-header-layout__top--layout">
                <div className="top--logo">
                  <Image src="https://res.cloudinary.com/drfpegr63/image/upload/v1702563889/logo3_ofplti.png" alt="logo" width={44} height={44} />
                </div>
                <div className="search-bar-layout">
                  <div className="search-bar">
                    <SearchBar />
                  </div>
                  <div className="info-shop">
                    <ul className="info-shop--listitem">
                      <li className="info-shop-item"><a href="https://www.facebook.com/"><FacebookIcon /><strong> KingHome</strong></a></li>
                      <li className="info-shop-item"><a href="https://www.youtube.com/"><YouTubeIcon /><strong> @KingHome</strong></a></li>
                      <li className="info-shop-item"><a href="#"><LocalPhoneIcon /><strong> 0372956767</strong></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-header-layout__bottom">
              <div className="main-header-layout__bottom--layout">
                <div className="category-list">
                  <CategoryList />
                </div>
                <div className="user-setting">
                  <UserSetting/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;