import { Review } from "../review"
import { User } from "../users/user"
import { BasePageModel } from "./base-page-model"

export class UserPageModel extends BasePageModel{
    user!:User;
    interactions:Review[] = [];
}
