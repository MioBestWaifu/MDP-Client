import { Image } from "../image";

export class News {
    id!: number;
    title!: string;
    content!: string;
    images!: Image[];
    date!: Date;
}