import { IImage } from "./Category";

export interface IProductItem {
    id: number;
    name: string;
    price: number;
    priceOld?: number;
    categoryId: number;
    images: IImage[];
    created_at: number;
    updated_at: number;
    new_tag?: boolean;//mới
    hot_tag?: boolean;//hot
    discount?: number;//giảm giá
    sold?: number;//đã bán
    rating?: number;
    tag1: string;//đầu đề 1
    value1: string;//nội dung của đầu đề 1
    tag2?: string;
    value2?: string;
    tag3?: string;
    value3?: string;
    note?: string;
    post?: string;
}

export interface IPriceRanger {
    price_min: number;
    price_max: number;
}
export interface IReview {
    name: string;//tên người đánh giá
    rate: number;//số sao
    content: string;//nội dung
    images?: IImage[];//ảnh đính kèm
}
export interface IReviewData {
    num_review: number;
    rate: number;//số sao: sử dụng rate.toFixed(số chữ số sau dấu .) => rate.toFixed(1)
    list_review: IReview[];
}