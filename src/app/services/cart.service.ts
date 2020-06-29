import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import {Observable} from 'rxjs';
import { cartUrl } from 'config/api';
import { Product } from '../models/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {

    //Mapping the obtained results to our CartItem properties. (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[]) => {
      let cartItems: CartItem[] = [];

      for(let item of result){
        let productExists = false;
        for(let i in cartItems){
              if(cartItems[i].productId === item.product.id){
        
              cartItems[i].qty++
               productExists= true
               break;
              }
            }
    
            if(!productExists){
              cartItems.push(new CartItem(item.id, item.product));
            //   cartItems.push(new CartItem() {
            //             productId: item.product.id,
            //             name: item.product.name,
            //             img : item.product.img,
            //             qty:1,
            //             price: item.product.price
            // }
  
            // cartItems.push(new CartItem(item.id, item.product, item.qty){
            //   id=item.id;
            // productId = product.id;
            //   name = product.name;
            //  img = product.img;
            //   description = product.description;
            //   price = product.price;
            //   qty = qty;
          
      }
    }
      
      return cartItems;
      })
    
    );
  }


  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, {product});
  }
}
