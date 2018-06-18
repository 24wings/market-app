import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PutMoneyPage } from './put-money';

@NgModule({
  declarations: [
    PutMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(PutMoneyPage),
  ],
})
export class PutMoneyPageModule {}
