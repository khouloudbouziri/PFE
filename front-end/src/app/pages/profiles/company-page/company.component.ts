import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  id: any;
  showContent0 = true;
  showContent1 = false;
  showContent2 = false;
  showContent3 = false;
  supervisors: any = [];
  public intershipOffers: any = [];

  constructor(
    public authService: AuthService,
    public intershipService: IntershipOfferService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onClick() {
    this.showContent0;
  }

  getCompanyIntershipOffers() {
    this.intershipService
      .getCompanyIntershipOffers(this.id)
      .subscribe((res: any) => {
        this.intershipOffers = res;
        console.log(this.intershipOffers);
      });
  }

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigate(['./login']);
      },
    });
  }

  ngOnInit(): void {}
}
