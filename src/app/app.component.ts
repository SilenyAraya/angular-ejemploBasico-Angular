import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = {};
  
  constructor(
    private loginService: LoginService
  ){}

  login(form: any): void {
    this.model = form;
    const username = this.model['username'];
    console.log(this.model);
    this.loginService.getApi(username)
      .subscribe(
        response => (console.log(response)),
        error => (console.log('Ups! we have an error: ', error))
      );
  }
}
