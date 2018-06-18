import { Component } from '@angular/core';
import {  NavController, NavParams,PopoverController } from 'ionic-angular';

import {AuthenticationPage} from "../authentication/authentication"
 
 
@Component({
  selector: 'page-open-bill',
  template: 
  `
  <div style="    position: fixed;
  top: 46px;
  right: 0;">
  <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;
  background: #fff;margin:0; ">重置支付密码</p>
  <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;
  background: #fff;margin:0;">注销钱包</p>
  <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;
  background: #fff;margin:0;" (click)="info()">已认证</p>
  </div>
  `
  
  ,
})
export class walletPopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenBillPage');
  }
  info(){
this.navCtrl.push(AuthenticationPage)
  }
}
