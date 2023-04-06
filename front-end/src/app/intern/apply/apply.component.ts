import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent {
  offer: any = {};
  id_intership_offre: any;

  constructor(
    private route: ActivatedRoute,
    private service: IntershipOfferService
  ) {
    this.id_intership_offre = this.route.snapshot.paramMap.get('id');
    console.log(this.id_intership_offre);
  }

  ngOnInit() {
    this.getIntershipOfferById();
  }

  getIntershipOfferById() {
    this.service
      .getIntershipOfferById(this.id_intership_offre)
      .subscribe((res) => {
        this.offer = res;
      });
  }
}
