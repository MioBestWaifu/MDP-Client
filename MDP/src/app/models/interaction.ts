import { User } from "./user"

export class Interaction {
    user!:User
    rating:number | undefined
    comment:string | undefined
    status:string | undefined
    dateStarted:Date | undefined
    dateEnded:Date | undefined
    dateInteractionMade:Date | undefined
}
