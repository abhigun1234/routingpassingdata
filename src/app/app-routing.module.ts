import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductlistComponent} from '..//app/productlist/productlist.component'
import {ProductdetailsComponent} from '..//app/productdetails/productdetails.component'
const routes: Routes = [{path:"products",
component:ProductlistComponent}
,{path:"products/:name",
component:ProductdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
