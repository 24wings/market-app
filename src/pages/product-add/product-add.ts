import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductAPage} from "../product-a/product-a";
import {ProductBPage} from "../product-b/product-b";
import {ProductCPage} from "../product-c/product-c";
import  {ProductDPage} from "../product-d/product-d";
/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-add',
  templateUrl: 'product-add.html',
})
export class ProductAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductAddPage');
  }
  goA(){
this.navCtrl.push(ProductAPage)
  }
  goB(){
    this.navCtrl.push(ProductBPage)
  }
  goC(){
    this.navCtrl.push(ProductCPage)
  }
  goD(){
    this.navCtrl.push(ProductDPage)
  }
}
