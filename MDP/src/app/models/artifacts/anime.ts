import { Artifact } from "./artifact";

export class Anime extends Artifact{
    endDate:Date | undefined
    weekday:string | undefined
    hour:string | undefined
    numberOfEpisodes!:number
    type!:string //(TV, OVA, etc)
}
