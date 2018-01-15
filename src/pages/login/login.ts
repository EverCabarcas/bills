import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PrincipalPage} from "../principal/principal";
import {AuthProvider} from "../../providers/auth/auth";
import {modelito} from "../../modelos/modelito";


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
    respuestica = new modelito();
  nombre: String;
  password: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public authProvider: AuthProvider, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
  }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  */
    onForm(){

        console.log(this.nombre, this.password);
        let loader = this.loadingCtrl.create({
            content: "espere por favor...",
            duration: 2000
        });
        loader.present();
        //this.navCtrl.push(this.principal);

        this.authProvider.getUser(this.nombre, this.password)
            .subscribe(
                (data) => {

                   // this.res = data;
                    this.respuestica.estado  = Boolean(data);
                    console.log(this.respuestica);
                    if(this.respuestica.estado == true){
                        this.navCtrl.push(this.principal);
                    }
                },
                (error2) => {
                    this.respuestica.mensaje = error2;
                    let alert = this.alertCtrl.create({
                        title: 'LOGIN',
                        subTitle: this.respuestica.mensaje+' Error en su Username o Password',
                        buttons: ['OK']
                    });
                   alert.present();
                }
            );

    }


}
