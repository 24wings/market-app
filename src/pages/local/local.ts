import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard } from 'ionic-angular';
import { LocalProvider } from '../../providers/local/local';

/**
 * Generated class for the LocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local',
  templateUrl: 'local.html',
})
export class LocalPage {
  useKeyboard: boolean = true;
  shareInfo = {
    message: '测试',
    subject: '子标题',
    image: '',
    url: 'https://www.baidu.com'

  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public local: LocalProvider, public key: Keyboard) {

  }

  ionViewDidLoad() {



  }
  async  scanQrcode() {
    let res = await this.local.scanQrcode();
    alert(res.text);
  }
  async shareWechat() {
    let result = await this.local.wechatShare(this.shareInfo.message, this.shareInfo.subject, this.shareInfo.image, this.shareInfo.url);
    alert(result);
  }
  async checkShareWechat() {
    let result = await this.local.canShareWechat(this.shareInfo.message, this.shareInfo.subject, this.shareInfo.image, this.shareInfo.url);
    alert(result);
  }
  hideKeyboard() {

  }
  disabledScroll(el: HTMLInputElement) {
    el.blur();

    // alert('影藏键盘')
    this.local.keyboard.onKeyboardShow().subscribe(res => {
      // alert('键盘开启了,')
      this.key.hideFormAccessoryBar(true);
      this.key.close()

      this.local.keyboard.hideKeyboardAccessoryBar(true);
      this.local.keyboard.close();
      this.local.keyboard.disableScroll(true);
      this.local.keyboard.close();
    });



  }
  enableScroll() {
    this.local.enableScrollKeyboard();
  }
}
