import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { IntershipOfferService } from 'src/app/services/intership-offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent {
  constructor(
    private fb: FormBuilder,
    private intershipOfferService: IntershipOfferService
  ) {}

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  onPost() {
    console.log('ok2');
    this.status = { statusCode: 0, message: 'wait...' };
    console.log('ok3');
    this.intershipOfferService.addOffer(this.frm.value).subscribe({
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
    this.frm = this.fb.group({
      topic: ['', Validators.required],
      company: ['', Validators.required],
      type: ['', Validators.required],
      //working_from_home: ['', Validators.required],
      address: ['', Validators.required],
      duration: ['', Validators.required],
      supervisor: ['', Validators.required],
      interns_number: ['', Validators.required],
      required_work: ['', Validators.required],
      technical_environement: ['', Validators.required],
      required_profile: ['', Validators.required],
      //renumerete: ['', Validators.required],
    });
  }
}
