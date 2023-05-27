import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Status } from 'src/app/models/status';
import { AgendaService } from '../../services/Agenda/agenda.service';
import { CandidacyService } from 'src/app/services/Candidacy/candidacy.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  type: string = 'Entretien';
  selectedEventId: any;
  selectedEvent: any;
  modifiedEvent: any;
  showEventModal: boolean = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public agendaService: AgendaService,
    public candidacyService: CandidacyService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.idE = this.route.snapshot.paramMap.get('id');
    console.log(this.idE);
  }

  frm!: FormGroup;
  status!: Status;
  isPopupVisible = false;
  showContent0 = true;
  showContent1 = false;
  title!: string;
  message!: string;
  document!:Document;

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
      if (this.router.url.includes('intern-page')) {
      } else {
        this.openPopup();
        this.getCandidaciesBySupervisor();
        this.getCandidaciesBySupervisorAndStatus();
      }
    },
    eventClick: (event) => {
      this.openModal(event);
      this.getEventById();
    },
  };

  openModal(event: any) {
    this.selectedEventId = event.event._def.publicId;
    console.log(this?.selectedEvent);
    this.showEventModal = true;
    console.log(this.selectedEventId);
  }

  closeModal() {
    this.showEventModal = false;
  }

  openPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }

  seType() {
    this.type = 'Reunion';
    this.frm.get('type')?.setValue(this.type);
  }

  getEventById() {
    this.agendaService
      .getEventById(this.selectedEventId)
      .subscribe((res: any) => {
        this.selectedEvent = res;
        console.log(this.selectedEvent);
      });
  }

  addEvent() {
    this.agendaService.addEvent(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.status = res;
        this.frm.reset();
        this.getEventsByIntern();
      },
      error: (err) => {
        this.status.statusCode = 0;
        this.status.message = 'some error on the server side';
        console.log(err);
        this.openSnackBar('Evenement non ajouté', 'Fermer');
      },
      complete: () => {
        this.status.statusCode = 0;
        this.status.message = '';
      },
    });
  }

  getEventsByIntern() {
    this.events = this.agendaService.getEventsByIntern(this.idE);
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
        this.events = this.agendaService.getEventsBySupervisor(this.idE);
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
        });
      }
    });
  }

  getCandidaciesBySupervisor() {
    this.candidacyService
      .getCandidaciesBySupervisor(this.idE)
      .subscribe((res: any) => {
        console.log(res);
        this.candidacies = res;
        console.log('heyyyy' + this.candidacies);
      });
  }
  getCandidaciesBySupervisorAndStatus() {
    this.candidacyService
      .getCandidacyBySupervisorAndStatus(this.idE)
      .subscribe((res: any) => {
        this.candidaciesStatus = res;
        console.log(res);
        console.log('candidaciesStatus' + this.candidaciesStatus);
      });
  }

  updateEvent() {
    this.agendaService
      .updateEvent(this.selectedEvent.id, this.frm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.getEventsByIntern();
      });
  }
   toggle() {
    const switchElement = document.getElementById("switch");
    if (switchElement) {
      const currentTransform = switchElement.style.transform;
      if (currentTransform === "translateX(100%)") {
        switchElement.style.transform = "translateX(0)";
       
      } else {
        switchElement.style.transform = "translateX(100%)";
       
      }
    }
  }
  toggleColor1(){
    const buttonElement = document.getElementById("1");
    const buttonElement1 = document.getElementById("2");
    
  if (buttonElement) {
    buttonElement.style.color = "#424A88";
   
  }
  if (buttonElement1) {
    buttonElement1.style.color = "white";
   
  }
  }
  toggleColor2(){
    const buttonElement = document.getElementById("1");
    const buttonElement1 = document.getElementById("2");
    
  if (buttonElement) {
    buttonElement.style.color = "white";
   
  }
  if (buttonElement1) {
    buttonElement1.style.color = "#424A88";
   
  }
  }
  deleteEvent() {
    this.agendaService
      .deleteEvent(this.selectedEventId)
      .subscribe((res: any) => {
        this.getEventsByIntern();
      });
  }

  formatDateTime(dateTime: string): string {
    const formattedDateTime = this.datePipe.transform(
      dateTime,
      'yyyy-MM-ddTHH:mm'
    );
    return formattedDateTime || '';
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

      type: [this.type, Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
