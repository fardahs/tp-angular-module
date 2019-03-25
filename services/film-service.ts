import * as data from './mocks/film.json';

class Film{
    constructor(public title:string, public releasedate:string,
                public studio:string, public poster:string, public location:string,
                public rating:string, public directors:string, public genre:string,
                public actors:string, public trailers:string){
    }
}

class Trailers{
    constructor(public postdate:string, public url:string, public type:string,
                public exclusive:boolean, public hd:boolean){
    }
}


class Personne{
    constructor(public nom:string, public prenom:string, public genre:string,
                private religion?:string,
    ){

    }
}