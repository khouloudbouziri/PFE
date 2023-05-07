import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from 'src/app/services/Agenda/agenda.service';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.css'],
})
export class InternPageComponent {
  id: any;

  public intershipOffers: any = [];
  showContent0 = true;
  showContent1 = false;
  showContent2 = false;

  constructor(
    public authService: AuthService,
    public candidacyService: CandidacyService,
    public intershipOfferService: IntershipOfferService,
    public agendaService: AgendaService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getInternCandidacy() {
    this.candidacyService.getInternCandidacy(this.id).subscribe((res: any) => {
      this.intershipOffers = res;
      console.log(this.intershipOffers);
    });
  }

  getInternFavoriteOffers() {
    this.intershipOfferService
      .getInternFavoriteOffers(this.id)
      .subscribe((res: any) => {
        this.intershipOffers = res;
      });
  }

 

  
}
