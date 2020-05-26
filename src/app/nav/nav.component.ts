import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../service/logout.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn:boolean = false;
  constructor(private router: Router,private logoutService: LogoutService, public sessionService: SessionService) { }

  ngOnInit() {
    
  }

  logout(): void {
    this.logoutService.logout();
    this.router.navigate(['/login']);
}
}
