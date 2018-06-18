import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintingSetupPage } from './printing-setup';

@NgModule({
  declarations: [
    PrintingSetupPage,
  ],
  imports: [
    IonicPageModule.forChild(PrintingSetupPage),
  ],
})
export class PrintingSetupPageModule {}
