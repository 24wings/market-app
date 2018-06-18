import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticalSummaryPage } from './statistical-summary';

@NgModule({
  declarations: [
    StatisticalSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticalSummaryPage),
  ],
})
export class StatisticalSummaryPageModule {}
