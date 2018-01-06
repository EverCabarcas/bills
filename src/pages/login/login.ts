import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrincipalPage} from "../principal/principal";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 principal:any = PrincipalPage;
  p = {};
  res: any;
    res2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  */
    onForm(){

        console.log(this.p);
        //this.navCtrl.push(this.principal);
        this.authProvider.postUser()
            .subscribe(
                (data) => {
                   console.log(data)
                },
                (error2) => {
                    console.error(error2)
                }
            );
    }

}
