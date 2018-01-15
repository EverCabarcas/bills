import {Component} from "@angular/core";
import {NavController, NavParams, ViewController} from "ionic-angular";

@Component({
    selector: 'component-categoria',
    templateUrl: 'categoria.component.html'
})

export class CategoriaComponent {
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
        this.viewCtrl.showBackButton(false);
    }
}