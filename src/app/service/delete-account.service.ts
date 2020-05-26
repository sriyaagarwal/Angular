import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {
 
  constructor(private http: HttpClient) {
   
  }

  doDelete(deleteAccount){
    return this.http
      .post("http://localhost:9090/deleteAccount",deleteAccount);
      
  }

  
 
}