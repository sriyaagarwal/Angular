import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebitSlipService {

  constructor(private http : HttpClient) {
    
   }

   debitAmount(dataObject): Observable<any> {
    return this.http
      .post("http://localhost:9090/debitSlip",dataObject);
      
  }
}


