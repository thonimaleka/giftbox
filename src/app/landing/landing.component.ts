import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../../app/app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  @Input() product: any;
  @Input() products: any[];

  constructor(private _app: AppComponent,private _activatedRoute:ActivatedRoute,
    private _router:Router) { }
  productList= this._app.productList;

  ngOnInit(): void {
  }

}
