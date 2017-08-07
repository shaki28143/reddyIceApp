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
    {imgSrc:"assets/img/walmart.png",
     title:"Walmart",
     detail:"Richardson • 75081" 
    },
    {imgSrc:"assets/img/customer/images2.png",
     title:"MITSUBISHI",
     detail:"Richardson • 75081" 
    },
    {imgSrc:"assets/img/customer/images3.png",
     title:"TYSON",
     detail:"Richardson • 75081" 
    },
    {imgSrc:"assets/img/customer/images4.jpg",
     title:"SUBARU",
     detail:"Richardson • 75081" 
    },
    {imgSrc:"assets/img/customer/images5.jpg",
     title:"Volkswagen",
     detail:"Richardson • 75081" 
    },
    {imgSrc:"assets/img/customer/images6.jpg",
     title:"Audi",
     detail:"Richardson • 75081" 
    },
    {imgSrc:"assets/img/customer/images7.jpg",
     title:"Walmart",
     detail:"Richardson • 75081" 
    },
    {imgSrc:"assets/img/customer/images8.png",
     title:"Walmart",
     detail:"Richardson • 75081" 
    }
  ]

  gotoPage() {
    this.navCtrl.push(HomePage);
  }
}
