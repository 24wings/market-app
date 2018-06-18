import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {
  startDt:any=new Date().toISOString();
  endDt:any=new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPage');
  }
  
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
}
