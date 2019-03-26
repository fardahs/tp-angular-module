interface canDrink {
    boisson(name:string, alcool:boolean, bio:boolean):void;
}
enum Religion{Buddhism, Judaism, Islam, Catholicism, Atheist}
enum Genre{Homme, Femme}

export class Personne implements canDrink{
    constructor(public nom:string, public prenom:string, public genre:string,
                private religion?:Religion)
    {}

    boisson(name: string, alcool: boolean, bio: boolean): void {
        if(alcool === true && bio === true){
            console.log("boisson alcoolisée et bio")
        }else{
            console.log("boisson non alcoolisée et non bio")
        }
    }

    toString():string{
        return this.nom + ' ' + this.prenom
    }
}


export class Connaissances {
    constructor(public name:string, public anneeExperience:number){}
}


export class Formateur extends Personne {
    constructor(nom:string, prenom:string, genre:string, private skills:Array<Connaissances>){
        super(nom, prenom, genre)
    }
    canTeach():Array<Connaissances>{
        return this.skills.filter(item => item.anneeExperience > 2)
    }
    
}

export class Certification {
    constructor(public name:string, public anneeObtention:number){}
}

export class Stagiaire extends Personne{
    constructor(nom:string, prenom:string, genre:string, private certification:Array<Certification>){
        super(nom, prenom, genre)
    }
}

export class Formation{
    constructor(nom:string, dateDebut:Date, dateFin:Date, stagiaire:Array<Stagiaire>, formateur:Array<Formateur>){

    }
}



