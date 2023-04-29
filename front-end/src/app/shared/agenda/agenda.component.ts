import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as moment from 'moment';
import { Status } from 'src/app/models/status';
import { AgendaService } from 'src/app/services/Agenda/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent {
  public showForm = false;
  events: any = [];
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public agendaService: AgendaService
  ) {}

  frm!: FormGroup;
  status!: Status;

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
      this.showForm = true;
    },
  };

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

  addEvent() {
    this.agendaService.addEvent(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.status = res;
        this.frm.reset();
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
    this.frm = this.fb.group({
      idSupervisor: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
    });
  }
}
