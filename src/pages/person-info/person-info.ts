import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageWaitPage } from "../message-wait/message-wait";
import { MessageSetPage } from "../message-set/message-set";
import { ModifyPasswordPage } from "../modify-password/modify-password";
import { MyTeamPage } from "../my-team/my-team";
import { ModifyPhonePage } from "../modify-phone/modify-phone";
import { HelpPage } from "../help/help";
import { AppSetupPage } from "../app-setup/app-setup";
import { LocalPage } from '../local/local';

/**
 * Generated class for the PersonInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-info',
  templateUrl: 'person-info.html',
})
export class PersonInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonInfoPage');
  }
  messageWait() {
    this.navCtrl.push(MessageWaitPage)
  }
  messageSet() {
    this.navCtrl.push(MessageSetPage)
  }
  modifyPassword() {
    this.navCtrl.push(ModifyPasswordPage)
  }
  myTeam() {
    this.navCtrl.push(MyTeamPage)
  }
  modifyPhone() {
    this.navCtrl.push(ModifyPhonePage)
  }
  help() {
    this.navCtrl.push(HelpPage)
  }
  appSetup() {
    this.navCtrl.push(AppSetupPage)
  }
  goLocalPage() {
    this.navCtrl.push(LocalPage);
  }
}
