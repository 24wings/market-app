import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductAPage } from './product-a';

@NgModule({
  declarations: [
    ProductAPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductAPage),
  ],
})
export class ProductAPageModule {}
