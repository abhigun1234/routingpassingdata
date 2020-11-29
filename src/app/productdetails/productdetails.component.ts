import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productid=""
  productDetails;
  constructor(private activatedroute :ActivatedRoute,private productService :ProductService) { }

  ngOnInit() {

    // let id=this.activatedroute.snapshot.paramMap.get("id")
    // alert(id)
    // this.productid=id

  }
  getProductDetails()
  {
    this.productDetails=this.productService.getProductDetails()
  }

}
