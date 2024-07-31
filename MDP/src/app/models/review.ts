import { User } from "./users/user"

export class Review {
    user!:User
    rating:number | undefined
    comment:string | undefined
    date:Date | undefined
}
