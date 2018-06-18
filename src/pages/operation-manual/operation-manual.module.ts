import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperationManualPage } from './operation-manual';

@NgModule({
  declarations: [
    OperationManualPage,
  ],
  imports: [
    IonicPageModule.forChild(OperationManualPage),
  ],
})
export class OperationManualPageModule {}
