import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterDetailPage} from "../register-detail/register-detail"
/**
 * Generated class for the Register1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register1',
  templateUrl: 'register1.html',
})
export class Register1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register1Page');
  }
  goNext() {
     
    this.navCtrl.push(RegisterDetailPage)
  }
}
