import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticalsPage } from './statisticals';

@NgModule({
  declarations: [
    StatisticalsPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticalsPage),
  ],
})
export class StatisticalsPageModule {}
