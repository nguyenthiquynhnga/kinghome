import { IImage } from "./Category";
import { IProductItem } from "./Product";

export interface IPreviewItem {
    title:string; //tạm thời là title là string, update thêm sau này
    banner:IImage;
    products:IProductItem[]
}