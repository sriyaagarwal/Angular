import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;

  }

  doLogin(loginCredential):Observable<any>  {
    return this.http
      .post("http://localhost:9090/login", loginCredential)
     
  }}
  