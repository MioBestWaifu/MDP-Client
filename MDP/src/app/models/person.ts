export class Person {
    id!:number;
    shortName!:string;
    fullName!:string;
    nicknames:string[] | undefined;
    cardImgUrl!:string;
    mainImgUrl!:string;
    otherImgUrls:string[] | undefined;
    country!:string;
    roles!:string[];
    description:string | undefined;
    birthday:Date | undefined;
    averageRating!:number;
    gender:string | undefined;
}
