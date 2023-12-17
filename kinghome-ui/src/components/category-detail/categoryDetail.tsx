'use client'
import { ICategoryDetail, ICategoryItem } from "@/types/Category";
import React, { useEffect, useState } from "react";
import "./categoryDetail.scss"

type CategoryDetailProps = {
    data: ICategoryDetail
}
const CategoryDetail: React.FC<CategoryDetailProps> = ({ data }) => {
    const [selectedCategoryList, setSelectedCategoryList] = useState<ICategoryItem[]>([]);
    const [categoryList, setCategoryList] = useState<ICategoryItem[]>([]);
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        if (data && data.categoryList && data.categoryList.children) {
            setCategoryList(data.categoryList.children)
            const updatedSelectedCategoryList = selectedCategoryList.filter(
                (item) => item.id !== data.category.id
            );
            setSelectedCategoryList([...updatedSelectedCategoryList, data.category]);
        }
    }, [data])

    return (
        <div className="category-detail__content__wrapper">
            <div className="category-detail__content__filter">

            </div>
            <div className="product-list__wrapper">
                <div className="product-list__soft"></div>
                <div className="product-list__content"></div>
                <div className="product-list__suggestion"></div>
                <div className="category-detail__post"></div>
            </div>
        </div>
    )
}

export default CategoryDetail;