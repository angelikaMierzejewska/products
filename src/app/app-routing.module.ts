import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ItemsComponent} from "./items/items.component";

const routes: Routes = [
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'item', component: ItemsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
