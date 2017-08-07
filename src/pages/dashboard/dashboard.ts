import { CustomerListPage } from '../customer/customer-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-home',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {

  }
  startScanner() {
    this.barcodeScanner.scan().then((barcodeData) => {
        this.navCtrl.push(HomePage);
      // Success! Barcode data is here
    }, (err) => {
      // An error occurred
    });
  }
  goToPage() {
    this.navCtrl.push(HomePage);
  }
}
