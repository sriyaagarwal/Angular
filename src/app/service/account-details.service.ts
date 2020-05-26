import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor(private http: HttpClient) { }

  showAccountDetails(account){
    // console.log("Service mai obj : "+JSON.stringify(account))
    return this.http

      .get("http://localhost:9090/accountDetail/"+ account.accountId);


      

      
  }
}
