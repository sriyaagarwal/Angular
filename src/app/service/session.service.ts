import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router : Router) { }



  isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    }
    else {
      status = false;
    }
    return status;
  }

  doSessionRouting() {
    let loggedIn = this.isLoggedIn();
    if(!loggedIn) {
      this.router.navigate(['login']);
    }
  }
}
