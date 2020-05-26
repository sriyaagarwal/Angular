import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UpdateContactService {

  constructor(private http: HttpClient) { }

  doUpdate(updateContact) : Observable<any> {

    return this.http
      .post("http://localhost:9090/updateContact",updateContact);
      
  }

}
