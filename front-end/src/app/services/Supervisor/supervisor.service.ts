import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupervisorService {
  private baseUrl = environment.baseUrl;

  constructor(private htttp: HttpClient) {}

  findSupervisorById(id: any) {
    return this.htttp.get(this.baseUrl + '/auth/supervisor/find/' + id);
  }
}
