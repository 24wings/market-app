import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenBillPage } from './open-bill';

@NgModule({
  declarations: [
    OpenBillPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenBillPage),
  ],
})
export class OpenBillPageModule {}
