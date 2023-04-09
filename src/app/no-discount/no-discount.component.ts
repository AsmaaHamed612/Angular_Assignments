import { Component } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { IProduct } from '../Shared-Classes-and-types/IProduct';


@Component({
  selector: 'app-no-discount',
  templateUrl: './no-discount.component.html',
  styleUrls: ['./no-discount.component.scss']
})
export class NoDiscountComponent {


  prdoctList:IProduct[] |null
  constructor(private productService:ProductServiceService){
    this.prdoctList=this.productService.GetNonDiscountedProduct()

  }

}
