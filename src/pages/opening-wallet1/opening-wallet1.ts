import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpeningWallet2Page } from "../opening-wallet2/opening-wallet2"
/**
 * Generated class for the OpeningWallet1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opening-wallet1',
  templateUrl: 'opening-wallet1.html',
})
export class OpeningWallet1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpeningWallet1Page');
  }
  ok() {
    this.navCtrl.push(OpeningWallet2Page)
  }

}
