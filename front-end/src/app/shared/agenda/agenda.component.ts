import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Status } from 'src/app/models/status';
import { AgendaService } from '../../services/Agenda/agenda.service';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { SupervisorPageComponent } from 'src/app/pages/profiles/supervisor-page/supervisor-page.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent {
  public showForm = false;
  @Input() public events: any = [];
  idE: any;
  @Input() public candidacies: any = [];
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public agendaService: AgendaService,
    public candidacyService: CandidacyService,
    public supervisorComponent: SupervisorPageComponent,
    private route: ActivatedRoute
  ) {
    this.idE = this.route.snapshot.paramMap.get('id');
  }

  frm!: FormGroup;
  status!: Status;
  isPopupVisible = false;
  showContent0 = true;
  showContent1 = false;
  title!: string;
  message!: string;

  get f() {
    return this.frm.controls;
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    timeZone: 'America/New_York',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek',
    },
    selectable: true,
    dateClick: () => {
      this.openPopup();
    },
  };

  openPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }

  addEvent() {
    this.agendaService.addEvent(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.status = res;
        this.frm.reset();
        this.supervisorComponent.getEventsBySupervisor();
      },
      error: (err) => {
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
        console.log(err);
      },
      complete: () => {
        this.status.statusCode = 0;
        this.status.message = '';
      },
    });
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      idSupervisor: [this.idE, Validators.required],
      idIntern: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
    });
  }
}
