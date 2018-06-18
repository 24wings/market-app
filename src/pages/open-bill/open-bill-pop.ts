import { Component } from '@angular/core';
import {  NavController, NavParams,PopoverController } from 'ionic-angular';
import {SelsetProductPage} from "../selset-product/selset-product";

// @IonicPage()
 
@Component({
  selector: 'page-open-bill',
  template: 
  `
  <div style="    position: fixed;
  bottom: 90px;
  right: 0;
  width: 100%;
  background: #fff;">
    <div style="" class="fit">
      <p style="  ">皮重</p>
      <p style="    font-size: 23px;
      color: #ff0000;
      font-weight: 600;
      margin: auto;">未连接</p>
      <p style="    background: #00b7a0;
      color: #fff;
      font-size: 19px;
      border-radius: 10px;
      padding: 5px;">链接磅秤</p>
    </div>
    <div class="product">
      商品
    </div>
    <div class="num">
      <div>
        <label>单价</label> <input type="number"> <label>/斤</label>
      </div>
      <div>
        <label>数量</label> <input type="number"> <label>斤</label>
      </div>
    </div>
    <div class="grid">
    <p></p> <p></p> <p></p> <p></p> <p></p>
    <p></p>  <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p>     <p (click)="productAll()" style="background: #00b7a0;">全部商品</p>
    </div>
  </div>
  `
  
  ,
})
export class OpenBillPop2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenBillPage');
  }
  productAll(){
    this.navCtrl.push(SelsetProductPage)
  }
}
