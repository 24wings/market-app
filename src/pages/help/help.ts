import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotIssPage } from "../hot-iss/hot-iss"
import { OperationManualPage } from "../operation-manual/operation-manual";
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
  hotIss() {
    this.navCtrl.push(HotIssPage)
  }
  operationManual() {
    this.navCtrl.push(OperationManualPage);
  }
}
