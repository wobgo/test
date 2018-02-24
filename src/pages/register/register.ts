import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController,  Loading, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import * as firebase from 'firebase/app';

import {HomePage} from '../home/home';
import { ProfilPage } from '../profil/profil';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public signupForm: FormGroup;
  nlogin: AbstractControl;
  npd: AbstractControl;
  public loading: Loading;
   
  user = firebase.auth().currentUser; // code from firebase docs
  // var name, email, photoUrl, uid; //declare the variable
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,
    public authData: AuthProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController,) {

    this.signupForm = this.fb.group({
      'nlogin': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'npd': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });

      this.nlogin = this.signupForm.controls['nlogin'];
      this.npd = this.signupForm.controls['npd'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    
  }

  signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
     
      this.authData.signupUser(this.signupForm.value.nlogin, this.signupForm.value.npd)
      .then(() => {
        this.navCtrl.setRoot(ProfilPage);
      }, (error) => {
        this.loading.dismiss().then( () => {
          var errorMessage: string = error.message;
            let alert = this.alertCtrl.create({
              message: errorMessage,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }


  createloginWithGoogle() {
    this.authData.loginWithGoogle().then(()=>{
      if (this.user) {  
        
        this.navCtrl.setRoot(ProfilPage);
        // User is signed in.
      } else {
        // No user is signed in.
      }
      
      
    }
       
  );
   
  }


}
