// import { Component } from '@angular/core';
// import { FormControl,FormGroup,Validator, Validators ,FormsModule,ReactiveFormsModule} from '@angular/forms';

// import { Route, Router } from '@angular/router';
// import { AuthService } from '../Services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

//   constructor(private _AuthService:AuthService,private router:Router ){}

//   loginForm: FormGroup=new FormGroup({

//     password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
//     email: new FormControl(null,[Validators.required,Validators.email])

//   })


//   error:string=''
//   submitLoginForm(loginForm:FormGroup)
// {
//      if(loginForm.valid){
//       this._AuthService.register(loginForm.value).subscribe((response)=>{

//         if(response.message=='success')
//         {
//           localStorage.setItem('userToken',response.userToken)
//           this._AuthService.saveUserData()
//              this.router.navigate(['home'] )
//         }
//         else{
//           // this.error=
//         }

//       })

//      }
// }


// }

import { Component, OnInit } from '@angular/core';
import { Login } from '../Shared-Classes-and-types/Login';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel=new Login("","","");

  loginForm =this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
  });
  constructor(private loginService :LoginService,private fb:FormBuilder) { }

  ngOnInit() {
  }

  get email()
  {
     return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  // Node JS And Template Dirven Forms
  // submitData()
  // {
  //   //component ===> service
  //   //service==>http call
  //   this.loginService.Login(this.loginModel).subscribe({
  //     next:data=>console.log(data),
  //     error:error=>console.log(error)
  //   });
  // }


  // Reactive Forms
  submitData()
  {
    console.log(this.loginForm.value);
  }

}
