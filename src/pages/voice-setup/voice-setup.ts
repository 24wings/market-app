import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';

/**
 * Generated class for the VoiceSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
enum PromptType{
  FullTimeout="全段超时",
  FrontTimeout="前端超时",
  BackendTimeout="后端超时"
}
@IonicPage()
@Component({
  selector: 'page-voice-setup',
  templateUrl: 'voice-setup.html',
})
export class VoiceSetupPage {
  PromptType=PromptType;
  prompt=PromptType.FullTimeout
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoiceSetupPage');
  }
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: '请输入时间（0-5000）ms',
      message: "时间",
      inputs: [
        {
          name: '时间',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            switch(this.prompt){
              case PromptType.FullTimeout:
              //...
              break;
              case PromptType.FrontTimeout:
              //...
              break;
              case PromptType.BackendTimeout:
              //
              break;
              
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
