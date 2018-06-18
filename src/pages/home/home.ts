import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarketPage } from "../market/market";
import { OpenBillPage } from "../open-bill/open-bill";

import { MyTransactionPage } from "../my-transaction/my-transaction";//我的交易
import { StatisticalsPage } from "../statisticals/statisticals";//统计分析
import { CreditPage } from "../credit/credit";//赊销记录
import { ProductListPage } from "../product-list/product-list";//商品管理列表

import { ComeOutPage } from "../come-out/come-out";//出厂申请
import { ArrearsSumPage } from "../arrears-sum/arrears-sum";//欠款汇总
import { UnPayPage } from "../un-pay/un-pay";//我的待付款
import { RepaymentPage } from "../repayment/repayment";//还款记录
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goMarket() {
    this.navCtrl.push(MarketPage)
  }
  OpenBill() {
    this.navCtrl.push(OpenBillPage)
  }
  goMyTransactionPage() {
    this.navCtrl.push(MyTransactionPage)
  }
  goStatisticalsPage() {
    this.navCtrl.push(StatisticalsPage)
  }
  goCreditPage() {
    this.navCtrl.push(CreditPage)
  }
  goRepaymentPage() {
    this.navCtrl.push(RepaymentPage)
  }
  goProductListPage() {
    this.navCtrl.push(ProductListPage)
  }
  goComeOutPage() {
    this.navCtrl.push(ComeOutPage)
  }
  goArrearsSumPage() {
    this.navCtrl.push(ArrearsSumPage)
  }
  goUnPayPage() {
    this.navCtrl.push(UnPayPage)
  }
}
