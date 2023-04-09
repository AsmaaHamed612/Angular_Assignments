import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

//q1 b b.	Change the root component selector to: myfirstapp-root in the @componenet decorator function
// and change the selector directive in index.html.
@Component({
  selector: 'myfirstapp-root ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment_lab1';
  productlist:any=[];
  isclicked:boolean=false;

  @ViewChild(ProductsComponent) child!:ProductsComponent;

  getProducts(){

    this.productlist=this.child.renderValue();
    if(this.isclicked==false)
    {
      this.isclicked=true;
    }
    else{
      this.isclicked=false;
    }
  }

  constructor(private _httpClient:HttpClient) {}

getPosts()
{
  this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
}
}
