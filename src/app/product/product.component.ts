import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {AppComponent} from '../../app/app.component';
import {Product} from 'src/app/models/product';
import {MessengerService}  from 'src/app/services/messenger.service';
import {CartComponent} from 'src/app/cart/cart.component';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  @Input() productItem: Product
  @Input() products: any[];
  
  constructor(private _app: AppComponent,  private productService: ProductService,
    private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem);
    })
    
  }

}
