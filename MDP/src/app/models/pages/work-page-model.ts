import { Artifact } from "../artifacts/artifact"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class WorkPageModel extends BasePageModel{
    work!:Artifact
    participants:Link[] | undefined
    relatedWorks:Link[] | undefined
    newsAndHighlights:Link[] | undefined
    fractions:Link[] | undefined
}
