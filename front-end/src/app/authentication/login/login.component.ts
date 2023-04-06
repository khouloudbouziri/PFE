import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { Status } from 'src/app/models/status';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { SignupService } from 'src/app/services/Authentication/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    this.signupService.login(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.authService.authenticateUser(res).subscribe({
          next: (data) => {
            if (res.supervisor) {
              this.router.navigate(['./supervisor-page']);
            } else if (res.visitor) {
              if (res.visitor.company_name) {
                this.router.navigate(['./company-page']);
              } else {
                this.router.navigate(['./home']);
              }
            }
          },
        });
      },
      error: (err) => {
        console.log(err);
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
      },
    });
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /*  var signupBtn = document.querySelector(".signBtn");
var loginBtn = document.querySelector(".loginBtn");
var moveBtn = document.querySelector(".moveBtn");

  loginBtn?.addEventListener("click",()=>{
    moveBtn?.classList.add("rightBtn");
  })
  signupBtn?.addEventListener("click",()=>{
    moveBtn?.classList.add("rightBtn");
  })*/
}