import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoandisbursaldataserviceService {

  constructor(private http: HttpClient) {
  }
  showData(): Observable<any> {
    return this.http
      .get("http://localhost:9090/loandisbursaldata");
  }
  showRequests(menuOption): Observable<any>{
    return this.http
    .get("http://localhost:9090/loandisbursal/"+menuOption);
  }
  update(): Observable<any> {
    return this.http
      .get("http://localhost:9090/loandisbursalbalanceupdation");
  }
}
