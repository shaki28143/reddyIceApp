import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDetails } from '../orderDetails/orderDetails'
import { IssueDetails } from '../issueDetails/issueDetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage(){
    this.navCtrl.push(OrderDetails)
  }

  gotoPageComplain(){
    this.navCtrl.push(IssueDetails)
  }
}
