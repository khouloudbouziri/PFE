import { Component, OnInit } from '@angular/core';
import { IntershipOffer } from '../../models/IntershipOffer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IntershipOfferService } from '../../services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-offer-details',

  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
})
export class OfferDetailsComponent implements OnInit {
  offers: IntershipOffer[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: IntershipOfferService
  ) {}

  getAllIntershipOffers() {
    this.service.getAllIntershipOffers().subscribe((res: any) => {
      this.offers = res;
    });
  }

  ngOnInit() {
    this.getAllIntershipOffers();
  }

  candidater(id_intership_offre: bigint) {
    this.router.navigate(['/description', id_intership_offre]);
  }
}
