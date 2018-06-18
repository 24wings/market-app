import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from "../product-detail/product-detail"
/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  startDt:any=new Date().toISOString();
  endDt:any=new Date().toISOString();
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  goDetail() {
    this.navCtrl.push(ProductDetailPage)
  }
}
