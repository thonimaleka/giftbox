import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DisplayWishlist } from '../models/display-wishlist';
import {Observable} from 'rxjs';
import { displayWishlistUrl } from 'config/api';
import { Product } from '../models/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisplayWishlistService {

  constructor(private http: HttpClient) { }

  getDisplayWishlists(): Observable<DisplayWishlist[]> {

    //Mapping the obtained results to our DisplayWishlist properties. (pipe() and map())
    return this.http.get<DisplayWishlist[]>(displayWishlistUrl).pipe(
      map((result:any[]) => {
      let DisplayWishlists: DisplayWishlist[] = [];

      for(let item of result){
        let productExists = false;
        for(let i in DisplayWishlists){
              if(DisplayWishlists[i].productId === item.product.id){
        
              DisplayWishlists[i].qty++
               productExists= true
               break;
              }
            }
    
            if(!productExists){
              DisplayWishlists.push(new DisplayWishlist(item.id, item.product));
            //   DisplayWishlists.push(new DisplayWishlist() {
            //             productId: item.product.id,
            //             name: item.product.name,
            //             img : item.product.img,
            //             qty:1,
            //             price: item.product.price
            // }
  
            // DisplayWishlists.push(new DisplayWishlist(item.id, item.product, item.qty){
            //   id=item.id;
            // productId = product.id;
            //   name = product.name;
            //  img = product.img;
            //   description = product.description;
            //   price = product.price;
            //   qty = qty;
          
      }
    }
      
      return DisplayWishlists;
      })
    
    );
  }


  addProductToWish(product: Product): Observable<any>{
    return this.http.post(displayWishlistUrl, {product});
  }
}
