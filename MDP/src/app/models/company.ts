export class Company {
    id!:number;
    shortName!:string;
    fullName!:string;
    cardImgUrl!:string;
    mainImgUrl!:string;
    otherImgUrls:string[] | undefined;
    country!:string;
    role!:string;
    foundingDate!:Date;
    averageRating!:number;
}
