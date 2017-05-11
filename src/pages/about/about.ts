import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private faio: FingerprintAIO) {

  }

  check(){
    console.log('check');
    this.faio.isAvailable().then(result =>{
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  show(){
    console.log('show');
    this.faio.show({
      clientId: "Fingerprint-Demo"
    }).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }



}
