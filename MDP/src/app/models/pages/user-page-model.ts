import { Interaction } from "../interaction"
import { User } from "../user"
import { BasePageModel } from "./base-page-model"

export class UserPageModel extends BasePageModel{
    user!:User
    interactions:Interaction[] | undefined

    constructor(){
        super()
        this.user = User.testUser
        this.interactions = []
    }
}
