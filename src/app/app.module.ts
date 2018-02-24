import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {SettingsPage} from '../pages/settings/settings';
import {AuthentificationPage} from '../pages/authentification/authentification';
import  {ProfilPage} from '../pages/profil/profil';
import {RegisterPage} from '../pages/register/register';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule , AngularFireList} from 'angularfire2/database';


var config = {
  apiKey: "AIzaSyBBDd_qV9PIi04jXq-Ms6JppRo7t3Yu880",
  authDomain: "mygeoappl-72a1b.firebaseapp.com",
  databaseURL: "https://mygeoappl-72a1b.firebaseio.com",
  projectId: "mygeoappl-72a1b",
  storageBucket: "mygeoappl-72a1b.appspot.com",
  messagingSenderId: "624934743111"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,AuthentificationPage,ProfilPage,RegisterPage,SettingsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,AuthentificationPage,ProfilPage,RegisterPage,SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
