export class Trades{
    constructor(
        public id: number,
        public orderType:string,
        public product:string,
        public side: string,
        public orderID: string,
        public price: number,
        public qty:number,
        public cumQty:number,
        public cumPrx:number,
        public exchange: string,
        public timestamp:Date
    ){}
}