import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignInPage} from "../sign-in/sign-in"
/**
 * Generated class for the RegisterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-detail',
  templateUrl: 'register-detail.html',
})
export class RegisterDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterDetailPage');
  }
  goNext(){

    this.navCtrl.setRoot(SignInPage)
  }
}
