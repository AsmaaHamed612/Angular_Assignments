import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comments/comments.component';
import { DiscountComponent } from './discount/discount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'discount',component:DiscountComponent},
    {path:'noDiscount',component:NoDiscountComponent}
  ]},
  {path:'user',component:UserComponent},
  {path:'post',component:PostsComponent},
  {path:'post/:id',component:CommentComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
