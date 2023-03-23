import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanySignUpReqModel } from '../models/CompanySignUpReqModel';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class CompanySignupServiceService {
  private baseUrl = environment.baseUrl;
  constructor(private htttp: HttpClient) {}
  
  signup(model: CompanySignUpReqModel) {
    return this.htttp.post<Status>(
      this.baseUrl + '/auth/companyRegister',
      model
    );
  }
}
