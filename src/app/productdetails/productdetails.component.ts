import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productid=""
  constructor(private activatedroute :ActivatedRoute) { }

  ngOnInit() {

    let name=this.activatedroute.snapshot.paramMap.get("name")
    alert(name)
    this.productid=name

  }

}
