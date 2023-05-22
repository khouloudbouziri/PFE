import { Component } from '@angular/core';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';
import { StepperService } from 'src/app/services/stepper/stepper.service';

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
  mettings: any = [];
  intershipOffers: any = [];
  isRed = true;
  showInternDeails = true;
  showInternFollowUp = false;
  intermImg: any;

  constructor(
    private candidacyService: CandidacyService,
    private visitorService: VisitorService,
    private stepperService: StepperService
  ) {
    this.idCandidacy = this.candidacyService.getSelectedCandidacy();
    console.log(this.idCandidacy);
  }

  toggleColor() {
    this.isRed = !this.isRed;
  }

  getCandidacyById() {
    this.candidacyService.getById(this.idCandidacy).subscribe((res: any) => {
      console.log(res);
      this.candidacy = res.candidacy;
      this.intermImg = res.image;
      console.log(res);
      this.visitorService
        .getVisitorById(res.candidacy.idIntern)
        .subscribe((intern: any) => {
          this.intern = intern;
          console.log(this.intern);
          this.idIntern = intern.id;
          console.log(this.idIntern);
          this.candidacyService
            .getInternCandidacy(intern.id)
            .subscribe((candidacy1: any) => {
              console.log(candidacy1);
              this.intershipOffers = candidacy1;
              console.log(this.intershipOffers);
            });
        });
    });
  }

  getInternMeetings() {
    this.stepperService
      .getInternMeetingsSupervisor(this.idIntern, this.idCandidacy)
      .subscribe((res: any) => {
        console.log(res);
        this.mettings = res;
        console.log(this.intern);
        console.log(this.mettings);
      });
  }

  decode(byte: any): any {
    if (byte) return 'data:image/jpg;base64,' + byte;
  }

  ngOnInit() {
    this.getCandidacyById();
  }
}
