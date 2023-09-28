export class Order{
    constructor(
        public id: number,
        public product:string,
        public quantity:number,
        public price: number,
        public side: string,
        public type: string,
    ){}
}