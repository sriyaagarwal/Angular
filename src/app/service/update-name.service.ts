import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateNameService {
 
  constructor(private http: HttpClient) {
   
  }

  doUpdate(updateName): Observable<any>{

    return this.http
      .post("http://localhost:9090/updateName",updateName);
      
  }

  
 
}