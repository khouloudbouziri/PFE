import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';

@Component({
  selector: 'app-intern-card',
  templateUrl: './intern-card.component.html',
  styleUrls: ['./intern-card.component.css'],
})
export class InternCardComponent implements OnChanges {
  idCandidacy: any;
  showCandidacy = true;
  @Input() public candidacies: any = [];
  @Output() public selectedCandidacy = new EventEmitter<{
    idCandidacy: number;
    showCandidacy: boolean;
  }>();

  @Output() public deletedItem = new EventEmitter<any>();

  constructor(private candidacyService: CandidacyService) {}

  getCandidacy(id: number) {
    this.idCandidacy = id;
    console.log('hhhhhhhhhhhhhhhhhhh' + this.idCandidacy);
  }

  SelectedCandidacy(): void {
    console.log('okk');
    const idCandidacy = this.idCandidacy;
    this.candidacyService.setSelectedCandidacy(idCandidacy);
    console.log(idCandidacy);
  }

  deleteCandidacy(idCandidacy: number) {
    this.candidacyService.deleteCandidacy(idCandidacy).subscribe((res: any) => {
      console.log(res);
      this.candidacies;
      this.deletedItem.emit(true);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
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
