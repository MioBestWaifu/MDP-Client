import { User } from "./user"

export class Interaction {
    user!:User
    rating:number | undefined
    comment:string | undefined
    status:string | undefined
    dateStarted:Date | undefined
    dateEnded:Date | undefined
    dateInteractionMade:Date | undefined

    static readonly testReview:Interaction = {
        user: User.testUser,
        rating: 5,
        comment: "This is a test review",
        status: "Completed",
        dateStarted: new Date(2020, 0, 1),
        dateEnded: new Date(2020, 0, 1),
        dateInteractionMade: new Date(2020, 0, 1)
    }
}
