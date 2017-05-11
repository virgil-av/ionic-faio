import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  myFingerprint: any;
  failCount: number = 0;

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
      clientId: "This is a fingerprint demo",
      clientSecret: 'password'
    }).then(result => {
      console.log(result);
      if(result === 'Success'){
        this.myFingerprint = 'Good job it works';
      }else{
        this.failCount++
      }
    }).catch(err => {
      console.log(err);
    });
  }

  doSomething(){
    this.navCtrl.setRoot(AboutPage);
  }



}
