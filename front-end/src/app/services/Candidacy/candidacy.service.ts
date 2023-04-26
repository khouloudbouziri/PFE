import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidacy } from 'src/app/models/Candidacy';
import { Status } from 'src/app/models/status';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidacyService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addCandidacy(
    model: Candidacy,
    id_intershipOffer: number,
    idIntern: number
  ): Observable<any> {
    const url = `${this.baseUrl}/auth/candidacy/${id_intershipOffer}?id_intern=${idIntern}`;
    return this.http.post(url, model);
  }

  getInternCandidacy(idIntern: number) {
    return this.http.get(
      this.baseUrl + '/auth/candidacy/internCandidacy/' + idIntern
    );
  }

  spontaneousCandidacy(model: Candidacy) {
    return this.http.post<Status>(
      this.baseUrl + '/auth/candidacy/spontaneousCandidacy',
      model
    );
  }
  getById(idCandidacy :number){
    return this.http.get(
      `${this.baseUrl}/auth/candidacy/offer/get?id_candidacy=${idCandidacy}`
    );
  }
}
