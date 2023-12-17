import { IImage } from "./Category";

interface IProductItem {
    id:number;
    name:string;
    price:number;
    priceOld?:number;
    categoryId:number;
    images:IImage[];
    created_at: number;
    updated_at: number;
    new_tag:boolean;
    hot_tag:boolean;
}