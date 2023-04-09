import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DiscountOffers } from '../Shared-Classes-and-types/DiscountOffers-Enum';
import { IProduct } from '../Shared-Classes-and-types/IProduct';
import { ICategory } from '../Shared-Classes-and-types/ICategory';
import { ChildComponent } from '../child/child.component';
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(ChildComponent) child !: ChildComponent;
  Discount:DiscountOffers=DiscountOffers['noDiscount'];
  StoreName:string="shopping";
  StoreLogo:string="./assets/image2.jpg";
  ProductList:IProduct[]=[];
  //=[{ID:1,Name:'HeadPhone',Quantity:4,Price:200,Image:"./assets/image2.jpg"},
  //                         {ID:2,Name:'Camera',Quantity:3,Price:400,Image:"./assets/image4.jpg"},
  //                         {ID:3,Name:'LapTop',Quantity:6,Price:11000,Image:"./assets/image8.jpg"},
  //                         {ID:4,Name:'Playstation',Quantity:2,Price:250,Image:"./assets/image6.jpg"},
  //                         {ID:5,Name:'Glasess',Quantity:1,Price:550,Image:"./assets/image1.jpg"},
  //                         {ID:6,Name:'AirBodes',Quantity:4,Price:200,Image:"./assets/image7.jpg"}];
  CategoryList:ICategory[]=[{ID:1,Name:'HeadPhone'},{ID:4,Name:'Camera'},{ID:3,Name:'Glasess'}];
  ClientName:string="";
  IsPurshased:Boolean=false;
  ishide:boolean=true;
  selectProduct!:IProduct;
  productId!:number;
getData($event: IProduct[])
{
this.ProductList=$event;
}

  toggle(){
    this.IsPurshased=!this.IsPurshased;

  }
  hide(){
    this.ishide=!this.ishide;

  }
  constructor(private ProductServices:ProductServiceService,private router:Router,private activeroute:ActivatedRoute){}
ngOnInit():void{
//this.child.logData();
}

ngAfterViewInit()
  {
    this.child.sayWelcome();
  }


  renderValue(){
    this.ProductList=this.ProductServices.GetAllProducts();
     }

  getProductById(){
   var product=this.ProductServices.GetProductById(this.productId)
      if(product!=null){
        this.selectProduct=product;
      }
 }

 WithDiscount()
 {
   this.router.navigate(['discount'],{relativeTo:this.activeroute})
 }

 WithoutDiscount(){

  this.router.navigate(['noDiscount'],{relativeTo:this.activeroute})
 }

}

