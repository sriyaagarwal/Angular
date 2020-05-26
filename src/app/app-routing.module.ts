import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { UpdateNameComponent } from './account/update-name/update-name.component';
import { UpdateContactComponent } from './account/update-contact/update-contact.component';
import { UpdateAddressComponent } from './account/update-address/update-address.component';
import { DeleteAccountComponent } from './account/delete-account/delete-account.component';
import { CreditChequeComponent } from './transaction/credit-cheque/credit-cheque.component';
import { DebitChequeComponent } from './transaction/debit-cheque/debit-cheque.component';
import { CreditSlipComponent } from './transaction/credit-slip/credit-slip.component';
import { DebitSlipComponent } from './transaction/debit-slip/debit-slip.component';
import { LoanDisbursalComponent } from './loan/loan-disbursal/loan-disbursal.component';
import { LoanRequestComponent } from './loan/loan-request/loan-request.component';
import { LoanMenuComponent } from './loan/loan-menu/loan-menu.component';
import { AccountSummaryComponent } from './passbook/account-summary/account-summary.component';
import { PassbookUpdateComponent } from './passbook/passbook-update/passbook-update.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  //add your routes here
  
  {path: '', component: LoginComponent},

  {path: 'account/add-account', component: AddAccountComponent},
  {path: 'account/update-name', component: UpdateNameComponent},
  {path: 'account/update-contact', component: UpdateContactComponent},
  {path: 'account/update-address', component: UpdateAddressComponent},
  {path: 'account/delete-account', component: DeleteAccountComponent},
  {path: 'transaction/credit-cheque', component: CreditChequeComponent},
  {path: 'transaction/debit-cheque', component: DebitChequeComponent},
  {path: 'transaction/credit-slip', component: CreditSlipComponent},
  {path: 'transaction/debit-slip', component: DebitSlipComponent},
  {path: 'loan/loan-disbursal', component: LoanDisbursalComponent},
  {path: 'loan/loan-request', component: LoanRequestComponent},
  {path: 'loan/loan-menu', component: LoanMenuComponent},
  {path: 'passbook/account-summary', component: AccountSummaryComponent},
  {path: 'passbook/passbook-update', component: PassbookUpdateComponent},
  {path: 'login', component : LoginComponent},
  {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
