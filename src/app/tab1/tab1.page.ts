import { Component } from '@angular/core';
import { FirestoreService } from '../data/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public x: FirestoreService ) {

    this.x.traerDatos().subscribe(res=>{
      console.log('RES=>', res)
    })

  }

}
