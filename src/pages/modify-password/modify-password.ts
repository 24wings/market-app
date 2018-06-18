import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PersonInfoPage} from "../person-info/person-info"
/**
 * Generated class for the ModifyPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-password',
  templateUrl: 'modify-password.html',
})
export class ModifyPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyPasswordPage');
  }
  goNext(){
this.navCtrl.setRoot(PersonInfoPage)
  }
}
