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
        cardImgUrl: "assets/imgs/UserCard.png",
        mainImgUrl: "assets/imgs/UserMain.png",
        otherImgUrls: ["assets/imgs/UserOther1.png", "assets/imgs/UserOther2.png"],
        country: "United States",
        description: "This is a test user",
        birthday: new Date(1990, 0, 1),
        gender: "Male"
    }
}
