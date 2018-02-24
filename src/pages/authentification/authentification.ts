
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  LoadingController, Loading,  AlertController  } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';


import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';
/**
 * Generated class for the AuthentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentification',
  templateUrl: 'authentification.html',
})
export class AuthentificationPage {

  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  public loading:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private authData: AuthProvider, public fb: FormBuilder,
     public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

      this.loginForm = this.fb.group({
        'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
        });
  
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];



  }

/*   ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthentificationPage');
  }


  loginWithGoogle() {
    this.authData.loginWithGoogle().then(()=>{
         this.navCtrl.setRoot(HomePage);
    }
       
  );
   
  }


  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        this.navCtrl.setRoot(HomePage);
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
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

  goToResetPassword(){
    this.navCtrl.push('ResetPasswordPage');
  }

  createAccount(){
    this.navCtrl.push(RegisterPage);
  }




}
