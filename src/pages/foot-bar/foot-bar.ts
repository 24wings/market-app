import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{HomePage} from "../home/home"
import {PersonInfoPage} from "../person-info/person-info";
import {OpeningWallet1Page} from "../opening-wallet1/opening-wallet1"
/**
 * Generated class for the FootBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foot-bar',
  templateUrl: 'foot-bar.html',
})
export class FootBarPage {
  tab1Root = HomePage;
  tab2Root = OpeningWallet1Page;
  tab3Root = PersonInfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FootBarPage');
  }

}
