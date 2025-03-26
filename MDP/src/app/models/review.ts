import { Artifact } from "./artifacts/artifact";
import { User } from "./users/user"

export class Review {
    user!:User;
    artifactId!:number;
    rating:number | undefined;
    comment:string | undefined;
    date:Date | undefined;
}
