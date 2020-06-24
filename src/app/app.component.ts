import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giftbox';

  productList = [
    
    {img: '../assets/pics/depositphotos_221428200-stock-photo-beautiful-roses-with-gift-box.jpg', name: 'Valentine Heart', description:'Giftbox ideal for valentines day for your significant other', price: '124'},
    {img: 'https://5.imimg.com/data5/IH/JL/MY-47546568/gift-box-500x500.jpg ', name: 'RedRiding', description:'Red box with gold bow', price: '150'},
    {img: 'https://mk0westpacklife7j5h4.kinstacdn.com/wp-content/uploads/99482.jpg ', name: 'Pink Stripped Box', description:'Pink giftbox with stripped details on the sides', price: '200'},
    {img: 'https://previews.123rf.com/images/timmary/timmary1306/timmary130600012/20451784-gift-box-and-gold-ribbon-isolated-on-white-background.jpg', name: 'Gold stunner', description:'Gold giftbox best fits for 21+ birthdays or wedding gift', price: '300'},
    {img: 'https://media.zid.store/e5658203-c2e2-4ac2-b451-fdefb7deaae7/208a339a-59f5-4c9f-a52d-9e7f0589f2c1.png', name: 'Marble Box', description:'Nice subtle black and white box ideal for either gender gifting', price: '250'},
    {img: ' https://cdn1.vectorstock.com/i/1000x1000/41/15/white-round-gift-box-with-light-blue-turquoise-vector-3664115.jpg', name: 'Rounded White Box', description:'White box with blue bow', price: '150'},
    {img: 'https://m.media-amazon.com/images/I/61i1StiwdiL._SR500,500_.jpg ', name: 'Purple Rose Box', description:'Purple unique universal giftbox', price: '225'},
    {img: 'https://store.huskdesignblog.com/wp-content/uploads/2019/10/Omakase-by-Sindroms-image-by-Andr%C3%A9s-Reisinger-huskdesignblog10.jpg', name: 'Rose Gold Box', description:'Luxurious giftbox ideal for the other gender', price: '275'},
    {img: ' https://5.imimg.com/data5/QZ/EG/AV/SELLER-93481086/wedding-gift-box-250x250.jpg', name: 'General giftbox', description:'Made for any kind of gifting like birthdays', price: '125'},
    {img: 'https://cdn.shopify.com/s/files/1/0084/6236/8865/products/Rose_Gold_Bridesmaid_Box_1060x_1_1200x1200.jpg?v=1557591329', name: 'Bridesmaid Love', description:'Giftbox for specially appreciating your lovely bridesmaids after your special wedding', price: '200'}
  ]
}
