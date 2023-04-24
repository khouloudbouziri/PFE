import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntershipOfferService } from '../../services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  offer: any = {};
  id_intership_offre: any;
  user: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: IntershipOfferService
  ) {
    this.id_intership_offre = this.route.snapshot.paramMap.get('id');
    console.log(this.id_intership_offre);
  }

  ngOnInit() {
    this.getIntershipOfferById();
    this.getAuthenticatedUser();
  }

  getAuthenticatedUser() {
    if (localStorage.getItem('token')) {
      this.user = true;
    }
    if (localStorage.getItem('visitor')) {
      const visitor = localStorage.getItem('visitor');
      if (visitor) {
        const visitorData = JSON.parse(visitor);
        console.log(visitorData.visitor.id);
      }
    }
  }

  getIntershipOfferById() {
    this.service
      .getIntershipOfferById(this.id_intership_offre)
      .subscribe((res) => {
        this.offer = res;
      });
  }
}
