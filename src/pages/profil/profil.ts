import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase,  AngularFireList } from 'angularfire2/database';
//import { FirebaseListObservable } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

   profile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private authData: AuthProvider, private af:AngularFireAuth, private afAuth:AngularFireDatabase) {
  
    this.getCurrentUser();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  createProfile(){

    this.af.authState.subscribe(auth => {
      this.afAuth.object(`profile/${auth.uid}`).set(this.profile)
     // console.log(this.profile);
      .then(() => this.navCtrl.setRoot(HomePage));
    });
  }

  getCurrentUser(){
/* 
    var user = firebase.auth().currentUser;
    
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    } */
    
  }

}
