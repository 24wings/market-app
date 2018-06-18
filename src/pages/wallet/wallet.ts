import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { walletPopPage } from "../wallet/pop-wallet"
import { ReceivablesPage } from "../receivables/receivables";//我的钱包-收款
import { TransferMoneyPage } from "../transfer-money/transfer-money";//我的钱包转账
import { SaveMoneyPage } from "../save-money/save-money";//我的钱包-圈存
import { PutMoneyPage } from "../put-money/put-money";//圈提
import { AddIcPage } from "../add-ic/add-ic";//添加银行卡
import { IncomePage } from "../income/income";//我的钱包-收支记录

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  presentPopover() {
    const popover = this.popoverCtrl.create(walletPopPage);
    popover.present();
  }
  goReceivablesPage() {
    this.navCtrl.push(ReceivablesPage)
  }
  goTransferMoneyPage() {
    this.navCtrl.push(TransferMoneyPage)
  }
  goSaveMoneyPage() {
    this.navCtrl.push(SaveMoneyPage)
  }
  goPutMoneyPage() {
    this.navCtrl.push(PutMoneyPage)
  }
  goAddIcPage() {
    this.navCtrl.push(AddIcPage)
  }
  goIncomePage() {
    this.navCtrl.push(IncomePage)
  }
}
