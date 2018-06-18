import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticalMoneyPage } from './statistical-money';

@NgModule({
  declarations: [
    StatisticalMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticalMoneyPage),
  ],
})
export class StatisticalMoneyPageModule {}
