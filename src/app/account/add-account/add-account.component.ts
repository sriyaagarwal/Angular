import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { AddressModel } from 'src/app/model/AddressModel';
import { AddAccountServiceService } from 'src/app/service/add-account-service.service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account = new AccountModel();
  customer = new CustomerModel();
  address = new AddressModel();
  showToast = false;
  isProcessing: boolean = false;
  dataResponse: object;
  submitted = false;
  todayFormat: string;
  httpClient: HttpClient;



  @ViewChild('addAccountForm', { static: false }) form: any;
  // toastr: any;
  
  constructor(private addAccount: AddAccountServiceService, private sessionService : SessionService) { }
  ngOnInit() {
     this.sessionService.doSessionRouting();
  }

  onDataReceived(data) {
    this.dataResponse = data;
    this.showToast = true;
  }
  obj: Object;
  onSubmit() {
    this.isProcessing = true;
    this.submitted = true;
    this.obj = {
      "name": this.customer.name,
      "gender": this.customer.gender,
      "dob": this.customer.dob,
      "contact": this.customer.contact,
      "line1": this.address.line1,
      "line2": this.address.line2,
      "city": this.address.city,
      "state": this.address.state,
      "country": this.address.country,
      "zipcode": this.address.zipcode,
      "aadhar": this.customer.aadhar,
      "pan": this.customer.pan,
      "branchId": this.account.branchId,
      "accountType": this.account.accountType,
      "balance": this.account.balance,
      "interest": this.account.interest
    };
    this.addAccount.addAccountFunction(this.obj).subscribe(
      data => {
        // console.log("recieved data");
        this.isProcessing = false;
        this.onDataReceived(data);
      },
      error => {

        // console.log("error");

        let errorObject = {
          "success" : false,
          "message" : "Could not connect to server"
        }
        this.onDataReceived(errorObject);

        this.isProcessing = false;
      }
    );
  }
  closeToast() {
    this.showToast = false;
    this.form.reset();
  }
  public SetMaxDate() {
    let today = new Date();
    let dd = (today.getDate());
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let ddFormat: string;
    let mmFormat: string;
    if (dd < 10) {
      ddFormat = ('0' + dd).toString();
    }
    else
      ddFormat = (dd).toString();
    if (mm < 10) {
      mmFormat = '0' + mm
    }
    else
      mmFormat = (mm).toString();
    this.todayFormat = yyyy + '-' + mmFormat + '-' + ddFormat;
  
  }

}