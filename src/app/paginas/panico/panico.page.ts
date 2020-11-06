import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-panico',
  templateUrl: './panico.page.html',
  styleUrls: ['./panico.page.scss'],
})
export class PanicoPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Enviaremos tu geolocalización a tus contactos de emergencia.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
