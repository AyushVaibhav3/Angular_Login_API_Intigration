import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

//   loginObj:any ={
//     "EmailId": "",
//     "Password": ""
//   }


// signUpMode: boolean = false;

//   OnSignUpClick(){
//     this.signUpMode = true ;
//   }

//   OnSigninClick(){
//     this.signUpMode = false ;
//   }

}
