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
  public idCandidacy: any;

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

  deleteCandidacy(idCandidacy: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/auth/candidacy/delete?idCandidacy=${idCandidacy}`
    );
  }

  spontaneousCandidacy(model: Candidacy) {
    return this.http.post<Status>(
      this.baseUrl + '/auth/candidacy/spontaneousCandidacy',
      model
    );
  }
  getById(idCandidacy: number) {
    return this.http.get(
      `${this.baseUrl}/auth/candidacy/offer/get?id_candidacy=${idCandidacy}`
    );
  }

  getIntershipOfferCandidacies(id_intershipOffer: number) {
    return this.http.get(
      `${this.baseUrl}/auth/candidacy/offerCandidacies?id_offer=${id_intershipOffer}`
    );
  }

  getCandidaciesBySupervisor(idSupervisor: number) {
    return this.http.get(
      this.baseUrl + '/auth/candidacy/supervisorCandidacies/' + idSupervisor
    );
  }
  getCandidacyBySupervisorAndStatus(idSupervisor: number) {
    return this.http.get(
      this.baseUrl +
        '/auth/candidacy/supervisorCandidacies/status/' +
        idSupervisor
    );
  }

  public setSelectedCandidacy(candidacy: any): void {
    this.idCandidacy = candidacy;
  }

  public getSelectedCandidacy(): any {
    return this.idCandidacy;
  }

  public changeCandidacyState(idCandidacy: number): Observable<Candidacy> {
    const url = `${this.baseUrl}/auth/candidacy/candidacyState?idCandidacy=${idCandidacy}`;
    return this.http.put<Candidacy>(url, null);
  }

  public validateCandidacy(idCandidacy: number): Observable<Candidacy> {
    const url = `${this.baseUrl}/auth/candidacy/validateCandidacy?idCandidacy=${idCandidacy}`;
    return this.http.put<Candidacy>(url, null);
  }

  public getInternValidatedCandidacy(idIntern: number) {
    return this.http.get(
      this.baseUrl + '/auth/candidacy/internValidatedCandidacies/' + idIntern
    );
  }
  getAllDest() {
    return this.http.get(
      this.baseUrl + '/auth/candidacy/allDist' 
    );
  }
}
