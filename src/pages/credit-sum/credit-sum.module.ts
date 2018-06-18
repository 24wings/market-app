import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditSumPage } from './credit-sum';

@NgModule({
  declarations: [
    CreditSumPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditSumPage),
  ],
})
export class CreditSumPageModule {}
