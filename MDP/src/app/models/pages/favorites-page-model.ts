import { Dictionary } from "../../classes/dictionary"
import { Artifact } from "../artifacts/artifact"
import { BasePageModel } from "./base-page-model"

export class FavoritesPageModel extends BasePageModel{
    groups!: string[]
    allFavorites: Artifact[] | undefined
    groupedArtifacts:Dictionary<string,Artifact[]> = new Dictionary<string,Artifact[]>()

    constructor(){
        super();
        this.groups = ["Group","Another Group","Yet Another Group"];
        this.allFavorites = [];
        for (let i = 0; i < 12; i++) {
            this.allFavorites.push(Artifact.testArtifact);
        }
        this.groupedArtifacts = new Dictionary<string,Artifact[]>();
        this.groupedArtifacts.Add("Subgroup",this.allFavorites);
        this.groupedArtifacts.Add("Another subgroup",this.allFavorites);
    }
}
