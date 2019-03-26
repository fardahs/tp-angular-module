import data  from '../mocks/film.json';

export class Film {
    constructor(public title:string, public releasedate:Date,
                public studio:string, public poster:string, public location:string,
                public rating:string, public directors:string, public genre:string[],
                public actors:string[], public trailers:Trailers[])
    {}
}

export class Trailers{
    constructor(public postdate:Date, public url:string, public type:string,
                public exclusive:boolean, public hd:boolean)
    {}
}

export function listFilm():Array<any>{

    return data.map( (items:any) => new Film(
        items.title,
        items.releasedate,
        items.studio,
        items.poster,
        items.location,
        items.rating,
        items.directors,
        items.genre,
        items.actors,
        items.trailers.map((item:any) => new Trailers(item.postdate, item.url, item.type, item.exclusive, item.hd))
    ))
}

