import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Status } from 'src/app/models/status';
import { AgendaService } from '../../services/Agenda/agenda.service';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';

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
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public agendaService: AgendaService,
    public candidacyService: CandidacyService,
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
  getAllEvents() {
    this.agendaService.getAllEvents().subscribe((res: any) => {
      console.log(res);
      const events = res.map((res: any) => {
        return {
          title: res.title,
          start: res.startDateTime,
          end: res.endDateTime,
          id: res.id,
        };
      });
      this.events = events;
    });
  }

  getCandidaciesBySupervisor() {
    this.candidacyService
      .getCandidaciesBySupervisor(this.idE)
      .subscribe((res: any) => {
        this.candidacies = res;
        console.log(this.candidacies);
      });
  }

  addEvent() {
    this.agendaService.addEvent(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.status = res;
        this.frm.reset();
        this.getAllEvents();
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
    this.getAllEvents();
    this.getCandidaciesBySupervisor();
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
