import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from "../sign-in/sign-in"
/**
 * Generated class for the ModifyPhone2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-phone2',
  templateUrl: 'modify-phone2.html',
})
export class ModifyPhone2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyPhone2Page');
  }
  goNext() {
    this.navCtrl.setRoot(SignInPage)
  }
}
