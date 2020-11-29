import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  name:string=''
  productList;
  constructor(private router:Router,private prodService:ProductService) { }

  ngOnInit() {
  }

  getProductName(){
    this.productList= this.prodService.getProductDetails()
    // console.log("") 
  }
  
  onSelect (product)
  {
   alert(product.name)
   this.router.navigate(['/products',product.id])

  }

}
