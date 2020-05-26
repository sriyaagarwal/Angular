import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginModel } from '../model/LoginModel';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isProcessing : boolean = false;
  showToast = false;
  LoginModel = new LoginModel();
  submitted = false;
  dataResponse: any;
  // loginObject: any;
  // httpClient: HttpClient;
  @ViewChild('LoginForm' , {static: false}) form: any;
  constructor(private loginService: LoginService,private _router: Router) { }

  ngOnInit() {
    


  }

  onDataReceived(data) {

    this.dataResponse = data;
    this.showToast = true;
    
  }



  showLogin() {
    return JSON.stringify(this.LoginModel);
  }

  onSubmit() {
    this.isProcessing = true;
    this.submitted = true;
    this.loginService.doLogin(this.LoginModel).subscribe(
      data => {
        this.isProcessing = false;
        this.onDataReceived(data);
        
      },
      error => {
        this.isProcessing = false;
      }
    );
  }

  closeToast() {
    this.showToast = false;
    
    if(this.dataResponse['success']) {
     
      localStorage.setItem('isLoggedIn', "true");
      this._router.navigate(['home-page']);
    }
    else {
      this.form.reset();
    }
  }
    // this.loginObject = { "username": this.LoginModel.username, "password": this.LoginModel.password };
    // this.loginService.doLogin(this.loginObject);
    // alert(this.showLogin());

  
}
