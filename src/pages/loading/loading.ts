import { Component } from '@angular/core';
import { LoadingController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {
  constructor(public loadingCtrl: LoadingController, public viewCtrl: ViewController) { }

  showLoading() {
    console.dir("show loading");
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Please wait...",
      duration: 2000
    });

    loader.present();
  }

  /**
   * Handle the process of closing modal
   */
  closeModal() {
    console.dir('close modal');
    this.viewCtrl.dismiss();
  }
}
