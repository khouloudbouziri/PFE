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
  showfere8: boolean = true;

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
  // abi(offerId: number){
  // this.isIconClicked = true;
  // this.showfere8 = false;
  // console.log("Id de l'offre de stage :", offerId);
  
  // }
  abi(offer: any) {
    offer.isButtonClicked = !offer.isButtonClicked; // Inversez la valeur de isButtonClicked pour l'objet offer
   offer.showfere8 = !offer.showfere8;
  }
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
g(){
  this.intershipOffers.forEach((offer: any) => {
    offer.isButtonClicked = false; // Ajoutez la propriété isButtonClicked à chaque objet intershipOffer
  });
  this.getAuthenticatedUser();
}
  ngOnInit() {
    this.g();
  }
}
