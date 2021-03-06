import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {AppComponent} from '../../app/app.component';
import {Product} from 'src/app/models/product';
import {MessengerService}  from 'src/app/services/messenger.service';
import {CartComponent} from 'src/app/cart/cart.component';
import { CartService } from '../services/cart.service';
import { DisplayWishlistService } from '../services/display-wishlist.service';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  @Input() productItem: Product;
  @Input() products: any[];
 @Input() addedToWishlist: boolean;
  
  constructor(private _app: AppComponent,  private productService: ProductService,
    private msg: MessengerService, private cartService: CartService, private displayWishlistService: DisplayWishlistService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem);
    })
    
  }

  handleAddToWish() {
    this.displayWishlistService.addProductToWish(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem);
    })
    
  }

  handleAddToWishlist(){

    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    })

  }
}
