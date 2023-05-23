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
    console.log(idIntershipOffer);
    this.getAuthenticatedUser();
    this.intershipOfferService
      .addFavoriteOffer(this.idIntern, idIntershipOffer)
      .subscribe((res: any) => {
        console.log(res);
        console.log('okkk');
      });
  }

  decode(byte: any): any {
    if (byte) return 'data:image/jpg;base64,' + byte;
  }

  // bouton = document.getElementById('btn');
  // icone = document.getElementById('icon');

  // bouton.addEventListener('click', function() {
  //   icone.classList.toggle('colore');
  // });

  ngOnInit(): void {}
}
