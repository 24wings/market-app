import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WalletPage} from "../wallet/wallet"
/**
 * Generated class for the OpeningWallet4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opening-wallet4',
  templateUrl: 'opening-wallet4.html',
})
export class OpeningWallet4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpeningWallet4Page');
  }
  goNext(){
this.navCtrl.push(WalletPage)
  }
}
