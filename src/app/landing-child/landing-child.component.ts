import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppComponent} from '../../app/app.component';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from 'src/app/services/product.service';
import {Product} from 'src/app/models/product';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-landing-child',
  templateUrl: './landing-child.component.html',
  styleUrls: ['./landing-child.component.css']
})
export class LandingChildComponent implements OnInit {

  productList: Product[] = [];
  wishlist: number[] = [];
  // @Input() product: any;
  // @Input() products: any[];
  // @Output() productAdded = new EventEmitter();

  constructor(private _app: AppComponent, private _activatedRoute:ActivatedRoute,
    private _router:Router, private productService: ProductService, private wishlistService: WishlistService) { }
  //productList= this._app.productList;

  ngOnInit()  {
   this.loadProducts();
   this.loadWishlist();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      
    })
  }

  loadWishlist(){
    this.wishlistService.getWishlist().subscribe(productIds => {
      //console.log(productIds);
      this.wishlist = productIds;
    })    
  }

}
