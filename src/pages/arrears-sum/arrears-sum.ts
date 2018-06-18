import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerPage } from "../customer/customer";
/**
 * Generated class for the ArrearsSumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arrears-sum',
  templateUrl: 'arrears-sum.html',
})
export class ArrearsSumPage {
  startDt: any = new Date().toISOString();
  endDt: any = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrearsSumPage');
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  goCustomerPage(){
this.navCtrl.push(CustomerPage)
  }
}
