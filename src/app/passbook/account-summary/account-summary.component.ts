import { Component, OnInit } from '@angular/core';
import { Passbook } from "src/app/model/Passbook";
import { AccountSummaryService } from 'src/app/service/account-summaryService';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  isProcessing : boolean = false;
  model = new Passbook();
  dataReceived : boolean = false;
  dataResponse : any;
  submitted = false;
  showToast = false;
  closed = false;
  todayFormat: string;
  constructor(private accountSummaryService : AccountSummaryService, private sessionService : SessionService) { }
  
  ngOnInit() {
    this.sessionService.doSessionRouting();
  }

  onDataReceived(data)
  {
    if(data["data"])
    {
      this.dataResponse = this.getJson(data["data"]); 
      this.dataReceived = true;
    }
    else{
      this.dataResponse= data;
      this.showToast = true;
    }
  }

  getJson(myData: string[]) {
    let myarr = []
    
    for(var i=0;i<myData.length;i++)
    {
      let date = "";
      let objectData= JSON.parse(myData[i]);
      console.log(myData[i]);
      var myDay= objectData.transDate.date.day;
      var myMonth= objectData.transDate.date.month;
      if(myDay<10)
      {
        myDay="0".concat(myDay);
      }
      if(myMonth<10)
      {
      myMonth="0".concat(myMonth);
      }
      var myYear= objectData.transDate.date.year;
      var myChequeId= objectData.chequeId;
      if(myChequeId==0)
      {
        myChequeId="-";
      }
      date= date.concat(myDay).concat("/").concat(myMonth).concat("/").concat(myYear);
      objectData['transDate'] = date;
      objectData['chequeId'] = myChequeId;
     myarr.push(objectData);
    }
    return myarr;
  }
  onSubmit() {
    
    this.isProcessing = true;
    this.submitted = true;
    this.accountSummaryService.accountSummary(this.model).subscribe(
      data => {
        this.isProcessing = false;
        this.onDataReceived(data);
      },
      error =>  {
        let errorObject = {
          "success" : false,
          "message" : "Could not connect to server"
        }
        this.onDataReceived(errorObject);
        this.isProcessing = false;
      }
    );
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
  
  closeToast() {
    this.showToast = false;
    this.submitted= false;
  }

  onClose(){
    this.closed= true;
    this.dataReceived=false;
    this.submitted=false;
 }
}
