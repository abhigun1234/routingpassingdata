import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productsList=[{"id":"1","name":"adidas","price":"2345"}
,{"id":"2","name":"nike","price":"2345"},
{"id":"3","name":"rebook","price":"2345"},{"id":"4","name":"bata","price":"2345"}]
  constructor() { }

  getProductDetails(){
  return this.productsList
  }
}
