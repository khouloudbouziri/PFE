import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent {
  public offer: any = {};
  id_intership_offre: any;
  public user: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: IntershipOfferService
  ) {
    this.id_intership_offre = this.route.snapshot.paramMap.get('id');
  }

  getIntershipOfferById() {
    this.service
      .getIntershipOfferById(this.id_intership_offre)
      .subscribe((res) => {
        this.offer = res;
      });
  }

  getAuthenticatedUser() {
    if (localStorage.getItem('visitor')) {
      const visitor = localStorage.getItem('visitor');
      if (visitor) {
        const visitorData = JSON.parse(visitor);
        this.user = visitorData.visitor.id;
      }
    }
  }

  ngOnInit(): void {
    this.getAuthenticatedUser();
    this.getIntershipOfferById();
  }
}
