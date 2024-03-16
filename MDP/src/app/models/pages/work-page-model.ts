import { Artifact } from "../artifacts/artifact"
import { Review } from "../review";
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class WorkPageModel extends BasePageModel{
    work!:Artifact;
    reviews!:Review[];
    participants:Link[] | undefined;
    relatedWorks:Link[] | undefined;
    newsAndHighlights:Link[] | undefined;
    fractions:Link[] | undefined;

    constructor(){
        super();
        /* this.work = Artifact.testArtifact;
        this.reviews = [];
        this.participants = [];
        this.relatedWorks = [];
        this.newsAndHighlights = [];
        this.fractions = [];

        for (let i = 0; i < 7; i++) {
            this.reviews.push(Review.testReview);
        }

        this.participants.push(Link.testCompanyAffiliation);
        for (let i = 0; i < 7; i++) {
            this.participants.push(Link.testAffiliate);
        }

        for (let i = 0; i < 7; i++) {
            this.relatedWorks.push(Link.testWorkRelation);
        }

        for (let i = 0; i < 7; i++) {
            this.newsAndHighlights.push(Link.testNews);
        }

        for (let i = 0; i < 7; i++) {
            this.fractions.push(Link.testFraction);
        } */

    }
}
