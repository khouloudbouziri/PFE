import { Component, OnInit } from '@angular/core';
import { IntershipOffer } from '../models/IntershipOffer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-details',
  
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  offres: IntershipOffer[] =[];
  constructor(private http: HttpClient,private router:Router) {
  }
  ngOnInit() {
    this.http.get<IntershipOffer[]>('http://localhost:3333/api/v1/auth/intership/all').subscribe(
      data => this.offres = data,
      error => console.error(error)
    );
  }

  candidater(id_intership_offre: bigint) {
    this.router.navigate(['/description', id_intership_offre]);
  }
}
