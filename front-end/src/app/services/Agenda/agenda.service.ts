import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/models/status';
import { Event } from 'src/app/models/Event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addEvent(model: Event) {
    return this.http.post<Status>(this.baseUrl + '/auth/events/add', model);
  }

  getAllEvents() {
    return this.http.get(this.baseUrl + '/auth/events/all');
  }

  getEventById(id: number) {
    return this.http.get(this.baseUrl + '/auth/events/' + id);
  }
  getEventsBySupervisor(id: number) {
    return this.http.get(this.baseUrl + '/auth/events/supervisor/' + id);
  }
  getEventsByIntern(id: number) {
    return this.http.get(this.baseUrl + '/auth/events/intern/' + id);
  }

  updateEvent(id: number, event: Event) {
    const url = `${this.baseUrl}/auth/events/update?id=${id}`;
    return this.http.put(url, event);
  }

  deleteSupervisor(supervisor: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/auth/supervisor/delete?idSupervisor=${supervisor}`
    );
  }
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/auth/events/delete?idEvent=${id}`
    );
  }
}
