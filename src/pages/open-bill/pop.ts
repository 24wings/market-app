import { Component } from '@angular/core';
import {  NavController, NavParams,PopoverController } from 'ionic-angular';


 
// @IonicPage()
@Component({
  selector: 'page-open-bill',
  template: 
  `
  <div style="    position: fixed;
  top: 46px;
  right: 0;">
  <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;
  background: #fff;margin:0; ">上传</p>
  <p style="padding:30px 10px;background:#fff;    padding: 10px 60px;
  background: #fff;margin:0;">下载</p>
  </div>
  `
  
  ,
})
export class OpenBillPopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenBillPage');
  }
  
}
