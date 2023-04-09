import { Component } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { IProduct } from '../Shared-Classes-and-types/IProduct';
@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent {

  prdoctList:IProduct[] |null
  constructor(private productService:ProductServiceService){
    this.prdoctList=this.productService.GetDiscountedProduct()

  }
}
