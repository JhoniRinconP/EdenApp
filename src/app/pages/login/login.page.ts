import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { UserI } from '../../data/fireservices/interface';
import { AuthService } from 'src/app/data/fireservices/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(public fb: FormBuilder,
              private authService: AuthService,
              public alertas: AlertController,
              public loadingController: LoadingController,
              public alertController: AlertController,) {

    this.formLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
    })

  }
  ngOnInit() {}

  onLogin(fromLogin: UserI){
    if(this.formLogin.invalid){
      // this.alertas.create().then(res=>{
      //   console.log('no ingrese', res)
      // })
      console.log('no ingrese')
    }else{
      this.authService.login(fromLogin).then(res => {
        // this.loadingController.dismiss();
        console.log('res =>', res);
      }).catch(err => 
        this.alertaCorreoContra()
      );
    }
  }

  async alertaCorreoContra() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();

    //const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }


}
