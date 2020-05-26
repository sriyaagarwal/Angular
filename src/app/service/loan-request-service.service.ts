import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestServiceService {



  constructor(private http: HttpClient) {


  }

  doLoanRequest(loanRequest) {

    return this.http.post("http://localhost:9090/LoanRequest", loanRequest);


  }
}


