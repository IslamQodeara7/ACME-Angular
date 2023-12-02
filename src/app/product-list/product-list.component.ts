import { ProductsService } from './../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{
x:string = '';
showID:boolean = false;
products:any = this.ProductsService.products;
constructor(private ProductsService:ProductsService){

}
}
