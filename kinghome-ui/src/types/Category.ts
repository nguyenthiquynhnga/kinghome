export interface ICategoryItem {
    id: number;
    name: string;
    type: string; //loại danh mục: category, model, blog, homepage
    images?: IImage[];
    children?: ICategoryItem[];
    imageAvatar?: IImage;
    banner?: IImage;
    post?: string;
    showBanner?: boolean;//xét xem có show banner khi người dùng click chọn danh mục không
    showPost?: boolean;//xét xem có show post khi người dùng click chọn danh mục không;
    level:number;
    path?:string;
}

export interface IImage {
    url: string;
    width?: number;
    height?: number;
    url_icon?:string;
}

export interface ICategoryDetail {
    banner: IImage;
    post: string;
    category: ICategoryItem;
    categoryList: ICategoryItem;
  }