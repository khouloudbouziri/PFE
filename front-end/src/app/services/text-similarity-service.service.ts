import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityServiceService {
  private baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  public getCosineSimilarity(): Observable<number> {
    const url = `${this.baseUrl}/auth/similarity/cosine`;
    const body = {};
    return this.http.post<number>(url, body);
  }
}
