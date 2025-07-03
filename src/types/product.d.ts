export type Product = {
    _id: number;
    name: string;
    price: number;
    description: string;
    img: string;
    rate : {
      value: number;
      count: number;
    };
    category : string
    stock : number
}