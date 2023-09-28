export class TradeField{
    constructor(
        public id: string,
        public timestamp: Date,
        public clientId: number,
        public product:string,
        public quantity:number,
        public price: number,
        public side: string,
        public type: string,
        public isMultiLeg: Boolean,
        public exchange: string,
        public status: string,
        public referenceCode:string
    ){}
}