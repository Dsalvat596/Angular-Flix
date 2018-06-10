export class Movie {
    public _id? : string;
    public imgUrl? : string;
    public title? : string;
    public price? : number;
    public year? : number;
    public shortDescription? : string;
    public fullDescription?: string;
    public director?: string;
    public reviews?: Array<Reviews>;
    
    constructor() {}
}

            export class Reviews {
                public _id?: string;
                public name: string;
                public text: string;
                public rating: number;
                public date: Date;

                constructor() {}
            }
