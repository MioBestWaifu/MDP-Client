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
        shortName: 'Artifact',
        fullName: 'Artifact Full Name',
        otherNames: ['Artifact Other Name 1', ' Artifact Other Name 2'],
        description: 'This is a  artifact',
        media:  'Anime',
        categories: ['Category 1', 'Category 2'],
        targetDemographics: ['Demographic 1', 'Demographic 2'],
        ageRating: ' Age Rating',
        cardImgUrl: 'assets/imgs/ArtifactCard.png',
        mainImgUrl: 'assets/imgs/ArtifactMain.png',
        otherImgUrls: ['assets/imgs/ArtifactOther1.png', 'assets/imgs/ArtifactOther2.png'],
        mainParticipantRole: 'Role',
        mainParticipant: 'Participant',
        averageRating: 4.5,
        releaseDate: new Date(2020, 0, 1)
    }
}
