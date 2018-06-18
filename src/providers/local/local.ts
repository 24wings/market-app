import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebBarcodeScanner } from './web-barcode-sanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Keyboard } from '@ionic-native/keyboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Platform } from 'ionic-angular';
/*
  Generated class for the LocalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalProvider {
  private webBarcodeScanner = new WebBarcodeScanner();
  get isAndroid() {
    return this.platform.is('android')
  }
  get isIos() {
    return this.platform.is('ios')
  }
  get isWeb() {
    return this.platform.is('mobileweb')
  }
  constructor(public http: HttpClient,
    private barcodeScanner: BarcodeScanner,
    public platform: Platform,
    public keyboard: Keyboard,
    public socialSharing: SocialSharing
  ) {
    console.log('Hello LocalProvider Provider');
  }

  /**
   * 扫描二维码 QRCode是条形码BarCode的一种
   * 
   */
  async scanQrcode() {
    if (this.isWeb) {
      let result = await this.webBarcodeScanner.scan();
      /**
       * 模拟url
       */
      return result
    } else {
      return this.barcodeScanner.scan({ formats: 'QR_CODE' })

    }
  }
  /**禁用键盘上滑 */
  async disableScrollKeyboard() {
    // alert('禁用键盘');

    this.keyboard.hideKeyboardAccessoryBar(true)
    return this.keyboard.disableScroll(true);
  }
  // hideKeyb
  /**
   * 启用键盘上滑
   */
  async enableScrollKeyboard() {
    this.keyboard.hideKeyboardAccessoryBar(false);
    return this.keyboard.disableScroll(false);
  }

  public canShareWechat(message: string, subject: string, image: string, url: string) {
    return this.socialSharing.canShareVia('com.tencent.mm', message, subject, image, url);
  }
  public wechatShare(message: string, subject: string, image: string, url: string) {
    return this.socialSharing.shareVia('com.tencent.mm', message, subject, image, url)
  }

}
