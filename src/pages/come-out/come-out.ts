import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComeOutListPage} from "../come-out-list/come-out-list"
/**
 * Generated class for the ComeOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-come-out',
  templateUrl: 'come-out.html',
})
export class ComeOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComeOutPage');
  }
  goNext(){
    this.navCtrl.pop();
  }
  comeOutList(){
this.navCtrl.push(ComeOutListPage)
  }
}
