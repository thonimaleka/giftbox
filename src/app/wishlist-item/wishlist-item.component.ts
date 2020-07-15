import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() wishItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
