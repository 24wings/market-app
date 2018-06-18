import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerPage } from "../customer/customer"
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/**
 * Generated class for the StatisticalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistical-product',
  templateUrl: 'statistical-product.html',
})
export class StatisticalProductPage {
  startDt: any = new Date().toISOString();
  endDt: any = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticalProductPage');
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  goCustomerPage() {
    this.navCtrl.push(CustomerPage)
  }
}
