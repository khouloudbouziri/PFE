import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';

@Component({
  selector: 'app-intern-card',
  templateUrl: './intern-card.component.html',
  styleUrls: ['./intern-card.component.css'],
})
export class InternCardComponent {
  idCandidacy: any;
  showCandidacy = true;
  @Input() public candidacies: any = [];
  @Output() public selectedCandidacy = new EventEmitter<{
    idCandidacy: number;
    showCandidacy: boolean;
  }>();

  constructor(private candidacyService: CandidacyService) {}

  getCandidacy(id: number) {
    this.idCandidacy = id;
    console.log(this.idCandidacy);
  }

  SelectedCandidacy() {
    const idCandidacy = this.idCandidacy;
    this.candidacyService.setSelectedCandidacy(idCandidacy);
  }

  decode(byte: any): any {
    if (byte) return 'data:image/jpg;base64,' + byte;
  }
}
