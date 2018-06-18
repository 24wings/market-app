import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import {ProductDetailPage} from "../product-detail/product-detail";
import {OpenBillPopPage} from  "../open-bill/pop"
import{OpenBillPop2Page} from "../open-bill/open-bill-pop"
/**
 * Generated class for the OpenBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-bill',
  templateUrl: 'open-bill.html',
})
export class OpenBillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenBillPage');
  }
  productDetail(){
    this.navCtrl.push(ProductDetailPage)
  }
  presentPopover() {
    const popover = this.popoverCtrl.create(OpenBillPopPage);
    popover.present();
  }
  keyboardPop(){
    const popover = this.popoverCtrl.create(OpenBillPop2Page);
    popover.present();
  }
}
