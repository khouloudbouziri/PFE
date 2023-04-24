import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-supervisor-page',
  templateUrl: './supervisor-page.component.html',
  styleUrls: ['./supervisor-page.component.css'],
})
export class SupervisorPageComponent {
  id: any;
  public intershipOffers: any = [];
  showContent1 = false;
  showContent2 = false;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private intershipService: IntershipOfferService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getSupervisorIntershipOffers() {
    this.intershipService.getIntershipOffers(this.id).subscribe((res: any) => {
      this.intershipOffers = res;
      console.log(this.intershipOffers);
    });
  }

  ngOnInit() {}
}
