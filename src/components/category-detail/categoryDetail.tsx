'use client'
import { ICategoryDetail, ICategoryItem } from "@/types/Category";
import React, { useEffect, useState } from "react";
import "./categoryDetail.scss"
import CategoryFilter from "./filter";
import { IPriceRanger, IProductItem } from "@/types/Product";
import { MenuItem, TextField } from "@mui/material";
import ProductItem from "./productItem";


type CategoryDetailProps = {
    data: ICategoryDetail
}
const CategoryDetail: React.FC<CategoryDetailProps> = ({ data }) => {
    const [selectedCategoryList, setSelectedCategoryList] = useState<ICategoryItem[]>([]);
    const [categoryList, setCategoryList] = useState<ICategoryItem[]>([]);
    const [productList, setProductList] = useState([]);
    const [typeSort, setTypeSort] = useState('Mặc định');
    const [listPriceRanger, setListPriceRanger] = useState<IPriceRanger[]>([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if (data && data.categoryList && data.categoryList.children) {
            setCategoryList(data.categoryList.children)
            const updatedSelectedCategoryList = selectedCategoryList.filter(
                (item) => item.id !== data.category.id
            );
            setSelectedCategoryList([...updatedSelectedCategoryList, data.category]);
        }
    }, [data])

    const handleDeleteItem = (category: ICategoryItem) => {
        console.log(category);
        const updatedSelectedCategoryList = selectedCategoryList.filter(
            (item) => item.id !== category.id
        );
        setSelectedCategoryList([...updatedSelectedCategoryList]);
    }
    const onChangeListPriceRanger = (pricerRanger: IPriceRanger) => {
        const updatedListPriceRanger = listPriceRanger.filter(
            (item) => item.price_min !== pricerRanger.price_min
        );
        if (listPriceRanger.some(item => item.price_min === pricerRanger.price_min)) {
            console.log("true");
            setListPriceRanger([...updatedListPriceRanger])
        } else {
            setListPriceRanger([...updatedListPriceRanger, pricerRanger])
        }

        //xử lí tiếp gọi data get poduct list
    }

    const onSelectedCategoryItem = (category: ICategoryItem) => {
        const updatedSelectedCategoryList = selectedCategoryList.filter(
            (item) => item.id !== category.id
        );
        if (selectedCategoryList.some(item => item.id === category.id)) {
            setSelectedCategoryList([...updatedSelectedCategoryList]);
        } else {
            setSelectedCategoryList([...updatedSelectedCategoryList, category]);
        }
    }
    const handleClickTypeSort = (typeSort: string) => {
        setTypeSort(typeSort);
    }
    return (
        <div className="category-detail__content__wrapper">
            <div className="category-detail__content__filter">
                <CategoryFilter selectedCategoryList={selectedCategoryList} categoryList={data.categoryList} handleDeleteItem={handleDeleteItem} listPriceRanger={listPriceRanger} onChangeListPriceRanger={onChangeListPriceRanger} onSelectedCategoryItem={onSelectedCategoryItem} />
            </div>
            <div className="product-list__wrapper">
                <div className="product-list__soft">
                    <div className="product-list__soft__total"><span>{dataFake.total} sản phẩm</span></div>
                    <div className="product-list__soft__softbar">
                        <span >Sắp xếp theo </span>
                        <div className="product-list__soft__wrapper">
                            <span>{typeSort}</span>
                            <ul className="product-list__soft__list">
                                <li className={`product-list__soft__item ${typeSort === "Mặc định" ? "active" : ''}`} onClick={() => handleClickTypeSort('Mặc định')}><span>Mặc định</span></li>
                                <li className={`product-list__soft__item ${typeSort === 'Giá tăng dần' ? "active" : ''}`} onClick={() => handleClickTypeSort('Giá tăng dần')}><span>Giá tăng dần</span></li>
                                <li className={`product-list__soft__item ${typeSort === 'Giá giảm dần' ? "active" : ''}`} onClick={() => handleClickTypeSort('Giá giảm dần')}><span>Giá giảm dần</span></li>
                                <li className={`product-list__soft__item ${typeSort === 'Mới nhất' ? "active" : ''}`} onClick={() => handleClickTypeSort('Mới nhất')}><span>Mới nhất</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-list__content">{
                    dataFake.products.map((product, index) => (
                        <div className="product-list-item" key={product.id}><ProductItem product={product} /></div>
                    ))
                }</div>
                <div className="product-list__suggestion">Có thể bạn sẽ thích</div>
                <div className="category-detail__post">
                    <div className={`category-detail__post__box post-content ${showAll ? 'show-all' : ''}`} dangerouslySetInnerHTML={{ __html: data.post }}>
                        {/* {data.post} */}
                        
                    </div>
                    <p className="show-all-button" onClick={() => setShowAll(prev => !prev)}>{showAll ? 'Thu gọn' : 'Xem thêm'}</p>
                </div>
            </div>
        </div >
    )
}

export default CategoryDetail;
const currencies = [
    {
        value: 'Mặc định',
        label: 'Mặc định',
    },
    {
        value: 'Rẻ nhất',
        label: 'Rẻ nhất',
    },
    {
        value: 'Giá giảm dần',
        label: 'Giá giảm dần',
    },
    {
        value: 'Mới nhất',
        label: 'Mới nhất',
    },
];
interface Data {
    total: number;
    products: IProductItem[];
}

const dataFake: Data = {
    total: 100,
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
            discount: 56,
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
            discount: 56,
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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
        {
            id: 1,
            name: 'Thiết kế biệt thự Ninh Bình - Phong cách Indochine',
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