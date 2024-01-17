import { Artifact } from "../artifacts/artifact"
import { Interaction } from "../interaction";
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class WorkPageModel extends BasePageModel{
    work!:Artifact;
    reviews!:Interaction[];
    participants:Link[] | undefined;
    relatedWorks:Link[] | undefined;
    newsAndHighlights:Link[] | undefined;
    fractions:Link[] | undefined;
}
