import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Status } from 'src/app/models/status';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent {
  intern: any = {};
  constructor(
    private fb: FormBuilder,
    private candidacyService: CandidacyService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  getAuthenticatedUser() {
    if (localStorage.getItem('visitor')) {
      const visitor = localStorage.getItem('visitor');
      if (visitor) {
        const visitorData = JSON.parse(visitor);
        this.intern = visitorData.visitor;
        console.log(this.intern);
      }
    }
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };

    this.candidacyService.spontaneousCandidacy(this.frm.value).subscribe({
      next: (res) => {
        this.status = res;
        this.frm.reset();
      },
      error: (err) => {
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
        this.openSnackBar('Veuilez vérifier vos données', 'Fermer');
      },
      complete: () => {
        this.status.statusCode = 0;
        this.status.message = '';
      },
    });
  }

  ngOnInit() {
    this.getAuthenticatedUser();
    this.frm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      address: ['', Validators.required],
      address_code: ['', Validators.required],
      university: ['', Validators.required],
      mention: ['', Validators.required],
      university_department: ['', Validators.required],
      level: ['', Validators.required],
      skills: ['', Validators.required],
      did_intership: ['', Validators.required],
      linkedIn_url: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
