import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidacyService } from '../services/Candidacy/candidacy.service';

@Component({
  selector: 'app-cv-description',
  templateUrl: './cv-description.component.html',
  styleUrls: ['./cv-description.component.css'],
})
export class CvDescriptionComponent {
  idCandidacy: any;
  candidacy: any;
  candidacies: any = [];
  @Input() intershipOffers = [];
  constructor(
    private route: ActivatedRoute,
    private candidacyService: CandidacyService
  ) {
    this.idCandidacy = this.route.snapshot.paramMap.get('id');
    console.log(this.idCandidacy);
  }

  getCandidacyById() {
    this.candidacyService.getById(this.idCandidacy).subscribe((res: any) => {
      this.candidacy = res;
      console.log(this.candidacy);
      this.getInternCandidacies();
    });
  }

  decode(byte: any): any {
    if (byte) return 'data:image/jpg;base64,' + byte;
  }

  getInternCandidacies() {
    this.candidacyService
      .getInternCandidacy(this.candidacy.candidacy.idIntern)
      .subscribe((res: any) => {
        this.candidacies = res;
        console.log(this.candidacies);
      });
  }

  ngOnInit() {
    this.getCandidacyById();
  }
}
