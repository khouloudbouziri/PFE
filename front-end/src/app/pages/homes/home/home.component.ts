import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailSenderService } from 'src/app/services/Emails/email-sender.service';
import { IntershipOffer } from 'src/app/models/IntershipOffer';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';
import { Console } from 'console';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  frm!: FormGroup;
  status!: Status;
  offers: IntershipOffer[] = [];
  res: any;

  constructor(
    private EmailSender: EmailSenderService,
    private IntershipOfferService: IntershipOfferService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {}

  get f() {
    return this.frm.controls;
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    this.EmailSender.sendClaim(this.frm.value).subscribe({
      next: (res) => {
        console.log('ok');
      },
      error: (err) => {
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
        console.log(err);
      },
      complete: () => {
        this.status.statusCode = 0;
        this.status.message = '';
      },
    });
  }

  getAuthenticatedUser() {
    if (
      localStorage.getItem('visitor') &&
      localStorage.getItem('supervisor') == null
    ) {
      console.log('ok1');
      const visitor = localStorage.getItem('visitor');
      console.log('ok2');
      if (visitor) {
        console.log('ok3');
        const visitorData = JSON.parse(visitor);
        console.log('ok4');
        if (visitorData.visitor.role == 'COMPANY') {
          console.log('ok5');
          this.router.navigate(['./company-page/', visitorData.visitor.id]);
          console.log('ok6');
        } else if (visitorData.visitor.role == 'INTERN') {
          console.log('ok7');
          console.log(visitorData.visitor.id);
          console.log('./intern-page/', visitorData.visitor.id);
          this.router.navigate(['./intern-page/', visitorData.visitor.id]);
          console.log('ok8');
        }
      }
    } else if (
      localStorage.getItem('supervisor') &&
      localStorage.getItem('visitor') == null
    ) {
      const supervisor = localStorage.getItem('supervisor');
      if (supervisor) {
        const superviorData = JSON.parse(supervisor);
        this.router.navigate([
          './supervisor-page/',
          superviorData.supervisor.id,
        ]);
      }
    }
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      recipientEmail: ['', Validators.required],
      user_type: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
