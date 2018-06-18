import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatisticalCustomerPage } from "../statistical-customer/statistical-customer";//交易客户统计
import { StatisticalProductPage } from "../statistical-product/statistical-product";//交易商品统计
import { StatisticalReceivablesPage } from "../statistical-receivables/statistical-receivables";//交易收款统计
import { StatisticalMoneyPage } from "../statistical-money/statistical-money";//交易金额走势
import { StatisticalSummaryPage } from "../statistical-summary/statistical-summary";//统计分析-交易金额汇总
/**
 * Generated class for the StatisticalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statisticals',
  templateUrl: 'statisticals.html',
})
export class StatisticalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticalsPage');
  }
goStatisticalCustomerPage(){
  this.navCtrl.push(StatisticalCustomerPage)
}
goStatisticalProductPage(){
  this.navCtrl.push(StatisticalProductPage)
}
goStatisticalReceivablesPage(){
  this.navCtrl.push(StatisticalReceivablesPage)
}
goStatisticalMoneyPage(){
  this.navCtrl.push(StatisticalMoneyPage)
}
goStatisticalSummaryPage(){
  this.navCtrl.push(StatisticalSummaryPage)
}
}
