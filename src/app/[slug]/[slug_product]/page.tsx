
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import "./page.scss"
import styles from "./page.module.css"
import React from "react"
import { IProductItem, IReviewData } from "@/types/Product"
import Rating from '@mui/material/Rating';
import numeral from "numeral"
import Link from "next/link"
import CheckIcon from '@mui/icons-material/Check';
import Review from "@/components/review-list/review"
type Props = {
    params: { slug: string, slug_product: string }
}
export async function generateStaticParams() {
    // get danh sách slug từ api
    // return posts.map((post: { slug: any; }) => ({
    //   slug: post.slug,
    // }))
    return [
        { slug: '2', slug_product:'1' },
        { slug: '2', slug_product:'2' },
        { slug: '2', slug_product:'3' },
        { slug: '2', slug_product:'4' },
        { slug: '2', slug_product:'5' },
        { slug: '2', slug_product:'6' },
        { slug: '2', slug_product:'7' },
    ]
  }
export async function generateMetadata(
    { params }: Props,
    // parent: ResolvingMetadata
): Promise<Metadata> {
    // gọi api lấy các meta ở đây
    // đang để mặc định title là slug (khi code backend nên thêm một trường metatag title cho mỗi danh mục sản phẩm)
    return {
        title: params.slug,
        referrer: "no-referrer-when-downgrade",
        description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",
        // openGraph: {
        //     title: "KINGHOME - Thiết kế và xây dựng nội thất",
        //     description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",

        // },
    }
}

type TData = {
    product: IProductItem,
    review: IReviewData
}
async function getData({ params }: Props): Promise<TData> {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: "GET"
    // })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }
    if (params.slug === '2' && params.slug_product === '1') return { product: data, review: reviewFake };
    return { product: data2, review: reviewFake };

    // return res.json()
}

