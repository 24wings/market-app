import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignInPage} from "../sign-in/sign-in"
/**
 * Generated class for the ForgetPassword2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-password2',
  templateUrl: 'forget-password2.html',
})
export class ForgetPassword2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPassword2Page');
  }
  goNext(){
    
    this.navCtrl.setRoot(SignInPage)
  }
}
