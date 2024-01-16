export class Company {
    shortName!:string
    fullName!:string
    cardImgUrl!:string
    mainImgUrl!:string
    otherImgUrls:string[] | undefined
    country!:string
    role!:string
    foundingDate!:Date
    averageRating!:number
}