export default async function CategoryPage({
    params
}: {
    params: { slug: string, slug_product: string }
}) {
    // sử dụng cơ chế fetch data trêm server component:
    // không sử dụng useEffect, sẽ bị chậm
    // https://youtu.be/EnzPVKoz4nc?t=2275

    const dataFetch = await getData({ params });


    return (
        <main className={styles.main}>
            <div className={styles.content_container}>
                <div className="product-detail-wrapper">
                    <div className="product-detail__left">
                        <div className="product-detail__left__images">
                            {dataFetch.product.images.map((item) => (
                                <div className="product-detail__left__images__item" key={item.url}><Image src={item.url} width={item.width} height={item.height} layout="responsive" alt="image" /></div>
                            ))}
                        </div>
                        <div className="product-detail__left__post" dangerouslySetInnerHTML={{ __html: dataFetch.product.post ?? '' }}></div>
                        <div className="line"></div>
                        <div className="product-detail__left__review">
                            <div className="review-title">Đánh giá</div>
                            <div className="review-rate">
                                <div className="review-num-star__num">{dataFetch.review.rate.toFixed(1)}/5</div>
                                <div className="review-num-star__image"><Rating name="read-only" sx={{
                                    fontSize: '45px'
                                }} defaultValue={dataFetch.review.rate} precision={0.1} readOnly /></div>
                                <div className="review-num">({dataFetch.review.num_review} đánh giá)</div>
                                <div className="review-button">Gửi đánh gía của bạn</div>
                            </div>
                            <div className="review-list">
                                {dataFetch.review.list_review ? dataFetch.review.list_review.map((review) => (
                                    <Review key={review.name} review={review} />
                                )) : 'Chưa có đánh giá nào'}
                            </div>
                        </div>

                    </div>
                    <div className="product-detail__right">
                        <h1 className="product-detail__name">{dataFetch.product.name}</h1>
                        <div className="product-review-star">
                            <Rating name="read-only" sx={{
                                fontSize: '16px'
                            }} defaultValue={dataFetch.review.rate} precision={0.1} readOnly />
                            <span className="num-review">({dataFetch.review.num_review})</span>
                        </div>
                        <div className="product-detail-price">
                            <div className="product-price">

                                <span className="price-current">{numeral(dataFetch.product.price).format('0,0')}đ</span>
                                {dataFetch.product.priceOld ?
                                    <span className="price-old">{numeral(dataFetch.product.priceOld).format('0,0')}đ</span>
                                    : ''}

                            </div>
                            {dataFetch.product.priceOld ?
                                <div className="discount-tag">
                                    <span>Giảm: {numeral(dataFetch.product.priceOld - dataFetch.product.price).format('0,0')}đ </span>
                                    <span>{dataFetch.product.discount}%</span>
                                </div>
                                : ''}
                        </div>
                        <div className="line"></div>
                        <div className="product-detail-attribute">
                            <div className="product-detail-attribute__box">

                                <p className="attribute-title">{dataFetch.product.tag1}:</p>
                                {
                                    dataFetch.product.value1.split('&').map((value) => (
                                        <p className="attribute-content" key={value}>- {value}</p>
                                    ))
                                }
                            </div>
                            {dataFetch.product.tag2 && dataFetch.product.value2 ?
                                <div className="product-detail-attribute__box">

                                    <p className="attribute-title">{dataFetch.product.tag2}:</p>
                                    {
                                        dataFetch.product.value2.split('&').map((value) => (
                                            <p className="attribute-content" key={value}>- {value}</p>
                                        ))
                                    }
                                </div>
                                : ''}

                            {dataFetch.product.tag3 && dataFetch.product.value3 ?
                                <div className="product-detail-attribute__box">

                                    <p className="attribute-title">{dataFetch.product.tag3}:</p>
                                    {
                                        dataFetch.product.value3.split('&').map((value) => (
                                            <p className="attribute-content" key={value}>- {value}</p>
                                        ))
                                    }
                                </div>
                                : ''}
                            {dataFetch.product.note ?
                                <div className="product-detail-note">
                                    <p>(*) {dataFetch.product.note}</p>
                                </div>
                                : ''}
                        </div>
                        <div className="line"></div>
                        <div className="product-detail-contact-button">
                            <Link href={`/checkout/${dataFetch.product.id}`}>Liên hệ</Link>
                            <div className="infor_promotion">
                                <p><CheckIcon sx={{ fontSize: '12px' }} /> Miễn phí giao hàng &amp; lắp đặt tại tất cả quận huyện thuộc TP.HCM, Hà Nội, Khu đô thị Ecopark, Biên Hòa và một số quận thuộc Bình Dương (*)</p>
                                <p><CheckIcon sx={{ fontSize: '12px' }} /> Miễn phí 1 đổi 1 - Bảo hành 2 năm - Bảo trì trọn đời (**)</p>
                                <p>(*) Không áp dụng cho danh mục Đồ Trang Trí</p>
                                <p>(**) Không áp dụng cho các sản phẩm Clearance. Chỉ bảo hành 01 năm cho khung ghế, mâm và cần đối với Ghế Văn Phòng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

const data = {
    id: 1,
    name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine1',
    price: 318000000,
    priceOld: 380000000,
    categoryId: 2,
    discount: 30,
    images: [
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235897/407721808_1837168810071880_8727186860178836698_n_cd2beq.jpg',
            width: 2048,
            height: 1706
        },
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235897/407754790_1837168763405218_5948973267359824998_n_yyci9t.jpg',
            width: 2048,
            height: 1706
        },
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235897/407465593_1837168803405214_5439761744096417938_n_a6xgjo.jpg',
            width: 2048,
            height: 1706
        },
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235896/407887324_1837168770071884_1270490160081565467_n_avqcd0.jpg',
            width: 2048,
            height: 1706
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
    note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe',
    post: `
    <h2>
    Đặc tính nổi bật
    </h2>
    <p>Chất liệu:&nbsp;92% Polyester + 8% Spandex&nbsp;</p>
    <p>Thoải mái hoạt động với chất liệu co giãn</p>
    <p>Sợi Poly bền chắc, thoáng mát, mềm mại</p>
    <p>Thiết kế baggy cơ bản phù hợp với nhiều vóc dáng, tông màu nhã nhặn</p>
    <p>Dáng baggy sẽ giúp khắc phục những nhược điểm của cơ thể về vòng bụng và đôi chân</p>
    <p>YODY - Look good. Feel good.</p>
    <p>Sản xuất tại Việt Nam</p>
    `
}

