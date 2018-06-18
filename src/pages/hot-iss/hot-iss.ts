import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IssDetailPage } from "../iss-detail/iss-detail"
/**
 * Generated class for the HotIssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hot-iss',
  templateUrl: 'hot-iss.html',
})
export class HotIssPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotIssPage');
  }
  issDetail() {
    this.navCtrl.push(IssDetailPage)
  }
}
