import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';
import { SupervisorService } from 'src/app/services/Supervisor/supervisor.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  id: any;
  intershipOffers: any = [];
  user: any;
  isSupervisor: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private intershipService: IntershipOfferService,
    private supervisorService: SupervisorService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  findSupervisorById() {
    this.supervisorService.findSupervisorById(this.id).subscribe((res: any) => {
      this.user = res;
      this.isSupervisor = true;
      console.log(this.user);
    });
  }

  getCompanyIntershipOffers() {
    this.intershipService
      .getCompanyIntershipOffers(this.id)
      .subscribe((res: any) => {
        this.intershipOffers = res;
      });
  }

  getIntershipOffers() {
    this.intershipService.getIntershipOffers(this.id).subscribe((res: any) => {
      this.intershipOffers = res;
    });
  }

  ngOnInit(): void {
    this.findSupervisorById();
    this.getCompanyIntershipOffers();
    this.getIntershipOffers();
  }
}
