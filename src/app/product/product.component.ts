import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppComponent} from '../../app/app.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();

  constructor(private _app: AppComponent,private _router:Router) { }
  productList= this._app.productList;


  ngOnInit(): void {
  }

}
