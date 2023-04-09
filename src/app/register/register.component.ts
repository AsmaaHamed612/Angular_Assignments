// import { Component } from '@angular/core';
// import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

// import { Route, Router } from '@angular/router';
// import { AuthService } from '../Services/auth.service';
// import { User } from '../Shared-Classes-and-types/User';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {

//     constructor(private _AuthService:AuthService,private router:Router ){}

//   registerForm: FormGroup=new FormGroup({
//     fName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
//     lName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
//     password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
//     age:new FormControl (null,[Validators.required]),
//     email: new FormControl(null,[Validators.required,Validators.email])

//   })

//   error:string=''
//   submitRegisterForm(registerForm:FormGroup)
// {
//      if(registerForm.valid){
//       this._AuthService.login(registerForm.value).subscribe((response)=>{

//         if(response.message=='success')
//         {

//              this.router.navigate(['login'] )
//         }
//         else{
//           // this.error=
//         }

//       })

//      }
// }


//   media=["Facebook","Twitter","Google"];
//   userModel=new User("","","","",false);

//   submitData()
//   {
//     //component ===> service
//     //service==>http call
//     this._AuthService.enroll(this.userModel).subscribe({
//       next:data=>console.log(data),
//       error:error=>console.log(error)
//     });
//   }

//   ngOnInit(): void {
//   }


// }


import { Component, OnInit } from '@angular/core';
import { Register } from '../Shared-Classes-and-types/Register';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  Options = ['Facebook', 'Twitter', 'Google'];
  registerModel = new Register('', '', '', '', '');
  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-Z]+'),
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        option: ['', Validators.required],
      },
      {
        validator: [ConfirmPasswordValidator],
      }
    );
  }

  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get option() {
    return this.registerForm.get('option');
  }

  // Node JS And Template Dirven Forms
  // submitData()
  // {
  //   //component ===> service
  //   //service==>http call
  //   this.registerService.Register(this.registerModel).subscribe({
  //     next:data=>console.log(data),
  //     error:error=>console.log(error)
  //   });
  // }

  // Reactive Forms
  submitData() {
    console.log(this.registerForm.value);
  }
}
