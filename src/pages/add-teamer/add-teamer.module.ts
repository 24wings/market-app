import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTeamerPage } from './add-teamer';

@NgModule({
  declarations: [
    AddTeamerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTeamerPage),
  ],
})
export class AddTeamerPageModule {}
