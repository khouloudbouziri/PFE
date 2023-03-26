import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  recipientEmail!: string;
  subject!: string;
  message!: string;
  private baseUrl = environment.baseUrl;


  constructor(
    
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http:HttpClient
  ) { }
  frm!: FormGroup;
  status!: Status;
  

  get f() {
    return this.frm.controls;
  }
  onSubmit(){
    const emailData = {
      recipientEmail: this.recipientEmail,
      subject: this.subject,
      message: this.message
    };

    this.http.post( this.baseUrl +'/auth/send-email', emailData).subscribe(() => {
      alert('Email sent successfully!');
    }, () => {
      alert('Error sending email. Please try again later.');
    });
    
  }
 
  
  ngOnInit(): void {
    this.frm = this.fb.group({
     // firstname: ['', Validators.required],
     // lastname: ['', Validators.required],
      recipientEmail: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
      
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}

