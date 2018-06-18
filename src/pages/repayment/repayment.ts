import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CustomerPage} from "../customer/customer"
/**
 * Generated class for the RepaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repayment',
  templateUrl: 'repayment.html',
})
export class RepaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  startDt: any = new Date().toISOString();
  endDt: any = new Date().toISOString();
  ionViewDidLoad() {
    console.log('ionViewDidLoad RepaymentPage');
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
