import { ICategoryItem } from "@/types/Category";
import Link from "next/link";
import Image from "next/image"
import React from "react";
import "./category.scss"
import SliderShow from "../carousel/slider";

interface CategoryItemProps {
  category: ICategoryItem;
}
const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {

  return (
    <li className="category-item1">
      <Link href={`/${category.id}`}>{category.name}</Link>
      {category.children && category.children.length > 0 ?
        <div className="category-item__children">
          <div className="category-item__left">
            <ul className="category-item__left__ul">
              {category.children && category.children.map((category2) => (
                <li className="category-item2">
                  <Link href={`/${category2.id}`}>{category2.name}</Link>
                  {category2.children && category2.children.length > 0 ?
                    <ul className="category-item2__children">
                      {
                        category2.children.map((item) => (
                          <li className="category-item2__item"><Link href={`${item.id}`}>{item.name}</Link></li>
                        ))
                      }
                    </ul>
                    : ''}
                </li>
              ))}
            </ul>
          </div>
          <div className="category-item__right">
            {
              category.images ? <SliderShow images={category.images}/> : ''
            }
          </div>
        </div> : ''}
    </li>
  )
}

export default CategoryItem;