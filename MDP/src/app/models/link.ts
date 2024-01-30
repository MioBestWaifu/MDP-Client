import { Artifact } from "./artifacts/artifact"
import { Company } from "./company"
import { Person } from "./person"

export class Link {
    imgUrl!:string
    mainLabel!: string
    secondaryLabel: string | undefined
    redirectTo!: string

    static readonly testCarouselItem0:Link = {
        imgUrl: 'assets/imgs/Carousel.png',
        mainLabel: 'Main Label',
        secondaryLabel: 'Secondary Label',
        redirectTo: 'https://www.google.com'
    }

    static readonly testCarouselItem1:Link = {
        imgUrl: 'assets/imgs/Carousel1.png',
        mainLabel: 'Main Label',
        secondaryLabel: 'Secondary Label',
        redirectTo: 'https://www.google.com'
    }

    static readonly testCarouselItem2:Link = {
        imgUrl: 'assets/imgs/Carousel2.png',
        mainLabel: 'Main Label',
        secondaryLabel: 'Secondary Label',
        redirectTo: 'https://www.google.com'
    }

    static readonly testInterest:Link = {
        imgUrl: 'assets/imgs/Interest.png',
        mainLabel: 'Main Label',
        secondaryLabel: 'Secondary Label',
        redirectTo: 'https://www.google.com'
    }

    static readonly testParticipation:Link = {
        imgUrl: Artifact.testArtifact.cardImgUrl,
        mainLabel: 'Artifact',
        secondaryLabel: 'Role',
        redirectTo: 'https://www.google.com'
    }

    static readonly testAffiliate:Link = {
        imgUrl: Person.testPerson.cardImgUrl,
        mainLabel: 'Person',
        secondaryLabel: 'Role',
        redirectTo: 'https://www.google.com'
    }

    static readonly testCompanyAffiliation:Link = {
        imgUrl: Company.testCompany.cardImgUrl,
        mainLabel: 'Company',
        secondaryLabel: 'Role',
        redirectTo: 'https://www.google.com'
    }
}
