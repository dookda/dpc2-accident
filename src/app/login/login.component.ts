import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {

  }

  loginEmail(email: string, password: string) {
    this.authService.emailLogin(email, password);
  }

  signupEmail(email: string, password: string) {
    this.authService.emailSignup(email, password);
  }

  loginGoogle() {
    this.authService.googleLogin();
  }


  ngOnInit() {
  }

}
