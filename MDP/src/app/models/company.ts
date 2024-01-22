export class Company {
    id!:number;
    shortName!:string;
    fullName!:string;
    cardImgUrl!:string;
    mainImgUrl!:string;
    otherImgUrls:string[] | undefined;
    country!:string;
    role!:string;
    foundingDate!:Date;
    averageRating!:number;

    static readonly testCompany:Company = {
        id: 1,
        shortName: 'Company',
        fullName: 'Company Full Name',
        cardImgUrl: 'https://aishow.blob.core.windows.net/images/2.png',
        mainImgUrl: 'https://aishow.blob.core.windows.net/images/2.png',
        otherImgUrls: ['https://aishow.blob.core.windows.net/images/2.png', 'https://aishow.blob.core.windows.net/images/2.png'],
        country: 'Country',
        role: 'Role',
        foundingDate: new Date(2020, 0, 1),
        averageRating: 4.5
    }
}
