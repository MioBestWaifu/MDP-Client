import { User } from "./users/user"

export class Review {
    user!:User
    rating:number | undefined
    comment:string | undefined
    date:Date | undefined

    static readonly testReview:Review = {
        user: User.testUser,
        rating: 5,
        comment: "This is a test review",
        date: new Date(2020, 0, 1)
    }
}
