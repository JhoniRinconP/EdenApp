import { Component } from '@angular/core';
import { FirestoreService } from '../data/fireservices/firestore.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public x: FirestoreService,
    public modalController: ModalController) {

    this.x.traerDatos().subscribe(res=>{
      console.log('RES=>', res)
    })

  }

  // async modalBusqueda(){
  //   const modal = await this.modalController.create({
  //     component: SearchPage,
  //     cssClass: 'my-custom-class',
  //   });
  //   return await modal.present();
  // }

}
