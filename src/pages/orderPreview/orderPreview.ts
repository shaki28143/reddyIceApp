import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'order-preview',
  templateUrl: 'orderPreview.html'
})
export class OrderPreview {
	
	public orderPrevData: any[] = [];
	constructor(public navCtrl: NavController) {
		
	}
	
	ngOnInit(){
		this.orderPrevData = [
			{"order": '11# COCKTAIL-1000', "qty": 10},
			{"order": '12# COCKTAIL-1200', "qty": 20},
			{"order": '13# COCKTAIL-1300', "qty": 30},
			{"order": '14# COCKTAIL-1400', "qty": 40},
			{"order": '15# COCKTAIL-1500', "qty": 45}
		];
	}
}
