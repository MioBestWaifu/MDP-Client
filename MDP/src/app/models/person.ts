export class Person {
    id!:number;
    shortName!:string;
    fullName!:string;
    nicknames:string[] | undefined;
    cardImgUrl!:string;
    mainImgUrl!:string;
    otherImgUrls:string[] | undefined;
    country!:string;
    roles!:string[];
    description:string | undefined;
    birthday:Date | undefined;
    averageRating!:number;
    gender:string | undefined;

    static readonly testPerson:Person = {
        id: 1,
        shortName: 'Person',
        fullName: 'Person Full Name',
        nicknames: ['Person Nickname 1', 'Person Nickname 2'],
        cardImgUrl: 'file:///D:/Images/Projects/MDP/Tests/PersonCard.png',
        mainImgUrl: 'file:///D:/Images/Projects/MDP/Tests/PersonMain.png',
        otherImgUrls: ['file:///D:/Images/Projects/MDP/Tests/PersonOther1.png', 'file:///D:/Images/Projects/MDP/Tests/PersonOther2.png'],
        country: 'Country',
        roles: ['Role 1', 'Role 2'],
        description: 'This is a test person',
        birthday: new Date(1990, 0, 1),
        averageRating: 7,
        gender: 'Female'
    }
}
