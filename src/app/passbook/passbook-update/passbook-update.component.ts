import { Component, OnInit } from '@angular/core';
import { Passbook } from 'src/app/model/Passbook';
import { PassbookService } from 'src/app/service/passbook.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-passbook-update',
  templateUrl: './passbook-update.component.html',
  styleUrls: ['./passbook-update.component.css']
})
export class PassbookUpdateComponent implements OnInit {
 
  isProcessing : boolean = false;
  model = new Passbook();
  dataReceived : boolean = false;
  dataResponse : any;
  submitted = false;
  showToast = false;
  printToast = false;
 
  constructor(private passbookService : PassbookService, private sessionService : SessionService) { }
  
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

  getJson(myData) {
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
    this.passbookService.updatePassbook(this.model).subscribe(
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

  closeToast() {
    this.showToast = false;
    this.submitted= false;
  }

  showPrint() {
    this.printToast = false;
    this.submitted= false;
  }

  onClose(){
     this.printToast = true;
     this.dataReceived=false;
     this.submitted=false;
  }
}
