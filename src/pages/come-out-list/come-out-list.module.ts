import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComeOutListPage } from './come-out-list';

@NgModule({
  declarations: [
    ComeOutListPage,
  ],
  imports: [
    IonicPageModule.forChild(ComeOutListPage),
  ],
})
export class ComeOutListPageModule {}
