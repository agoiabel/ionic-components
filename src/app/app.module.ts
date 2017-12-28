import { InputPage } from './../pages/input/input';
import { GridPage } from './../pages/grid/grid';
import { FabPage } from './../pages/fab/fab';
import { BadgePage } from './../pages/badge/badge';
import { AlertPage } from './../pages/alert/alert';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ButtonPage } from '../pages/button/button';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DateTimePage } from '../pages/datetime/datetime';
import { LoadingPage } from '../pages/loading/loading';
import { ModalPage } from '../pages/modal/modal';
import { SlidesPage } from '../pages/slides/slides';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DateTimePage,
    FabPage,
    GridPage,
    InputPage,
    LoadingPage,
    ModalPage,
    SlidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DateTimePage,
    FabPage,
    GridPage,
    InputPage,
    LoadingPage,
    ModalPage,
    SlidesPage   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
