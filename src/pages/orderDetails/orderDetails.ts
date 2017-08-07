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
 public counter:any={1:1,2:1,3:1,4:1,5:1};
  gotoPage(){
    this.navCtrl.push(OrderPreview)
  }
  increase(key){
    this.counter[key]++;
    //console.log(this.counter);
  }
  decrease(key){
    if(this.counter[key]==0) return false;
    this.counter[key]--;
    //console.log(this.counter);
  }
}
