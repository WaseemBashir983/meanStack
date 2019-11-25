import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
  path : '',
  component: HomeComponent
 } ,
   {
  path : 'dashbaord',
  component: DashboardComponent
 } ,
   {
  path : 'register',
  component: RegisterComponent
 },
 {
  path : 'login',
  component: LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
