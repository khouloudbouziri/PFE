import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CompanySignUpComponent } from './components/company-sign-up/company-sign-up.component';
import { CompanyComponent } from './pages/company-page/company.component';
import { InternPageComponent } from './components/intern-page/intern-page.component';
import { LoginComponent } from './components/login/login.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { HomeComponent } from './pages/home/home.component';
import { InternHomeComponent } from './pages/intern-home/intern-home.component';
import { AuthGuard } from './services/auth.guard';
import { SupervisorPageComponent } from './pages/supervisor-page/supervisor-page.component';
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { DescriptionComponent } from './description/description.component';
//import { AgendaComponent } from './components/agenda/agenda.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //{ path: 'agenda', component: AgendaComponent },
  { path: 'addOffer', component: AddOfferComponent },
  { path: 'offre/:id', component: DescriptionComponent },
  {
    path: 'company-page',
    component: CompanyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'offerDetails',
    component: OfferDetailsComponent,
   
  },
  {
    path: 'supervisor-page',
    component: SupervisorPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'intern-page',
    component: InternPageComponent,
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
