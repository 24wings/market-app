import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivablesPage } from './receivables';

@NgModule({
  declarations: [
    ReceivablesPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivablesPage),
  ],
})
export class ReceivablesPageModule {}
