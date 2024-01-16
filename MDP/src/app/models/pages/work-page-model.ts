import { Artifact } from "../artifacts/artifact"
import { Link } from "../link"

export class WorkPageModel {
    work!:Artifact
    participants:Link[] | undefined
    relatedWorks:Link[] | undefined
    newsAndHighlights:Link[] | undefined
    fractions:Link[] | undefined
}
