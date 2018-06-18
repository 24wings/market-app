import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTransactionDetailPage } from './my-transaction-detail';

@NgModule({
  declarations: [
    MyTransactionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTransactionDetailPage),
  ],
})
export class MyTransactionDetailPageModule {}
