import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/models/status';

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
  getEventsBySupervisor(id: number){
    return this.http.get(this.baseUrl + '/auth/events/supervisor/'+ id);
  }
  getEventsByIntern(id: number){
    return this.http.get(this.baseUrl + '/auth/events/intern/'+ id);
  }
}
