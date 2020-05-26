import { Component, OnInit, ViewChild } from '@angular/core';
import { DebitSlipModel } from 'src/app/model/DebitSlipModel';
import { DebitSlipService } from 'src/app/service/debit-slip.service';
import { SessionService } from 'src/app/service/session.service';



@Component({
  selector: 'app-debit-slip',
  templateUrl: './debit-slip.component.html',
  styleUrls: ['./debit-slip.component.css']
})
export class DebitSlipComponent implements OnInit {
  isProcessing : boolean = false;
  showToast = false;
  model = new DebitSlipModel();
  dataResponse : object;
  submitted = false;
  
  @ViewChild('debitSlipForm' , {static: false}) form: any;
  toastr: any;

  constructor(private debitService : DebitSlipService, private sessionService : SessionService) { }


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
    this.debitService.debitAmount(this.model).subscribe(
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
