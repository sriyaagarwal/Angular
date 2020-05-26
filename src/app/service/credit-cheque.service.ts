import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditChequeService {

  constructor(private http : HttpClient) { }

  creditAmount(dataObject): Observable<any> {
    return this.http
      // .post("http://localhost:9090/pecunianew/creditCheque",dataObject);
      .post("http://localhost:9090/creditCheque",dataObject);
      
  }
}
