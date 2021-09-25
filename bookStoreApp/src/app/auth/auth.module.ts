import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
