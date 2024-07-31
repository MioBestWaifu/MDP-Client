import { Artifact } from "../artifacts/artifact";
import { BasePageModel } from "./base-page-model";

export class SearchPageModel extends BasePageModel{
    artifacts!:Artifact[] | undefined;
}
