import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms'
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { UpdateContactService } from 'src/app/service/update-contact.service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  account = new AccountModel();
  customer = new CustomerModel();
  showToast = false;
  isProcessing : boolean = false;
  dataResponse : Object;
  updateContactObject: Object;
  submitted = false;
  httpClient : HttpClient;

  @ViewChild('updateContactForm' , {static: false}) form: any;
  toastr: any;

  constructor(private updateContact : UpdateContactService, private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionService.doSessionRouting();
  }

  onDataReceived(data)
  {
    this.dataResponse = data;
    this.showToast = true;
  }

  onSubmit() {
    this.isProcessing = true;
    this.submitted = true;
    this.updateContactObject = {"accountId": this.account.id, "contact": this.customer.contact};
    this.updateContact.doUpdate(this.updateContactObject)
    .subscribe(
      data => {
        this.isProcessing = false;
        this.onDataReceived(data);
      },
      error => {
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

}

