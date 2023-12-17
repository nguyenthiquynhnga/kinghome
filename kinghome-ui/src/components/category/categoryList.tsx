import React from "react";
import CategoryItem from "./categoryItem";
import { ICategoryItem } from "@/types/Category";
import "./category.scss"

const categoryList = [
    {
        id: 1,
        name: 'Kiến trúc nhà ở',
        type: 'category',
        level: 1,
        children: [
            {
                id: 2,
                name: 'Thiết kế nhà vườn',
                type: 'category',
                level: 2,
                children: [
                    {
                        id: 3,
                        name: 'Nhà vườn cấp 4-Nhà một tầng',
                        type: 'category',
                        level: 3,

                    },
                    {
                        id: 4,
                        level: 3,
                        name: 'Nhà ở 2 tầng',
                        type: 'category'
                    },
                    {
                        id: 5,
                        level: 3,
                        name: 'Nhà ở nhiều tầng',
                        type: 'category'
                    }
                ]
            },
            {
                id: 6,
                level: 3,
                name: 'Thiết kế chung cư',
                type: 'category'
            },
            {
                id: 7,
                level: 3,
                name: 'Thiết kế nhà phố',
                type: 'category'
            }
        ],
        images: [
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT9Nz__nNZuVx_fmEylcVfFG8-d3kNS2Q4tmSAC0eif5gPsoQrVah9imQBueMbFtoc6c&usqp=CAU',
                width: 275,
                height: 183
            },
            {
                url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
                width: 275,
                height: 183
            }, {
                url: 'https://noithatlacgia.vn/wp-content/uploads/2022/03/slide-noithatlacgia-6.jpg',
                width: 275,
                height: 183
            }
        ]
    },
    {
        id: 7,
        name: 'phòng khách',
        level: 1,
        type: 'category',
        children: [
            {
                id: 8,
                name: 'Bàn trà',
                type: 'category',
                level: 2,
                children: [
                    {
                        id: 3,
                        name: 'Nhà vườn cấp 4-Nhà một tầng',
                        level: 3,
                        type: 'category'
                    },
                    {
                        id: 4,
                        name: 'Nhà ở 2 tầng',
                        level: 3,
                        type: 'category'
                    },
                    {
                        id: 5,
                        name: 'Nhà ở nhiều tầng',
                        level: 3,
                        type: 'category'
                    }
                ]
            },
            {
                id: 9,
                name: 'SOFA',
                level: 2,
                type: 'category'
            },
            {
                id: 10,
                name: 'Kệ Tivi',
                level: 2,
                type: 'category'
            },
            {
                id: 11,
                name: 'Khách sạn SOFA',
                level: 2,
                type: 'category',
                children: [
                    {
                        id: 3,
                        name: 'Nhà vườn cấp 4-Nhà một tầng',
                        level: 3,
                        type: 'category'
                    },
                    {
                        id: 4,
                        name: 'Nhà ở 2 tầng',
                        level: 3,
                        type: 'category'
                    },
                    {
                        id: 5,
                        name: 'Nhà ở nhiều tầng',
                        level: 3,
                        type: 'category'
                    }
                ]
            },
            {
                id: 12,
                name: 'ARM CHAIR',
                level: 2,
                type: 'category'
            },
            {
                id: 13,
                name: 'Tủ giày',
                level: 2,
                type: 'category'
            }
        ],
        images: [{
            url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
            width: 275,
            height: 183
        }, {
            url: 'https://noithatlacgia.vn/wp-content/uploads/2022/03/slide-noithatlacgia-6.jpg',
            width: 275,
            height: 183
        }]

    },
    {
        id: 14,
        name: 'phòng ăn',
        type: 'category',
        level: 1,
        children: [
            {
                id: 15,
                name: 'Tủ bếp',
                level: 2,
                type: 'category'
            },
            {
                id: 16,
                name: 'Bàn đá',
                level: 2,
                type: 'category'
            },
            {
                id: 17,
                name: 'Bàn ăn',
                level: 2,
                type: 'category'
            },
            {
                id: 18,
                name: 'Ghế ăn',
                level: 2,
                type: 'category'
            },
        ],
        images: [{
            url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
            width: 275,
            height: 183
        }, {
            url: 'https://noithatlacgia.vn/wp-content/uploads/2022/03/slide-noithatlacgia-6.jpg',
            width: 275,
            height: 183
        }]

    },
    {
        id: 19,
        name: 'phòng ngủ',
        type: 'category',
        level: 1,
        children: [
            {
                id: 20,
                name: 'Giường ngủ',
                level: 2,
                type: 'category'
            },
            {
                id: 21,
                name: 'Tủ quần áo',
                level: 2,
                type: 'category'
            },
            {
                id: 22,
                name: 'Bàn trang điểm',
                level: 2,
                type: 'category'
            },
            {
                id: 23,
                name: 'Bàn làm việc',
                level: 2,
                type: 'category'
            },
            {
                id: 24,
                name: 'TAB',
                level: 2,
                type: 'category'
            },
        ],
        images: [{
            url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
            width: 275,
            height: 183
        }]

    },
    {
        id: 25,
        name: 'WC',
        type: 'category',
        level: 1,
        children: [
            {
                id: 26,
                name: 'Tủ Lavabo',
                level: 2,
                type: 'category',
            },
            {
                id: 27,
                name: 'Tủ gương',
                level: 2,
                type: 'category'
            }
        ],
        images: [{
            url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
            width: 275,
            height: 183
        }, {
            url: 'https://noithatlacgia.vn/wp-content/uploads/2022/03/slide-noithatlacgia-6.jpg',
            width: 275,
            height: 183
        }]

    },
    {
        id: 28,
        name: 'Nội thất khác',
        level: 1,
        type: 'category',
        children: [
            {
                id: 29,
                name: 'SHOP',
                level: 2,
                type: 'category',
            },
            {
                id: 30,
                level: 2,
                name: 'Coffe',
                type: 'category',
            },
            {
                id: 31,
                name: 'Karaoke',
                level: 2,
                type: 'category',
            },
            {
                id: 32,
                name: 'Bar',
                level: 2,
                type: 'category'
            },
            {
                id: 32,
                level: 2,
                name: 'Quán ăn',
                type: 'category'
            }
        ],
        images: [{
            url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
            width: 275,
            height: 183
        }]

    },
    {
        id: 33,
        name: 'Về KINGHOME',
        level: 1,
        type: 'category',
        children: [
            {
                id: 34,
                name: 'Bảo vệ khách hàng',
                level: 2,
                type: 'category'
            },
            {
                id: 35,
                name: 'Ưu đãi và chính sách',
                level: 2,
                type: 'category'
            }
        ],
        images: [{
            url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
            width: 275,
            height: 183
        }]

    },
    {
        id: 36,
        name: 'BLOG',
        level: 1,
        type: 'blog'
    },
    {
        id: 37,
        name: '3D MODELS',
        level: 1,
        type: 'model',
        children: [
            {
                id: 38,
                name: 'Kiến trúc',
                level: 2,
                type: 'model',
            },
            {
                id: 39,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 40,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 41,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 42,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 43,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 44,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 45,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 46,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 47,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 48,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 49,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 50,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 51,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 52,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 53,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 54,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 55,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 56,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 57,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 58,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 59,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 60,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 61,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 62,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 63,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 64,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            },
            {
                id: 65,
                level: 2,
                name: 'Ảnh model',
                type: 'model',
            }
        ]
    },
]

const CategoryList = () => {
    // get api lấy danh sách category
    // useEffect(() => {
    //     getAllCategory();
    // }, []);
    // const getAllCategory = () => {

    // }
    return (
        <nav className="category-list--detail">
            <ul>
                {
                    categoryList.map((category: ICategoryItem) => (
                        <CategoryItem category={category} />
                    ))
                }
            </ul>
        </nav>
    )
}

export default CategoryList;