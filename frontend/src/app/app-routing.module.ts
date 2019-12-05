import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './authguards/auth.guard';
import { NotAuthGuard } from './authguards/notauth.guard';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
  path : '',
  component: HomeComponent
 } ,
   {
  path : 'dashbaord',
  component: DashboardComponent,
  canActivate: [AuthGuard]
 } ,
   {
  path : 'register',
  component: RegisterComponent,
  canActivate: [NotAuthGuard]
 },
 {
  path : 'login',
  component: LoginComponent,
  canActivate: [NotAuthGuard]
 },
 {
  path : 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
 },
 {
  path : 'blog',
  component: BlogComponent,
  canActivate: [AuthGuard]
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
