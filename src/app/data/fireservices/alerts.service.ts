import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(public alertController: AlertController,) { }

  async alertaLlenarCampo(data1: string, data2:string) {
    const alert = await this.alertController.create({ 
      cssClass: 'my-custom-class',
      header: data1,
      message: data2,
      buttons: ['OK']
    });

    await alert.present();
  }
}
