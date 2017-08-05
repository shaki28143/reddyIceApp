import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html'
})
export class CustomerListPage {

  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {

  }
  customerImageList: any = [
    "assets/img/walmart.png",
    "assets/img/customer/images2.png",
    "assets/img/customer/images3.png",
    "assets/img/customer/images4.jpg",
    "assets/img/customer/images5.jpg",
    "assets/img/customer/images6.jpg",
    "assets/img/customer/images7.jpg",
    "assets/img/customer/images8.png",
    "assets/img/customer/images2.png",
  ]

  gotoPage() {
    this.navCtrl.push(HomePage);
  }
}
