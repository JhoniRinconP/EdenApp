import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsPageRoutingModule } from './questions-routing.module';

import { QuestionsPage } from './questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule
  ],
  declarations: [QuestionsPage]
})
export class QuestionsPageModule {

  faqItems = [
    {
      question: '¿Qué es Lorem Ipsum?',
      answer: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
      open: false,
    },
    {
      question: '¿Cuál es la capital de Francia?',
      answer: 'La capital de Francia es París.',
      open: false,
    },
    {
      question: '¿Cómo puedo contactar al servicio al cliente?',
      answer: 'Puedes contactar a nuestro servicio al cliente llamando al 123-456-7890 o enviando un correo electrónico a info@tusitio.com',
      open: false,
    },
    // Agregar más preguntas y respuestas aquí
  ];

  toggleItem(item: any) {
    item.open = !item.open;
  }
}
