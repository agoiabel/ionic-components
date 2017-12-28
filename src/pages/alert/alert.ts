import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-alert-sheet',
  templateUrl: 'alert.html'
})
export class AlertPage {
  constructor(public alertCtrl: AlertController) { }

  /**
   * display basic alert
   */
  basicAlert() {
    let alert = this.alertCtrl.create({
      title: 'Basic Alert',
      subTitle: 'This is a sub title',
      buttons: ['Ok']
    });
    alert.present();
  }

  /**
   * displa
   */
  promptAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter a name',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'number',
          type: 'number',
          placeholder: 'Number'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.dir('form closed');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.dir(data.title);
          }
        }
      ]
    });
    alert.present();
  }

}
