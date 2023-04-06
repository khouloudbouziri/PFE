import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { validPattern } from 'src/app/helpers/patter-match.validor';
import { Visitor } from 'src/app/models/Visitor';
import { Status } from 'src/app/models/status';
import { CompanySignupServiceService } from 'src/app/services/Authentication/company-signup-service.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.css'],
})
export class AddSupervisorComponent {
  company: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private signupService: CompanySignupServiceService,
    private service: VisitorService,
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(service.getVisitorById(this.id));
  }

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    this.company = this.service.getVisitorById(this.id);
    this.signupService
      .supervisorRegister(this.frm.value, this.company)
      .subscribe({
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
