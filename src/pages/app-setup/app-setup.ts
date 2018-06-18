import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeighSetupPage } from "../weigh-setup/weigh-setup";
import { PrintingSetupPage } from "../printing-setup/printing-setup";
import { VoiceSetupPage } from "../voice-setup/voice-setup";
import { AboutUsPage } from "../about-us/about-us";
import {SignInPage} from "../sign-in/sign-in"
/**
 * Generated class for the AppSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-setup',
  templateUrl: 'app-setup.html',
})
export class AppSetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppSetupPage');
  }
  weightSignup() {
    this.navCtrl.push(WeighSetupPage)
  }
  printSet() {
    this.navCtrl.push(PrintingSetupPage)

  }
  voiceSetup() {
    this.navCtrl.push(VoiceSetupPage)
  }
  goAbout() {
    this.navCtrl.push(AboutUsPage)
  }
  breakApp(){
    this.navCtrl.setRoot(SignInPage)
  }
}
