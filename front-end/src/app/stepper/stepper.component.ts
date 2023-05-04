import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Candidacy } from '../models/Candidacy';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
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
  candidacy!:Candidacy;
  
    constructor(private _formBuilder: FormBuilder) {}
    IsSelected(){
      this.Accepted=true;
      this.candidacy.status="Accepted";
    }
  }

