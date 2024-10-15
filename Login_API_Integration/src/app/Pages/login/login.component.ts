import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

signUpMode: boolean = false;

  OnSignUpClick(){
    this.signUpMode = true ;
  }

  OnSigninClick(){
    this.signUpMode = false ;
  }

}
