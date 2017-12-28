import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetPage {
  constructor(public actionSheetCtrl: ActionSheetController, public platform: Platform) { }

  /**
   * display action sheet
   */
  presentActionSheet() {
    console.dir('display action sheet');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [

        {
          text: 'Destructive',
          role: 'destructive',
          icon: 'add-circle',
          handler: () => {
            console.dir('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          icon: 'albums',
          handler: () => {
            console.dir('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.dir('Archive clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
