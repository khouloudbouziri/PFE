import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getInternMeetingsSupervisor(idIntern: number, idCandidacy: number) {
    return this.http.get(
      `${this.baseUrl}/auth/events/internMetingsSupervisor?idIntern=${idIntern}&idCandidacy=${idCandidacy}`
    );
  }

  public getInterEvents(idIntern: number) {
    return this.http.get(
      this.baseUrl + '/auth/events/internMeetings/' + idIntern
    );
  }
}
