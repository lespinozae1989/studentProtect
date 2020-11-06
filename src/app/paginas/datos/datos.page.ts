import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  registro = {
    telefono: '',
    edad: '',
    correo: '',
    pass1: '',
    pass2: ''
  }

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  home()
  {
    this.router.navigate(["/panico"]);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Contacto de emergencia!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'Apellido'
        },
        // multiline input.
        {
          name: 'telefono',
          type: 'text',
          placeholder: 'Teléfono'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
