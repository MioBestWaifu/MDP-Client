import { Dictionary } from "../../classes/dictionary"
import { Artifact } from "../artifacts/artifact"

export class FavoritesPageModel {
    groups!: string[]
    allFavorites: Artifact[] | undefined
    groupedArtifacts:Dictionary<string,Artifact[]> | undefined
}
