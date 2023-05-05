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
  candidacies: any = [];
  candidacy: any;
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
      });
  }

  getIntershipOfferCandidacies() {
    this.candidacyService
      .getIntershipOfferCandidacies(this.idOffer)
      .subscribe((res: any) => {
        this.candidacies = res;
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
