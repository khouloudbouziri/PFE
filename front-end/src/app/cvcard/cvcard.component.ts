import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';

@Component({
  selector: 'app-cvcard',
  templateUrl: './cvcard.component.html',
  styleUrls: ['./cvcard.component.css']
})
export class CVcardComponent {

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
  
    SelectedCandidacy(): void {
      console.log('okk');
      const idCandidacy = this.idCandidacy;
      this.candidacyService.setSelectedCandidacy(idCandidacy);
      console.log(idCandidacy);
    }
  
    public eventChild(idCandidacy: number, showCandidacy: boolean) {
      idCandidacy = this.idCandidacy;
      showCandidacy = this.showCandidacy;
      this.selectedCandidacy.emit({
        idCandidacy: idCandidacy,
        showCandidacy: showCandidacy,
      });
    }
  
    decode(byte: any): any {
      if (byte) return 'data:image/jpg;base64,' + byte;
    }
  }
  

