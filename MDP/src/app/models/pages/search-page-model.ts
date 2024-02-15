import { Artifact } from "../artifacts/artifact";
import { BasePageModel } from "./base-page-model";

export class SearchPageModel extends BasePageModel{
    artifacts!:Artifact[] | undefined

    constructor(){
        super()
        /* this.artifacts = []
        for (let i = 0; i < 10; i++) {
            this.artifacts.push(Artifact.testArtifact)
        } */
    }
}
