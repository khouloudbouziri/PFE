// import { HttpClient } from '@angular/common/http';
// import { Component, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
// import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

// @Component({
//   selector: 'app-agenda',
//   // template:
//   //   '<ejs-schedule height="500" width="650" [currentView]="setView"></ejs-schedule>',
//   templateUrl: './agenda.component.html',
//   styleUrls: ['./agenda.component.css'],
// })
// export class AgendaComponent {
//   meetingForm!: FormGroup;

//   constructor(private http: HttpClient, private fb: FormBuilder) {
//     this.meetingForm = this.fb.group({
//       title: ['', Validators.required],
//       startTime: ['', Validators.required],
//       endTime: ['', Validators.required],
//     });
//   }

//   @ViewChild('calendar', { static: true })
//   public calendar!: CalendarComponent;

//   public eventSettings: EventSettingsModel = {
//     dataSource: [],
//   };

//   ngOnInit() {}

//   onSubmit() {
//     const appointment = this.meetingForm.value;
//     appointment.startTime = new Date(appointment.startTime).toISOString();
//     appointment.endTime = new Date(appointment.endTime).toISOString();

//     this.http
//       .post('/meetings', appointment)
//       .subscribe((createdAppointment: any) => {
//         if (this.eventSettings.dataSource) {
//           this.eventSettings.dataSource.push({
//             Id: createdAppointment.id,
//             Subject: createdAppointment.title,
//             StartTime: new Date(createdAppointment.startTime),
//             EndTime: new Date(createdAppointment.endTime),
//           });

//           this.calendar.refresh();
//           this.meetingForm.reset();
//         }
//       });
//   }
// }
