import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoServiceService } from './service/demo-service.service';
import { Router } from '@angular/router';
import { SessionService } from './service/session.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pecunia-client';

  constructor(private demoService : DemoServiceService,private http: HttpClient,private router : Router,private sessionService : SessionService) {
  }

  ngOnInit() {
   
    this.sessionService.doSessionRouting();
  }
  

  
}
