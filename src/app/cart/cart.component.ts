import { Component, OnInit, Input} from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem = [
    // {id:1, productId:1, productName:"Test 1", qty:1, price: 100},
    // {id:2, productId:3, productName: "Test 3",qty:4, price: 50},
    // {id:3, productId:2, productName:"Test 2",qty:5, price: 150},
    // {id:4, productId:4, productName:"Test 4",qty:2, price: 200}    

  ];
  
  cartTotal= 0;
  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }
  // addProductToCart(product: Product){
  //   let productExists = false;
  //   for(let i in this.cartItem){
  //         if(this.cartItem[i].productId === product.id){
    
  //           this.cartItem[i].qty++
  //          productExists= true
  //          break;
  //         }
  //       }

  //       if(!productExists){
  //         this.cartItem.push({
  //               productId: product.id,
  //               productName: product.name,
  //               qty:1,
  //               price: product.price
          
  //             })
  //       }


    // if(this.cartItem.length === 0){
    //   this.cartItem.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty:1,
    //     price: product.price
  
    //   })
      
    // } else{
    //   for(let i in this.cartItem){
    //     if(this.cartItem[i].productId === product.id){
  
    //       this.cartItem[i].qty++
         
    //     }else{
    //       this.cartItem.push({
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
    this.loadCartItems();    
  })
}

loadCartItems(){
  this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
   this.cartItem = items; 
   this.calcCartTotal();
  }  )

}




 calcCartTotal(){
  this.cartTotal = 0;
  this.cartItem.forEach(item =>{
    this.cartTotal += (item.qty * item.price)
  })
 }
   
 

}
