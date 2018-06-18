import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { InvitationPage } from "../invitation/invitation";
import { AddTeamerPage } from "../add-teamer/add-teamer"
/**
 * Generated class for the MyTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamPage');
  }
  goInvita() {
    console.log("a")
    this.navCtrl.push(InvitationPage)
  }
  addPeople() {
    this.navCtrl.push(AddTeamerPage)
  }

}
