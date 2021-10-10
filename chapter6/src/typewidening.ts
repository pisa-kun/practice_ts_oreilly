type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod' | 'dev' // prod or dev に固定
}

class API{
    constructor(private options: Options){}
}

new API(
    {
        baseURL: 'https://api.mysite.com',
        tier: 'dev'
    }
)

let badOptions = {
    baseURL: 'https://api.mysite.com',
    badtier: 'dev'
}
new API(badOptions)
// new API({
//     baseURL: 'https://api.mysite.com',
//     badtier: 'dev'
// })