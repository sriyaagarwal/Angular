import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { HttpClient } from '@angular/common/http';
import { DeleteAccountService } from 'src/app/service/delete-account.service';
import { SessionService } from 'src/app/service/session.service';
import { AccountDetailsService } from 'src/app/service/account-details.service';




@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})


export class DeleteAccountComponent implements OnInit {


  account = new AccountModel();
  accountRequested = new AccountModel();
  firstdataResponse : Object;
  seconddataResponse : Object;
  showToast = false;
  showDeleteToast = false;
  isProcessing : boolean = false;
  deleteAccountObject: Object;
  submitted = false;
  httpClient : HttpClient;

  @ViewChild('accountDeletionForm' , {static: false}) form: any;
  toastr: any;

  constructor(private deleteAccount : DeleteAccountService, private accountService : AccountDetailsService, private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionService.doSessionRouting();
  }

  onFirstDataReceived(data)
  {

    if(data["data"]){
      this.firstdataResponse = JSON.parse(data["data"]);
      this.showToast = true;
    }
  
    else{
      this.closeAccount();
    }
    
  }

  
  onSecondDataReceived(data){

  
    this.seconddataResponse = data;
    this.showDeleteToast = true;
    
  }


  onSubmit() {
  
    this.isProcessing = true;
    this.submitted = true;
    this.deleteAccountObject = {"accountId": this.accountRequested.id};
    
    this.accountService.showAccountDetails(this.deleteAccountObject).subscribe(
      data => {
    
        this.isProcessing = false;
        this.onFirstDataReceived(data);
     
      },
      error => {
        let errorObject = {
         
          "success" : false,
          "message" : "Could not connect to server"
        }
        this.onFirstDataReceived(errorObject);
        this.isProcessing = false;
      }
    );
  }

  closeAccount(){
    this.isProcessing = true;
    this.deleteAccountObject = {"accountId": this.accountRequested.id};
    this.deleteAccount.doDelete(this.deleteAccountObject)
    .subscribe(
      data => {
        this.isProcessing = false;
      
        this.onSecondDataReceived(data);
        this.showToast = false;
        this.form.reset();
      },
      error => {
        let errorObject = {
          "success" : false,
          "message" : "Could not connect to server"
        }
        this.onSecondDataReceived(errorObject);
        this.isProcessing = false;
  
      }
    );
  }
  closeToast() {
    this.showToast = false;
    this.form.reset();
  }

  closeDeleteToast() {
    this.showDeleteToast = false;
    this.form.reset();
  }
}