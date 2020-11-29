import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductlistComponent} from '..//app/productlist/productlist.component'
import {ProductdetailsComponent} from '..//app/productdetails/productdetails.component'
import {ProductComponent} from '..//app/product/product.component'
import {InventoryComponent} from '..//app/inventory/inventory.component'
const routes: Routes = [{path:'Product',component:ProductComponent},
{path:'Inventory',component:InventoryComponent},
{

  path:'productdetails',component:ProductdetailsComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
