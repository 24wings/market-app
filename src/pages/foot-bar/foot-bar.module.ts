import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FootBarPage } from './foot-bar';

@NgModule({
  declarations: [
    FootBarPage,
  ],
  imports: [
    IonicPageModule.forChild(FootBarPage),
  ],
})
export class FootBarPageModule {}
