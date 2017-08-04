import { CustomerListPage } from '../pages/customer/customer-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderDetails } from '../pages/orderDetails/orderDetails';
import { OrderPreview } from '../pages/orderPreview/orderPreview';
import { IssueDetails } from '../pages/issueDetails/issueDetails';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderDetails,
    OrderPreview,
    IssueDetails,
    DashboardPage,
    CustomerListPage 

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    OrderDetails,
    OrderPreview,
    IssueDetails,
    CustomerListPage
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
