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

    static readonly testArtifact:Artifact = {
        id: 1,
        shortName: 'Test Artifact',
        fullName: 'Test Artifact Full Name',
        otherNames: ['Test Artifact Other Name 1', 'Test Artifact Other Name 2'],
        description: 'This is a test artifact',
        media: 'Test Media',
        categories: ['Test Category 1', 'Test Category 2'],
        targetDemographics: ['Test Demographic 1', 'Test Demographic 2'],
        ageRating: 'Test Age Rating',
        cardImgUrl: 'https://aishow.blob.core.windows.net/images/2.png',
        mainImgUrl: 'https://aishow.blob.core.windows.net/images/2.png',
        otherImgUrls: ['https://aishow.blob.core.windows.net/images/2.png', 'https://aishow.blob.core.windows.net/images/2.png'],
        mainParticipantRole: 'Test Role',
        mainParticipant: 'Test Participant',
        averageRating: 4.5,
        releaseDate: new Date(2020, 0, 1)
    }
}
