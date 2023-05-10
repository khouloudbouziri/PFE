import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';


@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent {

 
  constructor(
    private fb: FormBuilder,
    private candidacyService: CandidacyService,
   
  ) {
    
  }

  frm!: FormGroup;
  status!: Status;

 

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
        },
        complete: () => {
          this.status.statusCode = 0;
          this.status.message = '';
        },
      });
    
  }

  ngOnInit() {
  
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
  
}
