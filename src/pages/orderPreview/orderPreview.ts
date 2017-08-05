import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'order-preview',
  templateUrl: 'orderPreview.html'
})
export class OrderPreview {

	public orderPrevData: any[] = [];
	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

	}

	ngOnInit(){
		this.orderPrevData = [
			{"order": 'Traditional Cube Ice 10lb', "qty": 10},
			{"order": 'Traditional Cube Ice 20lb', "qty": 10},
			{"order": 'Crystal Classic Cube 10lb', "qty": 20},
			{"order": 'Crystal Classic Cube 30lb', "qty": 15},
			{"order": 'Block Ice 10lb', "qty": 30},
		];
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Order Status',
      subTitle: 'Your order has been placed successfully.',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            this.navCtrl.push(HomePage)
          }
        }
      ]
    });
    alert.present();
  }
}
