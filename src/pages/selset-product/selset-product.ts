import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ProductAddPage} from "../product-add/product-add"
/**
 * Generated class for the SelsetProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selset-product',
  templateUrl: 'selset-product.html',
})
export class SelsetProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelsetProductPage');
  }
  goBack(){
    this.navCtrl.pop()
  }
  addProduct(){
    console.log("a")
    this.navCtrl.push(ProductAddPage)
  }
}
