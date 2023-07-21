import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  iconoSeleccionado: string = 'people-outline';

  constructor() { }

  ngOnInit() {
  }
  
  BusquedaUsuario(){
    this.iconoSeleccionado = 'people-outline';
    // console.log('busqueda usuario')
  }

  BusquedaMenu(){
    this.iconoSeleccionado = 'menu-outline';
    // console.log('busqueda menu')
  }
}
