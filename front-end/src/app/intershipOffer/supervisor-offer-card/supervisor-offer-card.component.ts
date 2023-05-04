import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-supervisor-offer-card',
  templateUrl: './supervisor-offer-card.component.html',
  styleUrls: ['./supervisor-offer-card.component.css'],
})
export class SupervisorOfferCardComponent {
  idOffer: any;
  showOfferDetails = true;
  @Input() public SupervisorIntershipOffers: any;
  @Output() public selectedOffer = new EventEmitter<{
    idOffer: number;
    showOfferDetails: boolean;
  }>();

  constructor(private intershipOfferService: IntershipOfferService) {}

  getOffer(id: number) {
    this.idOffer = id;
    console.log(this.idOffer);
  }

  public eventChild(idOffer: number, showOfferDetails: boolean) {
    idOffer = this.idOffer;
    showOfferDetails = this.showOfferDetails;
    this.selectedOffer.emit({
      idOffer: idOffer,
      showOfferDetails: showOfferDetails,
    });
  }

  SelectOffer(): void {
    const idOffer = this.idOffer;
    this.intershipOfferService.setSelectedOffer(idOffer);
  }
}
