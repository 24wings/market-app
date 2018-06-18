import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgetPassword2Page } from "../forget-password2/forget-password2"
/**
 * Generated class for the ForgetPassword1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-password1',
  templateUrl: 'forget-password1.html',
})
export class ForgetPassword1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPassword1Page');
  }
  goNext() {
     
    this.navCtrl.push(ForgetPassword2Page)
  }
}
