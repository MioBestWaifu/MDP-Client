export class Artifact {
    [key: string]: any;
    id!: number;
    shortName!: string;
    fullName!: string;
    otherNames: string[] | undefined;
    description: string | undefined;
    media!: string;
    categories!: string[];
    targetDemographics!: string[];
    ageRating!: string;
    cardImgUrl!: string;
    mainImgUrl!: string;
    otherImgUrls: string[] | undefined;
    mainParticipantRole!: string;
    mainParticipant!: string;
    averageRating!: number;
    releaseDate: Date | undefined;
}