const data2 = {
    id: 2,
    name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine2',
    price: 300000000,
    categoryId: 2,
    images: [
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235897/407721808_1837168810071880_8727186860178836698_n_cd2beq.jpg',
            width: 2048,
            height: 1706
        },
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235897/407754790_1837168763405218_5948973267359824998_n_yyci9t.jpg',
            width: 2048,
            height: 1706
        },
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235897/407465593_1837168803405214_5439761744096417938_n_a6xgjo.jpg',
            width: 2048,
            height: 1706
        },
        {
            url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703235896/407887324_1837168770071884_1270490160081565467_n_avqcd0.jpg',
            width: 2048,
            height: 1706
        }
    ],
    created_at: 1671600001,
    updated_at: 1671600000,
    new_tag: false,
    hot_tag: false,
    tag1: 'Kích thước',
    value1: 'Bàn ăn: Dài 140cm x Rộng 75cm x Cao 73cm&Ghế ăn ODESSA: Dài 43cm x Rộng 51cm x Cao 92cm&Ghế ăn MILAN: Dài 52cm x Rộng 49cm x Cao 74cm&Ghế ăn OSLO: Dài 50cm x Rộng 51cm x Cao 81cm',
    tag2: 'Chất liệu',
    value2: 'Mặt bàn: Gỗ công nghiệp PB chuẩn CARB-P2 (*), Veneer gỗ cao su tự nhiên&Chân bàn: Gỗ cao su tự nhiên&Ghế ăn: Gỗ cao su tự nhiên/Gỗ tần bì tự nhiên, Vải bọc polyester chống nhăn, kháng bụi bẩn và nấm mốc',
    note: 'Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe. Chống thấm, cong vênh, trầy xước, mối mọt',
    post: `
    <h2>
    Đặc tính nổi bật
    </h2>
    <p>Chất liệu:&nbsp;92% Polyester + 8% Spandex&nbsp;</p>
    <p>Thoải mái hoạt động với chất liệu co giãn</p>
    <p>Sợi Poly bền chắc, thoáng mát, mềm mại</p>
    <p>Thiết kế baggy cơ bản phù hợp với nhiều vóc dáng, tông màu nhã nhặn</p>
    <p>Dáng baggy sẽ giúp khắc phục những nhược điểm của cơ thể về vòng bụng và đôi chân</p>
    <p>YODY - Look good. Feel good.</p>
    <p>Sản xuất tại Việt Nam</p>
    `

}

const reviewFake = {
    num_review: 31,
    rate: 4.8,//số sao: sử dụng rate.toFixed(số chữ số sau dấu .) => rate.toFixed(1)
    list_review: [
        {
            name: 'LongNguyen',
            rate: 5,
            content: 'Chất và kiểu dáng rất ok',
            images: [
                {
                    url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236927/405759729_1831645803957514_4911289804477342516_n_zjqj45.jpg'
                }
            ]
        },
        {
            name: 'ngocanh1',
            rate: 5,
            content: 'Giao hàng nhanh áo đẹp, chồng mình rất thích mặc quần áo của nhà yody lần sau sẽ ủng hộ tiếp',
            images: [
                {
                    url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236927/405759729_1831645803957514_4911289804477342516_n_zjqj45.jpg'
                },
                {
                    url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
                }
            ]
        },
        {
            name: 'baobao88',
            rate: 5,
            content: 'Sau 5 ngày chờ đợi cuối cùng đã nhận đc hàng. Áo đẹp, đã mua lần thứ n rồi nên chất khỏi phải bàn. Quay phim thì đẹp hơn chụp ảnh hihi',
            images: [
                {
                    url: 'https://res.cloudinary.com/drfpegr63/image/upload/v1703236112/406062632_1834332333688861_7231975166190470044_n_wmqsgs.jpg'
                }
            ]
        },
        {
            name: 'nvKhiem',
            rate: 5,
            content: 'Được đấy chứ. 9,5 điểm',
        }
    ]
}