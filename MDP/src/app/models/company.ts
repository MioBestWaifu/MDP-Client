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
        cardImgUrl: 'assets/imgs/CompanyCard.png',
        mainImgUrl: 'assets/imgs/CompanyMain.png',
        otherImgUrls: ['assets/imgs/CompanyOther1.png', 'assets/imgs/CompanyOther2.png'],
        country: 'Country',
        role: 'Role',
        foundingDate: new Date(2020, 0, 1),
        averageRating: 4.5
    }
}
