import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoading = false;

  constructor(
    private loginServe: LoginService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
 onLogin(){
   this.isLoading = true;
   this.loginServe.login();

   this.loadingCtrl.create({
     keyboardClose: true,
     message: 'Valido....'
   }).then(loadingEl => {
     loadingEl.present();

     setTimeout(()=>{
       this.isLoading =false;
       loadingEl.dismiss();
       this.router.navigateByUrl('/tabs/rutas/home');
     }, 2000);
   });
  
 }
}

