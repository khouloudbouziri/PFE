import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupervisorService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findSupervisorById(id: any) {
    return this.http.get(this.baseUrl + '/auth/supervisor/find/' + id);
  }

  deleteSupervisor(supervisor: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/auth/supervisor/delete?idSupervisor=${supervisor}`
    );
  }
}
