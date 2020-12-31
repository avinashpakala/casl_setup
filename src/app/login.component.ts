import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from './test.servce';


@Component({
  selector: 'login-form',
  template: `
   
     
      <button type="submit" (click) = 'login()'>Login</button>
   
  `
})
export class LoginForm {
  email: string = '';
  password: string = '';

  constructor(private session: Session,public router:Router) {}

  login() {
     this.session.login();
     console.log("test");
    this.router.navigate(['./test']);
  }
}