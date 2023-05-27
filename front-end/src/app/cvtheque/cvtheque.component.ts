import { Component } from '@angular/core';
import { CandidacyService } from '../services/Candidacy/candidacy.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cvtheque',
  templateUrl: './cvtheque.component.html',
  styleUrls: ['./cvtheque.component.css']
})
export class CVthequeComponent {
  public candidacies: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: CandidacyService
  ) {}

  getAllIntershipOffers() {
    this.service.getAllDest().subscribe((res: any) => {
      this.candidacies = res;
    });
  }

  ngOnInit() {
   
    this.getAllIntershipOffers();
  }

  

}
