import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn() {
    return !!this.getAccessToken();
  }

  //mayi5dmouch mta3 il username
  addUsername(username: string) {
    localStorage.setItem('username', username);
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  addAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }
}
