import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { Status } from 'src/app/models/status';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { SignupService } from 'src/app/services/Authentication/signup.service';

@Component({
  selector: 'app-login-supervisor',
  templateUrl: './login-supervisor.component.html',
  styleUrls: ['./login-supervisor.component.css'],
})
export class LoginSupervisorComponent implements OnInit {
  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    this.signupService.login(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.authService.authenticateUser(res).subscribe({
          next: (data) => {
            if (res.supervisor) {
              this.router.navigate(['./supervisor-page', res.supervisor.id]);
            } else if (res.visitor) {
              if (res.visitor.company_name) {
                this.router.navigate(['./company-page', res.visitor.id]);
              } else {
                this.router.navigate(['./intern-page', res.visitor.id]);
              }
            }
          },
        });
      },
      error: (err) => {
        console.log(err);
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
        this.openSnackBar('Vérifier vos données', 'Fermer');
      },
    });
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
