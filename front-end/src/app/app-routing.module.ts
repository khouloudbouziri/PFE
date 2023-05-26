import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/profiles/admin-page/admin-page.component';
import { CompanySignUpComponent } from './authentication/company-sign-up/company-sign-up.component';
import { CompanyComponent } from './pages/profiles/company-page/company.component';
import { InternPageComponent } from './pages/profiles/intern-page/intern-page.component';
import { LoginComponent } from './authentication/login/login.component';
import { OfferCardComponent } from './intershipOffer/offer-card/offer-card.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CompanyHomeComponent } from './pages/homes/company-home/company-home.component';
import { HomeComponent } from './pages/homes/home/home.component';
import { InternHomeComponent } from './pages/homes/intern-home/intern-home.component';
import { AuthGuard } from './services/Authentication/auth.guard';
import { SupervisorPageComponent } from './pages/profiles/supervisor-page/supervisor-page.component';
import { AddOfferComponent } from './intershipOffer/add-offer/add-offer.component';
import { OfferDetailsComponent } from './intershipOffer/offer-details/offer-details.component';
import { DescriptionComponent } from './intershipOffer/description/description.component';
import { ApplyComponent } from './intern/apply/apply.component';
import { PhotoComponent } from './photo/photo.component';
import { ApplicationFormComponent } from './shared/application-form/application-form.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LoginSupervisorComponent } from './login-supervisor/login-supervisor.component';
import { AgendaComponent } from './shared/agenda/agenda.component';
import { FileComponent } from './file/file.component';
import { SupervisorOfferDetailsComponent } from './intershipOffer/supervisor-offer-details/supervisor-offer-details.component';
import { CVthequeComponent } from './cvtheque/cvtheque.component';
import { ModifyIntershipOfferComponent } from './intershipOffer/modify-intership-offer/modify-intership-offer.component';
import { CvDescriptionComponent } from './cv-description/cv-description.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company-home', component: CompanyHomeComponent },
  { path: 'intern-home', component: InternHomeComponent },
  { path: 'cvtheque', component: CVthequeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'company-sign-up', component: CompanySignUpComponent },

  {
    path: 'admin-page',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'company-page/:id',
    component: CompanyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'supervisor-page/:id',
    component: SupervisorPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'intern-page/:id',
    component: InternPageComponent,
    canActivate: [AuthGuard],
  },

  { path: 'addOffer', component: AddOfferComponent },
  { path: 'offerCard', component: OfferCardComponent },
  {
    path: 'offerDetails',
    component: OfferDetailsComponent,
  },

  { path: 'offre/:id', component: DescriptionComponent },
  { path: 'offreDetail/:id', component: DescriptionComponent },

  { path: 'spontaneousCandidacy', component: ApplicationFormComponent },

  { path: 'apply/offer/:id', component: ApplyComponent },
  { path: 'candidacy/:id', component: CvDescriptionComponent },

  { path: 'photo', component: PhotoComponent },
  { path: 'ml', component: TextSimilarityComponent },
  { path: 'espace', component: LoginSupervisorComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'file', component: FileComponent },
  { path: 'supervisorOffer/:id', component: SupervisorOfferDetailsComponent },
  { path: 'modifyOffer', component: ModifyIntershipOfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
