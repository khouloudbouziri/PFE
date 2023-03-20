import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InternPageComponent } from './components/intern-page/intern-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'admin-page',component:AdminPageComponent},
  {path:'intern-page',component:InternPageComponent},
  {path:'company-page',component:CompanyPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
