import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReceivablesPage } from "../receivables/receivables"
/**
 * Generated class for the SetMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-money',
  templateUrl: 'set-money.html',
})
export class SetMoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetMoneyPage');
  }
  next() {
    this.navCtrl.push(ReceivablesPage)
  }
}
