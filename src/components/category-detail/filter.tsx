'use client'
import { ICategoryItem } from "@/types/Category";
import { IPriceRanger } from "@/types/Product";
import React from "react";
import Chip from '@mui/material/Chip';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Checkbox from '@mui/material/Checkbox';
import ChipCustom from "../Chip/ChipCustom";
import "./filter.scss"
interface CategoryFilterProps {
    selectedCategoryList: ICategoryItem[];
    categoryList: ICategoryItem;
    handleDeleteItem: Function;
    listPriceRanger: IPriceRanger[];
    onChangeListPriceRanger: Function;
    onSelectedCategoryItem: Function;
}
const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectedCategoryItem, selectedCategoryList, categoryList, handleDeleteItem, listPriceRanger, onChangeListPriceRanger }) => {
    return (
        <div className="filter-wrapper">
            {
                selectedCategoryList.length > 0
                    ?
                    <div className="filter-items-selected">
                        <div className="filter-items-selected__title">
                            <span>Bạn chọn</span>
                            <span>Bỏ hết</span>
                        </div>
                        <div className="filter-items-selected__list">
                            {
                                selectedCategoryList.map((category, index) => (
                                    <div className="filter-items-selected__item" key={category.id}>
                                        <Chip
                                            sx={{
                                                borderRadius: '3px',
                                                opacity: '0.8',
                                                marginBottom: '5px',
                                                height: '20px',
                                                fontFamily: 'SVN-Gilroy Thin',
                                                backgroundColor: '#fd9707',
                                                fontWeight: '600',
                                                color: '#fff',
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: '16px',
                                                    color: '#e8e6e6'
                                                }
                                            }}
                                            label={category.name} onDelete={() => handleDeleteItem(category)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    : ''
            }

            <div className="filter-category-list">
                <div className="filter-category-list__title">
                    <p>Loại sản phẩm</p>
                    {/* <span>{true ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon />}</span> */}
                </div>
                <div className="filter-category-list__content">
                    {
                        categoryList.children?.map((category, index) => (
                            <>
                                <div className="filter-category-list__item">
                                    {selectedCategoryList.some(item => item.id === category.id) ?
                                        <ChipCustom handleSelect={() => onSelectedCategoryItem(category)} label={category.name} selected={selectedCategoryList.some(item => item.id === category.id)}
                                        />
                                        :
                                        <ChipCustom handleSelect={() => onSelectedCategoryItem(category)} label={category.name} selected={selectedCategoryList.some(item => item.id === category.id)}
                                        />}
                                </div>
                                {category.children && category.children?.length > 0 ? category.children?.map((category2, index) => (
                                    <div className="filter-category-list__item">
                                        {selectedCategoryList.some(item => item.id === category2.id) ?
                                            <ChipCustom handleSelect={() => onSelectedCategoryItem(category2)} label={category2.name} selected={selectedCategoryList.some(item => item.id === category2.id)}
                                            />
                                            :
                                            <ChipCustom handleSelect={() => onSelectedCategoryItem(category2)} label={category2.name} selected={selectedCategoryList.some(item => item.id === category2.id)}
                                            />}
                                    </div>
                                )) : ''}
                            </>
                        ))
                    }
                </div>
            </div>

            <div className="filter-price-ranger">
                <div className="filter-price-ranger__title">
                    <p>Khoảng giá</p>

                </div>
                <div className="filter-price-ranger__content">
                    <div className="filter-price-ranger__item">

                        <Checkbox
                            style={{
                                color: '#fd9707'
                            }}
                            checked={listPriceRanger.some(item => item.price_min === 0)} onChange={() => onChangeListPriceRanger({
                                price_min: 0,
                                price_max: 100000
                            })} name="checkbox1" id="checkbox1" />
                        <label htmlFor="checkbox1">Nhỏ hơn 100,000đ</label>
                    </div>
                    <div className="filter-price-ranger__item">

                        <Checkbox
                            style={{
                                color: '#fd9707'
                            }}
                            checked={listPriceRanger.some(item => item.price_min === 100000)} onChange={() => onChangeListPriceRanger({
                                price_min: 100000,
                                price_max: 200000
                            })} name="checkbox2" id="checkbox2" />
                        <label htmlFor="checkbox2">Từ 100,000đ - 200,000đ</label>
                    </div>
                    <div className="filter-price-ranger__item">

                        <Checkbox
                            style={{
                                color: '#fd9707'
                            }}
                            checked={listPriceRanger.some(item => item.price_min === 200000)} onChange={() => onChangeListPriceRanger({
                                price_min: 200000,
                                price_max: 300000
                            })} name="checkbox3" id="checkbox3" />
                        <label htmlFor="checkbox3">Từ 200,000đ - 300,000đ</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter;