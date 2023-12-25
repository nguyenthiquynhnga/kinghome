import { IProductItem } from "@/types/Product";
import React, { useEffect, useState } from "react";
import "./productItem.scss"
import Image from "next/image";
import numeral from "numeral";
import Link from "next/link";

type ProductItemProps = {
    product: IProductItem
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const [urlImage, setUrlImage] = useState('');
    const [urlIcon, setUrlIcon] = useState('');

    useEffect(() => {
        setUrlImage(product.images[0].url)
        // setUrlIcon(product.images[0].url_icon)
    }, [product])
    return (
        <div className="product-item-wrapper">
            <div className="product-item__image">
                <div>
                    <Image src={urlImage} width={262} height={262} layout="responsive" alt="image product" />
                </div>
                {product.discount && product.discount > 0 ?
                    <div className="product-item__tag-left">
                        <span>{product.discount} %</span>
                    </div>
                    : ''}
                {product.hot_tag || product.new_tag ? <div className="product-item__tag-right">
                    {product.hot_tag ? <span className="hot-tag"></span> : ''}
                </div> : ''}

            </div>
            <div className="product-item__name">
                <Link href={`/${product.categoryId}/${product.id}`}>{product.name}</Link>
                <div className="product-item__price">
                    <span style={{
                        color: `${product.discount || product.priceOld ? '#CD151C' : ''}`
                    }}>{numeral(product.price).format('0,0')}đ</span>
                    {product.priceOld ? <span>{numeral(product.priceOld).format('0,0')}đ</span> : ''}
                </div>
            </div>
            <div className="product-item__list-icon">
                {product.images.map((iconImage, index) => (
                    <div key={iconImage.url} className={`product-item__list-icon__item ${iconImage.url === urlImage ? 'icon-active' : ''}`} onClick={() => setUrlImage(iconImage.url)}><Image src={iconImage.url} width={30} height={30} alt="icon-image" /></div>
                ))}
            </div>
        </div>
    )
}

export default ProductItem;

const prd = {
    id: 1,
    name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine1',
    price: 300000000,
    priceOld: 380000000,
    categoryId: 2,
    images: [
        {
            url: 'https://product.hstatic.net/200000065946/product/pro_go_phoi_trang_noi_that_moho_tu_ke_tivi_go_oslo__201_1d1459f0184e47aa82c27c4e38e6edfa_grande.jpg'
        },
        {
            url: 'https://product.hstatic.net/200000065946/product/pro_nau_noi_that_moho_giuong_ngu_go_tram_vline_1m8_2_09e6f0afa7684efcbb049ae74aa0c183_large.jpg'
        },
        {
            url: 'https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_giuong_ngu_go_vline_1m6_tam_phan__3f51291ccce642ec9436b7d2e7585d7e_large.jpg'
        },
        {
            url: 'https://product.hstatic.net/200000065946/product/pro_trang_tu_quan_ao_vienna_2_canh_1_467a11a7939844999c4b47a8f185146c_large.jpg'
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
}