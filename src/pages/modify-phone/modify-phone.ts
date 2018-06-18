import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModifyPhone2Page } from "../modify-phone2/modify-phone2"
/**
 * Generated class for the ModifyPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-phone',
  templateUrl: 'modify-phone.html',
})
export class ModifyPhonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyPhonePage');
  }
  goNext() {
    this.navCtrl.push(ModifyPhone2Page)
  }
}
