import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeighSetupPage } from './weigh-setup';

@NgModule({
  declarations: [
    WeighSetupPage,
  ],
  imports: [
    IonicPageModule.forChild(WeighSetupPage),
  ],
})
export class WeighSetupPageModule {}
