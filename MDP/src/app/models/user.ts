export class User {
    email:string | undefined
    password:string | undefined
    nickname!:string
    cardImgUrl!:string
    mainImgUrl!:string
    otherImgUrls:string[] | undefined
    country!:string
    description:string | undefined
    birthday!:Date
    gender:string | undefined
}
