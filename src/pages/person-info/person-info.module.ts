import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInfoPage } from './person-info';

@NgModule({
  declarations: [
    PersonInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonInfoPage),
  ],
})
export class PersonInfoPageModule {}
