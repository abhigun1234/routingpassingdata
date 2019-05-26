import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public products=[{"id":"1","name":"adidas","price":"2345"}
,{"id":"2","name":"nike","price":"2345"},
{"id":"3","name":"rebook","price":"2345"}]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect (product)
  {
   alert(product.name)
   this.router.navigate(['/products',product.name])

  }

}
