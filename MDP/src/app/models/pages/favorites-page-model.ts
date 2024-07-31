import { Dictionary } from "../../classes/dictionary"
import { Utils } from "../../classes/utils"
import { Artifact } from "../artifacts/artifact"
import { BasePageModel } from "./base-page-model"

export class FavoritesPageModel extends BasePageModel{
    groups!: string[]
    allFavorites: Artifact[] | undefined
    groupedArtifacts:Dictionary<string,Artifact[]> = new Dictionary<string,Artifact[]>()
}
