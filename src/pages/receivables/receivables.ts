import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetMoneyPage } from "../set-money/set-money"
/**
 * Generated class for the ReceivablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receivables',
  templateUrl: 'receivables.html',
})
export class ReceivablesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceivablesPage');
  }
  setMoney() {
    this.navCtrl.push(SetMoneyPage)
  }
}
