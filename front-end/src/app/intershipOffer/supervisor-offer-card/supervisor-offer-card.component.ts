import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-supervisor-offer-card',
  templateUrl: './supervisor-offer-card.component.html',
  styleUrls: ['./supervisor-offer-card.component.css'],
})
export class SupervisorOfferCardComponent {
  id: any;
  idOffer: any;
  showOfferDetails = true;
  showModifyOffer = false;
  @Input() public SupervisorIntershipOffers: any;
  @Output() public selectedOffer = new EventEmitter<{
    idOffer: number;
    showOfferDetails: boolean;
  }>();

  @Output() public deletedItem = new EventEmitter<any>();

  constructor(
    private intershipOfferService: IntershipOfferService,
    private router: Router
  ) {}

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

  deleteIntershipOffer(intershipOfferId: number) {
    this.intershipOfferService
      .deleteIntershipById(intershipOfferId)
      .subscribe((res: any) => {
        console.log(res);
        this.deletedItem.emit(true);
      });
  }

  SelectOffer(): void {
    const idOffer = this.idOffer;
    this.intershipOfferService.setSelectedOffer(idOffer);
  }
}
