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
        cardImgUrl: 'file:///D:/Images/Projects/MDP/Tests/CompanyCard.png',
        mainImgUrl: 'file:///D:/Images/Projects/MDP/Tests/CompanyMain.png',
        otherImgUrls: ['file:///D:/Images/Projects/MDP/Tests/CompanyOther1.png', 'file:///D:/Images/Projects/MDP/Tests/CompanyOther2.png'],
        country: 'Country',
        role: 'Role',
        foundingDate: new Date(2020, 0, 1),
        averageRating: 4.5
    }
}
