import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { StarsComponent } from '../stars/stars.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from '../search.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    StarsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,

  ]
})
export class ProductsModule { }
