import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { CompanyComponent } from './pages/profiles/company-page/company.component';
import { AdminPageComponent } from './pages/profiles/admin-page/admin-page.component';
import { InternPageComponent } from './pages/profiles/intern-page/intern-page.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CompanySignUpComponent } from './authentication/company-sign-up/company-sign-up.component';
import { InternHomeComponent } from './pages/homes/intern-home/intern-home.component';
import { CompanyHomeComponent } from './pages/homes/company-home/company-home.component';
import { HomeComponent } from './pages/homes/home/home.component';
import { AddSupervisorComponent } from './supervisor/add-supervisor/add-supervisor.component';
import { SupervisorPageComponent } from './pages/profiles/supervisor-page/supervisor-page.component';
//import { AgendaComponent } from './components/agenda/agenda.component';
import {
  ScheduleModule,
  RecurrenceEditorModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AddOfferComponent } from './intershipOffer/add-offer/add-offer.component';
import { OfferDetailsComponent } from './intershipOffer/offer-details/offer-details.component';
import { DescriptionComponent } from './intershipOffer/description/description.component';
import { ApplyComponent } from './intern/apply/apply.component';
import { SupervisorCardComponent } from './supervisor/supervisor-card/supervisor-card.component';
import { OfferCardComponent } from './intershipOffer/offer-card/offer-card.component';
import { PhotoComponent } from './photo/photo.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CompanyComponent,
    AdminPageComponent,
    InternPageComponent,
    CompanySignUpComponent,
    InternHomeComponent,
    CompanyHomeComponent,
    HomeComponent,
    AddSupervisorComponent,
    SupervisorPageComponent,
    AddOfferComponent,
    OfferDetailsComponent,
    DescriptionComponent,
    ApplyComponent,
    SupervisorCardComponent,
    OfferCardComponent,
    PhotoComponent,
    SearchBarComponent,
    //AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ScheduleModule,
    RecurrenceEditorModule,
    CalendarModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
