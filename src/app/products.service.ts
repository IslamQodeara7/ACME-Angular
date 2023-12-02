import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any = [
    {id:1,name:"islam",age:25,email:'islamqodeara21@gmail.com',gender:'male',rate:5},
    {id:2,name:"mohamed",age:58,email:'mohamed@gmail.com',gender:'male',rate:3.3},
    {id:3,name:"ibrahem",age:21,email:'ibrahem@gmail.com',gender:'male',rate:4.2},
    {id:4,name:"faten",age:47,email:'faten@gmail.com',gender:'female',rate:2.1},
    {id:5,name:"eman",age:14,email:'eman@gmail.com',gender:'female',rate:4.7},
    {id:6,name:"mona",age:14,email:'mona@gmail.com',gender:'female',rate:4.5},
  ]
  constructor() { }
}
