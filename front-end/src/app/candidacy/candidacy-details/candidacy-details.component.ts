import { Component } from '@angular/core';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';

@Component({
  selector: 'app-candidacy-details',
  templateUrl: './candidacy-details.component.html',
  styleUrls: ['./candidacy-details.component.css'],
})
export class CandidacyDetailsComponent {
  idCandidacy: any;
  intern: any;
  idIntern: any;
  candidacy: any = {};
  intershipOffers: any = [];
  isRed = true;
  showInternDeails = true;
  showInternFollowUp = false;
  
 
  constructor(
    private candidacyService: CandidacyService,
    private visitorService: VisitorService
  ) {
    this.idCandidacy = this.candidacyService.getSelectedCandidacy();
    console.log(this.idCandidacy);
  }

  toggleColor() {
    this.isRed = !this.isRed;
  }

  getCandidacyById() {
    this.candidacyService.getById(this.idCandidacy).subscribe((res: any) => {
      this.candidacy = res;
      this.visitorService
        .getVisitorById(res.idIntern)
        .subscribe((intern: any) => {
          this.intern = intern;
          console.log(this.intern);
          this.idIntern=intern.id;
          this.candidacyService
            .getInternCandidacy(intern.id)
            .subscribe((candidacy: any) => {
              this.intershipOffers = candidacy;
            });
        });
    });
  }

  ngOnInit() {
    this.getCandidacyById();
  }
}
