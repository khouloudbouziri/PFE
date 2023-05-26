import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Candidacy } from '../models/Candidacy';
import { CandidacyService } from '../services/Candidacy/candidacy.service';
import { StepperService } from '../services/stepper/stepper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  Accepted!: boolean;
  Validated = false;
  candidacy!: Candidacy;
  isPopupVisible = false;
  idIntern: any;
  internValidated = false;
  @Input() public idCandidacy: any;
  @Input() public mettings: any;
  @Input() public internMeetings: any;

  constructor(
    private _formBuilder: FormBuilder,
    public candidacyService: CandidacyService,
    private route: ActivatedRoute
  ) {
    this.idIntern = this.route.snapshot.paramMap.get('id');
    console.log(this.idIntern);
  }

  IsSelected() {
    console.log(this.idCandidacy);
    this.candidacyService
      .changeCandidacyState(this.idCandidacy)
      .subscribe((res: any) => {
        console.log(res);
      });

    this.Accepted = true;
  }

  validateCandidacy() {
    this.candidacyService
      .validateCandidacy(this.idCandidacy)
      .subscribe((res: any) => {
        console.log(res);
        this.Validated = true;
      });
  }

  getInternValidatedCandidacy() {
    this.candidacyService
      .getInternValidatedCandidacy(this.idIntern)
      .subscribe((res: any) => {
        this.internValidated = res;
        console.log('validatedc', res);
      });
  }

  closePopup() {
    this.isPopupVisible = false;
  }
  openPopUp() {
    this.isPopupVisible = true;
  }

  ngOnInit() {
    console.log(this.mettings);
  }
}
