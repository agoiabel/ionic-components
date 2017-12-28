import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertPage } from '../pages/alert/alert';
import { BadgePage } from '../pages/badge/badge';
import { ButtonPage } from '../pages/button/button';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DateTimePage } from '../pages/datetime/datetime';
import { FabPage } from '../pages/fab/fab';
import { GridPage } from '../pages/grid/grid';
import { InputPage } from '../pages/input/input';
import { LoadingPage } from '../pages/loading/loading';
import { ModalPage } from '../pages/modal/modal';
import { SlidesPage } from '../pages/slides/slides';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'List', component: ListPage },
      { title: 'Action Sheet', component: ActionSheetPage },
      { title: 'Alert', component: AlertPage },
      { title: 'Badge', component: BadgePage },
      { title: 'Button', component: ButtonPage },
      { title: 'Card', component: CardPage },
      { title: 'Checkbox', component: CheckboxPage },
      { title: 'DateTime', component: DateTimePage },
      { title: 'Fab', component: FabPage },
      { title: 'Grid', component: GridPage },
      { title: 'Input', component: InputPage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Modal', component: ModalPage },
      { title: 'Slide', component: SlidesPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
