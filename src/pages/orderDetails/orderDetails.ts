import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPreview } from '../orderPreview/orderPreview'
@Component({
  selector: 'order-details',
  templateUrl: 'orderDetails.html'
})
export class OrderDetails {

	constructor(public navCtrl: NavController) {
	}

  gotoPage(){
    this.navCtrl.push(OrderPreview)
  }
}
