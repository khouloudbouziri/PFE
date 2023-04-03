import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './pages/company-page/company.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { InternPageComponent } from './components/intern-page/intern-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompanySignUpComponent } from './components/company-sign-up/company-sign-up.component';
import { InternHomeComponent } from './pages/intern-home/intern-home.component';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { HomeComponent } from './pages/home/home.component';
import { AddSupervisorComponent } from './components/add-supervisor/add-supervisor.component';
import { SupervisorPageComponent } from './pages/supervisor-page/supervisor-page.component';
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
    //AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
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
