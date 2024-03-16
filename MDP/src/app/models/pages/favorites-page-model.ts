import { Dictionary } from "../../classes/dictionary"
import { Utils } from "../../classes/utils"
import { Artifact } from "../artifacts/artifact"
import { BasePageModel } from "./base-page-model"

export class FavoritesPageModel extends BasePageModel{
    groups!: string[]
    allFavorites: Artifact[] | undefined
    groupedArtifacts:Dictionary<string,Artifact[]> = new Dictionary<string,Artifact[]>()

    constructor(){
        super();
        /* this.groups = ["Media","Category","Year"];
        this.allFavorites = [];
        for (let i = 0; i < 3; i++) {
            this.allFavorites.push(Object.assign({}, Artifact.testArtifact));
            this.allFavorites[i].categories = ["Isekai", "Harem"];
            this.allFavorites[i].media = "Anime";
        }
        for (let i = 3; i < 6; i++) {
            this.allFavorites.push(Object.assign({}, Artifact.testArtifact));
            this.allFavorites[i].categories = ["Harem"];
            this.allFavorites[i].media = "Novel";
            this.allFavorites[i].releaseDate = new Date(2018,0,1);
        }
        for (let i = 6; i < 9; i++) {
            this.allFavorites.push(Object.assign({}, Artifact.testArtifact));
            this.allFavorites[i].categories = ["Romance"];
            this.allFavorites[i].media = "Anime";
        }
        this.groupedArtifacts = Utils.GroupArtifacts("media", this.allFavorites); */
    }
}
