import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IssDetailPage } from './iss-detail';

@NgModule({
  declarations: [
    IssDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(IssDetailPage),
  ],
})
export class IssDetailPageModule {}
