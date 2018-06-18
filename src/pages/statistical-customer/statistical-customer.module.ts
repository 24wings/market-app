import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticalCustomerPage } from './statistical-customer';

@NgModule({
  declarations: [
    StatisticalCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticalCustomerPage),
  ],
})
export class StatisticalCustomerPageModule {}
