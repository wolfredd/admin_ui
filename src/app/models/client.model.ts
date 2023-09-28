  export class Client{

    constructor(
        public id:number,
        public ids:string,
        public email:string, 
        public firstName:string,
        public lastName:string, 
        public password:string, 
        public role:SVGAnimatedEnumeration, 
        public defaultPortfolioId:number, 
        public accountId:number,)
    {
    }

}