import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IntershipOffer } from '../models/IntershipOffer';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class IntershipOfferService {
  private baseUrl = environment.baseUrl;

  constructor(private htttp: HttpClient) {}

  addOffer(model: IntershipOffer) {
    console.log('ok');
    return this.htttp.post<Status>(this.baseUrl + '/auth/intership/add', model);
  }
}
