import { Component, OnInit, ViewChild } from '@angular/core';
import { CrediSlipModel } from 'src/app/model/CreditSlipModel';
import { CreditSlipService } from 'src/app/service/credit-slip.service';
import { SessionService } from 'src/app/service/session.service';



@Component({
  selector: 'app-credit-slip',
  templateUrl: './credit-slip.component.html',
  styleUrls: ['./credit-slip.component.css']
})
export class CreditSlipComponent implements OnInit {
  isProcessing : boolean = false;
  showToast = false;
  model = new CrediSlipModel();
  dataResponse : object;
  submitted = false;
  
  @ViewChild('creditSlipForm' , {static: false}) form: any;
  
  constructor(private creditService : CreditSlipService,  private sessionService : SessionService) { }


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
    this.creditService.creditAmount(this.model).subscribe(
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
