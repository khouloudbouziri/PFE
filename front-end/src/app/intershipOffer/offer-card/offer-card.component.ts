import { Component, Input } from '@angular/core';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  @Input() public intershipOffers: any;
  idIntern: any;

  constructor(private intershipOfferService: IntershipOfferService) {}

  getAuthenticatedUser() {
    if (localStorage.getItem('visitor')) {
      const visitor = localStorage.getItem('visitor');
      if (visitor) {
        const visitorData = JSON.parse(visitor);
        this.idIntern = visitorData.visitor.id;
      }
    }
  }

  addToFavorites(idIntershipOffer: number) {
    this.getAuthenticatedUser();
    this.intershipOfferService
      .addFavoriteOffer(this.idIntern, idIntershipOffer)
      .subscribe((res: any) => {
        console.log(res);
        console.log('okkk');
      });
  }

  ngOnInit(): void {}
}
