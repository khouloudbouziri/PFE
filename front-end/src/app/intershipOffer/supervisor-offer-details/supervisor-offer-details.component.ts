import { Component, EventEmitter, Output } from '@angular/core';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-supervisor-offer-details',
  templateUrl: './supervisor-offer-details.component.html',
  styleUrls: ['./supervisor-offer-details.component.css'],
})
export class SupervisorOfferDetailsComponent {
  idOffer: any;
  offer: any = {};
  offerInf: any = {};
  candidacies: any = [];
  candidacy: any;
  showEventModal: boolean = false;
  @Output() selectedCandidacy = new EventEmitter();

  constructor(
    private intershipOfferService: IntershipOfferService,
    private candidacyService: CandidacyService
  ) {
    const idOffer = this.intershipOfferService.getSelectedOffer();
    this.idOffer = idOffer;
  }

  getIntershipOfferById() {
    this.intershipOfferService
      .getIntershipOfferById(this.idOffer)
      .subscribe((res: any) => {
        this.offer = res;
        this.offerInf = res.intershipOffre;
        console.log(this.offer);
        console.log(this.offerInf);
      });
  }

  getIntershipOfferCandidacies() {
    this.candidacies = [];
    this.candidacyService
      .getIntershipOfferCandidacies(this.idOffer)
      .subscribe((res: any) => {
        console.log('response is', res);
        this.candidacies = res;
      });
  }

  deleteIntershipOffer() {
    this.intershipOfferService
      .deleteIntershipById(this.idOffer)
      .subscribe((res: any) => {
        console.log('deleted');
      });
  }

  public onSelectedCandidacy(event: {
    idCandidacy: number;
    showCandidacy: boolean;
  }): void {
    console.log('Selected candidacy id:', event.idCandidacy);
    console.log('Show candidacy details:', event.showCandidacy);
    this.candidacy = event;
    console.log(this.candidacy);
  }

  public eventChild() {
    this.selectedCandidacy.emit(this.candidacy);
  }

  ngOnInit() {
    this.getIntershipOfferById();
    this.getIntershipOfferCandidacies();
  }
}
