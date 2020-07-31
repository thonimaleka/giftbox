import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  @Input() orderData = {
    full_name: " ", email: " ",phone:" ", address: " ", city: " ", province: " ", code: " "
  } 

  constructor(
    private _activatedRouter:ActivatedRoute,
    private _router:Router ) { }

    stepperClick():void{
      this._router.navigate(['/spepper']);

     
   }

  orders: any =[];

  ngOnInit() {
    this.getOrders();
  }

  getOrders()
  {
    // this._SevirceService.getOrders().subscribe((data: any) => 
    // {
    //   this.orders = data;
    //   console.log(this.orders);
    // });
  }

  placeOrder()
  {
    // this._SevirceService.addOrder(this.orderData).subscribe(
    // data =>
    //   console.log(data));
    //   console.log(this.orderData.full_name);
    //   console.log(this.orderData.email);
    //   console.log(this.orderData.phone);
    //   console.log(this.orderData.address);
    //   console.log(this.orderData.city);
    //   console.log(this.orderData.province);
    //   console.log(this.orderData.code);

  }

}
