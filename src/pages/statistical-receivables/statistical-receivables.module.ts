import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticalReceivablesPage } from './statistical-receivables';

@NgModule({
  declarations: [
    StatisticalReceivablesPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticalReceivablesPage),
  ],
})
export class StatisticalReceivablesPageModule {}
