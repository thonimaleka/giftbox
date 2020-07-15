import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service';
import { DisplayWishlistService } from '../services/display-wishlist.service';
import { DisplayWishlist } from '../models/display-wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishItem = [
    // {id:1, productId:1, productName:"Test 1", qty:1, price: 100},
    // {id:2, productId:3, productName: "Test 3",qty:4, price: 50},
    // {id:3, productId:2, productName:"Test 2",qty:5, price: 150},
    // {id:4, productId:4, productName:"Test 4",qty:2, price: 200}    

  ];
  
  wishTotal= 0;
  constructor(private msg: MessengerService, private displayWishlistService: DisplayWishlistService) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadWishItems();
  }
  // addProductToCart(product: Product){
  //   let productExists = false;
  //   for(let i in this.wishItem){
  //         if(this.wishItem[i].productId === product.id){
    
  //           this.wishItem[i].qty++
  //          productExists= true
  //          break;
  //         }
  //       }

  //       if(!productExists){
  //         this.wishItem.push({
  //               productId: product.id,
  //               productName: product.name,
  //               qty:1,
  //               price: product.price
          
  //             })
  //       }


    // if(this.wishItem.length === 0){
    //   this.wishItem.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty:1,
    //     price: product.price
  
    //   })
      
    // } else{
    //   for(let i in this.wishItem){
    //     if(this.wishItem[i].productId === product.id){
  
    //       this.wishItem[i].qty++
         
    //     }else{
    //       this.wishItem.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty:1,
    //         price: product.price
      
    //       })
    //     }
    //   }
    // }

handleSubscription(){
  
  this.msg.getMsg().subscribe((product: Product) => {
    // console.log(product)
     //this.addProductToCart(product)  
    this.loadWishItems();    
  })
}

loadWishItems(){
  this.displayWishlistService.getDisplayWishlists().subscribe((items: DisplayWishlist[]) =>{
   this.wishItem = items; 
   this.calcWishTotal();
  }  )

}




 calcWishTotal(){
  this.wishTotal = 0;
  this.wishItem.forEach(item =>{
    this.wishTotal += (item.qty * item.price)
  })
 }
  
 


}
