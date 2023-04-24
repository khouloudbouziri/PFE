import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IntershipOffer } from '../../models/IntershipOffer';
import { Status } from '../../models/status';

@Injectable({
  providedIn: 'root',
})
export class IntershipOfferService {
  private baseUrl = environment.baseUrl;

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

  deleteIntershipById(id: any) {
    return this.http.delete(this.baseUrl + '/auth/intership/delete' + id);
  }
}
