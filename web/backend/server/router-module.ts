import * as express from "express" ;
let router = express.Router();



interface Product {
    id: number,
    title: string,
    price: number
}

const products: Product[] = [
    { id:0, title: "First Product2", price: 24.99 },
    { id:1, title: "Second Product3", price: 64.99 },
    { id:2, title: "Third Product4", price: 74.99}
];

export class HandleReq {
    public getAllProducts(req, res): any {
        res.json(this.getProducts());
    }

    public getProductById(req, res): void {
        res.json(products.find(prod => prod.id == parseInt(req.params.id)));
    }
    
    public getProducts(): Product[] {
        return products;
    }
}

