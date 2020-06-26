import { Injectable } from '@angular/core';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]= [
    new Product(1, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQdefgRvIBfKaj1AknxgFxZPxYa2jHB1mtnQ&usqp=CAU", 'Valentine Heart', 'Giftbox ideal for valentines day for your significant other', 124),
    new Product(2, "https://5.imimg.com/data5/IH/JL/MY-47546568/gift-box-500x500.jpg ", 'RedRiding', 'Red box with gold bow',150 ),
    new Product(3,"https://mk0westpacklife7j5h4.kinstacdn.com/wp-content/uploads/99482.jpg ",  'Pink Stripped Box', 'Pink giftbox with stripped details on the sides', 200),
    new Product(4, "https://previews.123rf.com/images/timmary/timmary1306/timmary130600012/20451784-gift-box-and-gold-ribbon-isolated-on-white-background.jpg",'Gold stunner', 'Gold giftbox best fits for 21+ birthdays or wedding gift', 300 ),
    new Product(5, "https://media.zid.store/e5658203-c2e2-4ac2-b451-fdefb7deaae7/208a339a-59f5-4c9f-a52d-9e7f0589f2c1.png", 'Marble Box', 'Nice subtle black and white box ideal for either gender gifting', 250),
    new Product(6, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT85TuReFPJN9ym-LV9F2SjxAhsV27NSbtemg&usqp=CAU",'Rounded White Box', 'White box with blue bow', 150 ),
    new Product(7,"https://m.media-amazon.com/images/I/61i1StiwdiL._SR500,500_.jpg", 'Purple Rose Box','Purple unique universal giftbox', 225 ),
    new Product(8,"https://store.huskdesignblog.com/wp-content/uploads/2019/10/Omakase-by-Sindroms-image-by-Andr%C3%A9s-Reisinger-huskdesignblog10.jpg",'Rose Gold Box', 'Luxurious giftbox ideal for the other gender', 275),
    new Product(9, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBuPfAeWOsGZyiyGZu3bCXTc3i_WJsAGF3IQ&usqp=CAU",'General giftbox','Made for any kind of gifting like birthdays',125),
    new Product(10, "https://cdn.shopify.com/s/files/1/0084/6236/8865/products/Rose_Gold_Bridesmaid_Box_1060x_1_1200x1200.jpg?v=1557591329", 'Bridesmaid Love', 'Giftbox for specially appreciating your lovely bridesmaids after your special wedding', 200)
  
  ]
  constructor() { }
  //TODO Populate products from an API
//return an observable
  getProducts(): Product[]{
    return this.products
  }
}
   