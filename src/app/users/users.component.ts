import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { IUser } from '../Shared-Classes-and-types/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UserComponent implements OnInit{

  constructor(private _userService:UsersService)
  {

  }
  UsersList: IUser[]=[];
  erorrMessage:any;
 ngOnInit() {
    this._userService.GetUsersData().subscribe({
      next:data=>this.UsersList=data,
      error:erorr=>this.erorrMessage=erorr
    });
 }


}
