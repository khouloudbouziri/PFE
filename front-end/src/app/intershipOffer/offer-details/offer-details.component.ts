import { Component, OnInit } from '@angular/core';
import { IntershipOffer } from '../../models/IntershipOffer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IntershipOfferService } from '../../services/IntershipOffer/intership-offer.service';
import { isIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-offer-details',

  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
})
export class OfferDetailsComponent implements OnInit {
  public intershipOffers: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: IntershipOfferService
  ) {}
  internId: any = localStorage.getItem('favoriteOffers');
  getAllIntershipOffers() {
    this.service.getAllIntershipOffers().subscribe((res: any) => {
      this.intershipOffers = res;
      console.log(res)
    });
  }

  test() {
    const token = localStorage.getItem('token');
    console.log(token);
  }

  ngOnInit() {
    console.log(this.internId)
    this.test();
    this.getAllIntershipOffers();
  }

  candidater(id_intership_offre: bigint) {
    this.router.navigate(['/description', id_intership_offre]);
  }
  Fav(){
    
  }
 
}
