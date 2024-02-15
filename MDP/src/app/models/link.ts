import { Artifact } from "./artifacts/artifact"
import { Company } from "./company"
import { Person } from "./person"

export class Link {
    imgUrl:string | undefined
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
        redirectTo: '/person/1'
    }

    static readonly testCompanyAffiliation:Link = {
        imgUrl: Company.testCompany.cardImgUrl,
        mainLabel: 'Company',
        secondaryLabel: 'Role',
        redirectTo: '/company/1'
    }

    static readonly testWorkRelation:Link = {
        imgUrl: Artifact.testArtifact.cardImgUrl,
        mainLabel: 'Related Work',
        secondaryLabel: 'Relation',
        redirectTo: 'https://www.google.com'
    }

    static readonly testFraction:Link = {
        imgUrl: Artifact.testArtifact.cardImgUrl,
        mainLabel: 'Fraction',
        secondaryLabel: 'secondaryLabel',
        redirectTo: 'https://www.google.com'
    }

    static readonly testNews:Link = {
        imgUrl: Artifact.testArtifact.mainImgUrl,
        mainLabel: 'This is some news',
        secondaryLabel: 'A bunch of things happened, or may have happened, or will happen, or something like that. Somebody '+ 
        'may have done it, or will do it, or not. Who knows. I certainly don\'t. I\'m just a placeholder for some news.',
        redirectTo: 'https://www.google.com'
    }
}
