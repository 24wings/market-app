import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageWaitPage } from './message-wait';

@NgModule({
  declarations: [
    MessageWaitPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageWaitPage),
  ],
})
export class MessageWaitPageModule {}
