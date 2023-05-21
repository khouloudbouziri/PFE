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
  public offers: IntershipOffer[] = [];
  public candidacies: Candidacy[] = [];

  constructor(
    private IntershipOfferService: IntershipOfferService,
    private CandidacyService: CandidacyService
  ) {}

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

  public getAllCandidacies(): void {
    this.CandidacyService.getCvtheque().subscribe(
      (res: any) => {
        console.log(res);

        for (let i = 0; i < res.length; i++) {
          this.candidacies.push(res[i].candidacy);
        }
        console.log(this.candidacies);
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
        offer.type.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        offer.required_profile.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        offer.company.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        offer.technical_environement
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1 ||
        offer.address.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(offer);
      }
    }
    this.offers = results;
    if (results.length === 0 || !key) {
      this.getAllIntershipOffers();
    }
  }

  public searchCandidacy(key: string): void {
    console.log(key);
    const results: Candidacy[] = [];
    console.log(this.candidacies);
    for (const cand of this.candidacies) {
      if (
        cand.address.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        cand.skills.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        cand.university_department.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        cand.university.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        cand.level.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(cand);
      }
    }
    this.candidacies = results;
    if (results.length === 0 || !key) {
      this.getAllCandidacies();
    }
  }

  public sendSearchResults() {
    this.search.emit(this.offers);
    this.search.emit(this.candidacies);
  }

  ngOnInit() {
    this.getAllCandidacies();
  }
}
