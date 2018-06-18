import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticalProductPage } from './statistical-product';

@NgModule({
  declarations: [
    StatisticalProductPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticalProductPage),
  ],
})
export class StatisticalProductPageModule {}
