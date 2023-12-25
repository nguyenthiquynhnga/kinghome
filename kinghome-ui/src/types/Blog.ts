import { IImage } from "./Category";

export interface IBlog {
    id: number;
    title: string;
    description: string;
    image: IImage;
    created_at: number;
    content:string;
}
