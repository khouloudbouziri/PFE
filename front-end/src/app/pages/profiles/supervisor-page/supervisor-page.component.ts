import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AuthService } from 'src/app/services/Authentication/auth.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-supervisor-page',
  templateUrl: './supervisor-page.component.html',
  styleUrls: ['./supervisor-page.component.css'],
})
export class SupervisorPageComponent {
  id: any;
  public SupervisorIntershipOffers: any = [];
  showContent0 = true;
  showContent1 = false;
  showContent2 = false;
  afficherDetailsAnnonce = false;

  public onSelectedOffer(event: {
    idOffer: number;
    showOfferDetails: boolean;
  }): void {
    console.log('Selected offer ID:', event.idOffer);
    console.log('Show offer details:', event.showOfferDetails);
    this.afficherDetailsAnnonce = event.showOfferDetails;
    this.showContent0 = false;
    this.showContent1 = false;
    this.showContent2 = false;
  }

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private intershipService: IntershipOfferService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getSupervisorIntershipOffers() {
    this.intershipService.getIntershipOffers(this.id).subscribe((res: any) => {
      this.SupervisorIntershipOffers = res;
    });
  }

  ngOnInit() {}
}
