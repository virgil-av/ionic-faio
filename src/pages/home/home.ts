import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";

import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  didLog: boolean = false;

  constructor(public navCtrl: NavController,private faio: FingerprintAIO) {

  }


  ionViewWillEnter(){
    this.check();
  }


  check(){
    if(this.didLog === false){
      console.log('check');
      this.faio.isAvailable().then(result =>{
        console.log(result);
        if(result === 'Available' || result === 'OK'){
          this.show();
        }else{
          this.doSomething();
        }
      }).catch(err => {
        console.log(err);
      });
    }else{
      return;
    }

  }

  show(){
    console.log('show');
    this.faio.show({
      clientId: "This is a fingerprint demo",
      clientSecret: 'password'
    }).then(result => {
      console.log(result);
      this.didLog = true;
    }).catch(err => {
      console.log(err);
      this.doSomething();
    });
  }

  doSomething(){
    this.navCtrl.setRoot(AboutPage);
  }

}
