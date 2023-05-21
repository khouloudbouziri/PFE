import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-modify-intership-offer',
  templateUrl: './modify-intership-offer.component.html',
  styleUrls: ['./modify-intership-offer.component.css'],
})
export class ModifyIntershipOfferComponent {
  showOfferModal: boolean = true;
  @Input() public offer: any;

  constructor(
    private fb: FormBuilder,
    public intershipOfferService: IntershipOfferService
  ) {}
  frm!: FormGroup;

  get f() {
    return this.frm.controls;
  }

  closeModal() {
    this.showOfferModal = false;
  }

  getIntershipOfferById() {
    this.intershipOfferService
      .getIntershipOfferById(this.offer.id)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  updateIntershipOffer() {
    this.intershipOfferService
      .updateIntershipOffer(this.offer.id_intership_offre, this.frm.value)
      .subscribe((res: any) => {});
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      topic: ['', Validators.required],
      type: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      duration: ['', Validators.required],
      required_work: ['', Validators.required],
      technical_environement: ['', Validators.required],
      required_profile: ['', Validators.required],
      interns_number: ['', Validators.required],
      working_from_home: ['', Validators.required],
      suprvisor: ['', Validators.required],
      renumerete: ['', Validators.required],
      candidacy_number: ['', Validators.required],
      saved: ['', Validators.required],
      creation_date: ['', Validators.required],
    });
  }
}
