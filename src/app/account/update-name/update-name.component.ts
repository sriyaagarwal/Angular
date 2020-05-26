import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { HttpClient } from '@angular/common/http';
import { UpdateNameService } from 'src/app/service/update-name.service';
import { SessionService } from 'src/app/service/session.service';



@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.css']
})


export class UpdateNameComponent implements OnInit {

  account = new AccountModel();
  customer = new CustomerModel();
  showToast = false;
  isProcessing: boolean = false;
  dataResponse: Object;
  updateNameObject: Object;
  submitted = false;


  @ViewChild('updateNameForm', { static: false }) form: any;
  toastr: any;

  constructor(private updateName: UpdateNameService, private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionService.doSessionRouting();
  }

  onDataReceived(data) {
    this.dataResponse = data;
    this.showToast = true;
  }


  onSubmit() {
    this.isProcessing = true;
    this.submitted = true;
    this.updateNameObject = { "accountId": this.account.id, "name": this.customer.name };
    this.updateName.doUpdate(this.updateNameObject)
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
      );;
  }

  closeToast() {
    this.showToast = false;
    this.form.reset();
  }

}
