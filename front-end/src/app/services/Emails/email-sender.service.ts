import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClaimModel } from '../../models/ClaimModel';
import { Status } from '../../models/status';

@Injectable({
  providedIn: 'root',
})
export class EmailSenderService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  sendClaim(model: ClaimModel) {
    return this.http.post<Status>(this.baseUrl + '/auth/send-email', model);
  }
}
