import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Supervisor } from 'src/app/models/Supervisor';
import { Status } from 'src/app/models/status';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { IntershipOfferService } from 'src/app/services/IntershipOffer/intership-offer.service';
import { SupervisorService } from 'src/app/services/Supervisor/supervisor.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent {
  id: any;
  user: any;
  supervisors: any = [];
  isRH: boolean = true;
  isDisabled: boolean = true;
  isChecked: any = false;
  working_from_home = 'false';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private intershipOfferService: IntershipOfferService,
    private visitorService: VisitorService,
    private supervisorService: SupervisorService,
    private snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  findSupervisorByIdCompany() {
    this.visitorService
      .findSupervisorByIdCompany(this.id)
      .subscribe((res: any) => {
        this.supervisors = res;
        console.log('res' + res);
        console.log(this.supervisors);
      });
  }

  findSupervisorById() {
    this.supervisorService.findSupervisorById(this.id).subscribe((res: any) => {
      this.user = res;
      this.isRH = false;
      console.log(this.user.role);
      console.log(res);
    });
  }

  onCheckboxChange() {
    if (this.isChecked) {
      this.working_from_home = 'true';
    } else {
      this.working_from_home = 'false';
    }
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait...' };
    this.intershipOfferService.addOffer(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.status = res;
        this.frm.reset();
      },
      error: (err) => {
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
        console.log(err);
        this.openSnackBar('Vérifier vos données', 'Fermer');
      },
      complete: () => {
        this.status.statusCode = 0;
        this.status.message = '';
      },
    });
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      topic: ['', Validators.required],
      company: ['', Validators.required],
      type: ['', Validators.required],
      working_from_home: ['', Validators.required],
      address: ['', Validators.required],
      duration: ['', Validators.required],
      supervisor: [this.supervisors, Validators.required],
      interns_number: ['', Validators.required],
      required_work: ['', Validators.required],
      technical_environement: ['', Validators.required],
      required_profile: ['', Validators.required],
      renumerete: ['', Validators.required],
    });
    this.findSupervisorByIdCompany();
    this.findSupervisorById();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
