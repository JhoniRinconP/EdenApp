import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import { UserI} from './interface';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<any> = this.afsAuth.user;

  constructor(private afsAuth: AngularFireAuth,
              private router: Router,
              private firestore: AngularFirestore,
              public loadingController: LoadingController,
              ) { }

  /*ME LOGEO*/
  async login(user:UserI){
    const {correo, contrasena} = user;
    return await this.afsAuth.signInWithEmailAndPassword(correo,contrasena).then(()=>{
      this.router.navigate(['/tabs/feed']);
    })
  }

  /*ME DESLOGEO*/
  logoutUser(){
    this.loadingOptions();
    this.afsAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  async loadingOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Salir...',
      cssClass: 'class-cargando',
       duration: 1000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

  /*SABER SI EL USUARIO ESTA LOGEADO O NO*/
  status(){
    return this.afsAuth.user;
  }


  // /*OBTENER EL ID DEL USER LOGEADO*/
  // getUser(id): Observable<any> {
  //   return this.firestore.collection('users').doc(id).snapshotChanges();   
  // }

}

// function reject(err: any): any {
//   throw new Error('Function not implemented.');
// }

