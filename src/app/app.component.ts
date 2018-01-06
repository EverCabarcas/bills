import {Component, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {PrincipalPage} from "../pages/principal/principal";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
    //@ViewChild('myNav') nav: NavController;
    public rootPage:any = LoginPage;
    //rootPage:any = PrincipalPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

}

