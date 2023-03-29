import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Status } from 'src/app/models/status';
import { validPattern } from 'src/app/helpers/patter-match.validor';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    this.signupService.signup(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.status = res;
        this.frm.reset();
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
  ngOnInit(): void {
    const patternRegex= new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$'); 
    const patternMail= new RegExp('^(.+)@(.+)$');
    
    this.frm = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['',[ Validators.required,validPattern(patternMail)]],
      'password': ['',[ Validators.required,validPattern(patternRegex)]],
      'Confirmpassword': ['', Validators.required],
      'university': ['', Validators.required],
      'universityDepartement': ['', Validators.required],
    },{
      validator:MustMatch('password','Confirmpassword')
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
