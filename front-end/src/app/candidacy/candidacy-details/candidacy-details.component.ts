import { Component } from '@angular/core';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';

@Component({
  selector: 'app-candidacy-details',
  templateUrl: './candidacy-details.component.html',
  styleUrls: ['./candidacy-details.component.css'],
})
export class CandidacyDetailsComponent {
  idCandidacy: any;
  candidacy: any = {};

  constructor(private candidacyService: CandidacyService) {
    this.idCandidacy = this.candidacyService.getSelectedCandidacy();
    console.log(this.idCandidacy);
  }

  getCandidacyById() {
    this.candidacyService.getById(this.idCandidacy).subscribe((res: any) => {
      this.candidacy = res;
      console.log(this.candidacy);
    });
  }

  ngOnInit() {
    this.getCandidacyById();
  }
}
