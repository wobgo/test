import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireDatabaseModule,AngularFireList } from 'angularfire2/database';
/**
 * Generated class for the UprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uprofile',
  templateUrl: 'uprofile.html',
})
export class UprofilePage {

  uprofil : AngularFireList<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,   public viewCtrl: ViewController
  ,public afDB: AngularFireDatabase) {

   let uquery = this.navParams.get('charNum');
  
   this.profileView(uquery);
    //cothisnsole.log();
//,
  }

  profileView(uquery: string):void{
   
    console.log(uquery);

    this.uprofil = this.afDB.list('profile');
    
  console.log(this.uprofil);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UprofilePage');
  }
  public closeModal(){
   
    this.viewCtrl.dismiss();
   
    } 

}
