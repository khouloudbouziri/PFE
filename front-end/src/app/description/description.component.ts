import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntershipOfferService } from '../services/intership-offer.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  offer: any = {};
  id_intership_offre: any;

  constructor(
    private route: ActivatedRoute,
    private service: IntershipOfferService
  ) {
    this.id_intership_offre = this.route.snapshot.paramMap.get('id');
    console.log(this.id_intership_offre);
  }

  ngOnInit() {
    this.getIntershipOfferById();
  }

  getIntershipOfferById() {
    console.log('okkkk');
    this.service
      .getIntershipOfferById(this.id_intership_offre)
      .subscribe((res) => {
        this.offer = res;
      });
    console.log('okkkkkk4');
  }
}
