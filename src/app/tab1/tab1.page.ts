import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FirestoreService } from '../data/fireservices/firestore.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  currentSlideIndex = 0;
  realSlideIndex = 0;
  slideContainerWidth = 0;
  readonly slideTransitionDuration = 2000; // Duración de la transición automática (en milisegundos)
  autoSlideInterval: any;

  @ViewChild('slidesContainer', { read: ElementRef }) slidesContainer!: ElementRef<HTMLDivElement>;

  prueba: any = [
    { numero: 1, contenido: 'conten1', img: 'https://cdn.pixabay.com/photo/2023/07/16/18/21/flowers-8131239_640.jpg' },
    { numero: 2, contenido: 'pasos2', img: 'https://cdn.pixabay.com/photo/2023/06/16/21/13/landscape-8068793_640.jpg' },
    { numero: 3, contenido: 'picos3', img: 'https://cdn.pixabay.com/photo/2023/03/07/10/04/flower-7835396_640.jpg' },
    { numero: 4, contenido: 'locas4', img: 'https://cdn.pixabay.com/photo/2023/07/14/10/50/flower-8126748_640.jpg' },
    { numero: 5, contenido: 'aver5', img: 'https://cdn.pixabay.com/photo/2023/06/18/12/48/insect-8071993_640.jpg' },
  ];


  constructor(public x: FirestoreService,
    public modalController: ModalController,
    private renderer: Renderer2) {

    this.x.traerDatos().subscribe(res=>{
      console.log('RES=>', res)
    })

  }
  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, this.slideTransitionDuration);
  }

  private stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.prueba.length) % this.prueba.length;
    this.updateSlidePosition();
    this.restartAutoSlide();
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.prueba.length;
    this.updateSlidePosition();
    this.restartAutoSlide();
  }

  private updateSlidePosition(): void {
    if (this.slidesContainer) {
      const slideContainer = this.slidesContainer.nativeElement;
      this.slideContainerWidth = slideContainer.offsetWidth;
      const translateXValue = `translateX(-${this.currentSlideIndex * this.slideContainerWidth}px)`;
      this.renderer.setStyle(slideContainer, 'transform', translateXValue);
    }
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  


  // async modalBusqueda(){
  //   const modal = await this.modalController.create({
  //     component: SearchPage,
  //     cssClass: 'my-custom-class',
  //   });
  //   return await modal.present();
  // }

}
