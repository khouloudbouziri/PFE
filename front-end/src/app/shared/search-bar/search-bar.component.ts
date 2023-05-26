import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Candidacy } from 'src/app/models/Candidacy';
import { IntershipOffer } from 'src/app/models/IntershipOffer';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() public search = new EventEmitter();
  public offers: any = [];

  constructor(private IntershipOfferService: IntershipOfferService) {}

  public getAllIntershipOffers(): void {
    this.IntershipOfferService.getAllIntershipOffers().subscribe(
      (res: any) => {
        this.offers = res;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchIntershipOffer(key: string): void {
    console.log(key);
    const results: IntershipOffer[] = [];
    console.log(this.offers);
    for (const offer of this.offers) {
      if (
        offer.intershipOffre.type.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        offer.intershipOffre.required_profile
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1 ||
        offer.intershipOffre.company
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1 ||
        offer.intershipOffre.technical_environement
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1 ||
        offer.intershipOffre.address
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(offer);
      }
    }
    this.offers = results;
    if (results.length === 0 || !key) {
      this.getAllIntershipOffers();
    }
  }

  public sendSearchResults() {
    this.search.emit(this.offers);
  }

  ngOnInit() {}
}
