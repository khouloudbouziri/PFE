import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  id: any;
  intershipOffers: any = [];

  constructor(
    private route: ActivatedRoute,
    private intershipService: IntershipOfferService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getCompanyIntershipOffers() {
    this.intershipService
      .getCompanyIntershipOffers(this.id)
      .subscribe((res: any) => {
        this.intershipOffers = res;
      });
  }

  ngOnInit(): void {
    this.getCompanyIntershipOffers();
  }
}
