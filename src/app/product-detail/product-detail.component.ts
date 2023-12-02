import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  num: number = Number(this.active.snapshot.paramMap.get('id'));
  list:any = this.productsService.products;
  constructor(private active: ActivatedRoute, private router: Router,private productsService:ProductsService) {


  }
  backto(): void {
    this.router.navigate(['/product-list']);
  }
  ngOnInit(): void {

  }
}
