import { Artifact } from "../artifacts/artifact"
import { News } from "../information/news"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class HomePageModel extends BasePageModel{
    artifacts!:Artifact[]
    newsAndHighlights!:News[]
}
