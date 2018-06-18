import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrCodePage } from "../qr-code/qr-code"
/**
 * Generated class for the MyTransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-transaction-detail',
  templateUrl: 'my-transaction-detail.html',
})
export class MyTransactionDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTransactionDetailPage');
  }
  goQrCode() {
    this.navCtrl.push(QrCodePage)
  }
}
