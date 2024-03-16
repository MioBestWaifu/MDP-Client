import { Artifact } from "../artifacts/artifact"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class HomePageModel extends BasePageModel{
    artifacts!:Artifact[]
    newsAndHighlights!:Link[]

    constructor(){
        super()
        /* this.artifacts = []

        for (let i = 0; i < 15; i++) {
            this.artifacts.push(Artifact.testArtifact)
        }
        this.newsAndHighlights = []
        this.newsAndHighlights.push(Link.testCarouselItem0)
        this.newsAndHighlights.push(Link.testCarouselItem1)
        this.newsAndHighlights.push(Link.testCarouselItem2) */
    }
}
