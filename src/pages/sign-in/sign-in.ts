import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgetPassword1Page } from "../forget-password1/forget-password1";
import { Register1Page } from "../register1/register1";
// import {HomePage} from "../home/home"
import { FootBarPage } from "../foot-bar/foot-bar";
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
  fogotPassword() {
    this.navCtrl.push(ForgetPassword1Page);
  }
  register() {
    this.navCtrl.push(Register1Page)
  }
  sigin() {
    this.navCtrl.push(FootBarPage);
  }
}
