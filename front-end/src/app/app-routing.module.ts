import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CompanySignUpComponent } from './components/company-sign-up/company-sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InternPageComponent } from './components/intern-page/intern-page.component';
import { LoginComponent } from './components/login/login.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { HomeComponent } from './pages/home/home.component';
import { InternHomeComponent } from './pages/intern-home/intern-home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'intern-page',
    component: InternPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'company-page',
    component: CompanyPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'offerCard', component: OfferCardComponent },
  { path: 'company-sign-up', component: CompanySignUpComponent },
  { path: 'company-sign-up', component: CompanySignUpComponent },
  { path: 'intern-home', component: InternHomeComponent },
  { path: 'company-home', component: CompanyHomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
