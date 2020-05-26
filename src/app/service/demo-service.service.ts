import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  httpClient : HttpClient;
  
  constructor(private http: HttpClient) {
    this.httpClient = http;
  }
  
  doLogin() {
    // const httpOptions : any    = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Methods': 'POST',
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // };
    

    /*
    this.http.post("http://localhost:9090/pecunianew/login", {}).subscribe(
      (res)=>{alert(res)},
      (err)=>{alert('Err - ' + JSON.stringify(err))}
    );
    */
  
    this.httpClient
      .post("http://localhost:9090/pecunianew/login",{"uname":"anish@gmail.com","pswd":"12345"})
      .subscribe(
        data => {
          console.log("Response : "+JSON.stringify(data));
        },
        error => {
          console.log("Error :"+JSON.stringify(error));
        }
      );
    
  }
}
