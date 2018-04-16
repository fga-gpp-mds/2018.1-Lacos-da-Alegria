import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about'
import { ActivitiesListPage } from '../pages/activities-list/activities-list';
import { CreateActivityPage } from '../pages/create-activity/create-activity';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { WelcomePage } from '../pages/welcome/welcome';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ActivitiesListPage,
    CreateActivityPage,
    ProfilePage,
    AboutPage,
    SettingsPage
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ActivitiesListPage,
    CreateActivityPage,
    ProfilePage,
    AboutPage,
    SettingsPage
  ],

  providers: [
    StatusBar,
    RestApiProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
