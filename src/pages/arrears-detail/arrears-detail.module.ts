import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArrearsDetailPage } from './arrears-detail';

@NgModule({
  declarations: [
    ArrearsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArrearsDetailPage),
  ],
})
export class ArrearsDetailPageModule {}
