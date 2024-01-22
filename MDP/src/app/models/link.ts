export class Link {
    imgUrl!:string
    mainLabel!: string
    secondaryLabel: string | undefined
    redirectTo!: string

    static readonly testCarouselItem:Link = {
        imgUrl: 'https://aishow.blob.core.windows.net/images/2.png',
        mainLabel: 'Main Label',
        secondaryLabel: 'Secondary Label',
        redirectTo: 'https://www.google.com'
    }
}
