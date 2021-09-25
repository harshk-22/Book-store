import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/component/login/login.component';
import { SignupComponent } from './auth/component/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  {path:'aboutus',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:'auth',component:AuthComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
  ]}

];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
