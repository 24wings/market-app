import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperationManualDetailPage } from './operation-manual-detail';

@NgModule({
  declarations: [
    OperationManualDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OperationManualDetailPage),
  ],
})
export class OperationManualDetailPageModule {}
