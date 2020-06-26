import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {AppComponent} from '../../app/app.component';
import {Product} from 'src/app/models/product';
import {MessengerService}  from 'src/app/services/messenger.service';
import {CartComponent} from 'src/app/cart/cart.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  @Input() product: Product
  @Input() products: any[];
  
  constructor(private _app: AppComponent,  private productService: ProductService,
    private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.product);
  }

}
