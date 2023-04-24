import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { loginResponseModel } from '../../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticatedUser: loginResponseModel | undefined;

  constructor() {}

  public authenticateUser(
    authvisitor: loginResponseModel
  ): Observable<boolean> {
    this.authenticatedUser = authvisitor;
    localStorage.setItem(
      'visitor',
      JSON.stringify({
        visitor: authvisitor.visitor,
        supervisor: authvisitor.supervisor,
      })
    );
    localStorage.setItem('token', JSON.stringify({ token: authvisitor.token }));
    return of(true);
  }

  public isAuthenticated() {
    return this.authenticatedUser != undefined;
  }

  public logout(): Observable<boolean> {
    this.authenticatedUser = undefined;
    localStorage.removeItem('visitor');
    localStorage.removeItem('token');
    return of(true);
  }
}
