import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageSetPage } from './message-set';

@NgModule({
  declarations: [
    MessageSetPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageSetPage),
  ],
})
export class MessageSetPageModule {}
