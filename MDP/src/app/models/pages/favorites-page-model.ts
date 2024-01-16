import { Dictionary } from "../../classes/dictionary"
import { Artifact } from "../artifacts/artifact"
import { BasePageModel } from "./base-page-model"

export class FavoritesPageModel extends BasePageModel{
    groups!: string[]
    allFavorites: Artifact[] | undefined
    groupedArtifacts:Dictionary<string,Artifact[]> | undefined
}
