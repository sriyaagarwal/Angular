import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountSummaryService {

  constructor(private http: HttpClient) {
  }


  accountSummary(dataObject): Observable<any> {
   return this.http.post("http://localhost:9090/accountSummary", dataObject);
    

  }
}
