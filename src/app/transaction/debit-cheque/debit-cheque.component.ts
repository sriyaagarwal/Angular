import { Component, OnInit ,ViewChild} from '@angular/core';
import { DebitChequeModel } from 'src/app/model/DebitChequeModel';
import { DebitChequeService } from 'src/app/service/debit-cheque.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-debit-cheque',
  templateUrl: './debit-cheque.component.html',
  styleUrls: ['./debit-cheque.component.css']
})
export class DebitChequeComponent implements OnInit {

  isProcessing : boolean = false;
  showToast = false;
  model = new DebitChequeModel();
  todayFormat: string;
  dataResponse : object;
  submitted = false;

  @ViewChild('debitChequeForm' , {static: false}) form: any;

  constructor(private debitService : DebitChequeService, private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionService.doSessionRouting();
  }

  onDataReceived(data)
  {
    this.dataResponse = data;
    this.showToast = true;
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
   // console.log(this.todayFormat);
    
 
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
