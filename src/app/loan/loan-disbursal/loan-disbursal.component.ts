import { Component, OnInit } from '@angular/core';
import { LoanDisbursal } from 'src/app/model/LoanDIsbursalModel';
import { LoandisbursaldataserviceService } from 'src/app/service/loandisbursaldataservice.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-loan-disbursal',
  templateUrl: './loan-disbursal.component.html',
  styleUrls: ['./loan-disbursal.component.css']
})
export class LoanDisbursalComponent implements OnInit {

  loanDataRetrievals = ['Retrieve all loan requests', 'Show the loan requests to be accepted', 'Show the loan requests to be rejected'];
  loanDisbursal = new LoanDisbursal()
  menuOption : string;
  isProcessing : boolean = false;
  dataReceived : boolean = false;
  dataReceived1 : boolean = false;
  dataReceived2 : boolean = false;
  showToast = false;
  dataResponse : any;
  dataResponse1 : any;
  dataResponse2 : any;
  submitted = false;



  
  constructor(private loanDisbursalservice : LoandisbursaldataserviceService, private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionService.doSessionRouting();
  }


  onDataReceived(data)
 
  {
    if(data["data"])
    {
    this.dataResponse = this.getJson(data["data"]);
    this.dataReceived = true;
    this.dataReceived1 = false;
    this.dataReceived2 = false;
  }
  else{
         this.dataResponse= data;
          this.showToast = true;
     }
}

  onDataReceived1(data)
  {
    if(data["data"])
    {
    this.dataResponse1 = this.getJson(data["data"]);
    this.dataReceived1 = true;
    this.dataReceived = false;
    this.dataReceived2 = false;
    
  }
  else{
    this.dataResponse= data;
     this.showToast = true;
   }
}

  onDataReceived2(data)
  {
    if(data["data"])
    {
    this.dataResponse2 = this.getJson(data["data"]);
    
    this.dataReceived2 = true;
    this.dataReceived = false;
    this.dataReceived1 = false;
    
  }
  else{
    this.dataResponse= data;
     this.showToast = true;
   }
}

  getJson(myData) {
  let myarr = []
  for(var i=0;i<myData.length;i++)
  {
    myarr.push(JSON.parse(myData[i]));
    console.log(myarr[i]['id']);
  }
  console.log("Full json object : "+myarr);
  return myarr;
}

onSubmit() {
  
  this.isProcessing = true;
  this.submitted = true;
  this.loanDisbursalservice.showData().subscribe(
    data => {
      this.isProcessing = false;
      this.onDataReceived(data);
    },
    error => {
      this.isProcessing = false;
    }
  );
}

onClick() {
  
  this.isProcessing = true;
  this.submitted = true;
  this.loanDisbursalservice.showRequests(this.menuOption).subscribe(
    data => {
      this.isProcessing = false;
      this.onDataReceived1(data);
    },
    error => {
      this.isProcessing = false;
    }
  );
}

onClicking() {
  
  this.isProcessing = true;
  this.submitted = true;
  this.loanDisbursalservice.update().subscribe(
    data => {
   
      this.isProcessing = false;
      this.onDataReceived2(data);
    },
    error => {
      this.isProcessing = false;
    }
  );
}

closeToast() {
  this.showToast = false;
  this.submitted= false;
}
close(){
  this.submitted = false;
  this.dataReceived = false;
}
close1(){
  this.submitted = false;
  this.dataReceived2 = false;
}
close2(){
  this.submitted = false;
  this.dataReceived1 = false;
}
}



