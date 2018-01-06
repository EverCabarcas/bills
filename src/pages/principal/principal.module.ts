import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from './principal';
import {CuentaComponent} from "./cuenta.component";
import {BusquedaComponent} from "./busqueda.component";
import {CategoriaComponent} from "./categoria.component";

@NgModule({
  declarations: [
    PrincipalPage,
      CuentaComponent,
      BusquedaComponent,
      CategoriaComponent
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
  ],
})
export class PrincipalPageModule {}
