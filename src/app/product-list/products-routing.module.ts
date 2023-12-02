import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { detailsGuard } from '../details.guard';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-detail/:id', canActivate: [detailsGuard], component: ProductDetailComponent }
  ])],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
