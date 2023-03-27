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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { InternPageComponent } from './components/intern-page/intern-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompanySignUpComponent } from './components/company-sign-up/company-sign-up.component';
import { InternHomeComponent } from './pages/intern-home/intern-home.component';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminPageComponent,
    InternPageComponent,
    CompanyPageComponent,
    CompanySignUpComponent,
    InternHomeComponent,
    CompanyHomeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
