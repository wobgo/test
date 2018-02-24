import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule,AngularFireList } from 'angularfire2/database';
//import { FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import { Profile } from '../../models/profile';
import * as firebase from 'firebase'; 
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public ProfileData : AngularFireList<Profile>;
 public items: any;
 public key: any;
 //public items:any;
 
  constructor(public navCtrl: NavController, private af:AngularFireAuth, private afAuth:AngularFireDatabase
  , afDB: AngularFireDatabase, public modalCtrl : ModalController, public viewCtrl: ViewController) {
   // var self = this;
   
   //  console.log(this.items);
    this.af.authState.subscribe(data => {
      
      this.ProfileData = this.afAuth.list(`profile/${data.uid}`);
   
       this.items = afDB.list('/profile').valueChanges();
     
       this.key = data.uid;  
    //   this.items = afDB.list('/profile').valueChanges();
    //   console.log(this.items);
     });
  }


  public openModal(characterNum) {
    
        let modal = this.modalCtrl.create('UprofilePage', characterNum);
        alert(JSON.stringify(characterNum));
        modal.present();
      }

}
