import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTransactionPage } from './my-transaction';

@NgModule({
  declarations: [
    MyTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTransactionPage),
  ],
})
export class MyTransactionPageModule {}
