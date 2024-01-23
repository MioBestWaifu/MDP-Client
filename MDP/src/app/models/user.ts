export class User {
    id!:number;
    email:string | undefined;
    password:string | undefined;
    nickname!:string;
    cardImgUrl!:string;
    mainImgUrl!:string;
    otherImgUrls:string[] | undefined;
    country!:string;
    description:string | undefined;
    birthday!:Date;
    gender:string | undefined;

    static readonly testUser:User = {
        id: 1,
        email: "test@example.com",
        password: "password",
        nickname: "Test User",
        cardImgUrl: "file:///D:/Images/Projects/MDP/Tests/UserCard.png",
        mainImgUrl: "file:///D:/Images/Projects/MDP/Tests/UserMain.png",
        otherImgUrls: ["file:///D:/Images/Projects/MDP/Tests/UserOther1.png", "file:///D:/Images/Projects/MDP/Tests/UserOther2.png"],
        country: "United States",
        description: "This is a test user",
        birthday: new Date(1990, 0, 1),
        gender: "Male"
    }
}
