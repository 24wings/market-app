import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the WeighSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weigh-setup',
  templateUrl: 'weigh-setup.html',
})
export class WeighSetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeighSetupPage');
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '称量单位',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '公斤',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: '斤',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        }


      ]
    });
    actionSheet.present();
  }
  ok() {
    this.navCtrl.pop()
  }

}
