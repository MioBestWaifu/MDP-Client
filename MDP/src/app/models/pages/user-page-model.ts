import { Interaction } from "../interaction"
import { User } from "../user"

export class UserPageModel {
    user!:User
    interactions:Interaction[] | undefined
}
