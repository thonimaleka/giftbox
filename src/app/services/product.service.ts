import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {observable, Observable} from 'rxjs';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  //TODO Populate products from an API
//return an observable
  getProducts(): Observable <Product[]>{
    return this.http.get<Product[]>(apiUrl);
  }
}
   