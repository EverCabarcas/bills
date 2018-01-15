import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from "ionic-angular";

@Component({
    selector: 'component-busqueda',
    templateUrl: 'busqueda.component.html'
})
export class BusquedaComponent {
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
        this.viewCtrl.showBackButton(false);
    }
}