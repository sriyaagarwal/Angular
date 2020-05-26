import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassbookService {

  constructor(private http: HttpClient) {
  }


  updatePassbook(dataObject): Observable<any> {
    return this.http
      .post("http://localhost:9090/updatePassbook",dataObject);
      
  }
}
