import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpeningWallet4Page } from "../opening-wallet4/opening-wallet4"
/**
 * Generated class for the OpeningWallet3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opening-wallet3',
  templateUrl: 'opening-wallet3.html',
})
export class OpeningWallet3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpeningWallet3Page');
  }
  goNext() {
    this.navCtrl.push(OpeningWallet4Page)
  }
}
