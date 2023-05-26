import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from 'src/app/services/Agenda/agenda.service';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';
import { StepperService } from 'src/app/services/stepper/stepper.service';

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.css'],
})
export class InternPageComponent {
  id: any;
  internMeetings: any = [];
  public intershipOffers: any = [];
  showContent0 = true;
  showContent1 = false;
  showContent2 = false;
  showContent3 = false;

  constructor(
    public authService: AuthService,
    public candidacyService: CandidacyService,
    public intershipOfferService: IntershipOfferService,
    public agendaService: AgendaService,
    public stepperService: StepperService,
    private route: ActivatedRoute,
    private router: Router
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

  getInterEvents() {
    this.stepperService.getInterEvents(this.id).subscribe((res: any) => {
      this.internMeetings = res;
      console.log(this.internMeetings);
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigate(['./login']);
      },
    });
  }
}
