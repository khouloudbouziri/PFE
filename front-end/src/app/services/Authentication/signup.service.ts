import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignupReqModel } from '../../models/SignupReqModel';
import { LoginReqModel } from '../../models/LoginReqModel';
import { loginResponseModel } from '../../models/login-response';
import { Status } from '../../models/status';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private baseUrl = environment.baseUrl;
  constructor(private htttp: HttpClient) {}

  login(model: LoginReqModel) {
    return this.htttp.post<loginResponseModel>(
      this.baseUrl + '/auth/authenticate',
      model
    );
  }
  signup(model: SignupReqModel) {
    return this.htttp.post<Status>(
      this.baseUrl + '/auth/internRegister',
      model
    );
  }
}
