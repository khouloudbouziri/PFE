import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IntershipOffer } from '../../models/IntershipOffer';
import { Status } from '../../models/status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntershipOfferService {
  private baseUrl = environment.baseUrl;
  public idOffer: any;

  constructor(private http: HttpClient) {}

  addOffer(model: IntershipOffer) {
    return this.http.post<Status>(this.baseUrl + '/auth/intership/add', model);
  }

  getAllIntershipOffers() {
    return this.http.get(this.baseUrl + '/auth/intership/all');
  }

  getIntershipOfferById(id_intership_offre: any) {
    return this.http.get(
      this.baseUrl + '/auth/intership/find/' + id_intership_offre
    );
  }

  getCompanyIntershipOffers(idCompany: any) {
    return this.http.get(
      this.baseUrl + '/auth/visitor/find/offer/' + idCompany
    );
  }

  getIntershipOffers(id: any) {
    return this.http.get(this.baseUrl + '/auth/supervisor/find/offer/' + id);
  }

  updateIntershipOffer(id: number, offer: IntershipOffer) {
    const url = `${this.baseUrl}/auth/intership/update?id=${id}`;
    return this.http.put(url, offer);
  }

  deleteIntershipById(idOffer: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/auth/intership/delete?idIntershipOffer=${idOffer}`
    );
  }

  addFavoriteOffer(
    idIntern: number,
    idIntershipOffer: number
  ): Observable<IntershipOffer> {
    const url = this.baseUrl + '/auth/intership/addFavoriteOffer';
    const body = {
      idIntern: idIntern,
      idIntershipOffer: idIntershipOffer,
    };
    console.log(body);
    return this.http.post<IntershipOffer>(url, body);
  }

  getInternFavoriteOffers(idIntern: number) {
    return this.http.get(
      this.baseUrl + '/auth/intership/favoriteOffers/' + idIntern
    );
  }

  public setSelectedOffer(offer: any): void {
    this.idOffer = offer;
  }

  public getSelectedOffer(): any {
    return this.idOffer;
  }
}
