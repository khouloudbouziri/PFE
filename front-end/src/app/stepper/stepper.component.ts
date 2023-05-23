import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Candidacy } from '../models/Candidacy';
import { CandidacyService } from '../services/Candidacy/candidacy.service';

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
  candidacy!: Candidacy;
  isPopupVisible = false;
  @Input() public idCandidacy: any;
  @Input() public mettings: any;
  @Input() public internMeetings: any;

  constructor(
    private _formBuilder: FormBuilder,
    public candidacyService: CandidacyService
  ) {}

  IsSelected() {
    console.log(this.idCandidacy);
    this.candidacyService
      .changeCandidacyState(this.idCandidacy)
      .subscribe((res: any) => {
        console.log(res);
      });

    this.Accepted = true;
    
  }
  
  
  closePopup() {
    this.isPopupVisible = false;
  }
  openPopUp(){
    this.isPopupVisible = true;
  }

  ngOnInit() {
    console.log(this.mettings);
  }
}
