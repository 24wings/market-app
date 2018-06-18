import { Component, ViewEncapsulation } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { BarcodeScanner } from '。';



// import {HomePage} from "../pages/home/home",
import { FootBarPage } from "../pages/foot-bar/foot-bar"
// import { ReceivablesPage } from "../pages/receivables/receivables"
// import { SignInPage } from "../pages/sign-in/sign-in";
@Component({
  templateUrl: 'app.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
 
  ion-app.ios,
  .content-ios {
      background: #fafafa !important;
  }
  
  .toolbar-background-ios {
      background: #00c7ae!important;
  }
  
  .toolbar-title-ios {
      color: #fff;
  }
  
  .button-ios {
      background: #00c7ae!important;
  }
  
  .bar-button-default-ios,
  .bar-button-default.bar-button-ios-default,
  .bar-button-clear-ios-default {
      color: #fff;
  }
  
  .justify-content {
      display: flex;
      justify-content: space-between;
  }
  `]
  // styleUrls: ['./app.scss']
})
export class MyApp {
  rootPage: any = FootBarPage;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // platform.backButton.
    });
  }
}

