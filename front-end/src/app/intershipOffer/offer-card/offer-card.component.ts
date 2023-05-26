import { Component, Input } from '@angular/core';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  @Input() public intershipOffers: any;
  @Input() public forDetail: boolean = false;

  allIntershipOffers: any = [];
  favoriteOffers: any = [];
  idIntern: any;
  showFavoriteOffer: boolean = false;
  isIconClicked: boolean = false;

  constructor(private intershipOfferService: IntershipOfferService) {}

  // getAuthenticatedUser() {
  //   if (localStorage.getItem('visitor')) {
  //     const visitor = localStorage.getItem('visitor');
  //     if (visitor) {
  //       const visitorData = JSON.parse(visitor);
  //       this.idIntern = visitorData.visitor.id;
  //       this.favoriteOffers = visitorData.visitor.favoriteOffers;
  //     }
  //     this.intershipOfferService
  //       .getAllIntershipOffers()
  //       .subscribe((res: any) => {
  //         this.allIntershipOffers = res.intershipOffre.id_intership_offre;
  //         console.log(this.allIntershipOffers);
  //         this.allIntershipOffers = res;
  //         for (let i = 0; i < this.allIntershipOffers.length; i++) {
  //           for (let j = 0; j < this.favoriteOffers.length; j++) {
  //             if (this.allIntershipOffers[i] == this.favoriteOffers[j]) {
  //               console.log('mrigil');
  //             }
  //           }
  //         }
  //       });
  //   }
  // }

  getAuthenticatedUser() {
    if (localStorage.getItem('visitor')) {
      const visitor = localStorage.getItem('visitor');
      if (visitor) {
        const visitorData = JSON.parse(visitor);
        this.idIntern = visitorData.visitor.id;
        this.favoriteOffers = visitorData.visitor.favoriteOffers;
      }
      this.intershipOfferService
        .getAllIntershipOffers()
        .subscribe((res: any) => {
          this.allIntershipOffers = res;
          // for (let i = 0; i < this.allIntershipOffers.length; i++) {
          //   const offer = this.allIntershipOffers[i];
          //   const offerId = offer.id_intership_offre;
          //   if (this.favoriteOffers.includes(offerId)) {
          //     offer.displayMessage = 'Ceci est une offre favorite';
          //   }
          // }
        });
    }
  }

  isOfferFavorite(offerId: number): boolean {
    if (this.favoriteOffers) return this.favoriteOffers.includes(offerId);

    return false;
  }

  onIconClick() {
    this.isIconClicked = !this.isIconClicked;
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

  ngOnInit() {
    this.getAuthenticatedUser();
  }
}
