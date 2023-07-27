import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deceased',
  templateUrl: './deceased.page.html',
  styleUrls: ['./deceased.page.scss'],
})
export class DeceasedPage implements OnInit {

  opciones = [
    { value: 'option1', label: 'Gatico', img: 'https://cdn.pixabay.com/photo/2023/05/26/12/31/couple-8019370_1280.jpg', content: 'Oferta del día' },
    { value: 'option2', label: 'Perritos2', img: 'https://picsum.photos/id/237/200/300', content: 'contenido2' },
    { value: 'option3', label: 'Perritos3', img: 'https://picsum.photos/id/237/200/300', content: 'contenido3' },
    { value: 'option4', label: 'Perritos4', img: 'https://picsum.photos/id/237/200/300', content: 'contenido4' },
    // Añade más opciones según sea necesario
  ];

  seleccionSegmento = this.opciones[0].value

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any){
    console.log('event=>',event.detail.value)
  }

}
