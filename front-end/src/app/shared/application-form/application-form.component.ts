import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';
import { TextSimilarityServiceService } from 'src/app/services/text-similarity-service.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent {
  @Input() public offer: any;
  @Input() public user: any;
  intern: any;
  constructor(
    private fb: FormBuilder,
    private candidacyService: CandidacyService,
    private textSimilarityService: TextSimilarityServiceService,
    private visitorService: VisitorService
  ) {
    this.intern = {};
  }

  frm!: FormGroup;
  status!: Status;

  getInternById() {
    this.visitorService.getVisitorById(this.user).subscribe((res: any) => {
      this.intern = res;
    });
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    if (this.offer) {
      this.candidacyService
        .addCandidacy(this.frm.value, this.offer.id_intership_offre, this.user)
        .subscribe({
          next: (res) => {
            this.status = res;
            this.candidacyService
              .getById(res.idCandidacy)
              .subscribe((candidacy) => {
                this.textSimilarityService
                  .cosineSimilarity(
                    this.offer.id_intership_offre,
                    res.idCandidacy
                  )
                  .subscribe((score) => {});
              });

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
    } else {
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
  }

  ngOnInit() {
    if (this.offer) {
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
        idIntern: [this.user, Validators.required],
        id_intershipOffer: [this.offer.id_intership_offre, Validators.required],
      });
    } else {
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
}
