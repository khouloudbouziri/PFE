import { Component, EventEmitter, Output } from '@angular/core';
import { Candidacy } from 'src/app/models/Candidacy';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cv-search-bar',
  templateUrl: './cv-search-bar.component.html',
  styleUrls: ['./cv-search-bar.component.css'],
})
export class CvSearchBarComponent {
  @Output() public search = new EventEmitter();
  public candidacies: any = [];
  constructor(private CandidacyService: CandidacyService) {}

  public getAllCandidacies(): void {
    this.CandidacyService.getAllDest().subscribe(
      (res: any) => {
        console.log(res);

        for (let i = 0; i < res.length; i++) {
          this.candidacies.push(res[i]);
        }
        console.log(this.candidacies);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCandidacy(key: string): void {
    console.log(key);
    const results: Candidacy[] = [];
    console.log(this.candidacies);
    for (const cand of this.candidacies) {
      if (
        cand.candidacy.address.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        cand.candidacy.skills.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        cand.candidacy.university_department
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1 ||
        cand.candidacy.university.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        cand.candidacy.level.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(cand);
      }
    }
    this.candidacies = results;
    if (results.length === 0 || !key) {
      this.getAllCandidacies();
    }
  }

  public sendSearchResults() {
    this.search.emit(this.candidacies);
  }

  ngOnInit() {
    this.getAllCandidacies();
  }
}
