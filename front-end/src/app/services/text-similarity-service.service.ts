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
  
  public cosineSimilarity(idIntershipOffer :number , idCandidacy : number): Observable<number> {
    console.log(this.baseUrl);
    const url = this.baseUrl+'/auth/similarity/cosine';
    console.log(url);
    console.log(idIntershipOffer);
    console.log(idCandidacy);
    const body = {
      idIntershipOffer: idIntershipOffer,
      idCandidacy: idCandidacy
    };
    console.log(body);
    return this.http.post<number>(url, body);
  }
}
