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
			{"order": 'Traditional Cube Ice 10lb', "qty": 10, "image": 'assets/img/cocktailcubed.gif', "price": '$12.90'},
			{"order": 'Traditional Cube Ice 20lb', "qty": 10, "image": 'assets/img/cocktailcubed.gif', "price": '$19.90'},
			{"order": 'Crystal Classic Cube 5lb', "qty": 20, "image": 'assets/img/crystalclassic.gif', "price": '$19.80'},
			{"order": 'Dry Ice 10lb', "qty": 15, "image": 'assets/img/dryice.gif', "price": '$13.50'},
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
