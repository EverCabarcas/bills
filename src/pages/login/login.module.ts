import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {PrincipalPage} from "../principal/principal";

@NgModule({
  declarations: [
    LoginPage,
      PrincipalPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
