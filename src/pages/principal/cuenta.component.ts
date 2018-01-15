import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from "ionic-angular";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
    selector: 'component-cuenta',
    templateUrl: 'cuenta.component.html'
})
export class CuentaComponent{
    nombre:string;
    messages : number [];
    MyStrings = [];
    nextString: any;
    htmlToAdd = '<div class="two">two</div>';
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public sanitizer:DomSanitizer) {
        this.viewCtrl.showBackButton(false);
    }

    onAdd(){
        this.nextString = `
<div class="">
<ion-card>

    <ion-card-header>
        <h2 align-items-center="">Concepto {{message}}</h2>
    </ion-card-header>

    <ion-card-content>

        <ion-item>
            <ion-label stacked="">Nombre:</ion-label>
            <ion-input type="text" [(ngModel)]="nombre"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label stacked="">Descripción</ion-label>
            <ion-textarea [(ngModel)]="descripcion"></ion-textarea>
        </ion-item>
    </ion-card-content>
    <ion-item>
        <button ion-button clear item-start>Guardar</button>
        <button ion-button clear item-end>Limpiar</button>
    </ion-item>
</ion-card>
</div>
`;
        console.log('si hay click');
        this.MyStrings.push(this.nextString);
    }

}