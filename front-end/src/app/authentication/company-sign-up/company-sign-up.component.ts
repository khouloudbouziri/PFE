import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { CompanySignupServiceService } from 'src/app/services/Authentication/company-signup-service.service';

import { validPattern } from 'src/app/helpers/patter-match.validor';
import { MustMatch } from 'src/app/helpers/must-match.validator';
@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.css'],
})
export class CompanySignUpComponent {
  constructor(
    private signupService: CompanySignupServiceService,

    private fb: FormBuilder
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
    const patternRegex = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$'
    );
    const patternMail = new RegExp('^(.+)@(.+)$');
    this.frm = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, validPattern(patternMail)]],
        password: ['', [Validators.required, validPattern(patternRegex)]],
        Confirmpassword: ['', Validators.required],
        size: ['', Validators.required],
        adress: ['', Validators.required],
        phone_number: ['', Validators.required],
        company_name: ['', Validators.required],
        tax_registration_number: ['', Validators.required],
        sector: ['', Validators.required],
        domain: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'Confirmpassword'),
      }
    );
  }
}
