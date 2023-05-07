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
  events: any = [];
  idE: any;
  candidacies: any = [];
  candidaciesStatus: any = [];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public agendaService: AgendaService,
    public candidacyService: CandidacyService,
  //  public supervisor :SupervisorPageComponent,
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
        this.getEventsByIntern();
        this.getCandidaciesBySupervisor();
        this.getCandidaciesBySupervisorAndStatus();
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
  getEventsByIntern() {
    this.events=this.agendaService.getEventsByIntern(this.idE);
    this.events.subscribe((res: any) => {
      const events = res.map((res: any) => {
        return {
          title: res.title,
          start: res.startDateTime,
          end: res.endDateTime,
          id: res.id,
        };
      });
      this.events = events;
      console.log(this.events.length == 0); 
  if (this.events.length == 0) {
 this.events= this.agendaService.getEventsBySupervisor(this.idE);
 this.events.subscribe((res: any) => {
  const events = res.map((res: any) => {
    return {
      title: res.title,
      start: res.startDateTime,
      end: res.endDateTime,
      id: res.id,
    };
  });
  this.events = events;
  console.log("le5ra"+this.events);
});}});}
getCandidaciesBySupervisor() {
  this.candidacyService
    .getCandidaciesBySupervisor(this.idE)
    .subscribe((res: any) => {
      this.candidacies = res;
      console.log("heyyyy"+this.candidacies);
    });
}
getCandidaciesBySupervisorAndStatus() {

  this.candidacyService.getCandidacyBySupervisorAndStatus(this.idE)
  .subscribe((res: any) => {
    this.candidaciesStatus = res;
    console.log(res);
    console.log("candidaciesStatus"+this.candidaciesStatus);
  });
}
  ngOnInit(): void {
    this.getEventsByIntern();
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
