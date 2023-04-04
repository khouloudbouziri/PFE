import { Component } from '@angular/core';
import { IntershipOffer } from '../models/IntershipOffer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  offre!: IntershipOffer;
  constructor(private http: HttpClient,private router:Router) {
  }
  ngOnInit() {
    this.http.get<IntershipOffer>('http://localhost:3333/api/v1/auth/intership/find/8 }}').subscribe(
      data => this.offre = data,
      error => console.error(error)
    );
  }

  
}
