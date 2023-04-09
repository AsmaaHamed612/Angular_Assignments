import { Injectable } from '@angular/core';
import { DiscountOffers } from '../Shared-Classes-and-types/DiscountOffers-Enum';
import { IProduct } from '../Shared-Classes-and-types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  ProductList:IProduct[]=[{ID:1,Name:'HeadPhone',Quantity:4,Price:200,Image:"./assets/image2.jpg",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:2,Name:'Camera',Quantity:3,Price:400,Image:"./assets/image4.jpg",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:3,Name:'LapTop',Quantity:6,Price:11000,Image:"./assets/image8.jpg",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:4,Name:'Playstation',Quantity:2,Price:250,Image:"./assets/image6.jpg",Discount:DiscountOffers['TenPercent'],IsDiscount:true},
  {ID:5,Name:'Glasess',Quantity:1,Price:550,Image:"./assets/image1.jpg",Discount:DiscountOffers['TenPercent'],IsDiscount:true},
  {ID:6,Name:'AirBodes',Quantity:4,Price:200,Image:"./assets/image7.jpg",Discount:DiscountOffers['TenPercent'],IsDiscount:true}
]
  GetAllProducts()
  {
    return this.ProductList;
  }

  GetProductById(proId:number){
    for(let product of this.ProductList){
      if(product.ID==proId){
        return product;
      }
    }
    return null;
      }


      GetDiscountedProduct():IProduct[] | null{
        let Product = this.ProductList.filter(prod=>prod.IsDiscount==true);
        return Product? Product : null;
     }

     GetNonDiscountedProduct():IProduct[] | null{
      let Product = this.ProductList.filter(prod=>prod.IsDiscount==false);
      return Product? Product : null;
    }
}
