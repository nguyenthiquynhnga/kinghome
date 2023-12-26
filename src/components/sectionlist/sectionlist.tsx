'use client'
import React, { useEffect, useState } from "react";
import { ICategoryItem, IImage } from "@/types/Category";
import Image from "next/image";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from "@mui/material";
import "./sectionlist.scss"
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "react-slick";
import Link from "next/link";

const data: ICategoryItem[] = [
  {
    id: 1,
    name: 'Thiết kế kiến trúc',
    type: 'homepage',
    level: 1,
    children: [
      {
        id: 2,
        name: 'Thiết kế nhà vườn1',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      },
      {
        id: 3,
        name: 'Thiết kế nhà vườn2',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      },
      {
        id: 4,
        name: 'Thiết kế nhà vườn3',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      },
      {
        id: 5,
        name: 'Thiết kế nhà vườn4',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      },
      {
        id: 6,
        name: 'Thiết kế nhà vườn5',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      }, {
        id: 7,
        name: 'Thiết kế nhà vườn6',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      }, {
        id: 8,
        name: 'Thiết kế nhà vườn7',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      }, {
        id: 9,
        name: 'Thiết kế nhà vườn8',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      }, {
        id: 10,
        name: 'Thiết kế nhà vườn9',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      }, {
        id: 11,
        name: 'Thiết kế nhà vườn10',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }
      }
    ]
  },
  {
    id: 4,
    name: 'Nội thất nhà ở',
    type: 'homepage',
    level: 1,
    children: [
      {
        id: 3,
        name: 'Phòng bếp1',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      },
      {
        id: 4,
        name: 'Phòng bếp2',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      },
      {
        id: 5,
        name: 'Phòng bếp3',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      },
      {
        id: 6,
        name: 'Phòng bếp4',
        type: 'category',
        level: 2,
        imageAvatar: {
          url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
        }

      }
      // , {
      //   id: 7,
      //   name: 'Phòng bếp5',
      //   type: 'category',
      //   imageAvatar: {
      //     url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
      //   }

      // },
      //  {
      //   id: 8,
      //   name: 'Phòng bếp6',
      //   type: 'category',
      //   imageAvatar: {
      //     url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
      //   }

      // }, {
      //   id: 9,
      //   name: 'Phòng bếp7',
      //   type: 'category',
      //   imageAvatar: {
      //     url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
      //   }

      // }, {
      //   id: 10,
      //   name: 'Phòng bếp8',
      //   type: 'category',
      //   imageAvatar: {
      //     url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
      //   }

      // }, {
      //   id: 11,
      //   name: 'Phòng bếp9',
      //   type: 'category',
      //   imageAvatar: {
      //     url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_1_image.png?1702693459815'
      //   }
      // }
    ]
  }
]
const SectionList = () => {

  const [categoryList, setCategoryList] = useState<ICategoryItem[]>();
  const [indexCategory, setIndexCategory] = useState<number>(0);
  const [listItemSelected, setListItemSelected] = useState<ICategoryItem[]>();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    //getApi danh mục type homepage
    setCategoryList(data)
    setListItemSelected(data[0].children)
    setActiveIndex(2);
  }, [])
  const handleChooseCategory = (category: ICategoryItem, index: number) => {
    setListItemSelected(category?.children);
    setIndexCategory(index);
    setActiveIndex(0);

  }
  return (
    <div className="section-list">
      <div className="section-list__top">
        <div className="section-list__top__detail">

          {
            categoryList?.map((category, index) => (
              <div key={category.id} className={indexCategory === index ? "section-list__top__item category_active" : "section-list__top__item"} onClick={() => handleChooseCategory(category, index)}>{category.name}</div>
            ))
          }
        </div>
      </div>
      <div className="section-list__bottom">
        <Slider
          dots={false}
          infinite={false}
          slidesToShow={6}
          slidesToScroll={6}
          initialSlide={2}
          responsive={[
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          {
            listItemSelected !== null ?
              listItemSelected?.map((category, index) => (
                <div key={category.id} className="section-list__bottom__item" >
                  <Link href={`/${category.id}`}>
                  <div className="section-list__bottom--image">
                    <Image src={category.imageAvatar?.url ?? 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_danhmuc_1_child_5_image.png?1702693459815'} alt="image" width={90} height={90} />
                  </div>
                  <div className="section-list__bottom--name">
                    <span>{category.name}</span>
                  </div>
                  </Link>
                </div>
              )) : 'Loading...'
          }
        </Slider>
      </div>
    </div>
  )
}

export default SectionList;