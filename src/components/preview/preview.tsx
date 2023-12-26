"use client"
import { IPreviewItem } from "@/types/Preview";
import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import ProductItem from "../category-detail/productItem";
import "./preview.scss"
const Preview = () => {
  useEffect(() => {
    console.log(data);

  }, [])

  return (
    <div className="preview-root">
      <div className="preview-wrapper">
        {data.map((preview, index) => (
          <div className="preview-item" key={index}>
            <div className="preview-item__title"><p>{preview.title}</p></div>
            <div className="preview-item__content">
              <div className="preview-item__banner"><Image alt="image" src={preview.banner.url} height={416} width={190} layout="responsive"/></div>
              <div className="preview-item__list-product">
                <Slider
                  dots={false}
                  infinite={false}
                  slidesToShow={4}
                  slidesToScroll={4}
                  initialSlide={1}
                  responsive={[
                    {
                      breakpoint: 1300,
                      settings: {
                        slidesToShow: 3,
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
                    preview.products.map((product, index) => (
                      <div className="preview__product-item" key={index}>
                        {/* 3 */}
                        <ProductItem product={product} />
                      </div>
                    ))
                  }
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Preview;

const data: IPreviewItem[] = [
  {
    title: 'Sale 40% cho sản phẩm thứ 2',
    banner: {
      url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_preivew_sanpham_6_image_desktop.jpg?1703583970692'
    },
    products: [
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine1',
        price: 318000000,
        priceOld: 380000000,
        categoryId: 2,
        discount: 30,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 2,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine2',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600001,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 3,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine3',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600003,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        discount: 56,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 4,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine4',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600004,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 5,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine5',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600005,
        updated_at: 1671600000,
        new_tag: false,
        discount: 56,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 6,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine6',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600006,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 7,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine7',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600007,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 8,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine8',
        price: 300000000,
        priceOld: 380000000,
        discount: 56,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600008,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 9,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine9',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600009,
        updated_at: 1671600000,
        new_tag: false,
        discount: 56,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine10',
        price: 300000000,
        priceOld: 380000000,
        discount: 56,
        categoryId: 2,
        images: [
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        discount: 56,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
    ]
  },
  {
    title: 'Siêu Hội Coupon',
    banner: {
      url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_preivew_sanpham_10_image_desktop.jpg?1703583970692'
    },
    products: [
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine1',
        price: 318000000,
        priceOld: 380000000,
        categoryId: 2,
        discount: 30,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 2,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine2',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600001,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 3,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine3',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600003,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        discount: 56,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 4,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine4',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600004,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 5,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine5',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600005,
        updated_at: 1671600000,
        new_tag: false,
        discount: 56,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 6,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine6',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600006,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 7,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine7',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600007,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 8,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine8',
        price: 300000000,
        priceOld: 380000000,
        discount: 56,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600008,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 9,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine9',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600009,
        updated_at: 1671600000,
        new_tag: false,
        discount: 56,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine10',
        price: 300000000,
        priceOld: 380000000,
        discount: 56,
        categoryId: 2,
        images: [
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        discount: 56,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
    ]
  },
  {
    title: 'YODY SPORT - Thoải mái vận động',
    banner: {
      url: 'https://bizweb.dktcdn.net/100/438/408/themes/931909/assets/home_preivew_sanpham_7_image_desktop.jpg?1703583970692'
    },
    products: [
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine1',
        price: 318000000,
        priceOld: 380000000,
        categoryId: 2,
        discount: 30,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 2,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine2',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600001,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 3,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine3',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600003,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        discount: 56,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 4,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine4',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600004,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 5,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine5',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600005,
        updated_at: 1671600000,
        new_tag: false,
        discount: 56,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 6,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine6',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600006,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 7,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine7',
        price: 300000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600007,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: true,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 8,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine8',
        price: 300000000,
        priceOld: 380000000,
        discount: 56,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600008,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 9,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine9',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600009,
        updated_at: 1671600000,
        new_tag: false,
        discount: 56,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine10',
        price: 300000000,
        priceOld: 380000000,
        discount: 56,
        categoryId: 2,
        images: [
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
      {
        id: 1,
        name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
        price: 300000000,
        priceOld: 380000000,
        categoryId: 2,
        discount: 56,
        images: [
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236175/405764337_1832763403845754_8408679770341604049_n_jqxjmh.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236984/402660785_1828954810893280_8650962483580450415_n_bxcdoo.jpg'
          },
          {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
          },
          {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_ghe_sofa_go_vline_2_fd17330202d6414e95e09745f040fa8c_large.jpg'
          }
        ],
        created_at: 1671600000,
        updated_at: 1671600000,
        new_tag: false,
        hot_tag: false,
        tag1: 'Chất liệu',
        value1: 'Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên&Tấm phản: Gỗ plywood chuẩn CARB-P2&Chân giường: Gỗ cao su tự nhiên',
        tag2: 'Kích thước phủ bì',
        value2: 'Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm',
        note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe'
      },
    ]
  }
]