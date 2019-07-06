import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { DataService } from './data.service';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { Acc7dayComponent } from './acc7day/acc7day.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';



// Configs
const firebaseConfig = {
  apiKey: 'AIzaSyAeQmORxFfycGgZI6vQWlKOF4SK-MmKtjI',
  authDomain: 'sign-in-834f8.firebaseapp.com',
  databaseURL: 'https://sign-in-834f8.firebaseio.com',
  projectId: ' sign-in-834f8',
  storageBucket: 'sign-in-834f8.appspot.com',
  messagingSenderId: '948656002488'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponent,
    Acc7dayComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
