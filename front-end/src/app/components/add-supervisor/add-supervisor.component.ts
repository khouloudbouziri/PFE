import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validPattern } from 'src/app/helpers/patter-match.validor';
import { Status } from 'src/app/models/status';
import { CompanySignupServiceService } from 'src/app/services/company-signup-service.service';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.css'],
})
export class AddSupervisorComponent {
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
    this.signupService.supervisorRegister(this.frm.value).subscribe({
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
    this.frm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, validPattern(patternMail)]],
      password: ['', [Validators.required, validPattern(patternRegex)]],
      phone_number: ['', Validators.required],
    });
  }
}
