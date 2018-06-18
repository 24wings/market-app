import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyTransactionDetailPage} from "../my-transaction-detail/my-transaction-detail"

/**
 * Generated class for the UnPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-un-pay',
  templateUrl: 'un-pay.html',
})
export class UnPayPage {
  startDt:any=new Date().toISOString();
  endDt:any=new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnPayPage');
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  goDetail(){
   
      this.navCtrl.push(MyTransactionDetailPage)
   
  }
}
