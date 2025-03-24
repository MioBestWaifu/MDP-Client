export class ArtifactInsert {
    name!: string;
    fullName!: string;
    otherNames: string[] = [];
    description?: string;
    media!: number;
    categories!: number[];
    targetDemographics?: number[];
    ageRating!: number;
    releaseDate?: Date;
}