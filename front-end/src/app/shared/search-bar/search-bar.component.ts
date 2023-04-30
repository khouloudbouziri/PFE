import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntershipOffer } from 'src/app/models/IntershipOffer';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() public search = new EventEmitter();
  public offers: IntershipOffer[] = [];

  constructor(private IntershipOfferService: IntershipOfferService) { }

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

  public searchIntershipOffer(key: string, key2: string): void {
    console.log(key);
    console.log(key2);
    const results: IntershipOffer[] = [];
    console.log(this.offers);
    for (const offer of this.offers) {
      if (
        offer.type.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        offer.supervisor.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        offer.technical_environement
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1 ||
        offer.address.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        offer.company.toLowerCase().indexOf(key2.toLowerCase()) !== -1
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

  ngOnInit() {
    this.getAllIntershipOffers();
  }
}
