import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  editando: boolean = false
  fromInfo: FormGroup

  constructor(public fb: FormBuilder) {
    this.fromInfo = this.fb.group({
      nombres: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      fechaMuerte: ['', Validators.required],
    })

    this.fromInfo.disable()
   }

  ngOnInit() {
  }

  // editarFoto(){
  //   this.editandoFoto = true
  //   console.log('Editar foto')
  // }

  editarInformacion(){
    if(this.editando){
      this.fromInfo.disable()
      this.editando = false
      // console.log('editando1=>',this.editando)
    }else{
      this.fromInfo.enable()
      this.editando = true
      // console.log('editando2=>',this.editando)
    }
  }

  onFileSelected(event: any){
    console.log('evento=>',event)
  }

  actualizarInfo(fromInfo: any){
    this.fromInfo.disable()
    console.log('fromInfo=>',fromInfo)
  }

}
