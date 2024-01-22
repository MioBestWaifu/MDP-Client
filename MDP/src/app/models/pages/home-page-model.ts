import { Artifact } from "../artifacts/artifact"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class HomePageModel extends BasePageModel{
    artifacts!:Artifact[]
    newsAndHighlights!:Link[]

    constructor(){
        super()
        this.artifacts = []

        for (let i = 0; i < 15; i++) {
            this.artifacts.push(Artifact.testArtifact)
        }
        this.newsAndHighlights = []

        for (let i = 0; i < 16; i++) {
            this.newsAndHighlights.push(Link.testCarouselItem)
        }
    }
}
