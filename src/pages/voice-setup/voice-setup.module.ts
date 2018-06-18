import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceSetupPage } from './voice-setup';

@NgModule({
  declarations: [
    VoiceSetupPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceSetupPage),
  ],
})
export class VoiceSetupPageModule {}
