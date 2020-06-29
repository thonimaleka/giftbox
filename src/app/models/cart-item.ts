import { Product } from './product';

export class CartItem {
    

    id: number;
    productId: number;
    img: string;
    //name: string;
    productName: string;
    description: string;
    price: number;
    qty: number;

    constructor(id:number, product: Product, qty = 1){
        this.id=id;
        this.productId = product.id;
        // this.name = product.name;
        this.productName = product.name;
        this.img = product.img;
        this.description = product.description;
        this.price = product.price;
        this.qty = qty;
    }

}


