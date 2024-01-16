import { Artifact } from "../artifacts/artifact"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class HomePageModel extends BasePageModel{
    artifacts!:Artifact[]
    newsAndHighlights!:Link[]
}
