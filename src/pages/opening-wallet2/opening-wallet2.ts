import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OpeningWallet3Page} from "../opening-wallet3/opening-wallet3";
/**
 * Generated class for the OpeningWallet2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opening-wallet2',
  templateUrl: 'opening-wallet2.html',
})
export class OpeningWallet2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpeningWallet2Page');
  }
  goNext(){
    this.navCtrl.push(OpeningWallet3Page)
  }
}
