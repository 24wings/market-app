import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperationManualDetailPage } from "../operation-manual-detail/operation-manual-detail"
/**
 * Generated class for the OperationManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operation-manual',
  templateUrl: 'operation-manual.html',
})
export class OperationManualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperationManualPage');
  }
  opDetail() {
    this.navCtrl.push(OperationManualDetailPage)
  }

}
