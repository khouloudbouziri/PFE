import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.css'],
})
export class InternPageComponent {
  id: any;
  public intershipOffers: any = [];
  showContent1 = false;

  constructor(
    public authService: AuthService,
    public candidacyService: CandidacyService,
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

  ngOnInit(): void {}
}
